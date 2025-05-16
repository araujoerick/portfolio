"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const useAnimatedCards = (cardCount: number) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const elements = cardRefs.current.filter(Boolean) as HTMLElement[];

    gsap.set(elements, { y: 50, opacity: 0 });

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
      onComplete: () => {
        gsap.set(elements, { clearProps: "opacity,y" });
      },
    });
  }, [cardCount]);

  const handleMouseEnter = (index: number) => {
    const el = cardRefs.current[index];
    if (el) {
      gsap.to(el, {
        x: -2,
        y: -2,
        boxShadow: "12px 12px 0px rgba(0,0,0)",
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const el = cardRefs.current[index];
    if (el) {
      gsap.to(el, {
        x: 0,
        y: 0,
        boxShadow: "8px 8px 0px rgba(0,0,0)",
        duration: 0.3,
      });
    }
  };

  return {
    getRef: (index: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[index] = el;
    },
    handleMouseEnter,
    handleMouseLeave,
  };
};
