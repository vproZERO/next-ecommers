import { getProducts } from "@/service/getProducts";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/interfaces";
import { ShoppingIcon } from "@/assets/icon/shopping-icon";

export const NewsCard = async ({ title }: { title: string }) => {
  const data = await getProducts();
  return (
    <>
      <div className="flex items-center md:mb-[26px] mb-[18px] gap-2 md:gap-[18px]">
        <ShoppingIcon />
        <h2 className="text-secondary font-bold text-base md:text-3xl">{title}</h2>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 md:gap-6 gap-3 mx-auto">
        {data.slice(0, 8).map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
