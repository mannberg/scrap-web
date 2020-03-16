<script>
  import SecondaryButton from "./SecondaryButton.svelte";
</script>

<style>
  main {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .right {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>

<main>
  <div class="left">
    <SecondaryButton text="Profile" />
  </div>
  <div class="center">
    <span>SCRAP</span>
  </div>
  <div class="right">
    <SecondaryButton text="Change theme" />
  </div>
</main>
