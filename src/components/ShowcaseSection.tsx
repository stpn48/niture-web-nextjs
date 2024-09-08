import Image from "next/image";
import React from "react";

type Props = {};

export function ShowcaseSection({}: Props) {
  return (
    <div className="flex w-full flex-col justify-center items-center lg:h-[700px] h-fit py-[60px] mt-[80px]">
      <div className="lg:w-[800px] w-fit relative">
        <Image
          className="lg:absolute lg:top-[50px] mb-10 lg:left-[50px]"
          src={"/showcase-1.jpg"}
          alt="showcase1"
          width={300}
          height={1}
        />
        <Image
          className="lg:absolute lg:top-[200px] lg:left-[450px]"
          src={"/showcase-2.jpg"}
          alt="showcase2"
          width={300}
          height={1}
        />
      </div>
    </div>
  );
}
