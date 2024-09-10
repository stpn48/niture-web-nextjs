import { create } from "zustand";
import { storeItem } from "@/app/types";

// Define the Zustand store
type StoreItemsState = {
  items: storeItem[];
  loading: boolean;
  hasMoreItems: boolean;
  page: number;
  query: string;
  setItems: (items: storeItem[] | ((prev: storeItem[]) => storeItem[])) => void;
  setLoading: (loading: boolean) => void;
  setHasMoreItems: (hasMore: boolean) => void;
  setPage: (page: number | ((prev: number) => number)) => void;
  setQuery: (query: string) => void;
};

// Create the Zustand store
export const useStoreItems = create<StoreItemsState>((set) => ({
  items: [], // default initial state
  loading: false,
  hasMoreItems: true,
  page: 1,
  query: "",

  // Actions to update state
  setItems: (items) => set((state) => ({ items: typeof items === "function" ? items(state.items) : items })),
  setLoading: (loading) => set(() => ({ loading })),
  setHasMoreItems: (hasMore) => set(() => ({ hasMoreItems: hasMore })),
  setPage: (page) => set((state) => ({ page: typeof page === "function" ? page(state.page) : page })),
  setQuery: (query) => set(() => ({ query })),
}));
