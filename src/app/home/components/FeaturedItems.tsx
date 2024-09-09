import React from "react";
import { FeaturedItemsCarousel } from "@/app/home/components/FeaturedItemsCarousel";
import { storeItem } from "@/app/types";

export async function FeaturedItems() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/featuredItems`
  );
  const featuredItems: storeItem[] = await res.json();

  return (
    <div className="w-full secondary-section-bg py-[50px] overflow-hidden relative">
      <h1 className="text-lg w-full flex justify-center">Featured Items</h1>
      <FeaturedItemsCarousel featuredItems={featuredItems} />
    </div>
  );
}
