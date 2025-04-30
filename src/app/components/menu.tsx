"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Header from "./header";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/projetos", label: "Projetos" },
  { path: "/contato", label: "Contato" },
];

const socialLinks = [
  { path: "https://github.com/araujoerick", label: "Github" },
  {
    path: "https://www.linkedin.com/in/araujoerick09/",
    label: "Linkedin",
  },
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
      gsap.set(".menu-link-item", {
        y: 75,
      });

      timeLine.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "auto",
          ease: "power4.inOut",
        })
        .to(".menu-link-item", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
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
      {/* Button to start gsap open menu animation */}
      <button
        onClick={toggleMenu}
        className="btn-primary flex cursor-pointer flex-col items-end justify-center gap-1 px-[13px] py-3.5"
      >
        <div className="h-1 w-6 rounded bg-black transition-all duration-300"></div>
        <div className="h-1 w-5 self-end rounded bg-black transition-all duration-300"></div>
        <div className="h-1 w-6 rounded bg-black transition-all duration-300"></div>
      </button>

      {/* Overlay menu after start */}
      <div className="menu-clip-path menu-overlay fixed top-0 left-0 z-50 h-screen w-full overflow-hidden bg-lime-300">
        <Header>
          <button
            onClick={toggleMenu}
            className="btn-primary flex cursor-pointer flex-col items-end justify-center gap-1 px-[13px] py-3.5"
          >
            <div
              className={`h-1 w-6 rounded bg-black transition-all duration-300 ${
                isMenuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-5 rounded bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-6 rounded bg-black transition-all duration-300 ${
                isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            ></div>
          </button>
        </Header>

        <div className="container mx-auto flex h-[calc(100%-112px)] justify-center">
          <div className="h-full w-full py-12">
            <div className="flex h-full flex-col justify-between">
              <nav className="text-6xl font-light sm:text-8xl">
                {menuLinks.map((link) => (
                  <div
                    key={link.path}
                    className="menu-link-item relative py-4"
                    onClick={toggleMenu}
                  >
                    <Link
                      href={link.path}
                      className="relative inline-block transition-colors duration-300 hover:text-lime-600"
                    >
                      {link.label}
                      {pathname === link.path && (
                        <span className="absolute top-[56%] -right-6 h-3 w-3 -translate-y-[56%] rounded-full bg-lime-600" />
                      )}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="flex items-center justify-between gap-6">
                <div className="flex gap-6">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.path}
                      className="flex gap-2 transition-colors duration-300 hover:text-lime-600 sm:text-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
