<template>
  <div
    class="card transition duration-300 hover:scale-105"
    :style="{ backgroundImage: `url(${image})` }"
    @click="onClick"
  ></div>
</template>

<script setup>
defineProps({
  name: String,
  image: String,
  onClick: Function,
});
</script>

<style scoped>
.card {
  width: 250px;
  height: 350px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
}
</style>
