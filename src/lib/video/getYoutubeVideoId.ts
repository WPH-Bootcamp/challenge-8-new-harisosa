export function getYoutubeVideoId(url: string): string | null {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.split("/").filter(Boolean)[0] ?? null;
    }

    // youtube.com/watch?v=<id>
    if (u.searchParams.get("v")) return u.searchParams.get("v");

    // youtube.com/embed/<id>
    const parts = u.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];

    return null;
  } catch {
    return null;
  }
}
