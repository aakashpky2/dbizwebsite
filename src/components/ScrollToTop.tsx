"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

import { initImageCache } from "@/lib/imageCache";

const ScrollToTop = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Initialize image cache and reset scroll on route change
  useEffect(() => {
    initImageCache();
    window.scrollTo(0, 0);
  }, [pathname]);

  // Track scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-[99] p-3 rounded-full bg-dbiz-teal text-white shadow-xl shadow-dbiz-teal/30 hover:bg-dbiz-navy hover:-translate-y-1 transition-all duration-300",
        isVisible
          ? "opacity-100 translate-y-0 cursor-pointer"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTop;