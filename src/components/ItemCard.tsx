import { storeItem } from "@/app/types";
import Image from "next/image";
import React from "react";

export function ItemCard({ item }: { item: storeItem }) {
  return (
    <div className="w-[300px] shadow-spread p-4 h-[350px] bg-white rounded-lg">
      <div className="w-full h-[190px] relative overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          src={item.imgSrc}
          alt={item.name}
        />
      </div>
      <div className="mb-2">
        <h1 className="font-bold mb-1">{item.name}</h1>
        <p className="text-sm text-[#494949] text-justify">{item.description}</p>
      </div>
      <h1 className="w-full flex justify-end pr-2">{item.price}</h1>
    </div>
  );
}
