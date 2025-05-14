"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface SectionTitleProps {
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const split = new SplitType(titleRef.current, {
        types: "chars",
      });

      gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      });

      gsap.to(split.chars, {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div>
      <h1
        ref={titleRef}
        className="title-clip-path text-[clamp(2.25rem,4vw,3rem)] font-semibold text-black uppercase transition-transform duration-500"
      >
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;
