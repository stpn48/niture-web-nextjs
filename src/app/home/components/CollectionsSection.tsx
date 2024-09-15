import { collection } from "@/app/types";
import Image from "next/image";
import React from "react";

export async function CollectionsSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections`);
  const collections: collection[] = await res.json();
  
  return (
    <div className="flex w-full flex-col justify-center gap-40 px-20 py-[60px]">
      <h1 className="-mb-16 flex w-full justify-center text-lg">Collections</h1>
      {collections.map((collection, collectionIndex) => (
        <div
          key={collection.id}
          className={`flex flex-col-reverse items-center justify-center gap-10 lg:flex-row ${
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
          <div className="flex max-w-[500px] flex-col">
            <h2 className="mb-2 text-xl font-bold">{collection.name}</h2>
            <p className="secondary-text-color text-base">
              {collection.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
