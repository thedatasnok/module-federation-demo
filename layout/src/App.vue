<script>
import DiscoveryTiles from "discovery/DiscoveryTiles";
import Cart from "cart/Cart";
import placeVue3Component from "discovery/placeVue3Component";
import Sales from "report/Sales";

export default {
  name: "App",
  components: {
    DiscoveryTiles,
    Cart,
    Sales
  },
  mounted() {
    placeVue3Component(DiscoveryTiles, this.$refs.discovery);
    placeVue3Component(Cart, this.$refs.cart);
  },
};
</script>

<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: layout</div>
    <div>Framework: vue2</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>

    <h2 class="mt-2">Discovery</h2>
    <div ref="discovery"></div>

    <h2 class="mt-2">Cart</h2>
    <div ref="cart"></div>
    
    <h2 class="mt-2">Sales</h2>
    <Sales />
  </div>
</template>
