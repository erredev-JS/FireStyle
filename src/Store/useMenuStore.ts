import { create } from 'zustand'

interface Store {
    showMenu: boolean
    toggleMenu: () => void;
} 

const useMenuHamburguer = create<Store>((set) => ({
  showMenu: false, // Estado inicial
  toggleMenu: () => set((state) => ({showMenu: !state.showMenu}))

}))

export default useMenuHamburguer
