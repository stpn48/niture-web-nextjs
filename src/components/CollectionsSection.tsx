import { collection } from "@/app/types";
import Image from "next/image";
import React from "react";

export async function CollectionsSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections`);
  const collections: collection[] = await res.json();

  console.log(collections);

  return (
    <div className="w-full flex px-20 justify-center py-[60px] gap-40 flex-col">
      <h1 className="text-lg w-full flex justify-center -mb-16">Collections</h1>
      {collections.map((collection, collectionIndex) => (
        <div
          key={collection.id}
          className={`flex justify-center lg:flex-row flex-col-reverse items-center gap-10 ${
            collectionIndex % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <Image
            width={500}
            height={300}
            src={collection.imgSrc}
            alt={collection.alt}
            className="mr-4"
          />
          <div className="flex flex-col max-w-[500px]">
            <h2 className="text-xl mb-2 font-bold">{collection.name}</h2>
            <p className="text-base secondary-text-color">{collection.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
