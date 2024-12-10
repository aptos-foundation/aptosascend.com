import { seoMeta } from "./seoMeta";

export function seoTwitterCard(type: "summary" | "summary_large_image") {
  return seoMeta("twitter:card", type);
}
