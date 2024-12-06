const HTTP_PROTOCOL_REGEXP = /^https?:\/\//i;

export function hasHttpProtocol(url: string) {
  return HTTP_PROTOCOL_REGEXP.test(url);
}
