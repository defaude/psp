<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PuzzleContainer",

  mounted() {
    fetch("./config.json")
      .then(response => response.json())
      .then(({ styles, examples }) => {
        console.info("Successfully loaded config.");
        this.styles = styles;
        this.examples = examples;
      })
      .catch(e => {
        console.error("Could not load config.", e);
        this.$router.push({ name: "error" });
      });
  },

  data() {
    return {
      styles: [],
      examples: [],
      loaded: false
    };
  }
});
</script>
