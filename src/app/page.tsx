import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto grid h-[calc(100vh-82px)] w-full grid-cols-4 grid-rows-3 items-center justify-center gap-5 py-12">
        {/* NAME DIV */}
        <div className="neo-border neo-shadow col-span-2 flex h-full items-center justify-center bg-lime-300 p-4">
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold uppercase">
            Erick Araujo
          </h1>
        </div>
        {/* TITLE DIV */}
        <div className="neo-border neo-shadow col-span-2 flex h-full items-center justify-center p-4">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-nowrap text-black uppercase">
            Desenvolvedor<span className="text-lime-400"> Front-end</span>
          </h2>
        </div>

        {/* ABOUT DIV */}
        <div className="neo-border neo-shadow col-span-2 row-span-2 flex h-full items-center justify-center p-8">
          <p className="mb-4 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-balance text-black">
            Desenvolvedor Front-end focado em construir aplicações web modernas
            e performáticas. Sou graduado em Sistemas de Informação e atualmente
            estou cursando uma pós-graduação em Desenvolvimento Fullstack.
            Possuo experiência com React e Next.js utilizando TypeScript e
            JavaScript, além de tecnologias como Node.js, Prisma, APIs REST,
            Tailwind CSS e outras ferramentas do ecossistema web.
          </p>
        </div>

        {/* PROFILE DIV */}
        <div className="row-span-3 flex h-full items-center justify-center">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="group relative pb-8">
              <Image
                src="/perfil-base.png"
                alt="Foto de perfil"
                width={343}
                height={439}
                className=""
                priority
              />

              {/* <Link
                href="https://www.linkedin.com/in/araujoerick09/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={32}
                  className="absolute right-5 bottom-[78px] cursor-pointer text-lime-300 transition-colors duration-300 hover:text-lime-400"
                />
              </Link>
              <Link
                href="https://github.com/araujoerick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare
                  size={32}
                  className="absolute right-[74px] bottom-[46px] cursor-pointer text-lime-300 hover:text-lime-400"
                />
              </Link>
              <Link
                href="/docs/erick-araujo-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <RiFileDownloadFill
                  size={32}
                  className="absolute right-[122px] bottom-4 cursor-pointer text-lime-300 hover:text-lime-400"
                />
              </Link> */}
            </div>

            <Link
              href="/docs/erick-araujo-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="neo-border neo-shadow-sm bg-lime-300 p-4 text-black uppercase transition-colors duration-300 hover:bg-lime-400">
                Download CV
              </button>
            </Link>
          </div>
        </div>

        {/* SKILLS DIV */}
        <div className="neo-border neo-shadow row-span-2 h-full p-8">
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
        <div className="neo-border neo-shadow col-span-2 h-full p-8">
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

        {/* CV DIV */}
        {/* <div className="neo-border neo-shadow flex h-full items-center justify-center p-8">
          
        </div> */}

        {/* SOCIAL DIV */}
        <div className="neo-border neo-shadow h-full bg-lime-300 p-8">
          <ul className="flex h-full items-center justify-center gap-4">
            <li>
              <Link
                href="https://www.linkedin.com/in/araujoerick09/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="neo-border neo-shadow-sm bg-white p-4">
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
                <div className="neo-border neo-shadow-sm bg-white p-4">
                  <FaGithub size={24} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
