<script>
  import Logo from "./Logo.svelte";
</script>

<nav>
  <div id="logo">
    <Logo />
  </div>
  <ul>
    <li>ABOUT</li>
    <li>PORTFOLIO</li>
    <li>BLOG</li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    border-bottom: 2px solid orange;
    width: 100%;
    height: 10vh;
    min-height: 75px;
    justify-content: center;
    align-items: center;
    background-color: #0a0034;
  }

  div#logo {
    display: flex;
    height: 100%;
    font-size: 2em;
    flex: 0 0 120px;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  ul {
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: center;
    padding-left: 0;
    margin: 0;
    font-weight: bold;
  }
  ul:last-child {
    margin-right: 120px;
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
  li:hover {
    text-decoration: underline;
    color: orange;    
  }

</style>