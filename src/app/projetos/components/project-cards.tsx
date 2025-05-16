"use client";

import { useGSAP } from "@gsap/react";
import ProjectCard from "./project-card";
import TerminalLoader from "./terminal-loader";
import gsap from "gsap";
import { projectsData } from "@/app/data/projects";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const remainder = projectsData.length % 4;
const emptyCards = remainder === 0 ? 0 : 4 - remainder;
const totalCards = projectsData.length + emptyCards;

const ProjectCards = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".initial-card") as HTMLElement[];

    gsap.set(cards, {
      y: 50,
      opacity: 0,
    });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
      onComplete: () => {
        gsap.set(cards, { clearProps: "opacity,y" });
      },
    });
  }, []);

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

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:max-[1350px]:grid-cols-2">
      {Array.from({ length: totalCards }).map((_, index) => {
        const isEmpty = index >= projectsData.length;

        if (isEmpty) {
          return (
            <div
              key={`empty-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="initial-card neo-border neo-shadow flex h-full items-center justify-center"
            >
              <TerminalLoader />
            </div>
          );
        }

        const project = projectsData[index];
        return (
          <ProjectCard
            key={project.title}
            {...project}
            cardRef={(el) => {
              cardRefs.current[index] = el;
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
};

export default ProjectCards;
