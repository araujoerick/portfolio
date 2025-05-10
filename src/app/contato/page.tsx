import { MdEmail } from "react-icons/md";
import SectionTitle from "../components/section-title";
import Link from "next/link";

const Contato = () => {
  return (
    <section className="min-h-[calc(100vh-82px)] w-full p-8 select-none">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <SectionTitle>Contato</SectionTitle>

        <div className="neo-border neo-shadow grid w-full max-w-[900px] grid-cols-1 gap-8 p-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-black">
                Vamos conversar!
              </h2>
              <p className="text-lg text-neutral-800">
                Estou disponível para novos projetos e oportunidades. Entre em
                contato através do formulário ou pelos meus canais sociais.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 select-all">
                <div className="neo-border bg-lime-300 p-2">
                  <MdEmail size={20} />
                </div>
                <Link href={"mailto:Erick Araujo<araujoerick.dev@gmail.com>"}>
                  araujoerick.dev@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-4">
              <label className="text-lg text-neutral-800">Nome</label>
              <input type="text" className="neo-border p-2" />
              <label className="text-lg text-neutral-800">Email</label>
              <input type="text" className="neo-border p-2" />
              <label className="text-lg text-neutral-800">Mensagem</label>
              <textarea className="neo-border h-32 p-2"></textarea>
              <button className="btn-secondary w-full cursor-pointer bg-lime-300 p-4 text-black">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
