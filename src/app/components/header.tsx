"use client";

import { useState } from "react";
import MenuButton from "./menu-button";

const Header = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="flex w-full items-center justify-between border-b-4 border-black bg-lime-200 px-8 py-4 text-black shadow-md">
      <div
        className="h-[30px] cursor-pointer text-2xl font-bold whitespace-nowrap text-black"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? (
          <div className="link-secondary -mt-2 -mr-2">
            <h1 className="">ERICK ARAUJO</h1>
          </div>
        ) : (
          <h1 className="px-2 uppercase">Erick Araujo</h1>
        )}
      </div>

      <MenuButton />
    </header>
  );
};

export default Header;
