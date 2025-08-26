<template>
  <div class="thelastofus">
    <main>
      <h2 id="inhalt">Welcome to The Last of Us Universe</h2>
      <h3><strong>A world where survival means sacrifice.</strong></h3>
      <p>
        Step into a hauntingly beautiful world where nature reclaims cities...
      </p>
      <section class="quote">
        <blockquote>
          "When you're lost in the darkness, look for the light."
          <span>– Fireflies Motto</span>
        </blockquote>
      </section>
      <section class="cta">
        <h3>Ready to dive deeper?</h3>
        <NuxtLink to="/charaktere" class="button">Meet the Characters</NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  bodyClass: 'thelastofus',
});
</script>

<style>
body.index {
  background-image: url('/Bilder/blackwhite.jpg');
}
</style>
