"use client";

import { useGSAP } from "@gsap/react";
import ProjectCard from "./project-card";
import TerminalLoader from "./terminal-loader";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    imageSrc: "/projects/portifolio.png",
    title: "Portifólio",
    description:
      "Meu Portfólio no estilo neo-brutalism e bento grid, ele combina design ousado com usabilidade. O site é totalmente responsivo e animado com GSAP.",
    techs: [
      "Next",
      "React",
      "TypeScript",
      "Zod",
      "EmailJS",
      "Tailwind CSS",
      "GSAP",
    ],
    githubUrl: "https://github.com/araujoerick/portifolio",
    deployUrl: "#",
  },
  {
    imageSrc: "/projects/stock-manager.png",
    title: "Stock Manager",
    description:
      "Gerencie seu estoque e vendas com facilidade: adicione produtos, registre transações e garanta integridade com ACID Transactions e rotas seguras.",
    techs: [
      "Next",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Shadcn",
      "Context API",
      "ACID",
    ],
    githubUrl: "https://github.com/araujoerick/stock-manager",
    deployUrl: "https://stock-manager-araujo.vercel.app/",
  },
  {
    imageSrc: "/projects/financeai.png",
    title: "Finance Ai",
    description:
      "Gerencie suas finanças com IA: registre entradas, acompanhe gráficos e receba insights personalizados da Gemini AI sobre suas finanças.",
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
    imageSrc: "/projects/task-manager.png",
    title: "Task Manager",
    description:
      "Gerencie tarefas com facilidade: registre, edite, exclua e filtre por período do dia. Inclui monitoramento diário de hidratação para uma rotina mais saudável.",
    techs: [
      "React",
      "React Query",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Zustand",
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
      "Rede social para pets com feed, curtidas, comentários, login e estatísticas de visualização por foto.",
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
      "Site interativo com JavaScript puro, incluindo scroll suave, menu mobile, modal de login e slide dinâmico.",
    techs: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/araujoerick/animais-fantasticos",
    deployUrl: "https://animais-fantasticos-kappa.vercel.app/",
  },
  {
    imageSrc: "/projects/bikcraft.png",
    title: "BikCraft",
    description:
      "Site fictício de bicicletas com foco em layout responsivo, tipografia e design elegante usando HTML e CSS.",
    techs: ["HTML", "CSS"],
    githubUrl: "https://github.com/araujoerick/bikcraft",
    deployUrl: "https://bikcraft-erickaraujo.vercel.app/",
  },
];

const remainder = projects.length % 4;
const emptyCards = remainder === 0 ? 0 : 4 - remainder;

const ProjectCards = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".initial-card") as HTMLElement[];

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
    });
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:max-[1350px]:grid-cols-2">
      {projects.map((project) => (
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
