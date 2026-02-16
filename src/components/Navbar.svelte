<nav>
  <div id="logo">
    r3
  </div>
  <ul>
    <li>About Me</li>
    <li>Portfolio</li>
    <li>Blog</li>
  </ul>
  <div id="save">
    Box
  </div>
</nav>

<style>
  nav {
    display: flex;
    border-bottom: 2px dashed gold;
    width: 100%;
    /* background-color: #0a0034; */
  }

  div#logo, #save {
    background-color: rebeccapurple;
    width: 5%;
    height: 100%;
    margin: 0 auto;
    padding: 0 auto;
  }

  ul {
    width: 85%;
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: center;
    padding-left: 0;
  }

  li {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
  }
</style>