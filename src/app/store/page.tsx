import React from "react";
import { FadeAnimationWrapper } from "@/components/FadeAnimationWrapper";
import { SearchBar } from "@/app/store/components/SearchBar";
import { StoreItems } from "@/app/store/components/StoreItems";
import { FilterBar } from "@/app/store/components/FilterBar";

export default async function Store() {
  return (
    <FadeAnimationWrapper>
      <div className="px-10 pt-16 bg-[#ffffff]">
        <div className="flex flex-col items-center">
          <SearchBar />
          <FilterBar />
          <StoreItems />
        </div>
      </div>
    </FadeAnimationWrapper>
  );
}
