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
    <div className="flex flex-col items-center justify-center h-[800px]">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-[50px] md:w-[650px] w-[500px] text-center">
          Elevate Your Space with Timeless Elegance
        </h1>
        <h2 className="md:w-[650px] w-[400px] text-[18px] text-justify">
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
