import Link from "next/link";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactInfos = [
  {
    icon: <MdEmail size={20} />,
    text: "araujoerick.dev@gmail.com",
    href: "mailto:Erick Araujo<araujoerick.dev@gmail.com>",
  },
  {
    icon: <FaPhone size={20} />,
    text: "+55 75 99914-3983",
    href: "tel:+5575999143983",
  },
  {
    icon: <FaLocationDot size={20} />,
    text: "Bahia, Brasil",
    href: null,
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {contactInfos.map(({ icon, text, href }) => (
        <div key={href} className="flex items-center gap-4 select-all">
          <div className="neo-border bg-lime-300 p-2">{icon}</div>
          {href ? (
            <Link href={href} className="text-neutral-800">
              {text}
            </Link>
          ) : (
            <span className="text-neutral-800">{text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
