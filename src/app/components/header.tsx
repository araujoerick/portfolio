import MenuButton from "./header-menu-button";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-4 border-black bg-white px-8 py-3">
      <span className="btn-primary px-4 text-3xl leading-8 font-extrabold whitespace-nowrap text-black uppercase select-none">
        E
      </span>

      <MenuButton />
    </header>
  );
};

export default Header;
