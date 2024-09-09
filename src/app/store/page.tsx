import React from "react";
import { storeItem } from "../types";
import { ItemCard } from "@/components/ItemCard";
import { FadeAnimationWrapper } from "@/components/FadeAnimationWrapper";

export default async function Store() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?page=1&t=${Date.now()}`
  );  
  const storeItems: storeItem[] = await res.json();
  console.log(storeItems);

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
            <div className="flex flex-wrap gap-10 justify-center">
              {storeItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeAnimationWrapper>
  );
}
