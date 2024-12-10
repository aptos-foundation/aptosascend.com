import type { SiteSettings } from "./graphql";

export type SeoMetaTag = {
  tag: string;
  attributes: Record<string, string> | null;
  content: string | null;
};

export type OverrideMethod = (
  currentTags: SeoMetaTag[],
  siteSettings: SiteSettings,
) => SeoMetaTag[];
export type AnyOverride =
  | OverrideMethod
  | OverrideMethod[]
  | null
  | undefined
  | false
  | "";
