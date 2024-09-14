"use client";

import { storeItem } from "@/app/types";
import React, { useState } from "react";
import { DecreaseIncreaseQuantityButtons } from "./DecreaseIncreaseQuantityButtons";
import { useCartStore } from "@/zustand/cartStore";

type Props = { itemDetails: storeItem };

export function HeroSection({ itemDetails }: Props) {
  const { getCartItem } = useCartStore();
  const [quantity, setQuantity] = useState(
    getCartItem(itemDetails.id)?.quantity || 0,
  );

  return (
    <div className="flex w-full flex-col items-center justify-center pt-20 md:flex-row">
      <img src="" width={500} height={500} alt="itemImg" />
      <div className="flex w-[300px] flex-col gap-4 text-black">
        <h1 className="font-bold">{itemDetails.name}</h1>
        <p>{itemDetails.description}</p>
        <p>{itemDetails.price}</p>
        <DecreaseIncreaseQuantityButtons
          itemDetails={itemDetails}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
}
