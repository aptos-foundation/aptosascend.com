import { hasPropertyOrName } from "./hasPropertyOrName";
import type { SeoMetaTag } from "./types";

export function seoMeta(propertyOrName: string, newValue: string) {
  return (tags: SeoMetaTag[]) => [
    ...tags.filter((tag) => !hasPropertyOrName(propertyOrName)(tag)),
    {
      tag: "meta",
      attributes: {
        [propertyOrName.startsWith("og:") ? "property" : "name"]:
          propertyOrName,
        content: newValue,
      },
      content: null,
    },
  ];
}
