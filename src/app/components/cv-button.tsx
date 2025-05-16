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
    >
      <button className="btn-primary flex w-full cursor-pointer items-center justify-center gap-2 bg-lime-300 p-4 text-xl font-bold text-black uppercase">
        {icon}
        Download CV
      </button>
    </a>
  );
};

export default DownloadCvButton;
