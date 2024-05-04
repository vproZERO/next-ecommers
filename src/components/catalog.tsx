import { getCatalog } from "@/service/getCatalog";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { CartIcon } from "@/assets/icon/cart-icon";
import { PhonesIcon } from "@/assets/icon/phones-icon";
import { HeadphonesIcon } from "@/assets/icon/headphones-icon";
import { GedjetsIcon } from "@/assets/icon/gedjets-icon";
import { TabletsIcon } from "@/assets/icon/tablets-icon";

export const Catalog = async () => {
  const data = await getCatalog();
  return (
    <div className="w-full">
      <Button
        variant="primary"
        className="w-full hidden md:block rounded-[6px] py-[10px] px-[40px] mb-6"
      >
        <Link href={"/"} className="flex gap-2 items-center">
          <span className="text-xs">Maxsus buyurtma</span>
        </Link>
      </Button>
      {data.map((product: any) => (
        <Link
          className="flex items-center gap-3 md:gap-0 py-4 text-thrid font-normal text-sm hover:text-primary"
          href={`/${product.type}`}
          key={product.id}
        >
          <div className="p-3 rounded-full flex md:hidden items-center justify-center w-12 h-12 bg-[#F6F8FA]">
            <div
              className={` ${product.type === "phones" ? "block" : "hidden"}`}
            >
              <PhonesIcon />
            </div>
            <div
              className={` ${
                product.type === "tablets" ||
                product.type === "flashDrive" ||
                product.type === "accessories" ||
                product.type === "chargers"
                  ? "block"
                  : "hidden"
              }`}
            >
              <TabletsIcon />
            </div>
            <div
              className={` ${
                product.type === "earphones" ? "block" : "hidden"
              }`}
            >
              <HeadphonesIcon />
            </div>
            <div
              className={` ${product.type === "gadgets" ? "block" : "hidden"}`}
            >
              <GedjetsIcon />
            </div>
          </div>
          <span>{product.title}</span>
        </Link>
      ))}
    </div>
  );
};
