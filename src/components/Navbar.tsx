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
    name: "Contact",
    href: "/contact",
  },
];

export function Navbar({ navLinksVisible = true }: Props) {
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
        <h1 className="cursor-pointer hover:text-[#9c7a54]">Cart</h1>
        <img src="/menuImg.svg" alt="logo" className="h-3 w-4 cursor-pointer" />
      </div>
    </div>
  );
}
