export type SkillCategory = "Frontend" | "Backend" | "Outros";

export const skillsByCategory: Record<SkillCategory, string[]> = {
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
  Outros: ["Git", "GitHub", "VS Code", "Docker", "Postman", "Figma", "Jest"],
};
