interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header = ({ isMenuOpen, toggleMenu }: HeaderProps) => {
  return (
    <header className="w-full border-b-4 border-black bg-white px-8 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <span className="btn-primary px-4 text-3xl leading-8 font-extrabold whitespace-nowrap text-black uppercase select-none">
          E
        </span>

        <button
          onClick={toggleMenu}
          className="btn-primary flex cursor-pointer flex-col items-end justify-center gap-1 px-[13px] py-3.5"
        >
          <div
            className={`h-1 w-6 rounded bg-black transition-all duration-300 ${
              isMenuOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-5 rounded bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 rounded bg-black transition-all duration-300 ${
              isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
