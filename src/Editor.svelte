<script>
  import NavigationBar from "./NavigationBar.svelte";
  import PrimaryButton from "./PrimaryButton.svelte";
  import { swift } from "svelte-highlight/languages";
  import marked from "marked";
  import hljs from "highlight.js";
  import { github } from "svelte-highlight/styles";

  marked.setOptions({
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });

let markdownSource = `## Testing
  
Let's try some stuff

\`\`\`
struct X {
  let x: Int
  let y: Int

  func abc() -> Int {
    return x + y
  }
}
\`\`\`
  `;

$: htmlOutput = marked(markdownSource);
$: publishButtonDisabled = markdownSource.length == 0;
</script>

<style>
  .view-description {
    margin: 3px;
    padding: 5px 10px;
    font-size: 0.7em;
    text-transform: lowercase;
    text-align: right;
    color: #afbac3;
  }
  .container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .bottom-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
  .html-output {
    width: 100%;
    padding: 0 1.5em;
    font-family: "Roboto", sans-serif;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap"
    rel="stylesheet" />
  {@html github}
</svelte:head>

<NavigationBar/>
<div class="container">
  <div class="left-container">
    <p class="view-description">Markdown editor</p>
    <textarea bind:value={markdownSource} />
  </div>
  <div class="right-container">
    <p class="view-description">Webpage output</p>
    <div class="html-output">
      {@html htmlOutput}
    </div>
  </div>
</div>
<div class="bottom-bar">
  <PrimaryButton text="Publish" disabled={publishButtonDisabled} />
</div>
