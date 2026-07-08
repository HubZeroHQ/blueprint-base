import type { Metadata } from "next";

import "./globals.css";

import { metadata } from "@/config/metadata";
import { AppProvider } from "@/providers/AppProvider";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}