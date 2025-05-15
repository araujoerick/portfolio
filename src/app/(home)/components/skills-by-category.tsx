"use client";

import React, { useState, useEffect } from "react";

type SkillCategory = "Frontend" | "Backend" | "Ferramentas";

const skillsByCategory: Record<SkillCategory, string[]> = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5/CSS3",
    "Zustand",
  ],
  Backend: [
    "Node.js",
    "REST APIs",
    "Express",
    "Prisma",
    "Fastify",
    "PostgreSQL",
    "MongoDB",
  ],
  Ferramentas: [
    "Git",
    "GitHub",
    "VS Code",
    "Docker",
    "Postman",
    "Figma",
    "Jest",
  ],
};

const SkillsByCategory = () => {
  const categories = Object.keys(skillsByCategory) as SkillCategory[];
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const currentCategory = categories[currentCategoryIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex(
        (prevIndex) => (prevIndex + 1) % categories.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [categories.length]);

  return (
    <div className="w-full flex-col items-start justify-start">
      <div className="mb-4 flex justify-start gap-2 max-sm:overflow-x-auto sm:flex-wrap">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setCurrentCategoryIndex(index)}
            className={`rounded-full px-3 py-1 text-xs transition-all ${
              index === currentCategoryIndex
                ? "bg-lime-300 font-medium text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="min-h-32 w-full">
        <ul className="w-full">
          {skillsByCategory[currentCategory].map((skill) => (
            <li key={skill} className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime-300"></span>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex w-full justify-center gap-1">
        {categories.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === currentCategoryIndex
                ? "w-6 bg-lime-300"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsByCategory;
