<template>
  <div class="infected">
    <h2 id="inhalt">Types Of Infected:</h2>

    <div class="infected-section">
      <div class="infected-text">
        <h3>Runners</h3>
        <p>Runners represent the earliest and weakest stage of infection...</p>
      </div>
      <img src="/Bilder/runners.webp" alt="Runners" width="300" />
    </div>

    <div class="infected-section">
      <div class="infected-text">
        <h3>Clickers</h3>
        <p>Clickers are one of the most feared infected...</p>
      </div>
      <img src="/Bilder/clicker.png" alt="Clickers" width="200" />
    </div>
    <!-- später witer machen mit Stalkers, Rat King usw. -->
  </div>
</template>

<script setup>
definePageMeta({
  bodyClass: 'infected',
});
</script>

<style>
body {
  background-image: url('/Bilder/tlou.world.jpg');
}
</style>
