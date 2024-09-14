"use client";

import { cartItem } from "@/app/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { motion } from "framer-motion";
import { useCartStore } from "@/zustand/cartStore";
import { useEffect, useMemo, useState } from "react";
import { Button } from "./Button";
import { CartItem } from "./CartItem";

const variants = {
  initial: {
    x: 350,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }, // Ease-out transition
  },
  animate: {
    x: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }, // Ease-out transition
  },
};

export function Cart() {
  const { setItem, getItem } = useLocalStorage();
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useCartStore();

  const [loading, setLoading] = useState(true);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + Number(item.price), 0);
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems: cartItem[] = JSON.parse(
      getItem("cartItems") || "[]",
    );
    setCartItems(storedCartItems);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);

  return (
    <>
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 z-10 h-screen w-screen bg-stone-900 opacity-45"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="fixed right-0 top-0 z-20 flex h-screen w-[350px] flex-col items-center justify-start bg-white py-6 opacity-100"
          >
            <div className="flex w-full px-6 flex-col gap-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} itemDetails={item} />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1>Total</h1>
              <p className="font-bold">${totalPrice}</p>
              <Button>Pay</Button>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
