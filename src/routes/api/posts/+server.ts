import { fetchPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const posts = await fetchPosts();
  const sortedPosts = posts.sort((a,b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  return json(sortedPosts);
}