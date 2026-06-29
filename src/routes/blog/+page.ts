import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageLoad = async({ fetch }) => {
  const res = await fetch(`/api/posts`);
  const posts: Post[] = await res.json();

  return {
    posts
  };
};