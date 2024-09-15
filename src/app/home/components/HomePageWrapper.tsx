"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = { children: React.ReactNode };

export function HomePageWrapper({ children }: Props) {
  const searchParams = useSearchParams();

  const router = useRouter();

  useEffect(() => {
    const scrollToPosition = () => {
      const aboutPosition = 4050;
      const contactPosition = document.body.scrollHeight; // Updated to the bottom of the page

      if (searchParams.get("about") === "true") {
        if (window.innerWidth < 1025) {
          window.scrollTo({ behavior: "smooth", top: 4700 });
          return;
        }

        window.scrollTo({ behavior: "smooth", top: aboutPosition });
      } else if (searchParams.get("contact") === "true") {
        window.scrollTo({ behavior: "smooth", top: contactPosition });
      }
    };

    // Ensure this is called after the page content is fully rendered
    scrollToPosition(); // Adjust timing if needed
  }, [searchParams, router]);

  return <div>{children}</div>;
}
