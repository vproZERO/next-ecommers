"use client";
import React from "react";
import {
  totalCartItemsSelector,
  TotalPriceSelector,
} from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";

export const FooterItem = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);

  return (
    
    <div>
        {!!totalItems && (
        <div
          key={totalItems}
          className="bg-primary flex justify-center items-center
        rounded-full w-4 h-4 absolute -top-1 right-1 text-white animate-pingOnce
        "
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};
