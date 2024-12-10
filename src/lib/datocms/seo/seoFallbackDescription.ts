import type { SiteSettings } from "./graphql";
import { hasPropertyOrName } from "./hasPropertyOrName";
import { resolveOverrides } from "./resolveOverrides";
import { seoDescription } from "./seoDescription";
import type { SeoMetaTag } from "./types";

export function seoFallbackDescription() {
  return (tags: SeoMetaTag[], siteSettings: SiteSettings) => {
    if (
      !tags.some(hasPropertyOrName("description")) &&
      siteSettings._site.globalSeo?.fallbackSeo?.description
    ) {
      return resolveOverrides(
        tags,
        siteSettings,
        seoDescription(siteSettings._site.globalSeo.fallbackSeo.description),
      );
    }

    return tags;
  };
}
