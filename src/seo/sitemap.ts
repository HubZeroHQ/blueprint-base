import type { MetadataRoute } from "next";

import { seoDefaults } from "./defaults";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoDefaults.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}