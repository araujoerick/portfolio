import { cn } from "@/app/lib/utils";
import React from "react";

const BentoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "initial-card neo-border neo-shadow flex h-full items-center justify-center rounded-2xl",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default BentoCard;
