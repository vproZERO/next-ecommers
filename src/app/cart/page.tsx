"use client";
import { ShoppingIcon } from "@/assets/icon/shopping-icon";
import { CartItemCard } from "@/components/CartItemCard";
import { TotalPriceSelector } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";

import React from "react";

const Cartpage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <div className="w-full md:py-[3%] md:px-[50px] px-4 pt-4 pb-16">
      <div className="flex items-center mb-[26px] gap-[18px]">
        <ShoppingIcon />
        <h2 className="text-secondary font-bold text-3xl">Cart</h2>
      </div>
      <div className=" mb-4">
        {cartItems ? (
          cartItems.map((item) => (
            <CartItemCard cartItem={item} />
          ))
        ) : (
          <div>Cart is empty</div>
        )}
      </div>
      <p>Total price: {totalPrice} so’m</p>
    </div>
  );
};

export default Cartpage;
