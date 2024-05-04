import { getProducts } from "@/service/getProducts";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/interfaces";
import { GradeIcon } from "@/assets/icon/grade-icon";

export const Ommabob = async ({ title }: { title: string }) => {
  const data = await getProducts();
  return (
    <>
      <div className="flex items-center md:mb-[26px] mb-[18px] gap-2 md:gap-[18px]">
        <GradeIcon />
        <h2 className="text-secondary font-bold text-base md:text-3xl">{title}</h2>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-3 md:gap-6 mx-auto">
        {data.slice(8, 16).map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
