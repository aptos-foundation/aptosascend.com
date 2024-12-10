import { OG_CARD_HEIGHT, OG_CARD_WIDTH } from "~/constants";
import { type OgCardData, ogCardUrl } from "../../ogCardUrl";
import { seoMeta } from "./seoMeta";
import { seoTwitterCard } from "./seoTwitterCard";

export function seoGeneratedCard(data: OgCardData) {
  const url = ogCardUrl(data);

  return [
    seoMeta("og:image", url),
    seoMeta("og:image:width", OG_CARD_WIDTH.toString()),
    seoMeta("og:image:height", OG_CARD_HEIGHT.toString()),
    seoMeta("twitter:image", url),
    seoMeta("twitter:image:width", OG_CARD_WIDTH.toString()),
    seoMeta("twitter:image:height", OG_CARD_HEIGHT.toString()),
    seoTwitterCard("summary_large_image"),
  ];
}
