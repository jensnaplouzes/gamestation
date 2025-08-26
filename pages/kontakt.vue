<template>
  <div class="kontaktseite">
    <Header />
    <main>
      <h2 id="kontaktformular">Kontaktformular</h2>
      <p>Schreib uns eine Nachricht, wenn du Fragen hast oder Feedback geben möchtest!</p>
      <div class="text-with-sticker">
        <form action="#" method="post">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" required /><br /><br />
          <label for="email">E-Mail:</label><br />
          <input type="email" id="email" name="email" required /><br /><br />
          <label for="nachricht">Nachricht:</label><br />
          <textarea id="nachricht" name="nachricht" rows="5" required></textarea><br /><br />
          <button type="submit">Absenden</button>
        </form>
        <img src="/Bilder/clicker.boss.png" alt="Clicker Boss" class="sticker" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>