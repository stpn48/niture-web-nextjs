"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button({ children, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#262626] hover:bg-[#333333] active:bg-[#454545] text-white px-4 py-2 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
}
