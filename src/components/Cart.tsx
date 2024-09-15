"use client";

import { motion } from "framer-motion";
import { useCartStore } from "@/zustand/cartStore";
import { Button } from "./Button";
import { CartItems } from "./CartItems";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { cartItem } from "@/app/types";

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
  const { isCartOpen, setIsCartOpen } = useCartStore();
  const { setItem, getItem } = useLocalStorage();
  const { cartItems, setCartItems } = useCartStore();

  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  // get cart items from local storage on mount
  useEffect(() => {
    console.log("getting cart items from local storage");
    const storedCartItems: cartItem[] = JSON.parse(
      getItem("cartItems") || "[]",
    );
    setCartItems(storedCartItems);
    setLoading(false);
  }, []);

  // update cart items in local storage every time cartItems state changes
  useEffect(() => {
    console.log("cart items changed")
    if (!loading) {
      setItem("cartItems", JSON.stringify(cartItems));
    }
    setTotalPrice(
      cartItems.reduce((acc, item) => acc + Number(item.price.slice(1)) * item.quantity, 0),
    ); // slice to remove the $ sign on first index
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
            <CartItems />
            <div className="flex pt-4 flex-col shadow-md gap-2 secondary-section-bg w-full items-center px-4">
              <h1>Total</h1>
              <p className="font-bold">${totalPrice}</p>
              <Button className="w-full">Pay</Button>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
