import { storeItem } from "@/app/types";
import Image from "next/image";
import React from "react";

export function ItemCard({ item }: { item: storeItem }) {
  return (
    <div className="min-w-[300px] p-4 h-[400px] bg-white rounded-lg shadow-md">
      <Image
        width={300}
        height={250}
        objectFit="cover"
        src={item.imgSrc}
        alt={item.name}
      />
      <div className="mb-2">
        <h1 className="font-bold mb-1">{item.name}</h1>
        <p className="text-sm text-[#494949] text-justify">{item.description}</p>
      </div>
      <h1 className="w-full flex justify-end pr-2">{item.price}</h1>
    </div>
  );
}
