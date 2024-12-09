import type { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log('Create model "\uD83D\uDCDD Page" (`page`)');
  await client.itemTypes.create(
    {
      id: "JdG722SGTSG_jEB1Jx-0XA",
      name: "\uD83D\uDCDD Page",
      api_key: "page",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "IqzsTrdsTE-bHDiWpTA8tw",
    },
  );

  console.log('Create block model "\uD83C\uDF05 Image" (`image_block`)');
  await client.itemTypes.create(
    {
      id: "dZOhbVOTSpeaaA-wQMgPCA",
      name: "\uD83C\uDF05 Image",
      api_key: "image_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "CPQwrqOjQ1yzYZFfu6oxmA",
    },
  );

  console.log(
    'Create block model "\uD83C\uDFA0 Image Gallery" (`image_gallery_block`)',
  );
  await client.itemTypes.create(
    {
      id: "CoOdvsbUR8GLtGeuenXzMw",
      name: "\uD83C\uDFA0 Image Gallery",
      api_key: "image_gallery_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "elY56uX0QtyESWkxCKGKQw",
    },
  );

  console.log('Create block model "\uD83D\uDCFA Video" (`video_block`)');
  await client.itemTypes.create(
    {
      id: "duRvS1PrT4u6QGJZUmyINA",
      name: "\uD83D\uDCFA Video",
      api_key: "video_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "YdBwYtoORCG1ssfzESwbzw",
    },
  );

  console.log('Create model "\uD83D\uDCF0 BlogPost" (`blog_post`)');
  await client.itemTypes.create(
    {
      id: "JXXIuaitSDiI8MEfwv5QeA",
      name: "\uD83D\uDCF0 BlogPost",
      api_key: "blog_post",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "C7Z5P0YUTzKKzGmP8eo2gA",
    },
  );

  console.log('Create block model "\uD83D\uDC26 Tweet" (`tweet_block`)');
  await client.itemTypes.create(
    {
      id: "SpMNnibNTe6-1RkrVkPVcQ",
      name: "\uD83D\uDC26 Tweet",
      api_key: "tweet_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "IpSKZMfSStyGLQnHuoX7oA",
    },
  );

  console.log('Create block model "\uD83D\uDD33 Table" (`table_block`)');
  await client.itemTypes.create(
    {
      id: "BW1RFLytT0mbl4FadOjgsQ",
      name: "\uD83D\uDD33 Table",
      api_key: "table_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "AxHzJKiGQ6i-JRrv4lsTTA",
    },
  );

  console.log(
    'Create block model "\uD83D\uDD18 Accordion Item" (`accordion_item_block`)',
  );
  await client.itemTypes.create(
    {
      id: "UchhuKaoQmCfR5EGJSLFjw",
      name: "\uD83D\uDD18 Accordion Item",
      api_key: "accordion_item_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "HnQb0W_MTUa8B7yyeJawMA",
    },
  );

  console.log(
    'Create block model "\uD83E\uDE97 Accordion" (`accordion_block`)',
  );
  await client.itemTypes.create(
    {
      id: "UpxVpRmwSsaCpfzKcQAF6Q",
      name: "\uD83E\uDE97 Accordion",
      api_key: "accordion_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "f1VfCl7vTeqwNDlRlSaLew",
    },
  );

  console.log(
    'Create block model "\uD83D\uDCC4 Structured Content" (`structured_content_block`)',
  );
  await client.itemTypes.create(
    {
      id: "RGBI4foyR-W_VadVdKBxng",
      name: "\uD83D\uDCC4 Structured Content",
      api_key: "structured_content_block",
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "O0jAClzrTu-C-qwZnvtFNA",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Title" (`title`) in model "\uD83D\uDCDD Page" (`page`)',
  );
  await client.fields.create("JdG722SGTSG_jEB1Jx-0XA", {
    id: "GGSC1tfYRyCaD2We4p3F6g",
    label: "Title",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true, placeholder: "Foo bar qux" },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Modular Content (Single block) field "Content" (`content`) in model "\uD83D\uDCDD Page" (`page`)',
  );
  await client.fields.create("JdG722SGTSG_jEB1Jx-0XA", {
    id: "ZArNQcvFQzqxta99BGy9gg",
    label: "Content",
    field_type: "single_block",
    api_key: "content",
    validators: {
      single_block_blocks: { item_types: ["RGBI4foyR-W_VadVdKBxng"] },
      required: {},
    },
    appearance: {
      addons: [],
      editor: "frameless_single_block",
      parameters: {},
    },
  });

  console.log(
    'Create SEO meta tags field "SEO Settings & Social" (`seo_settings_social`) in model "\uD83D\uDCDD Page" (`page`)',
  );
  await client.fields.create("JdG722SGTSG_jEB1Jx-0XA", {
    id: "HbmAF1-dTzuzCg3t6yGI8g",
    label: "SEO Settings & Social",
    field_type: "seo",
    api_key: "seo_settings_social",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: {
      addons: [],
      editor: "seo",
      parameters: {
        fields: ["title", "description", "image", "no_index", "twitter_card"],
        previews: [
          "google",
          "twitter",
          "facebook",
          "linkedin",
          "slack",
          "telegram",
          "whatsapp",
        ],
      },
    },
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "\uD83D\uDCDD Page" (`page`)',
  );
  await client.fields.create("JdG722SGTSG_jEB1Jx-0XA", {
    id: "FS-eeJuESga2aVRCcDqmMw",
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    validators: {
      slug_title_field: { title_field_id: "GGSC1tfYRyCaD2We4p3F6g" },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null, placeholder: null },
    },
  });

  console.log(
    'Create Single asset field "Image" (`asset`) in block model "\uD83C\uDF05 Image" (`image_block`)',
  );
  await client.fields.create("dZOhbVOTSpeaaA-wQMgPCA", {
    id: "FUIdFhTHTb2TMA2Zw0GJGg",
    label: "Image",
    field_type: "file",
    api_key: "asset",
    validators: {
      required: {},
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
  });

  console.log(
    'Create Asset gallery field "Assets" (`assets`) in block model "\uD83C\uDFA0 Image Gallery" (`image_gallery_block`)',
  );
  await client.fields.create("CoOdvsbUR8GLtGeuenXzMw", {
    id: "OtjF-iV4TryilpMuQt8XqA",
    label: "Assets",
    field_type: "gallery",
    api_key: "assets",
    validators: {
      size: { min: 2 },
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "gallery", parameters: {} },
  });

  console.log(
    'Create External video field "Video" (`video`) in block model "\uD83D\uDCFA Video" (`video_block`)',
  );
  await client.fields.create("duRvS1PrT4u6QGJZUmyINA", {
    id: "RDF6XLEMSvmGjsck4ILjcw",
    label: "Video",
    field_type: "video",
    api_key: "video",
    validators: { required: {} },
    appearance: { addons: [], editor: "video", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Title" (`title`) in model "\uD83D\uDCF0 BlogPost" (`blog_post`)',
  );
  await client.fields.create("JXXIuaitSDiI8MEfwv5QeA", {
    id: "V04AMtbrSMO1-ArBu6N1gQ",
    label: "Title",
    field_type: "string",
    api_key: "title",
    validators: { required: {}, unique: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Single asset field "Image" (`image`) in model "\uD83D\uDCF0 BlogPost" (`blog_post`)',
  );
  await client.fields.create("JXXIuaitSDiI8MEfwv5QeA", {
    id: "HX5-b3QuT-i5dd6GBX8i9g",
    label: "Image",
    field_type: "file",
    api_key: "image",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Excerpt" (`excerpt`) in model "\uD83D\uDCF0 BlogPost" (`blog_post`)',
  );
  await client.fields.create("JXXIuaitSDiI8MEfwv5QeA", {
    id: "MUBhBtYPTFyulDV-C-WVRA",
    label: "Excerpt",
    field_type: "string",
    api_key: "excerpt",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Modular Content (Single block) field "Content" (`content`) in model "\uD83D\uDCF0 BlogPost" (`blog_post`)',
  );
  await client.fields.create("JXXIuaitSDiI8MEfwv5QeA", {
    id: "HvxoKGOoRrOIrBtmyOuLLA",
    label: "Content",
    field_type: "single_block",
    api_key: "content",
    validators: {
      single_block_blocks: { item_types: ["RGBI4foyR-W_VadVdKBxng"] },
      required: {},
    },
    appearance: {
      addons: [],
      editor: "frameless_single_block",
      parameters: {},
    },
  });

  console.log(
    'Create SEO meta tags field "SEO Settings & Social" (`seo_settings_social`) in model "\uD83D\uDCF0 BlogPost" (`blog_post`)',
  );
  await client.fields.create("JXXIuaitSDiI8MEfwv5QeA", {
    id: "AQlm3XP9QiylPtriPpdtPw",
    label: "SEO Settings & Social",
    field_type: "seo",
    api_key: "seo_settings_social",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: {
      addons: [],
      editor: "seo",
      parameters: {
        fields: ["title", "description", "image", "no_index", "twitter_card"],
        previews: [
          "google",
          "twitter",
          "facebook",
          "linkedin",
          "slack",
          "telegram",
          "whatsapp",
        ],
      },
    },
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "\uD83D\uDCF0 BlogPost" (`blog_post`)',
  );
  await client.fields.create("JXXIuaitSDiI8MEfwv5QeA", {
    id: "LX0j8QVSRGq3vyOOQPdXtg",
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    validators: {
      slug_title_field: { title_field_id: "V04AMtbrSMO1-ArBu6N1gQ" },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null, placeholder: null },
    },
  });

  console.log(
    'Create Single-line string field "URL" (`url`) in block model "\uD83D\uDC26 Tweet" (`tweet_block`)',
  );
  await client.fields.create("SpMNnibNTe6-1RkrVkPVcQ", {
    id: "O6R4JVLlQuGLewX_IFzo-g",
    label: "URL",
    field_type: "string",
    api_key: "url",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create JSON field "Rows" (`rows`) in block model "\uD83D\uDD33 Table" (`table_block`)',
  );
  await client.fields.create("BW1RFLytT0mbl4FadOjgsQ", {
    id: "dbnLVd47SLydn2jue9rNVQ",
    label: "Rows",
    field_type: "json",
    api_key: "rows",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "S4Mt_Hn6T0WNUQmg-Tj3XA",
      parameters: {},
      field_extension: "table",
    },
  });

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "\uD83D\uDD18 Accordion Item" (`accordion_item_block`)',
  );
  await client.fields.create("UchhuKaoQmCfR5EGJSLFjw", {
    id: "O-eOWa9ZTJWDGUgzRpH4-A",
    label: "Title",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "",
  });

  console.log(
    'Create Boolean field "Is open?" (`is_open`) in block model "\uD83D\uDD18 Accordion Item" (`accordion_item_block`)',
  );
  await client.fields.create("UchhuKaoQmCfR5EGJSLFjw", {
    id: "ZNvhdRyvQvCfy90VSdppdw",
    label: "Is open?",
    field_type: "boolean",
    api_key: "is_open",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: false,
  });

  console.log(
    'Create Structured text field "Content" (`content`) in block model "\uD83D\uDD18 Accordion Item" (`accordion_item_block`)',
  );
  await client.fields.create("UchhuKaoQmCfR5EGJSLFjw", {
    id: "RfgtucwfTmCao2YzeOklaQ",
    label: "Content",
    field_type: "structured_text",
    api_key: "content",
    validators: {
      required: {},
      structured_text_blocks: { item_types: [] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: [
          "strong",
          "code",
          "emphasis",
          "underline",
          "strikethrough",
          "highlight",
        ],
        nodes: [
          "blockquote",
          "code",
          "heading",
          "link",
          "list",
          "thematicBreak",
        ],
        heading_levels: [3, 4, 5, 6],
        blocks_start_collapsed: false,
        show_links_meta_editor: false,
        show_links_target_blank: true,
      },
    },
  });

  console.log(
    'Create Modular Content (Multiple blocks) field "Items" (`items`) in block model "\uD83E\uDE97 Accordion" (`accordion_block`)',
  );
  await client.fields.create("UpxVpRmwSsaCpfzKcQAF6Q", {
    id: "YbrJtVG7QZarSsKLCuSvww",
    label: "Items",
    field_type: "rich_text",
    api_key: "items",
    validators: {
      rich_text_blocks: { item_types: ["UchhuKaoQmCfR5EGJSLFjw"] },
      size: { min: 1 },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
  });

  console.log(
    'Create Structured text field "Content" (`structured_text`) in block model "\uD83D\uDCC4 Structured Content" (`structured_content_block`)',
  );
  await client.fields.create("RGBI4foyR-W_VadVdKBxng", {
    id: "NefUQqWWSTmg3AX0oiyneg",
    label: "Content",
    field_type: "structured_text",
    api_key: "structured_text",
    validators: {
      required: {},
      structured_text_blocks: {
        item_types: [
          "BW1RFLytT0mbl4FadOjgsQ",
          "CoOdvsbUR8GLtGeuenXzMw",
          "SpMNnibNTe6-1RkrVkPVcQ",
          "UpxVpRmwSsaCpfzKcQAF6Q",
          "dZOhbVOTSpeaaA-wQMgPCA",
          "duRvS1PrT4u6QGJZUmyINA",
        ],
      },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["JXXIuaitSDiI8MEfwv5QeA", "JdG722SGTSG_jEB1Jx-0XA"],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: [
          "strong",
          "code",
          "emphasis",
          "underline",
          "strikethrough",
          "highlight",
        ],
        nodes: [
          "blockquote",
          "code",
          "heading",
          "link",
          "list",
          "thematicBreak",
        ],
        heading_levels: [2, 3, 4, 5, 6],
        blocks_start_collapsed: true,
        show_links_meta_editor: false,
        show_links_target_blank: true,
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update model "\uD83D\uDCDD Page" (`page`)');
  await client.itemTypes.update("JdG722SGTSG_jEB1Jx-0XA", {
    title_field: { id: "GGSC1tfYRyCaD2We4p3F6g", type: "field" },
  });

  console.log('Update model "\uD83D\uDCF0 BlogPost" (`blog_post`)');
  await client.itemTypes.update("JXXIuaitSDiI8MEfwv5QeA", {
    title_field: { id: "V04AMtbrSMO1-ArBu6N1gQ", type: "field" },
    image_preview_field: { id: "HX5-b3QuT-i5dd6GBX8i9g", type: "field" },
    excerpt_field: { id: "MUBhBtYPTFyulDV-C-WVRA", type: "field" },
  });

  console.log("Manage menu items");

  console.log('Create menu item "\uD83D\uDCDD Page"');
  await client.menuItems.create({
    id: "OxIhMJjsS8qXa-b8fBRB_A",
    label: "\uD83D\uDCDD Page",
    item_type: { id: "JdG722SGTSG_jEB1Jx-0XA", type: "item_type" },
  });

  console.log('Create menu item "BlogPost"');
  await client.menuItems.create({
    id: "JKnbw5WxQjmGRqT_D360Ag",
    label: "BlogPost",
    item_type: { id: "JXXIuaitSDiI8MEfwv5QeA", type: "item_type" },
  });

  console.log("Manage schema menu items");

  console.log('Create block schema menu item "\uD83D\uDCC4 Content"');
  await client.schemaMenuItems.create({
    id: "XMlg1yBpSUKTGB0NqsfwQw",
    label: "\uD83D\uDCC4 Content",
    kind: "modular_block",
  });

  console.log(
    'Update block schema menu item for block model "\uD83D\uDCFA Video" (`video_block`)',
  );
  await client.schemaMenuItems.update("YdBwYtoORCG1ssfzESwbzw", {
    position: 7,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "\uD83D\uDC26 Tweet" (`tweet_block`)',
  );
  await client.schemaMenuItems.update("IpSKZMfSStyGLQnHuoX7oA", {
    position: 6,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "\uD83D\uDD33 Table" (`table_block`)',
  );
  await client.schemaMenuItems.update("AxHzJKiGQ6i-JRrv4lsTTA", {
    position: 5,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "\uD83C\uDFA0 Image Gallery" (`image_gallery_block`)',
  );
  await client.schemaMenuItems.update("elY56uX0QtyESWkxCKGKQw", {
    position: 4,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "\uD83C\uDF05 Image" (`image_block`)',
  );
  await client.schemaMenuItems.update("CPQwrqOjQ1yzYZFfu6oxmA", {
    position: 3,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "\uD83D\uDD18 Accordion Item" (`accordion_item_block`)',
  );
  await client.schemaMenuItems.update("HnQb0W_MTUa8B7yyeJawMA", {
    position: 2,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "\uD83D\uDCC4 Structured Content" (`structured_content_block`)',
  );
  await client.schemaMenuItems.update("O0jAClzrTu-C-qwZnvtFNA", {
    position: 0,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "\uD83E\uDE97 Accordion" (`accordion_block`)',
  );
  await client.schemaMenuItems.update("f1VfCl7vTeqwNDlRlSaLew", {
    position: 1,
    parent: { id: "XMlg1yBpSUKTGB0NqsfwQw", type: "schema_menu_item" },
  });

  console.log(
    'Update model schema menu item for model "\uD83D\uDCDD Page" (`page`)',
  );
  await client.schemaMenuItems.update("IqzsTrdsTE-bHDiWpTA8tw", {
    position: 1,
  });

  console.log(
    'Update model schema menu item for model "\uD83D\uDCF0 BlogPost" (`blog_post`)',
  );
  await client.schemaMenuItems.update("C7Z5P0YUTzKKzGmP8eo2gA", {
    position: 2,
  });

  console.log('Update block schema menu item "\uD83D\uDCC4 Content"');
  await client.schemaMenuItems.update("XMlg1yBpSUKTGB0NqsfwQw", {
    position: 3,
  });
}
