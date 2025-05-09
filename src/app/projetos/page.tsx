import Link from "next/link";
import ProjectCards from "./components/project-cards";
import { FaGithub } from "react-icons/fa6";
import SectionTitle from "../components/section-title";

const Projetos = () => {
  return (
    <section className="min-h-[calc(100vh-82px)] w-full bg-lime-300 p-8 select-none">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <SectionTitle>Projetos</SectionTitle>

        <ProjectCards />

        <Link
          href="https://www.github.com/araujoerick"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-10 w-[min(100%,600px)] cursor-pointer bg-neutral-800 p-4 text-white"
        >
          <button className="mx-auto flex items-center justify-center gap-2 text-white">
            <FaGithub />
            Ver mais projetos
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projetos;
