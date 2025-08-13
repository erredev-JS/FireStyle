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
    <div className="py-8 min-h-[80vh] ">
      <h2 className="text-center antiqua text-3xl">Nuestros Productos</h2>

      <div className="flex flex-col gap-5 m-auto w-8/10 mt-5 max-h-[600px]    overflow-y-scroll">
        
        {products.map((product) => <ProductCard product={product}/>)}
      </div>

    </div>
  );
};
