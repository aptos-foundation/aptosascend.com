type ReplacementType = "unicode" | "html";
type Replacements = {
  space: string;
  hyphen: string;
};

const WIDOWS_REGEX = /(\S)\s+(\S+)(\s*)$/;
const DASH_REGEX = /-/g;

const REPLACEMENTS: Record<ReplacementType, Replacements> = {
  unicode: {
    space: "\u00a0",
    hyphen: "\u2011",
  },
  html: {
    space: "&nbsp;",
    hyphen: "&#8209;",
  },
};

export function widont<I>(
  input: I,
  replacementType: ReplacementType = "unicode",
): I | string {
  if (typeof input !== "string") {
    return input;
  }

  const replacements = REPLACEMENTS[replacementType];

  return input.replace(
    WIDOWS_REGEX,
    (_, lead: string, word: string, tailSpace: string) => {
      return word.includes("-")
        ? `${lead} ${word.replace(DASH_REGEX, replacements.hyphen)}${tailSpace}`
        : `${lead}${replacements.space}${word}${tailSpace}`;
    },
  );
}
