"use client";

import React, { useState } from "react";
import { ItemCard } from "./ItemCard";
import { storeItem } from "@/app/types";

type Props = {
  featuredItems: storeItem[];
};

export function FeaturedItemsCarousel({ featuredItems }: Props) {
  const [currentScroll, setCurrentScroll] = useState(0);

  return (
    <div className="w-full overflow-x-hidden  ">
      <div
        className="flex gap-4"
        style={{ transform: `translateX(-${currentScroll}px)` }}
      >
        {featuredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
