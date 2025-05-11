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
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
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

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contato;
