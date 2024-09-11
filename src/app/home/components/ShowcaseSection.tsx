import Image from "next/image";
import React from "react";

type Props = {};

export function ShowcaseSection({}: Props) {
  return (
    <div className="mt-[80px] flex h-fit w-full flex-col items-center justify-center py-[60px] lg:h-[700px]">
      <div className="relative w-fit lg:w-[800px]">
        <Image
          className="mb-10 lg:absolute lg:left-[50px] lg:top-[50px]"
          src={"/showcase-1.jpg"}
          alt="showcase1"
          width={300}
          height={1}
        />
        <Image
          className="lg:absolute lg:left-[450px] lg:top-[200px]"
          src={"/showcase-2.jpg"}
          alt="showcase2"
          width={300}
          height={1}
        />
      </div>
    </div>
  );
}
