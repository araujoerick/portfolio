"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type HoverOptions = {
  hover?: boolean;
  hoverEnter?: (el: HTMLElement) => void;
  hoverLeave?: (el: HTMLElement) => void;
};

export const useAnimatedCards = (
  selector = ".initial-card",
  options: HoverOptions = { hover: true },
) => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(selector) as HTMLElement[];

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.inOut",
    });

    if (options.hover) {
      cards.forEach((card) => {
        const handleEnter = () => {
          if (options.hoverEnter) {
            options.hoverEnter(card);
          } else {
            gsap.to(card, {
              x: -2,
              y: -2,
              boxShadow: "12px 12px 0px rgba(0,0,0)",
              duration: 0.3,
            });
          }
        };

        const handleLeave = () => {
          if (options.hoverLeave) {
            options.hoverLeave(card);
          } else {
            gsap.to(card, {
              x: 0,
              y: 0,
              boxShadow: "8px 8px 0px rgba(0,0,0)",
              duration: 0.3,
            });
          }
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    }
  }, [selector, options]);
};
