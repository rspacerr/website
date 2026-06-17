<script lang="ts">
  import { page } from "$app/state";
</script>

<div id="error">
  <h1 id="error-status">
    Error {page.status}
  </h1>
  <h2 id="error-message">
    {page.error ? page.error.message : "Something unexpected happened, please check in later!"}
  </h2>
</div>

<style>
#error {
  display: flex;
  flex-wrap: wrap;
}
#error-status {
  width: 100%;
}

#error-message {
  width: 100%;
}
</style>
