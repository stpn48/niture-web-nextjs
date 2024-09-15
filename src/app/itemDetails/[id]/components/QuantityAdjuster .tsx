"use client";

import { storeItem } from "@/app/types";
import { Button } from "@/components/Button";
import { useCartStore } from "@/zustand/cartStore";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  itemDetails: storeItem;
  initialQuantity: number;
};

export function QuantityAdjuster({ itemDetails, initialQuantity }: Props) {
  const {
    setCartItems,
    setIsCartOpen,
    updateItemQuantity,
  } = useCartStore();

  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  useEffect(() => {
    if (quantity === 0) return
    updateItemQuantity(itemDetails.id, quantity);
  }, [quantity, updateItemQuantity, itemDetails.id]);

  const addToCart = useCallback(() => {
    setQuantity((prev) => prev + 1);
    setCartItems((prev) => [...prev, { ...itemDetails, quantity: 1 }]);
    setIsCartOpen(true);
  }, [itemDetails, setCartItems]);

  const increaseQuantity = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setQuantity((prev) => prev + 1);
    },
    [],
  );

  const decreaseQuantity = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setQuantity((prev) => {

        // if the quantity - 1 is 0 remove the item from the cart
        if (prev - 1 === 0) {
          setCartItems((prev) =>
            prev.filter((item) => item.id !== itemDetails.id),
          );
          return prev;
        }

        // else decrease the quantity by 1
        return prev - 1;
      });
    },
    [setCartItems, itemDetails.id],
  );

  return (
    <>
      {quantity === 0 ? (
        <Button className="transition-all" onClick={addToCart}>
          Add to Cart
        </Button>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <Button onClick={increaseQuantity} className="px-3 py-0">
            +
          </Button>
          <p>{quantity}</p>
          <Button onClick={decreaseQuantity} className="px-3 py-0">
            -
          </Button>
        </div>
      )}
    </>
  );
}
