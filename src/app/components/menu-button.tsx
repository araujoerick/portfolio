const MenuButton = () => {
  return (
    <div className="link-secondary flex cursor-pointer flex-col items-end justify-center gap-1 p-3">
      <div className="h-1 w-8 rounded bg-black transition-all duration-300"></div>
      <div className="h-1 w-5 self-end rounded bg-black transition-all duration-300"></div>
      <div className="h-1 w-8 rounded bg-black transition-all duration-300"></div>
    </div>
  );
};

export default MenuButton;
