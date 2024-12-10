import type { SeoMetaTag } from "./types";

export function hasPropertyOrName(propertyOrName: string) {
  return (tag: SeoMetaTag) => {
    return (
      tag.attributes?.property === propertyOrName ||
      tag.attributes?.name === propertyOrName
    );
  };
}
