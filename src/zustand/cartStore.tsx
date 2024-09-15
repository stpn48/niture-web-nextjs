import { cartItem } from "@/app/types";
import { create } from "zustand";

type Store = {
  cartItems: cartItem[];
  setCartItems: (val: cartItem[] | ((prev: cartItem[]) => cartItem[])) => void;

  getCartItem: (id: number) => cartItem | undefined;
  isCartOpen: boolean;
  setIsCartOpen: (val: boolean) => void;

  updateItemQuantity: (id: number, quantity: number) => void;
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

  updateItemQuantity: (id, quantity) => {
    const state = get();

    const itemIndexToUpdate = state.cartItems.findIndex(
      (item) => item.id === id,
    );

    if (itemIndexToUpdate === -1) {
      return;
    }

    const updatedCartItems = [...state.cartItems];

    updatedCartItems[itemIndexToUpdate] = {
      ...state.cartItems[itemIndexToUpdate],
      quantity: quantity,
    };

    set({ cartItems: updatedCartItems });
  },
}));
