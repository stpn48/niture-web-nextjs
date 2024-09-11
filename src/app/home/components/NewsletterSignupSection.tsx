import React from "react";
import { Button } from "@/components/Button";

type Props = {};

export function NewsletterSignupSection({}: Props) {
  return (
    <div className="secondary-section-bg flex flex-col items-center gap-4 py-[60px]">
      <h1 className="text-lg font-bold">Sign Up for Our Newsletter</h1>
      <h2 className="secondary-text-color mb-2">
        Stay Updated with Exclusive Offers and Design Inspiration.
      </h2>
      <div>
        <input
          placeholder="Enter your email"
          className="bg-white px-4 py-2 outline-none"
        ></input>
        <Button>Sign up</Button>
      </div>
    </div>
  );
}
