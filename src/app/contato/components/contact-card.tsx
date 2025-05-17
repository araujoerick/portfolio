"use client";

import React from "react";
import ContactInfo from "./contact-info";
import { socialLinks } from "@/app/data/socialLinks";
import Link from "next/link";
import ContactForm from "./contact-form";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAnimatedCards } from "@/app/hooks/use-animated-cards";

gsap.registerPlugin(useGSAP);

const ContactCard = () => {
  useAnimatedCards();

  return (
    <div className="initial-card neo-border neo-shadow grid w-full max-w-[900px] grid-cols-1 gap-8 bg-white p-4 pb-6 min-[430px]:p-8 md:grid-cols-2">
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
  );
};

export default ContactCard;
