"use client";

import React from "react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

type Props = {};

export function HeroSection({}: Props) {
  const router = useRouter();

  function shopNowOnClick() {
    router.push("/store");
  }

  return (
    <div className="flex h-[800px] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="w-[500px] text-center text-[50px] font-bold md:w-[650px]">
          Elevate Your Space with Timeless Elegance
        </h1>
        <h2 className="w-[400px] text-justify text-[18px] md:w-[650px]">
          We design and sell high-quality, minimalist furniture made from
          premium materials. From sleek living room pieces to elegant kitchen
          sets, our collections bring timeless style and comfort to your home.
        </h2>
        <Button className="w-fit" onClick={shopNowOnClick}>
          Shop Now
        </Button>
      </div>
    </div>
  );
}
