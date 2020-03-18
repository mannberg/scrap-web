<script>
  import PrimaryButton from "./Components/PrimaryButton.svelte";
  import InfoText from "./Components/InfoText.svelte";

  export let state;

  const { 
    title, 
    username, 
    password, 
    loginButtonEnabled } = state;
</script>

<style>
  h1,
  p {
    text-align: center;
  }

  p {
    min-height: 100px;
  }

  input {
    max-width: 100px;
  }

  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main * {
    min-width: 400px;
    width: 70%;
  }

  .button-bar {
    display: flex;
    margin-top: 100px;
    justify-content: center;
  }

  .label-and-input {
    max-width: 100px;
    display: flex;
    flex-direction: column;
  }
</style>

<main>

  <h1>{title}</h1>

  <!-- TODO: Make component if current design stays -->
  <div class="label-and-input">
    <InfoText text="Email address" />
    <input data-testid="username" bind:value={$username} />
  </div>

  <div class="label-and-input">
    <InfoText leftAligned text="Password" />
    <input data-testid="password" type="password" bind:value={$password} />
  </div>

  <PrimaryButton leftAligned text="Login" disabled={!$loginButtonEnabled} />

  <div class="button-bar">
    <PrimaryButton text="Register" />
  </div>

</main>
