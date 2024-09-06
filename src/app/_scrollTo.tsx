"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollTo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const scrolltoHash = function (element_id: string) {
    let element = document.getElementById(element_id);
    console.log("🚀 ~ scrolltoHash ~ element:", element);

    if (!element) {
      let counter = 0;
      const interval = setInterval(() => {
        element = document.getElementById(element_id);

        console.log("RETRY", { counter, element });
        counter++;
        if (element || counter > 50) {
          clearInterval(interval);
          element?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    console.log("🚀 ~ useEffect ~ hash:", {
      hash,
      pathname,
    });

    if (hash) {
      scrolltoHash(hash.substring(1));
    }
  }, [pathname]);

  return <>{children}</>;
}
