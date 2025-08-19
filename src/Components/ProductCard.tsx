import { FC } from "react";
import { IProduct } from "../Types/IProduct";

interface Props {
    product: IProduct
}


export const ProductCard: FC<Props> = ({product}) => {

  const handleClick = (productName: string) => {
    const numero = "5492616611036"
    const mensaje =  `Hola, estoy interesado/a en ${productName}`
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
      window.open(url, "_blank")
  }

  return (
    <div className="w-full m-auto min-h-[280px] h-[340px] max-w-[340px] rounded-2xl overflow-hidden text-white relative customShadow">
        <div className="h-2/3 w-full">
            <img src={product.Imagen} alt="" className="h-full w-full object-fit"/>
        </div>

        <div className="px-5  py-5 antiqua customBack h-1/3">
            <p>{product.Nombre}</p>
            <div className="flex justify-between mt-6 items-center">

            <p>${product.Precio}</p>
            <button className="bg-orange-500 rounded-2xl px-4 py-1 cursor-pointer" onClick={() => handleClick(product.Nombre)}>Consultar</button>
            </div>
        </div>

    </div>
  );
};