import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <label className="text-lg text-neutral-800">Nome</label>
        <input
          type="text"
          className="neo-border p-2 outline-lime-300 hover:outline-[3px] focus:outline-[3px]"
        />
        <label className="text-lg text-neutral-800">Email</label>
        <input type="text" className="neo-border p-2" />
        <label className="text-lg text-neutral-800">Mensagem</label>
        <textarea className="neo-border h-32 p-2"></textarea>
        <button className="btn-secondary w-full cursor-pointer bg-lime-300 p-4 text-black">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
