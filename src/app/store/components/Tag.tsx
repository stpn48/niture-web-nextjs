import React from "react";

type Props = {tag: string, handleTagClick: (tag: string) => void, removeTag: (tag: string) => void};

export function Tag({tag, handleTagClick, removeTag}: Props) {
  return (
    <div
      className="bg-[#262626] flex gap-4 items-center rounded-full px-2 py-1 text-white text-xs"
      onClick={() => handleTagClick(tag)}
    >
      <p>{tag}</p>
      <svg
        className="cursor-pointer"
        onClick={() => removeTag(tag)}
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.28033 0.226506C0.987437 -0.0663874 0.512563 -0.0663874 0.21967 0.226506C-0.0732233 0.519399 -0.0732233 0.994273 0.21967 1.28717L2.93934 4.00684L0.21967 6.72651C-0.0732233 7.0194 -0.0732233 7.49427 0.21967 7.78717C0.512563 8.08006 0.987437 8.08006 1.28033 7.78717L4 5.0675L6.71967 7.78717C7.01256 8.08006 7.48744 8.08006 7.78033 7.78717C8.07322 7.49427 8.07322 7.0194 7.78033 6.72651L5.06066 4.00684L7.78033 1.28717C8.07322 0.994273 8.07322 0.519399 7.78033 0.226506C7.48744 -0.0663874 7.01256 -0.0663874 6.71967 0.226506L4 2.94618L1.28033 0.226506Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}
