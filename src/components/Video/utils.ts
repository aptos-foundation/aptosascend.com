export function getUrl(provider: string, videoUid: string) {
  switch (provider) {
    case "youtube":
      return `//www.youtube.com/embed/${videoUid}?rel=0`;
    case "vimeo":
      return `//player.vimeo.com/video/${videoUid}`;
    default:
      return null;
  }
}
