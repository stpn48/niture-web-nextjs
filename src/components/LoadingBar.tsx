"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};

const variants = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
  },
};

export function LoadingBar({className}: Props) {
  return (
    <div className={"w-20 h-px bg-[#e2e2e2] " + className}>
      <motion.div
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        transition={{ duration: 3 }}
        className="bg-[#9c7a54] w-20 h-px animate-pulse"
      ></motion.div>
    </div>
  );
}
