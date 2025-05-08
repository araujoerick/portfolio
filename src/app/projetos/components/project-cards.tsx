import ProjectCard from "./project-card";
import TerminalLoader from "./terminal-loader";

const projects = [
  {
    imageSrc: "/projects/portifolio.png",
    title: "Stock Manager",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: [
      "Next",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "GSAP",
      "Shadcn",
      "Git Hooks",
      "Husky",
    ],
    githubUrl: "https://github.com/araujoerick/portifolio",
    deployUrl: "##",
  },
  {
    imageSrc: "/projects/financeai.png",
    title: "Finance Ai",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Zod",
      "PostgreSQL",
      "Shadcn",
      "Stripe",
      "Clerk",
    ],
    githubUrl: "https://github.com/araujoerick/financeai",
    deployUrl: "https://financeai-lime.vercel.app/login",
  },
  {
    imageSrc: "/projects/portifolio.png",
    title: "Portifólio",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: [
      "Next",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "GSAP",
      "Shadcn",
      "Git Hooks",
      "Husky",
    ],
    githubUrl: "https://github.com/araujoerick/portifolio",
    deployUrl: "##",
  },
  {
    imageSrc: "/projects/task-manager.png",
    title: "Task Manager",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Axios",
      "Node",
      "Prisma",
      "PostgreSQL",
      "Cron Jobs",
    ],
    githubUrl: "https://github.com/araujoerick/task-manager",
    deployUrl: "https://task-manager-araujo.vercel.app/",
  },
  {
    imageSrc: "/projects/dogs-social.png",
    title: "Dogs - Rede Social",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: [
      "React",
      "Vite",
      "JavaScript",
      "React Router",
      "CSS Modules",
      "Custom Hooks",
      "JWT",
    ],
    githubUrl: "https://github.com/araujoerick/dogs",
    deployUrl: "https://dogs-mu-neon.vercel.app",
  },
  {
    imageSrc: "/projects/animais-fant.png",
    title: "Animais Fantásticos",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/araujoerick/animais-fantasticos",
    deployUrl: "https://animais-fantasticos-kappa.vercel.app/",
  },
  {
    imageSrc: "/projects/bikcraft.png",
    title: "BikCraft",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: ["HTML", "CSS"],
    githubUrl: "https://github.com/araujoerick/bikcraft",
    deployUrl: "https://bikcraft-erickaraujo.vercel.app/",
  },
];

const remainder = projects.length % 4;
const emptyCards = remainder === 0 ? 0 : 4 - remainder;

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:max-[1350px]:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}

      {Array.from({ length: emptyCards }).map((_, index) => (
        <div
          key={`empty-${index}`}
          className="bento-transition neo-border neo-shadow bg-whit flex h-full items-center justify-center"
        >
          <TerminalLoader />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
