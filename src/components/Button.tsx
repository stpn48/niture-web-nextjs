"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({ children, onClick, className, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled
          ? "cursor-not-allowed bg-[#3f3f3f]"
          : "bg-[#262626] hover:bg-[#333333] active:bg-[#454545]"
      } px-4 py-2 text-white ${className}`}
    >
      {children}
    </button>
  );
}
