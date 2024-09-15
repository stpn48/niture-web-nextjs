"use client";

import { useCartStore } from "@/zustand/cartStore";
import Link from "next/link";
import React from "react";

type Props = {
  navLinksVisible?: boolean;
};

const navLinks = [
  {
    name: "Store",
    href: "/store",
  },
  {
    name: "About",
    href: "/home?about=true",
  },
  {
    name: "Contact",
    href: "/home?contact=true",
  },
];

export function Navbar({ navLinksVisible = true }: Props) {
  const { setIsCartOpen } = useCartStore();

  return (
    <div className="fixed z-10 flex h-fit w-full items-center justify-between bg-white px-5 py-2">
      <Link href={"/"} className="cursor-pointer text-lg">
        Niture
      </Link>
      <div className="flex items-center gap-4">
        {navLinksVisible &&
          navLinks.map((link) => (
            <Link
              className="hover:text-[#9c7a54]"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        <a
          className="cursor-pointer hover:text-[#9c7a54]"
          onClick={() => setIsCartOpen(true)}
        >
          Cart
        </a>
        <img src="/menuImg.svg" alt="logo" className="h-3 w-4 cursor-pointer" />
      </div>
    </div>
  );
}
