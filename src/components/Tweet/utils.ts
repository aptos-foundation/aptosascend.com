const TWEET_URL = /(?:twitter|x).com\/.*\/status\/(\d+)\??/;

export function parseTweetId(url: string) {
  const match = TWEET_URL.exec(url);

  return match ? match[1] : null;
}
