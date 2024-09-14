import { cartItem } from "@/app/types";
import { create } from "zustand";

type Store = {
  cartItems: cartItem[];
  setCartItems: (val: cartItem[] | ((prev: cartItem[]) => cartItem[])) => void;
  getCartItem: (id: number) => cartItem | undefined;
  isCartOpen: boolean;
  setIsCartOpen: (val: boolean) => void;
};

export const useCartStore = create<Store>((set, get) => ({
  cartItems: [],

  setCartItems: (val) =>
    set((state) => ({
      cartItems: typeof val === "function" ? val(state.cartItems) : val,
    })),

  getCartItem: (id: number) => {
    const state = get();
    return state.cartItems.find((item) => item.id === id);
  },
  
  isCartOpen: false,
  setIsCartOpen: (val) => set({ isCartOpen: val }),
}));
