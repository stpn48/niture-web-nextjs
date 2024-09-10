"use client";

import React from "react";

type Props = {};

const filterOptions = [
  '2024collection', 'coffeeTable', 'glass', 'modern', 'minimalist', 
  'sectionalSofa', 'luxury', 'leather', 'diningTable', 'marble', 
  'tvStand', 'oak', 'storage', 'armchair', 'velvet', 'patioSet', 
  'outdoor', 'rattan', 'weather-resistant', 'bookshelf', 
  'contemporary', 'floorLamp', 'lighting', 'brass', 'consoleTable', 
  'wood', 'walnut', 'bedsideTable', 'reclaimedWood', 'farmhouse', 
  'loungeChair', 'midCentury', 'wallShelf', 'ottoman', 'tufted', 
  'extendable', 'chaiseLounge', 'barStool', 'chrome', 'dresser', 
  'solidWood', 'bedFrame', 'metal', 'industrial', 'living room', 
  'seating', 'vanity', 'desk', 'home office', 'solid wood', 
  'geometric', 'plush', 'convertible', 'sofa', 'queen-sized', 
  'guest room', 'natural', 'indoor', 'wall-mounted', 'compartments', 
  'classic', 'wooden', 'rocking chair', 'ergonomic', 'display', 
  'cabinet', 'LED lighting', 'desk chair', 'lumbar support', 
  'executive', 'woven', 'jute', 'rug', 'corner', 'space-saving', 
  'five tiers', 'console table', 'glass-top', 'metal legs', 
  'lounge chair', 'reclining', 'loveseat', 'USB ports', 
  'coffee table', 'rustic', 'folding', 'dining table', 'expandable', 
  'small spaces', 'swivel', 'office chair', 'mesh', 'adjustable armrests', 
  'TV stand', 'mid-century modern', 'sleeper sofa', 'area rug', 
  'wool', 'warmth', 'console cabinet', 'sliding doors', 
  'brass accents', 'dining set', 'upholstered', 'bench', 
  'button-tufted', 'footrest', 'bamboo', 'side table', 'sustainable', 
  'recliner', 'comfortable', 'king bed', 'luxurious', 
  'high headboard', 'round', 'pedestal base', 'fabric', 'cozy', 
  'supportive', 'ladder', 'shelf', 'compact', 'chaise', 
  'sectional sofa', 'wide seats', 'accent table', 'gold metal', 
  'decorative'
];


export function FilterBar({}: Props) {
  return (
    <div className="w-full flex mb-10 items-center px-4 bg-[#f5f5f5] rounded-sm h-10">
      <button className="flex items-center gap-2">
        Filter
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.21967 8.22431C5.51256 7.93142 5.98744 7.93142 6.28033 8.22431L10 11.944L13.7197 8.22431C14.0126 7.93142 14.4874 7.93142 14.7803 8.22431C15.0732 8.5172 15.0732 8.99208 14.7803 9.28497L10.5303 13.535C10.3897 13.6756 10.1989 13.7546 10 13.7546C9.80109 13.7546 9.61032 13.6756 9.46967 13.535L5.21967 9.28497C4.92678 8.99208 4.92678 8.5172 5.21967 8.22431Z"
            fill="#0F172A"
          />
        </svg>
      </button>
    </div>
  );
}
