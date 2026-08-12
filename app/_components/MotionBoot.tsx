"use client";

import { useEffect } from "react";

const selectors = [
  "main > section",
  "[class*='ServiceTile']",
  "[class*='InfoCard']",
  "[class*='MiniLink']",
  "[class*='ArticleCard']",
  "[class*='AdviceStep']",
  "[class*='PhotoCard']",
  "[class*='PhotoRow']",
  "[class*='TipBox']",
  "[class*='finalBox']",
];

export function MotionBoot() {
  useEffect(() => {
    document.documentElement.classList.add("v16-motion-ready");

    const elements = Array.from(document.querySelectorAll(selectors.join(",")));
    elements.forEach((el) => el.classList.add("v16-motion-target"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("v16-in-view");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -80px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
