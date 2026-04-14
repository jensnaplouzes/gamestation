<template>
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <div class="md:w-2/3 space-y-4">
      <h3 class="text-7xl font-semibold">{{ title }}</h3>
      <p class="leading-relaxed">
        <slot />
      </p>
    </div>
    <img
      :src="image"
      :alt="title"
      :class="['w-3/4 md:w-1/4 shadow-lg border-b-4 border-b-white', $props.class]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  image: String,
  class: String,
});
</script>

<style></style>
