import Image from "next/image";
import Header from "./components/header";
import { FaLinkedin, FaGithubSquare, FaStar } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <main className="grid h-[calc(100vh-166px)] w-full grid-cols-2 items-center justify-center bg-lime-300 text-black">
        <div className="grid h-full grid-rows-[30%,70%] text-black">
          <div className="flex items-center border-r-4 border-b-4 bg-lime-100 p-10">
            <h2 className="text-[clamp(2.5rem,4vw,3.75rem)] font-semibold text-black">
              Desenvolvedor
              <br />
              Front-end
            </h2>
          </div>

          <div className="flex flex-col items-start justify-center border-r-4 bg-lime-50 p-10 xl:gap-4">
            <p className="mb-4 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed font-semibold text-balance">
              Desenvolvedor Front-end focado em construir aplicações web
              modernas e performáticas. Sou graduado em Sistemas de Informação e
              atualmente estou cursando uma pós-graduação em Desenvolvimento
              Fullstack. Possuo experiência com React e Next.js utilizando
              TypeScript e JavaScript, além de tecnologias como Node.js, Prisma,
              APIs REST, Tailwind CSS e outras ferramentas do ecossistema web.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed font-semibold text-balance">
              Minhas experiências anteriores me permitiram desenvolver
              habilidades essenciais como comunicação, trabalho em equipe e
              resolução de problemas. Sou apaixonado por criar interfaces
              intuitivas e responsivas, sempre buscando as melhores práticas de
              acessibilidade, usabilidade e design.
            </p>
          </div>
        </div>

        <div className="grid h-full w-full grid-rows-[70%,30%] gap-8">
          <div className="flex h-full w-full items-center justify-center">
            <div className="group relative p-4 pb-8">
            <Image
              src="/perfil-base.png"
              alt="Foto de perfil"
              width={343}
              height={439}
              className="shadow-[30px_40px_0px_rgba(0,0,0,0)] transition-all duration-300 group-hover:drop-shadow-[30px_40px_0px_rgba(0,0,0)]"
              priority
            />

            <Link
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
                className="absolute right-20 bottom-8 cursor-pointer text-lime-300 hover:text-lime-400"
              />
            </Link>
          </div>
        </div>

          <div className="flex h-full w-full items-center justify-center border-t-4 bg-lime-200 p-4">
            <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold uppercase">
              Erick Araujo
            </h1>
          </div>
      </div>
      </main>

      <div className="flex h-full max-h-20 w-full items-center justify-center gap-4 overflow-hidden border-t-4 bg-white px-8 py-4 text-4xl font-bold">
        <span>PORTIFOLIO</span>
        <FaStar />
        <span>PORTIFOLIO</span>
        <FaStar />
        <span>PORTIFOLIO</span>
        <FaStar />
        <span>PORTIFOLIO</span>
        <FaStar />
        <span>PORTIFOLIO</span>
      </div>
    </>
  );
};

export default Home;
