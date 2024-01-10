import RSS from "rss";
import { siteConfig } from "$lib/utilities/config.js";

export async function GET(event) {
  const rss = new RSS({
    title: siteConfig.title,
    site_url: event.url.origin,
    description: siteConfig.description,
    feed_url: `${event.url.origin}/rss.xml`,
    copyright: "hypcerce.io"
  });

  return new Response(rss.xml(), {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml"
    }
  });
}
