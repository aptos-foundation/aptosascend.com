import type { MetaEntry } from "datocms-structured-text-utils";

export const metaToProps = (meta?: MetaEntry[]) => {
  if (!meta) {
    return {};
  }

  return meta.reduce<Record<string, string>>((acc, entry) => {
    acc[entry.id] = entry.value;

    return acc;
  }, {});
};
