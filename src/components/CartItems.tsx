"use client";

import React from "react";
import { CartItem } from "./CartItem";
import { useCartStore } from "@/zustand/cartStore";

const MemoCartItem = React.memo(CartItem);

export function CartItems() {
  const { cartItems } = useCartStore();

  return (
    <div className="flex w-full flex-col gap-4 px-6 h-[90%] overflow-y-auto">
      {cartItems.map((item) => (
        <MemoCartItem key={item.id} itemDetails={item} />
      ))}
    </div>
  );
}
