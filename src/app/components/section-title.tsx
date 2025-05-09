import React from "react";

const SectionTitle = ({ children }: { children: string }) => {
  return (
    <h1 className="text-[clamp(2.25rem,4vw,3rem)] font-semibold text-black uppercase">
      {children}
    </h1>
  );
};

export default SectionTitle;
