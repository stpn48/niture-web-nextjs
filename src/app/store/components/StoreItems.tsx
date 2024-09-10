"use client";

import { ItemCard } from "@/components/ItemCard";
import { LoadingBar } from "@/components/LoadingBar";
import { useStoreItems } from "@/zustand/useStoreItems";
import { throttle } from "lodash";
import React, { useCallback, useEffect } from "react";

const MemoItemCard = React.memo(ItemCard);

export function StoreItems() {
  const {
    items,
    loading,
    query,
    hasMoreItems,
    page,
    setLoading,
    setItems,
    setPage,
    setHasMoreItems,
  } = useStoreItems();

  const fetchMoreItems = useCallback(async (pageNumber: number) => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?page=${pageNumber}&t=${Date.now()}`);
      const newItems = await res.json();

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
  }, []);

  // handle infinite scroll
  useEffect(() => {
    const handleScroll = throttle(async () => {
      if (query) return;

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
  }, [page, fetchMoreItems, hasMoreItems, loading, query]);


  return (
    <>
      <div className="flex flex-wrap gap-10 mb-10 justify-center">
        {items.map((item) => (
          <MemoItemCard key={item.id} item={item} />
        ))}
      </div>
      {loading && (
        <div className="w-full flex justify-center">
          <LoadingBar className="my-10" />
        </div>
      )}
    </>
  );
}
