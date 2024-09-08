import React from "react";

type Props = {};

export function CollectionsFilter({}: Props) {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center p-4 w-[160px] h-fit">
      <h1 className="w-full text-center">Collections</h1>
      <div className="secondary-text-color flex flex-col gap-2 mt-2">
        <h2 className="cursor-pointer hover:text-[#9c7a54]">2024 Collection</h2>
        <h2 className="cursor-pointer hover:text-[#9c7a54]">2023 Collection</h2>
        <h2 className="cursor-pointer hover:text-[#9c7a54]">2022 Collection</h2>
        <h2 className="cursor-pointer hover:text-[#9c7a54]">2021 Collection</h2>
      </div>
    </div>
  );
}
