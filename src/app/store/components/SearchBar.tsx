"use client";

import { Button } from "@/components/Button";
import { useStoreItems } from "@/zustand/useStoreItems";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";

type Props = {};

export function SearchBar({}: Props) {
  const { query, setQuery, setItems } = useStoreItems();

  const router = useRouter();
  const searchParams = useSearchParams();

  const searchForItems = useCallback(
    async (query: string) => {
      setItems([]);
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/storeItems?t=${Date.now()}&q=${query}`
      );
      const filteredItems = await res.json();
      setItems(filteredItems);
    },
    [setItems]
  );

  const handleSearch = useCallback(() => {
    router.push(`/store?q=${query}`);
    searchForItems(query);
  }, [query, router, searchForItems]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  const clearSearch = useCallback(() => {
    setQuery("");
    searchForItems("");
    router.push("/store");
  }, [router, setQuery]);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top of page
    const initialQuery = searchParams.get("q") || ""; // get query from search params
    setQuery(initialQuery); // set query state
    searchForItems(initialQuery); // search for items with initial query
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="w-full flex justify-center items-center mb-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="outline-none bg-[#ffffff] px-4 py-1"
        type="text"
      />
      <img
        className={`px-4 cursor-pointer ${!query ? "opacity-0" : ""}`}
        onClick={clearSearch}
        src="/xCircle.svg"
        alt="xCircleIcon"
      />
      <Button className="w-fit h-fit" onClick={handleSearch}>
        Search
      </Button>{" "}
      {/* TODO: Add search icon instead of button */}
    </div>
  );
}
