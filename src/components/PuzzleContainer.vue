<template>
  <div v-if="isReady">ready</div>
  <div v-else>not ready</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PuzzleContainer",

  mounted() {
    this.$store
      .dispatch("loadConfig")
      .then(() => {
        console.info("Successfully loaded config.");
      })
      .catch(e => {
        console.error("Could not load config", e);
        this.$router.push({ name: "error" });
      });
  },

  computed: {
    isReady(): boolean {
      return this.$store.getters.isConfigReady;
    }
  }
});
</script>
