import { storeItem } from "@/app/types";
import { ItemCard } from "@/components/ItemCard";
import React from "react";

const MemoItemCard = React.memo(ItemCard);

type Page = {
  items: storeItem[];
  nextCursor: number | null;
};

type Props = {
  pages: Page[];
};

export function RenderItems({ pages }: Props) {
  return pages.flatMap((page, index) =>
    Array.isArray(page.items) && page.items.length > 0 ? (
      page.items.map((item) => <MemoItemCard key={item.id} item={item} />)
    ) : (
      <p key={index}>No items found</p> // Fallback in case page.items is not an array
    ),
  );
}
