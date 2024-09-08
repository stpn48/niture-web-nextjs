import { CollectionsFilter } from "@/components/CollectionsFilter";
import React from "react";

type Props = {};

export default function Store({}: Props) {
  return (
    <div className="p-10">
      <h1 className="text-lg mb-10">Store</h1>
      <div className="flex gap-8 min-h-screen">
        <CollectionsFilter />
        <div className="flex-1 bg-black">items</div>
      </div>
    </div>
  );
}
