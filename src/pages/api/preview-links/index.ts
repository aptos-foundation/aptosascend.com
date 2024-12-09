import { PREVIEW_SECRET_API_TOKEN } from "astro:env/server";
import type { APIRoute } from "astro";
import { recordToWebsiteRoute } from "~/lib/datocms/models";
import {
  handleUnexpectedError,
  invalidRequestResponse,
  json,
  withCORS,
} from "../utils";

export const OPTIONS: APIRoute = () => new Response("OK", withCORS());

type PreviewLink = {
  label: string;
  url: string;
  reloadPreviewOnRecordUpdate?: boolean | { delayInMs: number };
};

type WebPreviewsResponse = {
  previewLinks: PreviewLink[];
};

/**
 * This route handler implements the Previews webhook required for the "Web
 * Previews" plugin:
 *
 * https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews#the-previews-webhook
 */

export const POST: APIRoute = async ({ url, request }) => {
  try {
    const token = url.searchParams.get("token");

    if (token !== PREVIEW_SECRET_API_TOKEN) {
      return invalidRequestResponse("Invalid token", 401);
    }

    const { item, itemType } = await request.json();
    const recordUrl = await recordToWebsiteRoute(
      item,
      itemType.attributes.api_key,
    );
    const response: WebPreviewsResponse = { previewLinks: [] };

    if (recordUrl) {
      if (item.meta.status !== "published") {
        response.previewLinks.push({
          label: "Draft version",
          url: new URL(
            `/api/draft-mode/enable?url=${recordUrl}&token=${token}`,
            request.url,
          ).toString(),
        });
      }

      if (item.meta.status !== "draft") {
        response.previewLinks.push({
          label: "Published version",
          url: new URL(
            `/api/draft-mode/disable?url=${recordUrl}`,
            request.url,
          ).toString(),
        });
      }
    }

    return json(response, withCORS());
  } catch (error) {
    return handleUnexpectedError(error);
  }
};
