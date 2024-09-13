import React from "react";
import { FeaturedItemsCarousel } from "@/app/home/components/FeaturedItemsCarousel";
import { storeItem } from "@/app/types";

export async function FeaturedItems() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?featuredItems=true`,
  );
  const featuredItems: storeItem[] = await res.json();

  return (
    <div className="secondary-section-bg relative w-full overflow-hidden py-[50px]">
      <h1 className="flex w-full justify-center text-lg">Featured Items</h1>
      <FeaturedItemsCarousel featuredItems={featuredItems} />
    </div>
  );
}
