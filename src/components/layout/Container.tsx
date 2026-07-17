import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

const containerSizes = {
  // Page-width shell, driven by the shared --container-width token.
  default: "max-w-[var(--container-width)]",
  // Readable line-length for long-form content (blog, docs, legal, editorial).
  text: "max-w-prose",
} as const;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof containerSizes;
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-8",
        containerSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}