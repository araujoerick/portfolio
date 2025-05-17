import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  techs: string[];
  githubUrl: string;
  deployUrl: string;
}

const ProjectCard = ({
  imageSrc,
  title,
  description,
  techs,
  githubUrl,
  deployUrl,
}: ProjectCardProps) => {
  return (
    <div className="initial-card neo-border neo-shadow flex h-full flex-col bg-white">
      <div className="border-b-3 border-black">
        <Image
          src={imageSrc}
          alt={`Imagem do projeto ${title}`}
          priority
          width={620}
          height={350}
          className="object-cover"
        />
      </div>

      <div className="flex h-full flex-col justify-between gap-4 bg-white px-7 pt-3 pb-6">
        <div className="space-y-1">
          <h3 className="text-[clamp(1.5rem,4vw,1.75rem)] font-semibold text-black">
            {title}
          </h3>

          <p className="w-full text-[clamp(1rem,1.5vw,1.125rem)] text-balance text-neutral-700">
            {description}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                className="neo-border bg-lime-200 px-2 py-1 text-xs font-medium transition-colors duration-300 hover:bg-lime-300"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            href={githubUrl}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-secondary w-full cursor-pointer bg-white px-4 py-2 text-black">
              Github
            </button>
          </Link>
          <Link
            href={deployUrl}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-secondary w-full cursor-pointer bg-lime-300 px-4 py-2 text-black">
              Deploy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
