import { Product } from "@/interfaces";
import React from "react";
import AddToCartBtn from "./AddToCard";
import Link from "next/link";
import StarsImg2 from "@/assets/img/stars2.svg";
import StarsImg3 from "@/assets/img/stars3.svg";
import StarsImg4 from "@/assets/img/stars4.svg";
import StarsImg5 from "@/assets/img/stars5.svg";

interface Props {
  product: Product;
}

const starsData = [
  {
    id: 1,
    img: StarsImg2,
  },
  {
    id: 2,
    img: StarsImg3,
  },
  {
    id: 3,
    img: StarsImg4,
  },
  {
    id: 4,
    img: StarsImg5,
  },
];

const ProductCard = (props: Props) => {
  const subprice = props.product.price * 1.5;

  const randomStars = starsData[Math.floor(Math.random() * starsData.length)];

  return (
    <div className=" rounded-md shadow hover:shadow-lg relative transition overflow-hidden bg-white md:p-[17px] py-2 px-3 flex flex-col justify-between">
      <div>
        <Link
          href={{ pathname: "/singleproduct", query: { id: props.product.id } }}
          className="text-[#000000] hover:text-[#1FBA4A]"
        >
          <div className="md:max-w-[262px] md:max-h-[262px] max-w-[151px] max-h-[151px]">
            <img src={props.product.img} alt={props.product.title} />
          </div>
          <h2 className=" font-normal md:text-sm text-[10px]">
            {props.product.title}
          </h2>
        </Link>
        <p className="text-[#0A0A0A] block md:hidden font-bold text-xs  mb-[6px]">
          {props.product.price} so’m
        </p>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="max-w-[70px]">
              <img src={randomStars.img.src} alt="img" />
            </div>
            <h2 className="text-secondary/50  font-normal md:text-lg text-xs">
              ({props.product.id})
            </h2>
          </div>

          <h2 className="text-secondary/50 line-through font-normal md:text-lg  md:block hidden">
            {subprice} so’m
          </h2>
        </div>
        <p className="text-[#0A0A0A] md:block hidden font-extrabold text-lg">
          {props.product.price} so’m
        </p>
      </div>
      <div
        className={`bg-[#FF0C27] text-white rounded-[6px] max-w-[40px] md:max-w-[60px] absolute md:left-4 md:top-4 left-3 top-2 p-1 md:px-[8px] ${
          props.product.discount === "0" ? "hidden" : ""
        }`}
      >
        <span className="text-xs md:text-sm">{props.product.discount}%</span>
      </div>
      <AddToCartBtn
        className={
          "hover:bg-[#1FBA4A] bg-[#F6F8FA] text-xs  md:text-sm text-[#0A0A0A] flex items-center justify-center gap-[10px] hover:text-white md:py-[10px] py-[7px] rounded-md w-full"
        }
        product={props.product}
      />
    </div>
  );
};

export default ProductCard;
