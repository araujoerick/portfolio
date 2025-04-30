import MenuButton from "./header-menu-button";

const Header = () => {
  return (
    <header className="w-full border-b-4 border-black bg-white px-8 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <span className="btn-primary px-4 text-3xl leading-8 font-extrabold whitespace-nowrap text-black uppercase select-none">
          E
        </span>

        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
