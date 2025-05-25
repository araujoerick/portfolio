"use client";

import ProjectCard from "./project-card";
import TerminalLoader from "./terminal-loader";
import { projectsData } from "@/app/data/projects-data";
import { useAnimatedCards } from "@/app/hooks/use-animated-cards";

const remainder = projectsData.length % 4;
const emptyCards = remainder === 0 ? 0 : 4 - remainder;

const ProjectCards = () => {
  useAnimatedCards();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:max-[1350px]:grid-cols-2">
      {projectsData.map((project) => (
        <div key={project.title} className="initial-card">
          <ProjectCard {...project} />
        </div>
      ))}

      {Array.from({ length: emptyCards }).map((_, index) => (
        <div
          key={`empty-${index}`}
          className="initial-card neo-border neo-shadow flex h-full items-center justify-center"
        >
          <TerminalLoader />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
