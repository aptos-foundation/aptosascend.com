import { seoMeta } from "./seoMeta";

export function seoShareTitle(newTitle: string) {
  return [seoMeta("og:title", newTitle), seoMeta("twitter:title", newTitle)];
}
