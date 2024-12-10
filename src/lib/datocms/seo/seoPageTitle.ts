import { filterBoolean } from "~/lib/utils/array/filterBoolean";
import type { SiteSettings } from "./graphql";
import { hasTag } from "./hasTag";
import type { SeoMetaTag } from "./types";

export function seoPageTitle(...chunks: string[]) {
  return (tags: SeoMetaTag[], siteSettings: SiteSettings) => [
    ...tags.filter((tag) => !hasTag("title")(tag)),
    {
      tag: "title",
      content: filterBoolean([
        ...chunks,
        siteSettings._site.globalSeo?.titleSuffix,
      ])
        .join("")
        .trim(),
      attributes: {},
    },
  ];
}
