import React from "react";
import { FadeAnimationWrapper } from "@/components/FadeAnimationWrapper";
import { StoreItemsContainer } from "./components/StoreItemsContainer";
import { storeItem } from "../types";

async function fetchInitialItems(): Promise<storeItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?page=1&t=${Date.now()}`);
  const items: storeItem[] = await res.json();
  return items;
}

export default async function Store() {

  const initialItems: storeItem[] = await fetchInitialItems();

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });



  return (
    <FadeAnimationWrapper>
      <div className="px-10 pt-16 bg-[#ffffff]">
        <h1 className="text-lg mb-5">Store</h1>
        <div className="flex gap-8 min-h-screen">
          <div className="flex-1">
            <div className="w-full flex mb-10 items-center px-4 bg-[#f5f5f5] rounded-sm h-10">
              <h1>Filter</h1>
            </div>
            <StoreItemsContainer initialItems={initialItems} />
          </div>
        </div>
      </div>
    </FadeAnimationWrapper>
  );
}
