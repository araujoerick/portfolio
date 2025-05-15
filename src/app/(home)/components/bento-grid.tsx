import Link from "next/link";
import BentoCard from "./bento-card";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import SkillsByCategory from "./skills-by-category";

const BentoGrid = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-5 min-[580px]:grid-cols-2 lg:grid-cols-4">
      {/* NAME DIV */}
      <BentoCard className="bg-lime-300 p-4 min-[580px]:col-span-2">
        <h1 className="text-[clamp(2.25rem,4vw,4.5rem)] font-bold text-black uppercase">
          Erick Araujo
        </h1>
      </BentoCard>

      {/* TITLE DIV */}
      <BentoCard className="p-4 min-[580px]:col-span-2">
        <h2 className="text-[clamp(1.25rem,3vw,2.5rem)] font-semibold text-nowrap text-black uppercase">
          Desenvolvedor<span className="text-lime-400"> Front-end</span>
        </h2>
      </BentoCard>

      {/* ABOUT DIV */}
      <BentoCard className="row-span-2 flex-col gap-4 p-8 min-[580px]:col-span-2">
        <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-balance text-black">
          Desenvolvedor Front-end focado em construir aplicações web modernas e
          performáticas. Sou graduado em Sistemas de Informação e atualmente
          estou cursando uma pós-graduação em Desenvolvimento Fullstack.
        </p>
        <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-balance text-black">
          Possuo experiência com React e Next.js utilizando TypeScript e
          JavaScript, além de tecnologias como Node.js, Prisma, APIs REST,
          Tailwind CSS e outras ferramentas do ecossistema web.
        </p>
      </BentoCard>

      {/* PROFILE DIV */}
      <div className="bento-transition neo-border neo-shadow row-span-2 flex h-full flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-neutral-200 pb-14 lg:row-span-3">
        <Image
          src="/perfil-base.png"
          alt="Foto de perfil"
          width={500}
          height={600}
          className="object-cover drop-shadow-[0px_4px_0px_rgba(0,0,0)] max-lg:-mt-20 min-[1536px]:-mt-20"
          priority
        />

        <Link
          href="/docs/erick-araujo-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="btn-primary cursor-pointer bg-lime-300 p-4 text-xl font-bold text-black uppercase">
            Download CV
          </button>
        </Link>
      </div>

      {/* SKILLS DIV */}
      <BentoCard className="flex-col items-start justify-baseline p-8 min-[580px]:max-lg:row-start-5 lg:row-span-2">
        <SkillsByCategory />
      </BentoCard>

      {/* STATS DIV */}
      <BentoCard className="justify-around gap-4 px-4 py-8 min-[580px]:col-span-2 min-[580px]:p-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-4xl font-bold text-lime-300">15+</p>
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
        <ul className="flex h-full items-center justify-center gap-4">
          <li>
            <Link
              href="https://www.linkedin.com/in/araujoerick09/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-primary bg-white p-4">
                <FaLinkedinIn size={24} />
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.github.com/araujoerick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-primary bg-white p-4">
                <FaGithub size={24} />
              </div>
            </Link>
          </li>
        </ul>
      </BentoCard>
    </div>
  );
};

export default BentoGrid;
