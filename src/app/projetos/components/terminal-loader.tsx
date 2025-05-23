"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SnakeGame from "@/app/components/snake-game/snake-game";

const TerminalLoader = () => {
  const asciiRef = useRef<HTMLPreElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const [showSnakeGame, setShowSnakeGame] = useState(false);

  const asciiName = [
    "██████╗█████╗ ██╗ █████╗██╗ ██╗",
    "██╔═══╝██╔═██╗██║██╔═══╝██║██╔╝",
    "████╗  █████╔╝██║██║    ████╔╝ ",
    "██╔═╝  ██╔═██╗██║██║    ██╔██╗ ",
    "██████╗██║ ██║██║╚█████╗██║ ██╗",
    "╚═════╝╚═╝ ╚═╝╚═╝ ╚════╝╚═╝ ╚═╝",
  ];

  useGSAP(() => {
    if (!showSnakeGame) {
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
    }
  }, [showSnakeGame]);

  const handleStartSnake = () => {
    setShowSnakeGame(true);
  };

  const handleBackToTerminal = () => {
    setShowSnakeGame(false);
  };

  if (showSnakeGame) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-neutral-900 p-4 font-mono text-sm text-lime-300 shadow-md">
        {/* Terminal Header */}
        <div className="absolute top-0 right-0 left-0 flex h-6 items-center justify-between rounded-t bg-neutral-800 px-2 text-xs text-neutral-200">
          <div>Terminal - Snake Game</div>
          <div className="flex space-x-1">
            <div className="h-2.5 w-2.5 rounded-full bg-red-600" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-lime-600" />
          </div>
        </div>

        <div className="space-y-2 self-start">
          <button
            onClick={handleBackToTerminal}
            className="mt-4 mb-2 rounded bg-neutral-700 px-3 py-1 text-xs text-lime-300 transition-colors hover:bg-neutral-600"
          >
            ← Back to Terminal
          </button>
        </div>

        {/* Snake Game */}
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
          <div className="self-start text-lime-300">
            $ snake_game.exe --start
          </div>
          <div className="text-xs text-neutral-400">Use WASD to play</div>
          <SnakeGame
            percentageWidth={95}
            startSnakeSize={4}
            snakeColor="#84cc16"
            appleColor="#ef4444"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[570px] w-full items-center overflow-hidden bg-neutral-900 p-2 font-mono text-sm text-lime-300 shadow-md">
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

          <button
            onClick={handleStartSnake}
            className="cursor-pointer rounded text-left"
          >
            <span className="text-lime-300">$ snake_game ready</span>
          </button>

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
