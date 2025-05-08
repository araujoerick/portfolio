import Link from "next/link";
import ProjectCards from "./components/project-cards";
import { FaGithub } from "react-icons/fa6";

const Projetos = () => {
  return (
    <section className="min-h-[calc(100vh-82px)] w-full bg-lime-300 p-8 select-none">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <h1 className="text-[clamp(2.25rem,4vw,3rem)] font-semibold text-black uppercase">
          Projetos
        </h1>

        <ProjectCards />

        <Link
          href="https://www.github.com/araujoerick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-secondary mt-10 flex w-[clamp(300px,30vw,500px)] cursor-pointer items-center justify-center gap-2 bg-neutral-800 p-4 text-white">
            <FaGithub />
            Ver mais projetos
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projetos;
