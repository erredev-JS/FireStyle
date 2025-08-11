import useMenuHamburguer from "../Store/useMenuStore";

export const Header = () => {

  const {toggleMenu} = useMenuHamburguer()

  return (
    <header className="bg-black h-[10vh] px-6 text-white flex items-center justify-between">
      <h1 className="antiqua text-2xl">FireStyle</h1>

      <img src="./icons/menu.svg" alt="" className="w-8 cursor-pointer hover:scale-110" onClick={() => toggleMenu()}/>
    </header>
  );
};
