"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Header from "./header";
import { FaDownload } from "react-icons/fa6";
import { socialLinks } from "../data/socialLinks";

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

  return (
    <div ref={containerRef}>
      {/* Header with menu to start GSAP animation */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Overlay menu after start */}
      <div className="menu-clip-path menu-overlay fixed top-0 left-0 z-50 h-full w-full overflow-x-hidden overflow-y-auto bg-white">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <div className="flex min-h-[calc(100vh-202px)] w-full flex-col px-8 py-12">
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

              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <Link
                    key={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.path}
                    className="neo-transition btn-secondary flex gap-2 p-4 transition-all! duration-300! hover:text-lime-600"
                  >
                    <link.Icon size={24} className="text-black" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/docs/erick-araujo-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="btn-primary flex w-full cursor-pointer items-center justify-center gap-2 bg-lime-300 p-4 text-xl font-bold text-black uppercase">
                  <FaDownload size={16} />
                  Download CV
                </button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="w-full bg-neutral-900 py-8 text-white">
          <div className="container mx-auto px-6 text-center">
            <p>© 2025 Erick Araujo. Todos os direitos reservados.</p>
            <p className="mt-2 text-lime-300">
              Desenvolvido com ♥ e muito código.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Menu;
