import { site } from "@/config/site";

export const seoDefaults = {
  title: site.name,

  description: site.description,

  siteName: site.name,

  url: site.url,

  locale: "en_US",

  type: "website",

  twitterCard: "summary_large_image",

  robots: {
    index: true,
    follow: true,
  },
} as const;