export type TypographyKind =
  | "primary"
  | "secondary"
  | "active"
  | "raw"
  | "heading"
  | "muted"
  | "inherit";
export type TypographyFont = "regular" | "mono";
export type TypographySize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "none";
export type HeadingTag = (typeof HEADING)[number];

const KIND_CLASSES: Record<TypographyKind, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  active: "text-active",
  raw: "",
  inherit: "text-inherit",
  heading: "font-semibold",
  muted: "text-muted",
};

const FONT_CLASSES: Record<TypographyFont, string> = {
  regular: "font-sans",
  mono: "font-mono",
};

const SIZE_CLASSES: Record<TypographySize, string> = {
  xs: "text-xs",
  sm: "text-xs md:text-sm",
  md: "text-sm md:text-md",
  lg: "text-md md:text-lg",
  xl: "text-lg md:text-xl",
  "2xl": "text-lg md:text-2xl",
  "3xl": "text-xl md:text-3xl",
  "4xl": "text-2xl md:text-4xl",
  "5xl": "text-4xl md:text-5xl",
  none: "",
};

const HEADING = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

const HEADING_AS_SIZE_MAP: Record<HeadingTag, TypographySize> = {
  h1: "3xl",
  h2: "2xl",
  h3: "xl",
  h4: "lg",
  h5: "md",
  h6: "sm",
};

function isHeadingComponent(component: string): component is HeadingTag {
  return (
    typeof component === "string" && HEADING.includes(component as HeadingTag)
  );
}

export function getTypographyStyle(
  kind: TypographyKind = "primary",
  font: TypographyFont = "regular",
) {
  return [...KIND_CLASSES[kind], FONT_CLASSES[font]];
}

export function getTypographySize(size?: TypographySize, component?: string) {
  if (component && isHeadingComponent(component) && !size) {
    return SIZE_CLASSES[HEADING_AS_SIZE_MAP[component]];
  }

  return SIZE_CLASSES[size ?? "md"];
}
