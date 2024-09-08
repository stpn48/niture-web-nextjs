"use client";

import Image from "next/image";
import React from "react";

type Props = {
  lastItemVisible: boolean;
  currentScrollIndex: number;
  moveRight: () => void;
  moveLeft: () => void;
};

export function ArrowButtons({
  lastItemVisible,
  currentScrollIndex,
  moveLeft,
  moveRight,
}: Props) {
  return (
    <div className="absolute top-[50%] px-2 w-full flex justify-between">
      <button
        onClick={moveLeft}
        className={`${
          currentScrollIndex === 0
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <Image width={20} height={20} src="/arrLeft.svg" alt="arrowLeft" />
      </button>

      <button
        onClick={moveRight}
        className={`${
          lastItemVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image src="/arrRight.svg" width={20} height={20} alt="arrowRight" />
      </button>
    </div>
  );
}
