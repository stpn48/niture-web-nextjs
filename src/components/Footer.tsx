import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <div className="h-[400px] w-full bg-[#1A1A1A] px-14 py-10 text-white">
      <div className="flex items-center gap-2">
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
      <div className="mt-12 flex items-center justify-between">
        <div className="hidden md:block">
          <h2 className="mb-2 text-sm underline">About us</h2>
          <p className="w-[350px] text-justify text-sm text-[#cccccc]">
            Founded in 2017, we began with a mission to create high-quality,
            functional furniture. Our initial focus on durable basics evolved
            into a brand known for minimalist design and superior craftsmanship.
            In 2021, we introduced our first minimalist kitchen collection,
            followed by luxurious living room pieces in 2023. Today, our 2024
            collection continues to uphold our commitment to quality,
            simplicity, and timeless beauty.
          </p>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/NitureSignature.png"
            alt="Niture Signature"
            width={150}
            height={150}
          />
        </div>
        <div className="text-[#cccccc]">
          <h2 className="mb-2 text-sm text-white underline">Contact us</h2>
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
