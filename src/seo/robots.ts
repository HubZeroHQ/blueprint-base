import type { MetadataRoute } from "next";

import { seoDefaults } from "./defaults";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },

    sitemap: `${seoDefaults.url}/sitemap.xml`,
  };
}