"use client";

import React from "react";

type Props = {
  className?: string;
};

export function LoadingSpinner({ className }: Props) {
  return (
    <div
      className={`h-6 w-6 animate-spin rounded-full border-2 border-[#9c7a54] border-l-transparent border-r-transparent border-t-transparent ${className}`}
    />
  );
}
