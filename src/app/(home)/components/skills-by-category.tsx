"use client";

import { SkillCategory, skillsByCategory } from "@/app/data/skills-by-category";
import React, { useState } from "react";

const SkillsByCategory = () => {
  const categories = Object.keys(skillsByCategory) as SkillCategory[];
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const currentCategory = categories[currentCategoryIndex];

  return (
    <div className="w-full flex-col items-start justify-start">
      <div className="mb-4 flex justify-start gap-2 max-sm:overflow-x-auto sm:flex-wrap">
        <h2 className="sr-only">Habilidades em {currentCategory}</h2>
        {categories.map((category, index) => (
          <button
            key={category}
            aria-pressed={index === currentCategoryIndex}
            aria-label={`Ver habilidades de ${category}`}
            onClick={() => setCurrentCategoryIndex(index)}
            className={`rounded-full px-3 py-1 text-xs transition-all duration-300 ${
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
            className={`h-1 rounded-full transition-all duration-300 ${
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
