import useMenuHamburguer from "../Store/useMenuStore";

export const Header = () => {

  const {toggleMenu} = useMenuHamburguer()

  return (
    <header className="bg-black h-[10vh] px-6 text-white flex items-center justify-between">
      <h1 className="antiqua text-2xl">FireStyle</h1>

      <img src="./icons/menu.svg" alt="" className="w-8 cursor-pointer hover:scale-110 md:hidden" onClick={() => toggleMenu()}/>
       <div className=" h-full  flex-row text-center text-2xl gap-5 block sm:hidden md:flex items-center">
        <a href="#home" className="p-1 hover:bg-gray-400">Inicio</a>
        {/* <a href="#" className="py-1 hover:bg-gray-400">Productos</a> */}
        <a href="#about" className="p-1 hover:bg-gray-400">Nuestras redes</a>
      </div>
    </header>
  );
};
