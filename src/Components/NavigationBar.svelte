<script>
  import SecondaryButton from "./SecondaryButton.svelte";
  
  export let showContent = true;
</script>

<style>
  main {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .left,
  .center,
  .right {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .left {
    justify-content: flex-start;
  }
  
  .center {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
  }
</style>

<main>

  <div class="left">
    {#if showContent}
      <SecondaryButton text="Profile" />
    {/if}
  </div>

  <div class="center">
    <span>SCRAP</span>
  </div>

  <div class="right">
    {#if showContent}
      <SecondaryButton text="Change theme" />
    {/if}
  </div>

</main>
