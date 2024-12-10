import { truncate } from "lodash-es";
import { seoMeta } from "./seoMeta";

export function seoDescription(rawDescription: string) {
  const description = truncate(rawDescription, { length: 200 });

  return [
    seoMeta("description", description),
    seoMeta("twitter:description", description),
    seoMeta("og:description", description),
  ];
}
