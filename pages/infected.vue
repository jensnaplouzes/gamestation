<template>
  <div class="infected">
    <Header />
    <main>
      <h2 id="inhalt">Types Of Infected:</h2>
      <!-- Runners -->
      <div class="infected-section">
        <div class="infected-text">
          <h3>Runners</h3>
          <p>Runners represent the earliest and weakest stage of infection...</p>
        </div>
        <img src="/Bilder/runners.webp" alt="Runners" width="300" />
      </div>
      <!-- Clickers -->
      <div class="infected-section">
        <div class="infected-text">
          <h3>Clickers</h3>
          <p>Clickers are one of the most feared infected...</p>
        </div>
        <img src="/Bilder/clicker.png" alt="Clickers" width="200" />
      </div>
      <!-- Stalkers, Rat King -->
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>