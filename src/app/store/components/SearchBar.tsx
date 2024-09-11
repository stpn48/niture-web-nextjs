import { Button } from "@/components/Button";
import { useStoreItems } from "@/zustand/useStoreItems";
import React from "react";

type Props = {};

export function SearchBar({}: Props) {

  const {query, setQuery} = useStoreItems();

  return (
    <div className="mb-4 flex w-full items-center justify-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="bg-[#ffffff] px-4 py-1 outline-none"
        type="text"
      />
      <img
        onClick={() => setQuery("")}
        className={`cursor-pointer px-4 ${query ? "" : "opacity-0"}`}
        src="/xCircle.svg"
        alt="xCircleIcon"
      />
      <Button className="h-fit w-fit">
        Search
      </Button>{" "}
      {/* TODO: Add search icon instead of button */}
    </div>
  );
}
