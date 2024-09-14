"use client";

import { cartItem, storeItem } from "@/app/types";
import { Button } from "@/components/Button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useCartStore } from "@/zustand/cartStore";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  itemDetails: storeItem;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export function DecreaseIncreaseQuantityButtons({ quantity, setQuantity, itemDetails }: Props) {
  const { getItem, setItem } = useLocalStorage();
  const { cartItems, setCartItems, getCartItem, setIsCartOpen } = useCartStore();

  useEffect(() => {
    if (quantity > 0) {
      setCartItems((prev) => {
        const updatedCartItems = [...prev];
        const itemToUpdateIndex = updatedCartItems.findIndex(
          (item) => item.id === itemDetails.id,
        );
        updatedCartItems[itemToUpdateIndex] = {
          ...itemDetails,
          quantity: quantity,
        };
        return updatedCartItems;
      });
    } else {
      setCartItems((prev) => prev.filter((item) => item.id !== itemDetails.id));
    }
  }, [quantity]);

  useEffect(() => {
    setQuantity(getCartItem(itemDetails.id)?.quantity || 0);
  }, [cartItems]);

  const addToCart = useCallback(() => {
    setQuantity((prev) => prev + 1);
    setCartItems((prev) => [...prev, { ...itemDetails, quantity: 1 }]);
    setIsCartOpen(true);
  }, [itemDetails]);

  const increaseQuantity = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  }, []);

  const decreaseQuantity = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setQuantity((prev) => Math.max(prev - 1, 0));
  }, []);

  return (
    <>
      {quantity === 0 ? (
        <Button className="transition-all" onClick={addToCart}>
          Add to Cart
        </Button>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <Button onClick={increaseQuantity} className="py-0 px-3">+</Button>
          <p>{quantity}</p>
          <Button onClick={decreaseQuantity} className="py-0 px-3">-</Button>
        </div>
      )}
    </>
  );
}
