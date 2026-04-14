<template>
  <div id="mafia" class="w-full">
    <div class="container">
      <br />
      <div class="flex flex-col justify-center items-center gap-2">
        <div class="flex items-center">
          <img src="/Bilder/mafia.city.png" alt="Mafia logo" width="600" class="shrink-0" />
        </div>
        <br />
        <br />
        <p class="text-base leading-relaxed text-center">
          Ready to step into a world where every choice matters, every street has a story, and
          danger lurks around every corner?<br />
          The Mafia series isn't just a game—it's a journey through the gritty, thrilling underworld
          of organized crime.<br />
          From the iconic streets of Lost Heaven in Season 1, to the high-stakes chaos of Season 2,
          and the cinematic intensity of Season 3,<br />
          each chapter throws you straight into the action.<br />
          <br />
          Drive classic cars through rain-slicked alleys, pull off daring heists,<br />
          and live out the stories of unforgettable characters who'll test your loyalty, wits, and
          nerve.<br />
          Whether you're here for the adrenaline-pumping missions, the deep, gripping narratives,<br />
          or the fully realized worlds you can lose yourself in, the Mafia saga promises hours of
          unforgettable gameplay.<br />
          Choose your season, dive in, and see how far you'll go in the criminal underworld.
        </p>
        <br />
        <br />

        <!-- Active Card -->
        <div
          v-if="activeCard !== null"
          class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
        >
          <div
            class="card-large"
            :style="{ backgroundImage: `url(${mafiaSeasons[activeCard].image})` }"
          ></div>
          <div class="text-white text-base md:text-lg flex-1 min-w-0">
            <h3 class="text-xl font-bold mb-2">{{ mafiaSeasons[activeCard].name }}</h3>
          </div>
        </div>

        <!-- Mafia Seasons Cards -->
        <div class="flex flex-wrap justify-center gap-6 mt-8">
          <div v-for="(char, index) in mafiaSeasons" :key="index" class="text-center">
            <div v-if="index === 0">
              <NuxtLink to="/mafia1">
                <Card :name="char.name" :image="char.image" />
              </NuxtLink>
            </div>
            <div v-else>
              <Card
                :name="char.name"
                :image="char.image"
                @click="activeCard = activeCard === index ? null : index"
              />
            </div>
            <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue'; // Import the Card component

const mafiaSeasons = [
  {
    name: 'Mafia',
    image: '/Bilder/mafia.poster1.jpg',
    description: ``,
  },
  {
    name: 'Mafia II',
    image: '/Bilder/mafia.poster2.jpg',
    description: ``,
  },
  {
    name: 'Mafia III',
    image: '/Bilder/mafia.poster3.jpg',
    description: ``,
  },
];

const activeCard = ref(null);
</script>

<style>
.card-large {
  width: 250px;
  height: 400px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}
</style>
