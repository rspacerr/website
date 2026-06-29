import type { BlogData } from "$lib/types";

export const fetchPosts = async () => {
  const postsRaw = import.meta.glob("/src/routes/blog/posts/*.md");
  const iterablePosts = Object.entries(postsRaw) as [string, () => Promise<{ metadata: BlogData }>][];

  const allPosts = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
    const { metadata } = await resolver(); 
    // slice off route and file extension
    const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
}