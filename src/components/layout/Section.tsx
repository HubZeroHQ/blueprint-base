import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}