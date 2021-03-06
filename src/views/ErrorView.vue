<template>
  <div id="error-view">
    <h1>Sorry</h1>
    <p>Da ist wohl offenbar etwas schief gelaufen.</p>
    <p>
      Bitte versuch doch einmal,
      <a href="#" @click.prevent.stop="reload">die Seite neu zu laden</a>. Wenn
      das auch nicht funktioniert, stimmt mit dem System gerade etwas nicht.
    </p>
    <p>Bitte sag Deinem Lehrer Bescheid.</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ErrorView",

  methods: {
    reload() {
      location.href = location.href.replace(location.hash, "");
    }
  }
});
</script>
