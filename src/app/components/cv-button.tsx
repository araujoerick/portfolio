import React from "react";

interface DownloadCvButtonProps {
  icon?: React.ReactNode;
}

const DownloadCvButton = ({ icon }: DownloadCvButtonProps) => {
  return (
    <a
      href="/docs/erick-araujo-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="btn-primary flex cursor-pointer items-center justify-center gap-2 bg-lime-300 p-4 text-xl font-bold text-black uppercase"
      aria-label="Baixar currículo em PDF"
    >
      {icon}
      Download CV
    </a>
  );
};

export default DownloadCvButton;
