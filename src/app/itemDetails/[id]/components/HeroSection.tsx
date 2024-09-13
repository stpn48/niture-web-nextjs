"use client";

import { cartItem, storeItem } from "@/app/types";
import { Button } from "@/components/Button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { div, q } from "framer-motion/client";
import React, { useCallback, useEffect, useState } from "react";

type Props = { itemDetails: storeItem };

export function HeroSection({ itemDetails }: Props) {
  const { getItem, setItem, removeItem } = useLocalStorage();

  const [quantity, setQuantity] = useState(0);

  const addToCart = useCallback(() => {
    setQuantity((prev) => prev + 1);
    const cartItems: cartItem[] = JSON.parse(getItem("cartItems") || "[]");
    const newCartItem: cartItem = {
      ...itemDetails,
      quantity: 1,
    };

    setItem("cartItems", JSON.stringify([...cartItems, newCartItem]));
  }, []);

  useEffect(() => {
    // update quantity of this item
    if (quantity > 0) {
      const cartItems: cartItem[] = JSON.parse(getItem("cartItems") || "[]");
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === itemDetails.id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });
      setItem("cartItems", JSON.stringify(updatedCartItems));
    }

    // remove item from cart
    else {
      const cartItems: cartItem[] = JSON.parse(getItem("cartItems") || "[]");
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== itemDetails.id,
      );
      setItem("cartItems", JSON.stringify(updatedCartItems));
      return;
    }
  }, [quantity]);

  useEffect(() => {
    const cartItems: cartItem[] = JSON.parse(getItem("cartItems") || "[]");
    const cartItem = cartItems.find((item) => item.id === itemDetails.id);
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center pt-20 md:flex-row">
      <img src="" width={500} height={500} alt="itemImg" />
      <div className="flex w-[300px] flex-col gap-4 text-black">
        <h1 className="font-bold">{itemDetails.name}</h1>
        <p>{itemDetails.description}</p>
        <p>{itemDetails.price}</p>
        {!quantity && (
          <Button className="transition-all" onClick={addToCart}>
            Add to Cart
          </Button>
        )}
        {quantity > 0 && (
          <div className="flex items-center justify-center gap-2">
            <Button onClick={() => setQuantity((prev) => prev + 1)}>+</Button>
            <p>{quantity}</p>
            <Button onClick={() => setQuantity((prev) => prev - 1)}>-</Button>
          </div>
        )}
      </div>
    </div>
  );
}
