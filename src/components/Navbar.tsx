"use client";

import { s } from "framer-motion/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

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
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("about") === "true") {
      window.scrollTo({ behavior: "instant", top: 4050 });

      if (window.innerWidth < 1025) {
        window.scrollTo({ behavior: "instant", top: 4700 });
      }
    } else if (searchParams.get("contact") === "true") {
      window.scrollTo({ behavior: "instant", top: 99999 });
    }
  }, [searchParams]);

  return (
    <div className="fixed z-10 flex h-fit w-full items-center justify-between bg-white px-5 py-2">
      <Link href={"/"} className="cursor-pointer text-lg">
        Niture
      </Link>
      <div className="flex items-center gap-4">
        {navLinksVisible &&
          navLinks.map((link, linkIndex) => (
            <Link
              className="hover:text-[#9c7a54]"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        <h1 className="cursor-pointer hover:text-[#9c7a54]">Cart</h1>
        <img src="/menuImg.svg" alt="logo" className="h-3 w-4 cursor-pointer" />
      </div>
    </div>
  );
}
