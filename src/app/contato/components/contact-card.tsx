"use client";

import React, { useRef } from "react";
import ContactInfo from "./contact-info";
import { socialLinks } from "@/app/data/socialLinks";
import Link from "next/link";
import ContactForm from "./contact-form";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ContactCard = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(contactRef.current, { y: 50, opacity: 0 });

    gsap.to(contactRef.current, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
    });
  }, []);

  return (
    <div
      ref={contactRef}
      className="initial-card card-transition bento-transition neo-border neo-shadow grid w-full max-w-[900px] grid-cols-1 gap-8 bg-white p-4 pb-6 min-[430px]:p-8 md:grid-cols-2"
    >
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
