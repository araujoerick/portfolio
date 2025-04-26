import Image from "next/image";
import Header from "./components/header";
import { FaLinkedin, FaGithubSquare, FaStar } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid h-[calc(100vh-166px)] w-full grid-cols-2 items-center justify-center bg-lime-300">
        <div className="grid h-full grid-rows-2 text-black">
          <div className="border-r-4 border-b-4 bg-lime-100 p-16">
            <p className="text-9xl font-bold uppercase">Erick</p>
            <p className="text-9xl font-bold uppercase">Araujo</p>
          </div>

          <div className="border-r-4 bg-lime-50 p-16">
            <h2 className="text-6xl font-bold text-black">
              Desenvolvedor Frontend
            </h2>
            <button className="btn-primary">Projetos</button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <div className="group relative pb-8">
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
                className="absolute right-4 bottom-[72px] cursor-pointer text-lime-300 transition-colors duration-300 hover:text-lime-400"
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

        {/* <div className="fixed inset-0 z-[5]">
          <Image
            src="/bg-shapes.svg"
            alt="bg shapes"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div> */}
      </div>
      <div className="flex h-full max-h-20 w-full items-center justify-center gap-4 border-t-4 bg-white px-8 py-4 text-4xl font-bold">
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
