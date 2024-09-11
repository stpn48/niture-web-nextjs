"use client";

import { ItemCard } from "@/components/ItemCard";
import { LoadingBar } from "@/components/LoadingBar";
import { useStoreItems } from "@/zustand/useStoreItems";
import React from "react";

const MemoItemCard = React.memo(ItemCard);

export function StoreItems() {

  const {items, loading} = useStoreItems();


  // TODO: Implement infinite scroll
  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-10">
        {items.map((item) => (
          <MemoItemCard key={item.id} item={item} />
        ))}
      </div>
      {loading && (
        <div className="flex w-full justify-center">
          <LoadingBar className="my-10" />
        </div>
      )}
    </>
  );
}
