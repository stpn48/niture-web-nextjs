"use client";

import { QuantityAdjuster } from "@/app/itemDetails/[id]/components/QuantityAdjuster ";
import { cartItem } from "@/app/types";
import { useCartStore } from "@/zustand/cartStore";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  itemDetails: cartItem;
};

export function CartItem({ itemDetails }: Props) {
  const router = useRouter();

  const { setIsCartOpen } = useCartStore();

  function handleItemClick(itemId: number) {
    router.push(`/itemDetails/${itemId}`);
    setIsCartOpen(false);
  }

  return (
    <div
      onClick={() => handleItemClick(itemDetails.id)}
      className="flex w-full cursor-pointer items-center justify-center gap-8 rounded-sm border p-4 shadow-sm"
    >
      <img src="" alt="itemImg" className="mr-2 h-20 w-20" />
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center">{itemDetails.name}</h1>
        <QuantityAdjuster
          itemDetails={itemDetails}
          initialQuantity={itemDetails.quantity}
        />
        <p>${Number(itemDetails.price.slice(1)) * itemDetails.quantity}</p>
      </div>
    </div>
  );
}
