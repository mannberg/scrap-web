<script>
  import NavigationBar from "./Components/NavigationBar.svelte";
  import Editor from "./Editor.svelte";
  import LandingPage from "./LandingPage.svelte";
</script>

<style>
  main {
    background-color: #f8f8f8;
  }
</style>

<main>
  <NavigationBar showContent={false} />
  <LandingPage />

  <!-- <NavigationBar/> -->
  <!-- <Editor/> -->
</main>
