"use client";

import React, { useCallback, useState } from "react";
import { FilterMenu } from "./FilterMenu";
import { useStoreItems } from "@/zustand/useStoreItems";
import { Tag } from "./Tag";

type Props = {};

export function FilterBar({}: Props) {
  const { activeTags, setActiveTags } = useStoreItems();

  const [filterMenuVisible, setFilterMenuVisible] = useState(false);

  const handleTagClick = useCallback((tag: string) => {
    setActiveTags(prev => [...prev, tag]); 
  }, [setActiveTags]);

  const removeTag = useCallback((tag: string) => {
    const newTags = activeTags.filter((t) => t !== tag);
    setActiveTags(newTags);
  }, [activeTags, setActiveTags]);

  return (
    <div className="relative mb-10 flex h-10 w-full items-center rounded-sm bg-[#f5f5f5] px-4 py-6">
      <button
        onClick={() => setFilterMenuVisible(true)}
        className="mr-6 flex items-center gap-2"
      >
        <p>Filter</p>
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0001 1.00464C12.7548 1.00464 15.4552 1.23669 18.0831 1.6823C18.6159 1.77267 19 2.23819 19 2.77866V3.82266C19 4.4194 18.7629 4.99169 18.341 5.41365L12.909 10.8456C12.4871 11.2676 12.25 11.8399 12.25 12.4366V15.3641C12.25 16.2163 11.7685 16.9954 11.0062 17.3765L7.75 19.0046V12.4366C7.75 11.8399 7.51295 11.2676 7.09099 10.8456L1.65901 5.41365C1.23705 4.99169 1 4.41939 1 3.82266V2.77868C1 2.23821 1.38408 1.77269 1.91694 1.68233C4.54479 1.2367 7.24533 1.00464 10.0001 1.00464Z"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="flex flex-wrap gap-2">
        {activeTags.map((tag, index) => (
          <Tag
            key={index}
            tag={tag}
            removeTag={removeTag}
          />
        ))}
      </div>
      {filterMenuVisible && (
        <FilterMenu
          activeTags={activeTags}
          closeMenu={() => setFilterMenuVisible(false)}
          handleTagClick={handleTagClick}
        />
      )}
    </div>
  );
}
