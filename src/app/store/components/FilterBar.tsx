"use client";

import React, { useCallback, useState } from "react";
import { FilterMenu } from "./FilterMenu";
import { Tag } from "./Tag";

type Props = {};

export function FilterBar({}: Props) {
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const handleTagClick = useCallback(
    (tag: string) => {
      if (!activeTags.includes(tag)) {
        setActiveTags([...activeTags, tag]);
      }
    },
    [activeTags]
  );

  const removeTag = useCallback(
    (tag: string) => {
      setActiveTags(activeTags.filter((t) => t !== tag));
    },
    [activeTags]
  );

  const handleFilterClick = useCallback(
    (e: any) => {
      setFilterMenuVisible(!filterMenuVisible);
    },
    [filterMenuVisible]
  );

  return (
    <div className="w-full flex relative mb-10 items-center py-6 px-4 bg-[#f5f5f5] rounded-sm h-10">
      <button className="flex items-center gap-2" onClick={handleFilterClick}>
        Filter
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.21967 8.22431C5.51256 7.93142 5.98744 7.93142 6.28033 8.22431L10 11.944L13.7197 8.22431C14.0126 7.93142 14.4874 7.93142 14.7803 8.22431C15.0732 8.5172 15.0732 8.99208 14.7803 9.28497L10.5303 13.535C10.3897 13.6756 10.1989 13.7546 10 13.7546C9.80109 13.7546 9.61032 13.6756 9.46967 13.535L5.21967 9.28497C4.92678 8.99208 4.92678 8.5172 5.21967 8.22431Z"
            fill="#0F172A"
          />
        </svg>
      </button>
      <div className="flex gap-2 flex-wrap">
        {activeTags.map((tag, index) => (
          <Tag
            key={index}
            tag={tag}
            handleTagClick={handleTagClick}
            removeTag={removeTag}
          />
        ))}
      </div>
      {filterMenuVisible && (
        <FilterMenu
          closeMenu={() => setFilterMenuVisible(false)}
          handleTagClick={handleTagClick}
        />
      )}
    </div>
  );
}
