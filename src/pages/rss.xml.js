import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('thinking');
  const sortedPosts = posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: 'Rachel Koblic',
    description: 'Designing the Logic Layer for AI-Era Learning. Essays and notes on knowledge graphs, curriculum design, and the future of education.',
    site: context.site || 'https://rachelkoblic.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `/thinking/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
