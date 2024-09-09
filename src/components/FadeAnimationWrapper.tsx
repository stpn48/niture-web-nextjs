"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export function FadeAnimationWrapper({ children }: Props) {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
