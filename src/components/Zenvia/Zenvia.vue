<template>
  <div>
    <h1>Zenvia</h1>
    <button @click="send">Send</button>
  </div>
</template>

<script>
import { send } from "./index";

export default {
  name: "ZenviaComponent",
  methods: {
    send() {
      send();
    },
  },
};
</script>
