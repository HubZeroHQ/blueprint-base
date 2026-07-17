"use client";

import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  /** Stop observing after the first time the element enters view. */
  once?: boolean;
}

/**
 * SSR-safe, IntersectionObserver-based viewport detection. `inView` starts
 * false on both server and first client render (no observer runs during
 * render), so there is no hydration mismatch — it only flips after mount.
 */
export function useInView<T extends Element>({
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return { ref, inView } as const;
}
