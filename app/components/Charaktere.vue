<template>
  <div v-if="character" class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4">
    <div class="card-large" :style="{ backgroundImage: `url(${character.image})` }"></div>

    <div class="text-white text-base md:text-lg flex-1 min-w-0">
      <h3 class="text-xl font-bold mb-2">
        {{ character.name }}
      </h3>

      <p v-if="character.description">
        {{ character.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  character: {
    name: string;
    image: string;
    description?: string;
  };
}>();
</script>

<style scoped>
.card-large {
  width: 250px;
  height: 400px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}
</style>
