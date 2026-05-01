type RssPost = {
  data: {
    draft?: boolean;
    tags: string[];
  };
};

export function isRssEligible(post: RssPost): boolean {
  return post.data.draft !== true && post.data.tags.includes("evergreen");
}
