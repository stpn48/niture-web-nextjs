import React from "react";
import { FeaturedItemsCarousel } from "./FeaturedItemsCarousel";
import { storeItem } from "@/app/types";

type Props = {};

export async function FeaturedItems({}: Props) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/featuredItems`
  );
  const featuredItems: storeItem[] = await res.json();

  return (
    <div className="w-full bg-[#F7F7F7] py-[50px] px-20 overflow-hidden">
      <h1 className="text-lg w-full flex justify-center">Featured Items</h1>
      <FeaturedItemsCarousel featuredItems={featuredItems} />
    </div>
  );
}
