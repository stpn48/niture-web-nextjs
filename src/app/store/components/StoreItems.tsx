"use client";

import { ItemCard } from "@/components/ItemCard";
import { LoadingBar } from "@/components/LoadingBar";
import { storeItem } from "@/app/types";
import React, { useCallback, useEffect, useState } from "react";

const MemoItemCard = React.memo(ItemCard);

type Props = {
  items: storeItem[];
};

export function StoreItems({ items: initialItems }: Props) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreItems = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/storeItems?page=${page}`,
      );
      const newItems = await res.json();

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prevItems) => [...prevItems, ...newItems]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight) {
        fetchMoreItems();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-10">
        {items.map((item) => (
          <MemoItemCard key={item.id} item={item} />
        ))}
      </div>
      {loading && (
        <div className="flex w-full justify-center">
          <LoadingBar className="my-10" />
        </div>
      )}
    </>
  );
}
