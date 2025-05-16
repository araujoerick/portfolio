"use client";

import { useAnimatedCards } from "@/app/hooks/useAnimatedCards";
import ProjectCard from "./project-card";
import TerminalLoader from "./terminal-loader";
import { projectsData } from "@/app/data/projects";

const remainder = projectsData.length % 4;
const emptyCards = remainder === 0 ? 0 : 4 - remainder;
const totalCards = projectsData.length + emptyCards;

const ProjectCards = () => {
  const { getRef, handleMouseEnter, handleMouseLeave } =
    useAnimatedCards(totalCards);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:max-[1350px]:grid-cols-2">
      {Array.from({ length: totalCards }).map((_, index) => {
        const isEmpty = index >= projectsData.length;

        if (isEmpty) {
          return (
            <div
              key={`empty-${index}`}
              ref={getRef(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="initial-card card-transition bento-transition neo-border neo-shadow flex h-full items-center justify-center"
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
            cardRef={getRef(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
};

export default ProjectCards;
