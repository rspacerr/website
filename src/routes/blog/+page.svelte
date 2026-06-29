<script lang="ts">
  import type { PageData } from './$types';
  import '$lib/styles/blog.scss';

  export let data: PageData;
</script>

<h1>Blog</h1>
<ul class="post-list">
  {#each data.posts as post}
  <li class="post-box">
    <h2 class="article-title">
      <a href={post.path}>{post.meta.title}</a>
    </h2>
    {#if post.meta.description}
      <div class="description">
        {post.meta.description}
      </div>
    {/if}
    <h5 class="date">
      Published {post.meta.date}
    </h5>
  </li>
  {/each}
</ul>