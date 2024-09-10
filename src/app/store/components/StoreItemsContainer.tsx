"use client";

import { storeItem } from "@/app/types";
import { ItemCard } from "@/components/ItemCard";
import { LoadingBar } from "@/components/LoadingBar";
import React, { useCallback, useEffect, useState } from "react";
import { throttle } from "lodash";

const MemoItemCard = React.memo(ItemCard);

type Props = {
  initialItems: storeItem[];
};

export function StoreItemsContainer({ initialItems }: Props) {
  const [items, setItems] = useState<storeItem[]>(initialItems);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMoreItems, setHasMoreItems] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);

  const fetchMoreItems = useCallback(
    async (pageNumber: number) => {  
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("fetching more items ", pageNumber);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?page=${pageNumber}&t=${Date.now()}`
        );
        const newItems: storeItem[] = await res.json();
  
        if (newItems.length === 0) {
          setHasMoreItems(false);
        } else {
          setItems((prevItems) => [...prevItems, ...newItems]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const handleScroll = throttle(async () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (hasMoreItems && !loading) {
          await fetchMoreItems(page);
        }
      }
    }, 200); // Throttle the scroll event to fire every 200ms

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, fetchMoreItems, hasMoreItems, loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-10 justify-center">
        {items.map((item) => (
          <MemoItemCard key={item.id} item={item} />
        ))}
      </div>
      {loading && <LoadingBar className="my-10" />}
    </div>
  );
}
