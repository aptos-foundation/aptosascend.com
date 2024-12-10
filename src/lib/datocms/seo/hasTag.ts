import type { SeoMetaTag } from "./types";

export function hasTag(tagName: string) {
  return (tag: SeoMetaTag) => tag.tag === tagName;
}
