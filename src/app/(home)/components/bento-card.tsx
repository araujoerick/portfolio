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
    <div
      className={cn(
        "initial-card bento-transition card-transition neo-border neo-shadow flex h-full items-center justify-center rounded-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
