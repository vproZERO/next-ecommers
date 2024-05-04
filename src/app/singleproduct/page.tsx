import AddToCartBtn from "@/components/AddToCard";
import { Chegirma } from "@/components/Chegirma";
import { getSingleProduct } from "@/service/getSingleProduct";
import StarsImg2 from "@/assets/img/stars2.svg";
import StarsImg3 from "@/assets/img/stars3.svg";
import StarsImg4 from "@/assets/img/stars4.svg";
import StarsImg5 from "@/assets/img/stars5.svg";
import UzbFla from '@/assets/img/uzb-flag.svg'
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

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

const SingleProductpage = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  const product = await getSingleProduct(id);
  const subprice = product.price * 1.5;
  const randomStars = starsData[Math.floor(Math.random() * starsData.length)];

  return (
    <div className="md:px-[50px] md:py-[64px] w-full">
      <div className="bg-white md:px-6 md:pb-[78px] px-4 py-4 md:flex items-start justify-center mb-6">
        <h2 className="font-medium text-xl text-secondary">Batafsil</h2>
        <div className="relative md:border-r border-[#E5E5E5] md:pt-[78px] md:pr-[54px]">
          <div className="md:w-[480px] md:h-[480px] mb-4">
            <img src={product.img} alt="img" />
          </div>
        </div>
        <div className="md:px-[54px] md:pt-[48px]">
          <h2 className="text-black md:font-bold md:text-4xl md:mb-5 md:max-w-[614px] max-w-[345px] font-normal text-xl mb-3">
            {product.title}
          </h2>
          <div className="mb-2 flex items-center gap-8">
            <div className="flex items-center gap-[10px]">
              <div className="max-w-[70px]">
                <img src={randomStars.img.src} alt="img" />
              </div>
              <h2 className="text-secondary/50  font-normal md:text-lg text-xs">
                ({product.id})
              </h2>
            </div>
            <div className="flex items-center md:gap-4">
              <h2 className="text-secondary/50 line-through font-normal md:text-lg  md:block hidden">
                {subprice} so’m
              </h2>
              <div
                className={`bg-[#FF0C27] text-white rounded-[6px] max-w-[40px] md:max-w-[60px] 2 p-1 md:px-[8px] ${
                  product.discount === "0" ? "hidden" : ""
                }`}
              >
                <span className="text-xs md:text-sm">{product.discount}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-start">
            <h3 className="font-bold md:text-5xl text-2xl md:text-primary md:mb-5 mb-4">
              {product.price} so’m
            </h3>
            <div className="flex md:hidden items-center gap-2">
              <div className="bg-primary rounded-full w-4 h-4"></div>
              <p className="text-secondary font-bold text-base">
                Omborda mavjud
              </p>
            </div>
          </div>
          <AddToCartBtn
              product={product}
              className="bg-secondary rounded-[6px] w-full py-3 md:hidden mb-4 text-white px-[47px]"
            />
          <div className="md:flex hidden items-center  gap-10 mb-7">
            <AddToCartBtn
              product={product}
              className="bg-secondary rounded-[6px] w-full py-3 text-white px-[47px]"
            />
            <div className="flex  items-center gap-2">
              <div className="bg-primary rounded-full w-4 h-4"></div>
              <p className="text-secondary font-bold text-base">
                Omborda mavjud
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <p className="text-secondary font-bold text-base">Rangi:</p>
            <div className="rounded-[12px] border px-6 py-3">
              <div
                className={`rounded-full w-[18px] h-[18px] mx-auto mb-1 ${
                  product.color === "Black" ? "bg-black" : "bg-black"
                } ${
                  product.color === "Phantom Black"
                    ? "bg-[#11110F"
                    : "bg-[#000000]"
                } 
            ${product.color === "Graphite" ? "bg-[#4D4D52]" : "bg-[#000000]"}
            ${product.color === "Gold" ? "bg-[#D4A206]" : ""}
            ${product.color === "Red" ? "bg-red-500" : "bg-[#000000]"}
            ${
              product.color === "Glacier White"
                ? "bg-[#EDEEF0]"
                : "bg-[#000000]"
            }
            ${product.color === "Grey" ? "bg-gray-500" : ""}
            ${
              product.color === "Natural Titanium"
                ? "bg-[#797A75]"
                : "bg-[#000000]"
            }
            ${product.color === "Dark Blue" ? "bg-[#010046]" : "bg-[#000000]"}
            ${product.color === "Frost Blue" ? "bg-[#6D8DA8]" : "bg-[#000000]"}
            `}
              ></div>
              <p className="text-secondary font-normal text-xs">
                {product.color}
              </p>
            </div>
          </div>

          <div className="w-full bg-primary/30 flex items-center gap-3 py-3 pl-3 rounded-[12px] mb-5">
            <div className="rounded-full bg-white p-3">
              <img src={UzbFla.src} alt="img" />
            </div>
            <div>
              <h2 className="text-[#0D1136] font-bold text-sm">O’zbekiston bo’ylab yetkazib berish:</h2>
              <p className="text-[15px] text-black">14 ish kuni</p>
            </div>
            <h2 className="text-muted font-bold text-sm md:block hidden">
              O’zbekiston bo’ylab yetkazib berish:
            </h2>
            <p className="text-black font-normal text-sm md:block hidden">14 ish kuni</p>
          </div>
          <div>
            <h1 className="text-black font-bold text-base md:text-xl mb-4">Описание</h1>
            <p className="text-secondary font-normaltext-base md:max-w-[614px] max-w-[342px] ">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <section className="mb-14 bg-white md:px-6 md:py-8 px-4  py-4">
        <Chegirma title="Вместе с этим товаром покупают" />
      </section>
    </div>
  );
};

export default SingleProductpage;
