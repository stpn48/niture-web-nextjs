"use client";

import { Button } from "@/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (inputValue) params.set("q", inputValue);
    else params.delete("q");
    router.push(`/store?${params.toString()}`);
  }, [inputValue, router]);

  return (
    <div className="mb-4 flex w-full items-center justify-center">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
        className="bg-[#ffffff] px-4 py-1 outline-none"
        type="text"
      />
      <img
        onClick={() => setInputValue("")}
        className={`cursor-pointer px-4 ${inputValue ? "" : "opacity-0"}`}
        src="/xCircle.svg"
        alt="xCircleIcon"
      />
      <Button className="h-fit w-fit">Search</Button>{" "}
      {/* TODO: Add search icon instead of button */}
    </div>
  );
}
