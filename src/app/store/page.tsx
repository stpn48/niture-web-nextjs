"use client";

import React, { useEffect } from "react";
import { FadeAnimationWrapper } from "@/components/FadeAnimationWrapper";
import { SearchBar } from "@/app/store/components/SearchBar";
import { StoreItems } from "@/app/store/components/StoreItems";
import { FilterBar } from "@/app/store/components/FilterBar";
import { useStoreItems } from "@/zustand/useStoreItems";

export default function Store() {
  const { activeTags, query, setItems, setLoading, setQuery, setActiveTags } =
    useStoreItems();

  // TODO: Implement on mount and on query change
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParam = searchParams.get("q") || "";
    const tagsParam = searchParams.get("tags")
      ? JSON.parse(searchParams.get("tags") || "[]")
      : [];

    setQuery(queryParam);
    setActiveTags(tagsParam);
  }, []);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      const queryParams = new URLSearchParams();

      if (query) {
        queryParams.append("q", query);
      }

      if (activeTags.length !== 0) {
        queryParams.append("tags", JSON.stringify(activeTags));
      }

      const url = `${process.env.NEXT_PUBLIC_API_URL}/store?${queryParams.toString()}`;
      window.history.pushState({}, "", url);

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?${queryParams.toString()}`,
        );

        if (!res.ok) throw new Error("Network response was not ok");

        const items = await res.json();
        setItems(items);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [activeTags, query, setItems, setLoading]);

  return (
    <FadeAnimationWrapper>
      <div className="bg-[#ffffff] px-10 pt-16">
        <div className="flex flex-col items-center">
          <SearchBar />
          <FilterBar />
          <StoreItems />
        </div>
      </div>
    </FadeAnimationWrapper>
  );
}
