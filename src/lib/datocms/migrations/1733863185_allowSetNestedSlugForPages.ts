import type { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Slug field "Slug" (`slug`) in model "\uD83D\uDCDD Page" (`page`)',
  );
  await client.fields.update("FS-eeJuESga2aVRCcDqmMw", {
    validators: {
      slug_title_field: { title_field_id: "GGSC1tfYRyCaD2We4p3F6g" },
      slug_format: { custom_pattern: "^(?:[\\w-]\\/?)+$" },
      required: {},
      unique: {},
    },
  });
}
