"use client";

import { useEffect } from "react";
import { useCartStore } from "@/zustand/cartStore";

export function OverflowHandler() {
  const { isCartOpen } = useCartStore();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto"; // Ensure overflow is reset on unmount
    };
  }, [isCartOpen]);

  return null;
}