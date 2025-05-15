import SectionTitle from "../components/section-title";
import ContactCard from "./components/contact-card";

const Contato = () => {
  return (
    <section className="min-h-[calc(100vh-82px)] w-full bg-lime-200 p-4 select-none min-[430px]:p-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <SectionTitle>Contato</SectionTitle>

        <ContactCard />
      </div>
    </section>
  );
};

export default Contato;
