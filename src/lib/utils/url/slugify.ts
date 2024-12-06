const SPACE_REGEX = /\s/g;
const SLUG_REGEX = /[^\w-]+/g;

export function slugify(str: string) {
  return str.toLowerCase().replace(SPACE_REGEX, "-").replace(SLUG_REGEX, "");
}
