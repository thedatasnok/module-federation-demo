<script>
/* eslint-disable */
import placeViteComponent from "cart/placeViteComponent";
import Cart from "cart/Cart";
import Sales from "report/Sales";

export default {
  name: "App",
  components: {
    Sales
  },
  mounted() {
    placeViteComponent(Cart, this.$refs.dass);
  }
};
</script>

<template>
  <div id="app">
    Shell (Vue 2 CLI)
    <div ref="dass"></div>
    <Sales />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
