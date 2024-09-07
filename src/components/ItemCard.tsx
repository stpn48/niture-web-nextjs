import { storeItem } from "@/app/types";
import React from "react";

export function ItemCard({ item }: { item: storeItem }) {
  return (
    <div className="min-w-[300px] h-[400px] bg-white rounded-lg shadow-md">
      <img src={item.imgSrc} alt={item.alt} />
      <div>
        <h1>{item.name}</h1>
        <h2>{item.description}</h2>
      </div>
      <h1>{item.price}</h1>
    </div>
  );
}
