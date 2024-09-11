"use client";

import { storeItem } from "@/app/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    transform: "scale(0.9)",
    transition: { duration: 0.3 },
    y: 100,
  },
  animate: {
    opacity: 1,
    transform: "scale(1)",
    transition: { duration: 0.3 },
    y: 0,
  },
};

export function ItemCard({ item }: { item: storeItem }) {
  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      className="shadow-spread h-[350px] w-[300px] rounded-lg bg-white p-4"
    >
      <div className="relative h-[190px] w-full overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
          src={item.imgSrc}
          alt={item.name}
        />
      </div>
      <div className="mb-2">
        <h1 className="mb-1 font-bold">{item.name}</h1>
        <p className="text-justify text-sm text-[#494949]">
          {item.description}
        </p>
      </div>
      <h1 className="flex w-full justify-end pr-2">{item.price}</h1>
    </motion.div>
  );
}
