import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { CartItem } from "@/interfaces";
import React from "react";
import QtyBtn from "./QytBtn";

interface Props {
  cartItem: CartItem;
}

export const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, cartItem.product.id)
  );

  return (
    <div className=" bg-white rounded-[6px] md:py-6 py-4 px-4 mb-6 md:flex items-center justify-between">
      <div className="flex items-start md:items-center gap-6">
        <div className="w-20 h-20">
          <img src={cartItem.product.img} alt={cartItem.product.title} />
        </div>
        <div>
          <h2 className="text-secondary font-semibold text-base max-w-[370px]">
            {cartItem.product.title}
          </h2>
          <div className="flex md:hidden justify-between">
            <QtyBtn
              onDecrease={() => dispatch(decrement(cartItem.product))}
              onIncrease={() => dispatch(increment(cartItem.product))}
              qty={cartItem.qty}
            />
            <p className="block md:hidden">{cartItem.product.price} so’m</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <QtyBtn
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
          qty={cartItem.qty}
        />
      </div>
      <p className="hidden md:block">{cartItem.product.price} so’m</p>
    </div>
  );
};
