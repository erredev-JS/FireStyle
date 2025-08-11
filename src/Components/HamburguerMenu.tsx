import useMenuHamburguer from "../Store/useMenuStore";

export const HamburguerMenu = () => {
  const { showMenu, toggleMenu } = useMenuHamburguer();

  if (showMenu == false) return null;
  return (
    <>
      <div className="h-[100vh] absolute top-1/2 right-0  -translate-y-1/2 bg-black text-white antiqua w-1/2">
      <div className="h-[10vh]  flex items-center justify-end pr-7">
        <button className="text-3xl absolute" onClick={() => toggleMenu()}>X</button>
      </div>
      <div className=" h-full flex flex-col text-center text-2xl gap-5">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Sobre nosotros</a>
      </div>
      </div>
    </>
  );
};
