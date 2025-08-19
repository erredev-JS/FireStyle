import useMenuHamburguer from "../Store/useMenuStore";

export const HamburguerMenu = () => {
  const { showMenu, toggleMenu } = useMenuHamburguer();

  if (showMenu == false) return null;
  return (
    <>
      <div className="h-full fixed top-1/2 right-0  -translate-y-1/2 bg-black text-white antiqua w-1/2 z-50">
      <div className="h-[10vh]  flex items-center justify-end pr-7">
        <button className="text-3xl absolute cursor-pointer" onClick={() => toggleMenu()}>X</button>
      </div>
      <div className=" h-full flex flex-col text-center text-2xl gap-5">
        <a href="#home" className="py-1 hover:bg-gray-400">Inicio</a>
        {/* <a href="#" className="py-1 hover:bg-gray-400">Productos</a> */}
        <a href="#about" className="py-1 hover:bg-gray-400">Sobre nosotros</a>
      </div>
      </div>
    </>
  );
};
