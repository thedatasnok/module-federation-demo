<script>
import DiscoveryTiles from "discovery/DiscoveryTiles";
import placeVue3Component from "discovery/placeVue3Component";

export default {
  name: "App",
  components: {
    DiscoveryTiles,
  },
  mounted() {
    placeVue3Component(DiscoveryTiles, this.$refs.discovery);
  },
};
</script>

<template>
  <main>
    <div>Vue 2 in Vite ? 🤯</div>

    <h1>Discovery</h1>
    <div ref="discovery"></div>
  </main>
</template>
