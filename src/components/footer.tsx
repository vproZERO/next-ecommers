import Link from "next/link";
import React from "react";
import LogoImg from "/public/logo.svg";
import GoogleImg from "@/assets/img/googleplay.png";
import AppstoreImg from "@/assets/img/appstore.png";
import { HomeFIcon } from "@/assets/icon/home-f-icon";
import { CatalogFIcon } from "@/assets/icon/catalog-f-icon";
import { ShoppingFIcon } from "@/assets/icon/shopping-f-icon";
import { ProfileFIcon } from "@/assets/icon/profile-f-icon";
import { AddIcon } from "@/assets/icon/add-icon";
import { SheetComponent } from "./sheetComponent";
import { FooterItem } from "./footer-item";

export const Footer = () => {
  return (
    <>
      <div className="md:flex hidden items-start justify-between">
        <div>
          <Link href={"/"} className="mb-6 block">
            <img src={LogoImg.src} alt="logo icon" />
          </Link>
          <h2 className="text-[#000000] font-medium text-xl">Mobilux © 2022</h2>
          <h2 className="text-[#000000] font-normal text-base mb-4">
            Barcha huquqlar kafolatlangan
          </h2>
          <div className="flex items-center gap-3">
            <div>
              <img src={GoogleImg.src} alt="img" />
            </div>
            <div>
              <img src={AppstoreImg.src} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-thrid font-medium text-xl mb-4">
            Foydali havolalar
          </h2>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Bosh sahifa
          </Link>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Yordam kerakmi?
          </Link>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Foydalanish shartlari
          </Link>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Maxfiylik siyosati
          </Link>
        </div>
        <div>
          <h2 className="text-thrid font-medium text-xl mb-4">Biz haqimizda</h2>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
            03113, Crescent Trade ltd
          </Link>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Korxona nomi: Mobilux trade
          </Link>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Korxona rahbari: HASANBOY TURSUNOV
          </Link>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Registratsiya raqami: 433-62-00377
          </Link>
          <Link
            href={"/"}
            className="text-thrid font-normal text-sm block mb-[6px]"
          >
            Telefon raqam: 93 000 66-44 97 000 66-44
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between md:hidden fixed bottom-0 left-0 right-0 w-full bg-white">
        <Link
          href={"/"}
          className="flex flex-col justify-between h-[40px] px-3 py-[6px] border-primary transition text-secondary/50 font-normal text-xs hover:text-secondary"
        >
          <div className="mx-auto w-6">
            <HomeFIcon />
          </div>
          <span>Asosiy</span>
        </Link>

        <SheetComponent />

        <Link
          href={"/cart"}
          className="flex flex-col overflow-hidden justify-between h-[40px] px-3 py-[6px] border-primary transition text-secondary/50 font-normal text-xs hover:text-secondary"
        >
          <div className="mx-auto rounded-full px-1 py-1   bg-primary text-white">
            <div className="">
              <AddIcon />
            </div>
          </div>
          <span className="leading-[10px] text-center">
            Maxsus <br /> buyurtma
          </span>
        </Link>

        <Link
          href={"/cart"}
          className="flex relative flex-col justify-between h-[40px] px-3 py-[6px] border-primary transition text-secondary/50 font-normal text-xs hover:text-secondary"
        >
          <FooterItem />

          <div className="mx-auto w-6">
            <ShoppingFIcon />
          </div>
          <span>Savat</span>
        </Link>
        <Link
          href={"/profile"}
          className="flex flex-col justify-between h-[40px] px-3 py-[6px] border-primary transition text-secondary/50 font-normal text-xs hover:text-secondary"
        >
          <div className="mx-auto w-6">
            <ProfileFIcon />
          </div>
          <span>Profil</span>
        </Link>
      </div>
    </>
  );
};
