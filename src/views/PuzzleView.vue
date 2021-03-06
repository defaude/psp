<template>
  <div id="puzzle-view">
    <h1>Stilpuzzle</h1>
    <puzzle-container />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PuzzleContainer from "@/components/PuzzleContainer.vue";

export default Vue.extend({
  name: "PuzzleView",
  components: {
    PuzzleContainer
  }
});
</script>
