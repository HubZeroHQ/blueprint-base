"use client";

import type { HTMLAttributes } from "react";

import { useInView, type UseInViewOptions } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

interface RevealProps
  extends HTMLAttributes<HTMLDivElement>,
    UseInViewOptions {}

/**
 * Reveal is a mechanism, not an aesthetic. It exposes `data-state`
 * ("hidden" | "visible") for a design language's own CSS to animate —
 * it never applies opacity, transform, or timing itself, since those are
 * Motion Language decisions that belong to each blueprint. For example:
 *
 *   [data-reveal] {
 *     transition: opacity var(--duration-normal) var(--ease-standard),
 *       transform var(--duration-normal) var(--ease-standard);
 *   }
 *   [data-reveal][data-state="hidden"] { opacity: 0; transform: translateY(1rem); }
 *   [data-reveal][data-state="visible"] { opacity: 1; transform: translateY(0); }
 *
 * When the user prefers reduced motion, content is treated as already
 * visible rather than animated in.
 */
export function Reveal({
  root,
  rootMargin,
  threshold,
  once,
  className,
  children,
  ...props
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    root,
    rootMargin,
    threshold,
    once,
  });
  const reducedMotion = useReducedMotion();
  const revealed = inView || reducedMotion;

  return (
    <div
      ref={ref}
      data-reveal
      data-state={revealed ? "visible" : "hidden"}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}
