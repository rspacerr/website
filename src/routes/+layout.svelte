<script lang="ts">
  import '$lib/styles/app.css';
  import Navbar from '$lib/components/Navbar.svelte';
	import logo from '$lib/assets/logo.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={logo}/></svelte:head>

<header>
  <Navbar />
</header>

<main>
  {@render children()}
</main>

<footer>
  <!-- TODO: footer -->
</footer>
