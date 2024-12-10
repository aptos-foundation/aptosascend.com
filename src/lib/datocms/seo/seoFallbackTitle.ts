import type { SiteSettings } from "./graphql";
import { hasTag } from "./hasTag";
import { resolveOverrides } from "./resolveOverrides";
import { seoTitle } from "./seoTitle";
import type { SeoMetaTag } from "./types";

export function seoFallbackTitle() {
  return (tags: SeoMetaTag[], siteSettings: SiteSettings) => {
    if (
      !tags.some(hasTag("title")) &&
      siteSettings._site.globalSeo?.fallbackSeo?.title
    ) {
      return resolveOverrides(
        tags,
        siteSettings,
        seoTitle(siteSettings._site.globalSeo.fallbackSeo.title),
      );
    }

    return tags;
  };
}
