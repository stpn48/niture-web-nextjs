"use client";

import { twMerge } from "tailwind-merge";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
};

export function Button({ children, onClick, className, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "bg-[#262626] px-4 py-2 text-white hover:bg-[#333333] active:bg-[#454545]",
        className,
        disabled && "cursor-not-allowed bg-[#3f3f3f]",
      )}
    >
      {children}
    </button>
  );
}
