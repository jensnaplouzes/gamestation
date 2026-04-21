<template>
  <button @click="goBack" class="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded">
    Back
  </button>
  <div id="mafia1" class="w-full">
    <div class="container max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div class="flex flex-col justify-center items-center gap-6">
        <img src="/Bilder/mafia.logo.webp" alt="Mafia logo" width="450" class="shrink-0" />
        <blockquote class="border-l-4 border-red-700 pl-4 text-2xl italic mb-4 text-center">
          "Remember that money, jobs, even best pals will come and go.<br />
          But family? Family is forever." - Tommy Angelo
        </blockquote>
      </div>

      <p class="text-base leading-relaxed text-white/90 text-center">
        <strong>Mafia Definitive Edition</strong> is more than just a game.<br />
        It's a cinematic experience set in 1930s America, following the rise of
        <strong>Tommy Angelo</strong>, a taxi driver who gets pulled into the world of organized
        crime.<br />
        The game takes place in the city of Lost Heaven,<br />
        a beautifully recreated environment filled with vintage cars, jazz music, and dark,
        atmospheric streets.<br />
        <br />
        As Tommy becomes part of the mafia, players experience a story about loyalty, betrayal, and
        ambition.<br />
        Each mission mixes action, driving, and storytelling, making you feel like you are inside a
        classic gangster movie.<br />
        The visuals, soundtrack, and voice acting all work together to create a realistic and
        immersive world.<br />
        At its core, Mafia: Definitive Edition is a powerful story about choices and consequences,
        <br />showing how a simple life can be changed forever by crime and power.
      </p>

      <Charaktere v-if="activeCard !== null" :character="characters[activeCard]" />

      <div class="character-grid mt-8">
        <div v-for="(char, index) in characters" :key="index" class="text-center">
          <Card
            :name="char.name"
            :image="char.image"
            @click="activeCard = activeCard === index ? null : index"
          />

          <p class="mt-2 font-semibold text-white">
            {{ char.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Card from '@/components/Card.vue';
import Charaktere from '@/components/Charaktere.vue';

const activeCard = ref(null);

const characters = [
  {
    name: 'Tommy Angelo',
    image: '/Bilder/angelo.webp',
    description: 'Taxi driver turned mafia member in Lost Heaven...',
  },
  {
    name: 'Paulie',
    image: '/Bilder/pauli.webp',
    description: 'Loyal but reckless member of the Salieri family...',
  },
  {
    name: 'Sam',
    image: '/Bilder/sam.mafia.webp',
    description: 'Cold and calculated enforcer of the mafia...',
  },
];
const router = useRouter();

const goBack = () => {
  router.push('/mafia');
};
</script>
