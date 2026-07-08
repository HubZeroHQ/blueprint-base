import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface PageProps extends HTMLAttributes<HTMLDivElement> {}

export function Page({
  className,
  children,
  ...props
}: PageProps) {
  return (
    <main
      className={cn(
        "min-h-screen",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}