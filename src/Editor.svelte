<script>
  import PrimaryButton from "./Components/PrimaryButton.svelte";
  import InfoText from "./Components/InfoText.svelte";
  import { github } from "svelte-highlight/styles";
  import { editorState } from "./stores.js";

  const {
    markdownDraft,
    markdownHTMLOutput,
    publishButtonEnabled
  } = editorState;
</script>

<style>
  textarea {
    background-color: transparent;
    color: #080808;
    border: none;
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 0.9em;
    padding-left: 10px;
  }

  textarea:focus {
    outline: none;
  }

  .bottom-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  .output {
    width: 100%;
    padding: 0 1.5em;
    font-family: "Roboto", sans-serif;
  }

  .left-container,
  .right-container {
    width: 50%;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    height: 85vh;
    background: #ffffff;
    box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
    margin: 5px;
  }

  .right-container {
    overflow: auto;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap"
    rel="stylesheet" />
  {@html github}
</svelte:head>

<div class="container">

  <div class="left-container">
    <InfoText text="Markdown editor" />
    <textarea bind:value={$markdownDraft} />
  </div>

  <div class="right-container">
    <InfoText text="Webpage output" />
    <div class="output">
      {@html $markdownHTMLOutput}
    </div>
  </div>

</div>

<div class="bottom-bar">
  <PrimaryButton text="Publish" disabled={!$publishButtonEnabled} />
</div>
