import { useEffect, useState } from "react";
import { getAllProducts } from "../https/getProducts";
import { IProduct } from "../Types/IProduct";
import { ProductCard } from "./ProductCard";

export const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const getProducts = async () => {
    const productsFetched = await getAllProducts();
    setProducts(productsFetched);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="py-8 ">
      <h2 className="text-center antiqua text-3xl mb-8">Nuestros Productos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-h-[800px] overflow-auto pb-5">
        
        {products.map((product) => <ProductCard product={product}/>)}
      </div>

    </div>
  );
};
