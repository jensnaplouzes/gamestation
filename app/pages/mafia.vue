<template>
  <div id="mafia" class="w-full">
    <div class="container">
      <br />

      <div class="flex flex-col justify-center items-center gap-2">
        <!-- LOGO -->
        <div class="flex items-center">
          <img src="/Bilder/mafia.city.png" alt="Mafia logo" width="600" class="shrink-0" />
        </div>

        <br /><br />

        <!-- INTRO TEXT -->
        <p class="text-base leading-relaxed text-center">
          Ready to step into a world where every choice matters, every street has a story, and
          danger lurks around every corner.<br />
          The Mafia series isn't just a game—it's a journey through the gritty, thrilling underworld
          of organized crime.<br />
          From the iconic streets of Lost Heaven in Season 1, to the high-stakes chaos of Season 2,
          and the cinematic intensity of Season 3,<br />
          each chapter throws you straight into the action.<br /><br />

          Drive classic cars through rain-slicked alleys, pull off daring heists,<br />
          and live out the stories of unforgettable characters who'll test your loyalty, wits, and
          nerve.<br />
          Whether you're here for the adrenaline-pumping missions, the deep, gripping narratives,<br />
          or the fully realized worlds you can lose yourself in, the Mafia saga promises hours of
          unforgettable gameplay.<br />
          Choose your season, dive in, and see how far you'll go in the criminal underworld.
        </p>

        <!-- CARDS I, II und III -->
        <div class="character-grid mt-8">
          <div v-for="(season, index) in mafiaSeasons" :key="index" class="text-center">
            <NuxtLink :to="`/mafia${index + 1}`">
              <Card :name="season.name" :image="season.image" />
            </NuxtLink>

            <p class="mt-2 font-semibold text-white">
              {{ season.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';

const mafiaSeasons = [
  {
    name: 'Mafia',
    image: '/Bilder/mafia.poster1.jpg',
  },
  {
    name: 'Mafia II',
    image: '/Bilder/mafia.poster2.jpg',
  },
  {
    name: 'Mafia III',
    image: '/Bilder/mafia.poster3.jpg',
  },
];

const activeCard = ref(null);
</script>
