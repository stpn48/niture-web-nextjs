"use client";

import { storeItem } from "@/app/types";
import React from "react";
import { QuantityAdjuster } from "@/app/itemDetails/[id]/components/QuantityAdjuster ";
import { useCartStore } from "@/zustand/cartStore";

type Props = { itemDetails: storeItem };

export function HeroSection({ itemDetails }: Props) {
  const { cartItems } = useCartStore();

  const itemIndex = cartItems.findIndex((item) => item.id === itemDetails.id);
  const itemQuantity = cartItems[itemIndex]?.quantity || 0;

  return (
    <div className="flex w-full flex-col items-center justify-center pt-20 md:flex-row">
      <img src="" width={500} height={500} alt="itemImg" />
      <div className="flex w-[300px] flex-col gap-4 text-black">
        <h1 className="font-bold">{itemDetails.name}</h1>
        <p>{itemDetails.description}</p>
        <p>{itemDetails.price}</p>
      <QuantityAdjuster
          itemDetails={itemDetails}
          initialQuantity={itemQuantity}
        />
      </div>
    </div>
  );
}
