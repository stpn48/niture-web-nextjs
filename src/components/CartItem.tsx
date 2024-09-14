"use client";

import { DecreaseIncreaseQuantityButtons } from "@/app/itemDetails/[id]/components/DecreaseIncreaseQuantityButtons";
import { cartItem } from "@/app/types";
import { useCartStore } from "@/zustand/cartStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  itemDetails: cartItem;
};

export function CartItem({ itemDetails }: Props) {
  const router = useRouter();

  const { getCartItem, setIsCartOpen } = useCartStore();

  const [quantity, setQuantity] = useState(
    getCartItem(itemDetails.id)?.quantity || 0,
  );

  function handleItemClick(itemId: number) {
    router.push(`/itemDetails/${itemId}`);
    setIsCartOpen(false);
  }

  return (
    <div
      onClick={() => handleItemClick(itemDetails.id)}
      className="flex w-full cursor-pointer items-center justify-between rounded-sm border p-4 shadow-sm"
    >
      <img src="" alt="itemImg" className="mr-2 h-20 w-20" />
      <div className="flex flex-col items-center gap-3">
        <h1>{itemDetails.name}</h1>
        <DecreaseIncreaseQuantityButtons
          itemDetails={itemDetails}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <p>{Number(itemDetails.price) * quantity}</p>
      </div>
    </div>
  );
}
