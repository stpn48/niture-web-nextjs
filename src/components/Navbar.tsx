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
    <div className="bg-white px-5 py-2 justify-between h-fit w-full flex items-center">
      <Link href={"/"} className="text-lg cursor-pointer">Niture</Link>
      <div className="gap-4 flex items-center">
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
        <h1 className="hover:text-[#9c7a54] cursor-pointer">Cart</h1>
        <img src="/menuImg.svg" alt="logo" className="w-4 h-3 cursor-pointer" />
      </div>
    </div>
  );
}
