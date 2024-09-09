import React from "react";
import { Button } from "@/components/Button";

type Props = {};

export function NewsletterSignupSection({}: Props) {
  return (
    <div className="secondary-section-bg py-[60px] flex flex-col items-center gap-4">
      <h1 className="text-lg font-bold">Sign Up for Our Newsletter</h1>
      <h2 className="secondary-text-color mb-2">Stay Updated with Exclusive Offers and Design Inspiration.</h2>
      <div>
        <input
          placeholder="Enter your email"
          className="outline-none bg-white px-4 py-2"
        ></input>
        <Button>Sign up</Button>
      </div>
    </div>
  );
}
