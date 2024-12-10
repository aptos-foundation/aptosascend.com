import { filterBoolean } from "~/lib/utils/array/filterBoolean";
import type { SiteSettings } from "./graphql";
import type { AnyOverride, SeoMetaTag } from "./types";

export function resolveOverrides(
  tags: SeoMetaTag[],
  siteSettings: SiteSettings,
  overrides: AnyOverride[],
): SeoMetaTag[] {
  return filterBoolean(overrides.flat()).reduce<SeoMetaTag[]>(
    (acc, override) => override(acc, siteSettings),
    tags,
  );
}
