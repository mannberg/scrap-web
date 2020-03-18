<script>
  import NavigationBar from "./Components/NavigationBar.svelte";
  import Editor from "./Editor.svelte";
  import LandingPage from "./LandingPage.svelte";
  import { landingPageState } from "./stores.js";

</script>

<style>
  main {
    background-color: #f8f8f8;
  }
</style>

<main>
  <NavigationBar showContent={false} />
  <LandingPage state={ landingPageState }/>

  <!-- <NavigationBar/> -->
  <!-- <Editor/> -->
</main>
