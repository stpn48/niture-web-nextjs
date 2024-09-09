import Image from "next/image";
import React from "react";

type Props = {};

export function Footer({}: Props) {
  return (
    <div className="bg-[#1A1A1A] py-10 px-14 text-white w-full h-[400px]">
      <div className="flex gap-2 items-center">
        <h1 className="text-lg">Niture</h1>
        <a href="https://x.com" target="_blank">
          <Image
            className="cursor-pointer"
            src="/twitterLogo.svg"
            alt=""
            width={16}
            height={16}
          />
        </a>
      </div>
      <div className="flex mt-12 justify-between items-center">
        <div className="md:block hidden">
          <h2 className="underline text-sm mb-2">About us</h2>
          <p className="text-[#cccccc] text-sm w-[350px] text-justify ">
            Founded in 2017, we began with a mission to create high-quality,
            functional furniture. Our initial focus on durable basics evolved
            into a brand known for minimalist design and superior craftsmanship.
            In 2021, we introduced our first minimalist kitchen collection,
            followed by luxurious living room pieces in 2023. Today, our 2024
            collection continues to uphold our commitment to quality,
            simplicity, and timeless beauty.
          </p>
        </div>
        <div className="lg:block hidden">
          <Image
            src="/NitureSignature.png"
            alt="Niture Signature"
            width={150}
            height={150}
          />
        </div>
        <div className="text-[#cccccc]">
          <h2 className="text-sm underline text-white mb-2">Contact us</h2>
          <div className="flex flex-col gap-2 text-sm">
            <p>info@niture.com</p>
            <p>+1 (555) 555-5555</p>
            <p>www.niture.com</p>
            <p>123 Main St, Anytown, USA</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}
