"use client";
import { Product } from "@/interfaces";
import React from "react";
import { decrement, increment, productQtyInCartSelector } from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import QtyBtn from "./QytBtn";

interface Props {
  product: Product;
  className: string;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex justify-center">
        <button
        className={props.className}
          onClick={() => dispatch(increment(props.product))}
        >
          Add To Cart
        </button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;
