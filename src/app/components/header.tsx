import MenuButton from "./menu-button";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-4 border-black bg-white px-8 py-4 text-black shadow-md">
      <div className="h-[30px cursor-pointer text-2xl font-bold whitespace-nowrap text-black">
        <h1 className="link-secondary uppercase">ERICK ARAUJO</h1>
      </div>

      <MenuButton />
    </header>
  );
};

export default Header;
