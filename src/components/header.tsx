"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { ProfileIcon } from "@/assets/icon/profile-icon";
import LogoIcon from "/public/logo.svg";
import Link from "next/link";
import { FilterIcon } from "@/assets/icon/filter-icon";
import { Button } from "./button";
import { SearchIcon } from "@/assets/icon/search-icon";
import { CartIcon } from "@/assets/icon/cart-icon";
import UzbFlag from "@/assets/img/uzb-flag.svg";
import {
  totalCartItemsSelector,
  TotalPriceSelector,
} from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";

const Header = () => {
  const data = useSession();
  console.log(data);

  const totalItems = useAppSelector(totalCartItemsSelector);

  return (
    <div className="  flex items-center justify-between gap-3 md:gap-6">
      <Link href="/">
        <img src={LogoIcon.src} alt="logo icon" />
      </Link>

      <form className="w-full hidden md:flex items-center justify-between border border-primary rounded-[6px] overflow-hidden">
        <div className="px-3">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Qidirish"
          className="w-full placeholder:text-[#9E9E9E] focus:border-none outline-none text-[#9E9E9E] font-normal text-base"
        />
        <Button
          className="flex items-center gap-[10px] py-[6px] px-6"
          variant="primary"
        >
          <FilterIcon />
          <span>Filter</span>
        </Button>
      </form>

      <div className="flex items-center gap-3 mg:gap-0">
        <div className="flex items-center gap-[6px] py-3 px-2 md:bg-[#F6F8FA] rounded">
          <div className="w-4 h-4">
            <img src={UzbFlag.src} alt="uzb flag" />
          </div>
          <p className="text-primary text-base font-normal">Uz</p>
        </div>
        <div className="md:hidden">
          <SearchIcon />
        </div>
      </div>

      <Link
        href={"/cart"}
        className="text-secondary md:block hidden hover:text-primary relative"
      >
        <CartIcon />
        {!!totalItems && (
          <div
            key={totalItems}
            className="bg-primary flex justify-center items-center
        rounded-full w-4 h-4 absolute -top-[15px] -right-2 text-white animate-pingOnce
        "
          >
            {totalItems}
          </div>
        )}
      </Link>

      {data.status === "authenticated" ? (
        <Link
          href="/profile"
          className="text-secondary hidden md:flex items-center gap-[10px] hover:text-primary"
        >
          <span>Profile</span>
          <ProfileIcon />
        </Link>
      ) : (
        <div className="md:flex gap-6  hidden">
          <Link
            className="text-secondary flex items-center gap-[10px] hover:text-primary"
            href="/login"
          >
            <span>Login</span>
            <ProfileIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
