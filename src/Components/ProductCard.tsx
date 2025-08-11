import { FC } from "react";
import { IProduct } from "../Types/IProduct";
import useMenuHamburguer from "../Store/useMenuStore";

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({product}) => {



  return (
    <div className="w-full m-auto  h-[380px] max-w-[400px] rounded-2xl overflow-hidden text-white relative customShadow">
        <div className="h-2/3">
            <img src={product.Imagen} alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="px-5  py-5 antiqua customBack h-1/3">
            <p>{product.Nombre}</p>
            <div className="flex justify-between mt-6 items-center">

            <p>${product.Precio}</p>
            <button className="bg-orange-500 rounded-2xl px-4 py-1 cursor-pointer">Consultar</button>
            </div>
        </div>

    </div>
  );
};