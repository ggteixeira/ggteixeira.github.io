import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getCollection("garden");

  const publishedPosts = posts.filter((post) => {
    return post.data.draft === false && post.data.tags.includes("evergreen");
  });

  const items = [...publishedPosts];

  items.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      content: sanitizeHtml(parser.render(item.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      pubDate: item.data.date,
      link: `/garden/${item.slug}/`,
      // link: item.slug.startsWith("garden")
      //   ? `/garden/${item.slug}/`
      //   : `/projects/${item.slug}/`,
    })),
  });
}
