"use client";

import { Button } from "@/components/Button";
import React, { useCallback } from "react";

const filterOptions = [
  "2024collection",
  "coffeeTable",
  "glass",
  "modern",
  "minimalist",
  "sectionalSofa",
  "luxury",
  "leather",
  "diningTable",
  "marble",
  "tvStand",
  "oak",
  "storage",
  "armchair",
  "velvet",
  "patioSet",
  "outdoor",
  "rattan",
  "weather-resistant",
  "bookshelf",
  "contemporary",
  "floorLamp",
  "lighting",
  "brass",
  "consoleTable",
  "wood",
  "walnut",
  "bedsideTable",
  "reclaimedWood",
  "farmhouse",
  "loungeChair",
  "midCentury",
  "wallShelf",
  "ottoman",
  "tufted",
  "extendable",
  "chaiseLounge",
  "barStool",
  "chrome",
  "dresser",
  "solidWood",
  "bedFrame",
  "metal",
  "industrial",
  "living room",
  "seating",
  "vanity",
  "desk",
  "home office",
  "solid wood",
  "geometric",
  "plush",
  "convertible",
  "sofa",
  "queen-sized",
  "guest room",
  "natural",
  "indoor",
  "wall-mounted",
  "compartments",
  "classic",
  "wooden",
  "rocking chair",
  "ergonomic",
  "display",
  "cabinet",
  "LED lighting",
  "desk chair",
  "lumbar support",
  "executive",
  "woven",
  "jute",
  "rug",
  "corner",
  "space-saving",
  "five tiers",
  "console table",
  "glass-top",
  "metal legs",
  "lounge chair",
  "reclining",
  "loveseat",
  "USB ports",
  "coffee table",
  "rustic",
  "folding",
  "dining table",
  "expandable",
  "small spaces",
  "swivel",
  "office chair",
  "mesh",
  "adjustable armrests",
  "TV stand",
  "mid-century modern",
  "sleeper sofa",
  "area rug",
  "wool",
  "warmth",
  "console cabinet",
  "sliding doors",
  "brass accents",
  "dining set",
  "upholstered",
  "bench",
  "button-tufted",
  "footrest",
  "bamboo",
  "side table",
  "sustainable",
  "recliner",
  "comfortable",
  "king bed",
  "luxurious",
  "high headboard",
  "round",
  "pedestal base",
  "fabric",
  "cozy",
  "supportive",
  "ladder",
  "shelf",
  "compact",
  "chaise",
  "sectional sofa",
  "wide seats",
  "accent table",
  "gold metal",
  "decorative",
];

type Props = {
  closeMenu: () => void;
  handleTagClick: (tag: string) => void;
  activeTags: string[];
};

export function FilterMenu({ closeMenu, handleTagClick, activeTags }: Props) {
  
  const handleTagClickCallback = useCallback(
    (tag: string) => {
      handleTagClick(tag);
      closeMenu();
    },
    [handleTagClick, closeMenu],
  );

  return (
    <>
      <div
        className="fixed inset-0 z-10 h-screen w-screen"
        onClick={closeMenu}
      ></div>
      <div className="absolute top-[48px] z-10 flex h-[500px] w-[500px] flex-wrap justify-center gap-1 overflow-scroll overflow-x-hidden rounded-b-md bg-[#f5f5f5] p-2 px-10 text-sm shadow-md">
        {filterOptions.map((option, index) => (
          <Button
            disabled={activeTags.includes(option)}
            key={index}
            onClick={() => handleTagClickCallback(option)}
            className="w-fit rounded-full py-10 text-xs"
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  );
}
