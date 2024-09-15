// app/store/loading.tsx
import { LoadingSpinner } from "@/components/LoadingSpinner";
import React from "react";

export default function Loading() {
  return (
    <div className="flex w-full flex-col items-center gap-2 pt-20 text-black">
      <h1>Niture</h1>
      <LoadingSpinner />
    </div>
  );
}
