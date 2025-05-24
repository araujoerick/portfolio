"use client";

import BentoCard from "./bento-card";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import SkillsByCategory from "./skills-by-category";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DownloadCvButton from "@/app/components/cv-button";
import { useAnimatedCards } from "@/app/hooks/use-animated-cards";

gsap.registerPlugin(useGSAP);

const BentoGrid = () => {
  useAnimatedCards();

  return (
    <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-5 min-[580px]:grid-cols-2 lg:grid-cols-4">
      {/* NAME DIV */}
      <BentoCard className="bg-lime-300 p-4 min-[580px]:col-span-2">
        <h2 className="sr-only">Nome</h2>
        <h1 className="text-[clamp(2.25rem,4vw,4.5rem)] font-bold text-black uppercase">
          Erick Araujo
        </h1>
      </BentoCard>

      {/* TITLE DIV */}
      <BentoCard className="p-4 min-[580px]:col-span-2">
        <h2 className="sr-only">Profissão</h2>
        <h2 className="text-[clamp(1.25rem,3vw,2.5rem)] font-semibold text-nowrap text-black uppercase">
          Desenvolvedor<span className="text-lime-400"> Front-end</span>
        </h2>
      </BentoCard>

      {/* ABOUT DIV */}
      <BentoCard className="row-span-2 flex-col gap-4 p-8 min-[580px]:col-span-2">
        <h2 className="sr-only">Sobre mim</h2>
        <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-balance text-black">
          Desenvolvedor focado na criação de aplicações web modernas e
          performáticas, utilizando React e Next.js com JavaScript e TypeScript.
          Tenho experiência em integração com APIs REST, sistemas de pagamento,
          bancos de dados, além de práticas de validação e otimização de
          performance.
        </p>
        <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-balance text-black">
          Sou apaixonado por transformar ideias em experiências envolventes,
          priorizando a qualidade do código e a excelência na experiência do
          usuário. Estou sempre aberto a conversar sobre projetos e colaborar na
          criação de soluções eficientes e inovadoras.
        </p>
      </BentoCard>

      {/* PROFILE DIV */}
      <BentoCard className="row-span-2 flex h-full flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-neutral-200 pb-12 lg:row-span-3">
        <h2 className="sr-only">Foto de perfil e currículo</h2>
        <Image
          src="/perfil-base.png"
          alt="Foto de perfil"
          width={500}
          height={600}
          className="object-cover drop-shadow-[0px_4px_0px_rgba(0,0,0)] max-lg:-mt-20 min-[1536px]:-mt-20"
          priority
        />

        <DownloadCvButton />
      </BentoCard>

      {/* SKILLS DIV */}
      <BentoCard className="flex-col items-start justify-baseline p-8 min-[580px]:max-lg:row-start-5 lg:row-span-2">
        <SkillsByCategory />
      </BentoCard>

      {/* STATS DIV */}
      <BentoCard className="justify-around gap-4 px-4 py-8 min-[580px]:col-span-2 min-[580px]:p-8">
        <h2 className="sr-only">Estatísticas</h2>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-4xl font-bold text-lime-300">10+</p>
          <p className="text-[clamp(.875rem,1.5vw,1.25rem)] text-black">
            Projetos
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-4xl font-bold text-lime-300">3+</p>
          <p className="text-[clamp(.875rem,1.5vw,1.25rem)] text-black">
            Anos Exp
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-4xl font-bold text-lime-300">100%</p>
          <p className="text-[clamp(.875rem,1.5vw,1.25rem)] text-black">
            Dedicado
          </p>
        </div>
      </BentoCard>

      {/* SOCIAL DIV */}
      <BentoCard className="bg-lime-300 p-8 min-[580px]:max-lg:row-start-6">
        <h2 className="sr-only">Links sociais</h2>
        <ul className="flex h-full items-center justify-center gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/araujoerick09/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir para o perfil de Erick Araujo no LinkedIn"
            >
              <div className="btn-primary bg-white p-4">
                <FaLinkedinIn size={24} />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/araujoerick"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir para o perfil de Erick Araujo no Github"
            >
              <div className="btn-primary bg-white p-4">
                <FaGithub size={24} />
              </div>
            </a>
          </li>
        </ul>
      </BentoCard>
    </div>
  );
};

export default BentoGrid;
