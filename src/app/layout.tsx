import type { Metadata } from "next";
import "./globals.css";
import Menu from "./components/menu";

export const metadata: Metadata = {
  title: "Erick Araujo",
  description:
    "Portfólio de Erick Araujo, desenvolvedor front-end especializado em React, Next.js e TypeScript. Disponível para freelance e oportunidades profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body tabIndex={-1} className="font-mono antialiased">
        <Menu />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
