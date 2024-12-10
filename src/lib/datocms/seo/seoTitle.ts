import { seoPageTitle } from "./seoPageTitle";
import { seoShareTitle } from "./seoShareTitle";

export function seoTitle(newTitle: string) {
  return [seoPageTitle(newTitle), seoShareTitle(newTitle)];
}
