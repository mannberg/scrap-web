<script>
  export let text;
  export let disabled;
</script>

<style>
  button {
    background-color: #4d839b;
    border-radius: 2px;
    border: 0px;
    color: #fff;
    margin: 10px;
    min-width: 90px;
    text-transform: capitalize;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }

  button:disabled {
    opacity: 0.5;
  }
</style>

<button {disabled}>{text}</button>
