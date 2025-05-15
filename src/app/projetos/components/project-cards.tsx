"use client";

import { useGSAP } from "@gsap/react";
import ProjectCard from "./project-card";
import TerminalLoader from "./terminal-loader";
import gsap from "gsap";
import { projectsData } from "@/app/data/projects";

gsap.registerPlugin(useGSAP);

const remainder = projectsData.length % 4;
const emptyCards = remainder === 0 ? 0 : 4 - remainder;

const ProjectCards = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".initial-card") as HTMLElement[];

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
    });
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:max-[1350px]:grid-cols-2">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}

      {Array.from({ length: emptyCards }).map((_, index) => (
        <div
          key={`empty-${index}`}
          className="initial-card card-transition bento-transition neo-border neo-shadow flex h-full items-center justify-center"
        >
          <TerminalLoader />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
