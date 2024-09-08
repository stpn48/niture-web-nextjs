"use client";

import React, { useEffect, useRef, useState } from "react";
import { ItemCard } from "./ItemCard";
import { storeItem } from "@/app/types";
import { ArrowButtons } from "./ArrowButtons";

type Props = {
  featuredItems: storeItem[];
};

export function FeaturedItemsCarousel({ featuredItems }: Props) {
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const [lastItemVisible, setLastItemVisible] = useState(false);
  const lastItemRef = useRef<HTMLDivElement>(null);

  function moveRight() {
    if (currentScrollIndex < featuredItems.length - 1) {
      setCurrentScrollIndex((prev) => prev + 1);
    }
  }

  function moveLeft() {

    if (currentScrollIndex > 0) {
      setCurrentScrollIndex((prev) => prev - 1);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastItemEntry = entries[0];
        if (lastItemEntry.isIntersecting) {
          setLastItemVisible(true);
        } else {
          setLastItemVisible(false);
        }
      },
      { threshold: 1 }
    );

    addEventListener("resize", () => {
      setCurrentScrollIndex(0);
    });

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => {
      removeEventListener("resize", () => {
        setCurrentScrollIndex(0);
      });

      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full md:overflow-x-hidden overflow-x-scroll">
      <div
        className="flex gap-4 px-20 transition-all duration-500"
        style={{ transform: `translateX(-${currentScrollIndex * 50}%)` }}
      >
        {featuredItems.map((item, itemIndex) => (
          <div
            ref={itemIndex === featuredItems.length - 1 ? lastItemRef : null}
          >
            <ItemCard item={item} />
          </div>
        ))}
      </div>
      <div className="md:block hidden">
        <ArrowButtons
          lastItemVisible={lastItemVisible}
          currentScrollIndex={currentScrollIndex}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />
      </div>
    </div>
  );
}
