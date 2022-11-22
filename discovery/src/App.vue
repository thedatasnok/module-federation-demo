<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: discovery</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>

    <div>
      <Cart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//@ts-ignore
import Cart from "cart/Cart";

export default defineComponent({
  components: {
    Cart,
  },
});
</script>
