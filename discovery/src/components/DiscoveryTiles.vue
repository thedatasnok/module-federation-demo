<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="(_, i) in Array(10)" class="h-8 bg-red-100 rounded-md">
      {{ i + 1 }}
    </div>
  </div>
</template>
