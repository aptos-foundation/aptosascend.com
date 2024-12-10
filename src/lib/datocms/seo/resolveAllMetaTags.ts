import type { SiteSettings } from "./graphql";
import { resolveOverrides } from "./resolveOverrides";
import { seoFallbackDescription } from "./seoFallbackDescription";
import { seoFallbackSvgFavicon } from "./seoFallbackSvgFavicon";
import { seoFallbackTitle } from "./seoFallbackTitle";
import { seoMeta } from "./seoMeta";
import type { AnyOverride, SeoMetaTag } from "./types";

export function resolveAllMetaTags(
  siteSettings: SiteSettings,
  pageSeoTags: SeoMetaTag[],
  overrides: AnyOverride[] = [],
): SeoMetaTag[] {
  const { globalSeo } = siteSettings._site;

  if (siteSettings._site.locales.length > 1) {
    throw new Error("Only one locale is supported");
  }

  const locale = siteSettings._site.locales[0];
  const layoutOverrides: AnyOverride[] = [
    locale && seoMeta("og:locale", locale),
    seoMeta("og:type", "article"),
    globalSeo?.siteName && seoMeta("og:site_name", globalSeo?.siteName),
    globalSeo?.twitterAccount &&
      seoMeta("twitter:site", globalSeo?.twitterAccount),

    // Fallbacks
    seoFallbackTitle(),
    seoFallbackDescription(),
    seoFallbackSvgFavicon("/favicon.svg"),
  ];

  return [
    ...siteSettings._site.faviconMetaTags,
    ...resolveOverrides(pageSeoTags, siteSettings, [
      ...layoutOverrides,
      ...overrides,
    ]),
  ];
}
