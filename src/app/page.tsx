import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="h-[calc(100vh-82px)] w-full px-8 py-12 select-none">
      <div className="container mx-auto grid grid-cols-4 grid-rows-3 items-center justify-center gap-5">
        {/* NAME DIV */}
        <div className="bento-transition neo-border neo-shadow col-span-2 flex h-full items-center justify-center rounded-2xl bg-lime-300 p-4">
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-black uppercase">
            Erick Araujo
          </h1>
        </div>
        {/* TITLE DIV */}
        <div className="bento-transition neo-border neo-shadow col-span-2 flex h-full items-center justify-center rounded-2xl p-4">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-nowrap text-black uppercase">
            Desenvolvedor<span className="text-lime-400"> Front-end</span>
          </h2>
        </div>

        {/* ABOUT DIV */}
        <div className="bento-transition neo-border neo-shadow col-span-2 row-span-2 flex h-full flex-col items-center justify-center rounded-2xl p-8">
          <p className="mb-4 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-balance text-black">
            Desenvolvedor Front-end focado em construir aplicações web modernas
            e performáticas. Sou graduado em Sistemas de Informação e atualmente
            estou cursando uma pós-graduação em Desenvolvimento Fullstack.
          </p>
          <p className="mb-4 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-balance text-black">
            Possuo experiência com React e Next.js utilizando TypeScript e
            JavaScript, além de tecnologias como Node.js, Prisma, APIs REST,
            Tailwind CSS e outras ferramentas do ecossistema web.
          </p>
        </div>

        {/* PROFILE DIV */}
        <div className="bento-transition neo-border neo-shadow row-span-3 flex h-full flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-neutral-200 pb-14">
          <Image
            src="/perfil-base.png"
            alt="Foto de perfil"
            width={400}
            height={500}
            className="object-cover drop-shadow-[0px_4px_0px_rgba(0,0,0)] min-[1536px]:-mt-20"
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
        <div className="bento-transition neo-border neo-shadow row-span-2 h-full rounded-2xl p-8">
          <h3 className="text-[clamp(1rem,4vw,2rem)] font-semibold text-black uppercase">
            Habilidades
          </h3>
          <ul>
            <li>
              <span className="h-2 w-2"></span>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                React.js
              </span>
            </li>
            <li>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                Next.js
              </span>
            </li>
            <li>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                TypeScript
              </span>
            </li>
            <li>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                JavaScript
              </span>
            </li>
            <li>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                Tailwind CSS
              </span>
            </li>
            <li>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                Node.js
              </span>
            </li>
          </ul>
        </div>

        {/* STATS DIV */}
        <div className="bento-transition neo-border neo-shadow col-span-2 h-full rounded-2xl p-8">
          <h3 className="text-[clamp(1rem,4vw,2rem)] font-semibold text-black uppercase">
            Estatísticas
          </h3>
          <ul>
            <li>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                2+ Anos de experiência
              </span>
            </li>
            <li>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
                10+ Projetos desenvolvidos
              </span>
            </li>
          </ul>
        </div>

        {/* SOCIAL DIV */}
        <div className="bento-transition neo-border neo-shadow h-full rounded-2xl bg-lime-300 p-8">
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
        </div>
      </div>
    </main>
  );
};

export default Home;
