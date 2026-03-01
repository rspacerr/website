<script>
  import { goto } from "$app/navigation";

  function goHome() {
    goto('/');
  }
</script>

<svg 
  viewBox="0 0 10 10" 
  class="logo"
  xmlns="http://www.w3.org/2000/svg"
  role="button"
  on:click={goHome}
  on:keydown={(e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
  }}
  tabindex="0"
  aria-label="Home"
>
  <text x="5.5" y="5.75">𝕣</text>
  <text x="7" y="4.75" class="sup">3</text>
</svg>

<style>
  svg {
    cursor: pointer;
  }

  text {
    fill: white;
    font-weight: bold;
    font-size: 3px;
  }

  .sup {
    font-size: 2px;
  }

  .logo:hover text {
    fill: orange;
  }
</style>