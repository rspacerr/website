<script>
	import '$lib/styles/post.scss';
	export let data;
	const { title, date, Content } = data;
</script>

<article>
	<h1>{title}</h1>
	<h5 class="date">Published: {date}</h5>
	<Content />
</article>