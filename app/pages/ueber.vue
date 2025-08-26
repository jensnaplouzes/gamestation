<template>
  <div class="ueberseite">
    <main>
      <h2 id="story">Story and Setting</h2>
      <p>
        The story is set in a post-apocalyptic United States devastated by a
        <strong>deadly fungal infection</strong>...
      </p>
      <img src="/Bilder/tloupart2.png" alt="The Last of Us" width="300" />
      <h3>Gameplay Features</h3>
      <table class="features-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stealth</td>
            <td>Use stealth tactics to avoid infected and hostile humans...</td>
          </tr>
          <tr>
            <td>Combat</td>
            <td>
              Engage in intense close-quarters combat and brutal gunfights...
            </td>
          </tr>
          <tr>
            <td>Crafting</td>
            <td>Scavenge for scarce supplies and craft essential items...</td>
          </tr>
        </tbody>
      </table>
      <p><NuxtLink to="#story">Back to top ↑</NuxtLink></p>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  bodyClass: 'ueberseite',
});
</script>

<style>
body {
  background-image: url('/Bilder/ellie0.jpg');
}
</style>
