import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const post = await import(`../posts/${params.slug}.md`);
  const { title, date } = post.metadata;
  const Content = post.default;

  if (!post) {
    throw error(404, `Post not found`);
  }

  return {
    title, 
    date,
    Content
  };
}