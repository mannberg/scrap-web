<script>
  export let text;
  export let rightAligned = false;
  export let leftAligned = false;
</script>

<style>
  p {
    margin: 3px;
    padding: 5px 10px;
    font-size: 0.7em;
    text-transform: lowercase;
    color: #afbac3;
  }

  .rightAligned {
    text-align: right;
  }

  .leftAligned {
    text-align: left;
  }
</style>

<p class:leftAligned class:rightAligned>{text}</p>
