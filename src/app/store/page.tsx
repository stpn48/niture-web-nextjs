"use client";

import { FadeAnimationWrapper } from "@/components/FadeAnimationWrapper";
import { SearchBar } from "@/app/store/components/SearchBar";
import { StoreItems } from "@/app/store/components/StoreItems";
import { FilterBar } from "@/app/store/components/FilterBar";
import { fetchStoreItems } from "@/server/actions/storeActions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Store() {
  const userSearchParams = useSearchParams();
  const [query, setQuery] = useState(userSearchParams.get("q") || "");
  const [activeTags, setActiveTags] = useState<string[]>(
    JSON.parse(userSearchParams.get("tags") || "[]"),
  );

  // Use effect to detect URL changes and update state accordingly
  useEffect(() => {
    const newQuery = userSearchParams.get("q") || "";
    const newTags = JSON.parse(userSearchParams.get("tags") || "[]");

    setQuery(newQuery);
    setActiveTags(newTags);
  }, [userSearchParams]);

  const {
    data: items,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["storeItems", query, activeTags],
    queryFn: async () => {
      const items = await fetchStoreItems(query, activeTags);
      return items;
    },
    // Ensures that the query runs whenever query or activeTags change
    enabled: !!query || activeTags.length > 0,
  });

  return (
    <FadeAnimationWrapper>
      <div className="bg-[#ffffff] px-10 pt-16">
        <div className="flex flex-col items-center">
          <SearchBar query={query} />
          <FilterBar activeTags={activeTags} />
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error loading items</p>
          ) : (
            <StoreItems items={items || []} />
          )}
        </div>
      </div>
    </FadeAnimationWrapper>
  );
}
