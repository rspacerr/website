<script>
  import Logo from "./Logo.svelte";
</script>

<nav>
  <div id="logo">
    <Logo />
  </div>
  <ul>
    <li><a href="/about">about</a></li>
    <li><a href="/blog">blog</a></li>
    <li><a href="/portfolio">portfolio</a></li>
    <li><a href="/misc">misc</a></li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    width: 100%;
    height: 10vh;
    background-color: #202020;
    min-height: 75px;

    /* center navbar */
    justify-content: center;
    align-items: center;
  }

  div#logo {
    display: flex;
    width: 20%;
    height: 100%;
    font-size: 2em;
    flex: 0 0 120px;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  ul {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: center;
    padding-left: 0;
    margin: 0;
    font-weight: bold;
  }
  
  li a {
    color: white;
    font-weight: bold;
  }

  li {
    display: flex;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    justify-content: center;
    align-items: center;
  }
  li a:hover {
    text-decoration: underline;
    color: orange;    
  }
</style>