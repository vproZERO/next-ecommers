import { getProducts } from "@/service/getProducts";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/interfaces";
import { ShoppingIcon } from "@/assets/icon/shopping-icon";

export const Chegirma = async ({ title }: { title: string }) => {
  const data = await getProducts();
  return (
    <>
      <div className="flex items-center md:mb-[26px] mb-[18px] gap-2 md:gap-[18px]">
        <ShoppingIcon />
        <h2 className="text-secondary font-bold text-base md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid md:grid-cols-4 xl:gap-6 grid-cols-2 gap-3 mx-auto">
        {data.slice(16, 20).map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
