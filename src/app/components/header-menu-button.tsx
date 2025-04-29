const MenuButton = () => {
  return (
    <div className="btn-primary flex cursor-pointer flex-col items-end justify-center gap-1 px-[13px] py-3.5">
      <div className="h-1 w-6 rounded bg-black transition-all duration-300"></div>
      <div className="h-1 w-5 self-end rounded bg-black transition-all duration-300"></div>
      <div className="h-1 w-6 rounded bg-black transition-all duration-300"></div>
    </div>
  );
};

export default MenuButton;
