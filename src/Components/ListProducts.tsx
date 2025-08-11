import { getAllProducts } from "../https/getProducts";

export const ListProducts = () => {
    const getProducts = async () => {
        await getAllProducts()
    }
    getProducts()
  return (
    <div className="pt-8">
        <h2 className="text-center antiqua text-3xl">Nuestros Productos</h2>
    </div>
  );
};