"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TerminalLoader = () => {
  const asciiRef = useRef<HTMLPreElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  const asciiName = [
    "██████╗█████╗ ██╗ █████╗██╗ ██╗",
    "██╔═══╝██╔═██╗██║██╔═══╝██║██╔╝",
    "████╗  █████╔╝██║██║    ████╔╝ ",
    "██╔═╝  ██╔═██╗██║██║    ██╔██╗ ",
    "██████╗██║ ██║██║╚█████╗██║ ██╗",
    "╚═════╝╚═╝ ╚═╝╚═╝ ╚════╝╚═╝ ╚═╝",
  ];

  useGSAP(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }

    if (asciiRef.current) {
      gsap.to(asciiRef.current, {
        display: "none",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        repeatDelay: 3,
      });
    }
  }, []);

  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center overflow-hidden bg-neutral-900 p-2 font-mono text-sm text-lime-300 shadow-md">
      <div className="absolute top-0 right-0 left-0 flex h-6 items-center justify-between rounded-t bg-neutral-800 px-2 text-xs text-neutral-200">
        <div>Terminal</div>
        <div className="flex space-x-1">
          <div className="h-2.5 w-2.5 rounded-full bg-red-600" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-lime-600" />
        </div>
      </div>

      <div className="mt-6 pt-2">
        <div className="flex flex-col gap-2">
          <span className="text-lime-300">$ mais projetos em breve...</span>
          <span className="text-lime-300">$ loading system...</span>
          <span className="text-lime-300">$ initialize_graphics.exe</span>
          <span className="text-lime-300">$ render_name --style=pixelart</span>

          <pre ref={asciiRef} className="overflow-hidden text-lime-500">
            {asciiName.map((line, index) => (
              <div key={index} className="leading-none">
                {line}
              </div>
            ))}
          </pre>

          <div className="flex items-center">
            <span className="text-lime-300">$ </span>
            <span
              ref={cursorRef}
              className="ml-1 inline-block h-4 w-2 bg-lime-300"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;
