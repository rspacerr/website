<nav>
  <div id="logo">
    r3
  </div>
  <ul>
    <li>About Me</li>
    <li>Portfolio</li>
    <li>Blog</li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    border-bottom: 2px dashed gold;
    width: 100%;
    height: 8vh;
    min-height: 50px;
    justify-content: center;
    align-items: center;
    /* background-color: #0a0034; */
  }

  div#logo {
    display: flex;
    height: 100%;
    flex: 0 0 120px;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  div#logo:hover {
    background-color: rebeccapurple;
    font-weight: bold;
    color: orange;
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
</style>