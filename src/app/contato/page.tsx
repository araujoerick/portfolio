import { MdEmail } from "react-icons/md";
import SectionTitle from "../components/section-title";
import Link from "next/link";
import { socialLinks } from "../data/socialLinks";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";

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

            <ContactInfo />

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.path}
                  className="neo-transition btn-secondary flex gap-2 p-2"
                >
                  <link.Icon size={20} className="text-black" />
                </Link>
              ))}
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
