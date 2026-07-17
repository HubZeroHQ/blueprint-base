import "./globals.css";

import { metadata } from "@/config/metadata";
import { AppProvider } from "@/providers/AppProvider";
import { JsonLd } from "@/components/shared/JsonLd";
import { SkipLink } from "@/components/shared/SkipLink";
import { organizationJsonLd } from "@/seo/jsonLd";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationJsonLd()} />
      </head>
      <body>
        <SkipLink />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}