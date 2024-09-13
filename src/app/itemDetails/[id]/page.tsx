import { storeItem } from "@/app/types";
import React from "react";
import { HeroSection } from "./components/HeroSection";
import { FeaturedItems } from "@/components/FeaturedItems";

type Props = {
  params: {
    id: string;
  };
};

export default async function ItemDetailsPage({ params }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?itemId=${params.id}`,
  );
  const itemDetails: storeItem = await res.json();
  const item: storeItem = Array.isArray(itemDetails)
    ? itemDetails[0]
    : itemDetails;
  console.log(item);

  return (
    <div>
      <HeroSection itemDetails={item} />
      <p className="mt-20 px-20 text-justify md:mt-0">
        {item.detailedDescription}
      </p>
      <div className="mt-10">
        <FeaturedItems />
      </div>
    </div>
  );
}
