import Image from "next/image";
import Link from "next/link";

const Projetos = () => {
  return (
    <section className="min-h-[calc(100vh-82px)] w-full bg-lime-300 p-8 select-none">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-black uppercase">
          Projetos
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          <div className="bento-transition neo-border neo-shadow bg-white">
            <div className="overflow-hidden border-b-3 border-black">
              <Image
                src="/projects/task-manager.png"
                alt="Task Manager"
                width={600}
                height={300}
                className="overflow-hidden object-cover transition-all duration-300 hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 bg-white p-8">
              <div className="space-y-1">
                <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-black">
                  Task Manager
                </h3>

                <p className="w-full text-[clamp(1rem,1.5vw,1.25rem)] text-balance text-neutral-700">
                  Gerencie tarefas com facilidade: registre, edite, exclua e
                  filtre por período do dia. Inclui monitoramento diário de
                  hidratação para uma rotina mais saudável.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-white px-4 py-2 text-black">
                    Github
                  </button>
                </Link>
                <Link href="#" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-lime-300 px-4 py-2 text-black">
                    Deploy
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bento-transition neo-border neo-shadow bg-white">
            <div className="overflow-hidden border-b-3 border-black">
              <Image
                src="/projects/task-manager.png"
                alt="Task Manager"
                width={600}
                height={300}
                className="overflow-hidden object-cover transition-all duration-300 hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 bg-white p-8">
              <div className="space-y-1">
                <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-black">
                  Task Manager
                </h3>

                <p className="w-full text-[clamp(1rem,1.5vw,1.25rem)] text-balance text-neutral-700">
                  Gerencie tarefas com facilidade: registre, edite, exclua e
                  filtre por período do dia. Inclui monitoramento diário de
                  hidratação para uma rotina mais saudável.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-white px-4 py-2 text-black">
                    Github
                  </button>
                </Link>
                <Link href="#" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-lime-300 px-4 py-2 text-black">
                    Deploy
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bento-transition neo-border neo-shadow bg-white">
            <div className="overflow-hidden border-b-3 border-black">
              <Image
                src="/projects/task-manager.png"
                alt="Task Manager"
                width={600}
                height={300}
                className="overflow-hidden object-cover transition-all duration-300 hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 bg-white p-8">
              <div className="space-y-1">
                <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-black">
                  Task Manager
                </h3>

                <p className="w-full text-[clamp(1rem,1.5vw,1.25rem)] text-balance text-neutral-700">
                  Gerencie tarefas com facilidade: registre, edite, exclua e
                  filtre por período do dia. Inclui monitoramento diário de
                  hidratação para uma rotina mais saudável.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-white px-4 py-2 text-black">
                    Github
                  </button>
                </Link>
                <Link href="#" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-lime-300 px-4 py-2 text-black">
                    Deploy
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bento-transition neo-border neo-shadow bg-white">
            <div className="overflow-hidden border-b-3 border-black">
              <Image
                src="/projects/task-manager.png"
                alt="Task Manager"
                width={600}
                height={300}
                className="overflow-hidden object-cover transition-all duration-300 hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 bg-white p-8">
              <div className="space-y-1">
                <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-black">
                  Task Manager
                </h3>

                <p className="w-full text-[clamp(1rem,1.5vw,1.25rem)] text-balance text-neutral-700">
                  Gerencie tarefas com facilidade: registre, edite, exclua e
                  filtre por período do dia. Inclui monitoramento diário de
                  hidratação para uma rotina mais saudável.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-white px-4 py-2 text-black">
                    Github
                  </button>
                </Link>
                <Link href="#" className="w-full">
                  <button className="btn-secondary w-full cursor-pointer bg-lime-300 px-4 py-2 text-black">
                    Deploy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button className="btn-secondary mt-10 cursor-pointer bg-neutral-900 px-40 py-4 text-white">
          Ver mais projetos
        </button>
      </div>
    </section>
  );
};

export default Projetos;
