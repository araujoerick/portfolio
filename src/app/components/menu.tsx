"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Header from "./header";
import { FaDownload } from "react-icons/fa6";
import DownloadCvButton from "./cv-button";
import { IoLogoFigma } from "react-icons/io5";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import SocialLinks from "./social-links";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/projetos", label: "Projetos" },
  { path: "/contato", label: "Contato" },
];

const Menu = () => {
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const timeLine = useRef<GSAPTimeline>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".item-transition-down", {
        y: -48,
      });

      timeLine.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "auto",
          ease: "power4.inOut",
        })
        .to(".item-transition-down", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -1,
        });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (isMenuOpen) {
      timeLine.current?.play();
    } else {
      timeLine.current?.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const mainContent = document.getElementById("main-content");

    if (mainContent) {
      if (isMenuOpen) {
        mainContent.setAttribute("inert", "");
      } else {
        if (
          document.activeElement &&
          containerRef.current?.contains(document.activeElement)
        ) {
          document.body.focus();
        }

        mainContent.removeAttribute("inert");
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <div ref={containerRef}>
      {/* Header with menu to start GSAP animation */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Overlay menu after start */}
      <div
        className="menu-clip-path menu-overlay fixed top-0 left-0 z-50 h-full w-full overflow-x-hidden overflow-y-auto bg-white select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        inert={!isMenuOpen ? true : undefined}
      >
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <nav
          aria-label="Menu principal"
          className="flex min-h-[calc(100vh-202px)] w-full flex-col px-8 py-12"
        >
          <div className="container mx-auto flex min-h-full flex-auto flex-col justify-between gap-8">
            <div className="flex flex-col gap-10">
              <nav className="flex flex-col gap-4 text-black">
                {menuLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`item-transition-down w-full min-w-min border-b-4 font-bold hover:bg-lime-300 ${
                      pathname === link.path && "bg-lime-300"
                    }`}
                  >
                    <div
                      onClick={toggleMenu}
                      className="p-4 text-3xl font-bold transition-all duration-200 hover:bg-lime-300 hover:shadow-[8px_8px_0px_rgba(0,0,0)]"
                    >
                      {link.label}
                    </div>
                  </Link>
                ))}
              </nav>

              <div>
                <h2 className="sr-only">Links sociais</h2>
                <div className="flex gap-6">
                  <SocialLinks
                    iconSize={24}
                    className="neo-transition btn-secondary p-4 transition-all! duration-300!"
                  />
                </div>
              </div>
            </div>

            <DownloadCvButton icon={<FaDownload size={16} />} />
          </div>
        </nav>
        <footer className="w-full bg-neutral-900 py-8 text-white">
          <div className="container mx-auto flex flex-col items-center justify-center px-6">
            <p>© 2025 Erick Araujo. Todos os direitos reservados.</p>
            <div className="mt-2 flex items-center gap-2 text-lime-300">
              Desenvolvido com
              <span className="flex gap-1 text-lime-100">
                <SiNextdotjs className="mr-0.5" />
                <SiTypescript />
                <IoLogoFigma />
              </span>
              e muito código.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Menu;
