import { DATOCMS_DRAFT_MODE_COOKIE_NAME } from "astro:env/client";
import { DATOCMS_SIGNED_COOKIE_JWT_SECRET } from "astro:env/server";
import type { APIContext, AstroCookies } from "astro";
import jwt, { type JwtPayload } from "jsonwebtoken";

/**
 * Generates a JSON Web Token (JWT) that is used as a signed cookie for entering
 * Draft Mode.
 */
function jwtToken() {
  return jwt.sign({ enabled: true }, DATOCMS_SIGNED_COOKIE_JWT_SECRET);
}

/**
 * To be used on API routes: sets the signed cookie required to enter Draft
 * Mode.
 */
export function enableDraftMode(context: APIContext) {
  context.cookies.set(DATOCMS_DRAFT_MODE_COOKIE_NAME, jwtToken(), {
    path: "/",
    sameSite: "none",
    secure: true,
    httpOnly: false,
  });
}

/**
 * To be used on API routes: disables Draft Mode by deleting the cookie.
 */
export function disableDraftMode(context: APIContext) {
  context.cookies.delete(DATOCMS_DRAFT_MODE_COOKIE_NAME, {
    path: "/",
    sameSite: "none",
    secure: true,
    httpOnly: false,
  });
}

/**
 * To be used on API routes: checks if Draft Mode is enabled for a given
 * request. It retrieves the cookie and verifies its JWT token.
 */
export function isDraftModeEnabled(
  contextOrCookies: APIContext | AstroCookies,
) {
  const cookies =
    "cookies" in contextOrCookies ? contextOrCookies.cookies : contextOrCookies;

  const cookie = cookies.get(DATOCMS_DRAFT_MODE_COOKIE_NAME);

  if (!cookie) {
    return false;
  }

  try {
    const payload = jwt.verify(
      cookie.value,
      DATOCMS_SIGNED_COOKIE_JWT_SECRET,
    ) as JwtPayload;

    return payload.enabled as boolean;
  } catch (e) {
    return false;
  }
}

/**
 * Returns the HTTP headers needed to enable Draft Mode.
 */
export function draftModeHeaders(): HeadersInit {
  return {
    Cookie: `${DATOCMS_DRAFT_MODE_COOKIE_NAME}=${jwtToken()};`,
  };
}
