import { site } from "@/config/site";

export type JsonLdObject = Record<string, unknown>;

/**
 * Organization schema applies to every HubZero blueprint regardless of
 * architecture. Architecture-specific schema (Product, Article, LocalBusiness,
 * etc.) belongs in the blueprint that needs it, not here.
 */
export function organizationJsonLd(
  overrides: JsonLdObject = {}
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    ...overrides,
  };
}
