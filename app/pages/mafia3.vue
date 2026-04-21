<template>
  <button @click="goBack" class="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded">
    Back
  </button>
  <div id="mafia3" class="w-full">
    <div class="container max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div class="flex flex-col justify-center items-center gap-6">
        <img src="/Bilder/mafia3.logo.png" alt="Mafia logo" width="450" class="shrink-0" />
        <blockquote class="border-l-4 border-red-700 pl-4 text-2xl italic mb-4 text-center">
          "This isn't about bringin' 'em back... it's about revenge." — Lincoln Clay
        </blockquote>
      </div>

      <p class="text-base leading-relaxed text-white/90 text-center">
        <strong>Mafia III</strong> is set in 1968 in the fictional city of New Bordeaux, a
        reimagined New Orleans filled with crime, tension, and racial conflict.<br />
        The story follows <strong>Lincoln Clay</strong>, a Vietnam War veteran who returns home only
        to be betrayed by the mafia family he trusted.<br />
        After surviving the attack, he sets out on a path of revenge, determined to destroy the
        Marcano crime empire and rebuild his own power in the city.<br />
        Players explore a large open-world environment where they take control of districts, build
        alliances, and eliminate enemy operations.<br />
        <br />
        The game mixes intense combat, stealth, and driving with a strong narrative about betrayal,
        justice, and survival.<br />
        At its core, Mafia III is a dark story about revenge and rebuilding a life from the ruins of
        war and betrayal in a divided and corrupt world.<br />
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
    name: 'Lincoln Clay',
    image: '/Bilder/lincoln.3.jpg',
    description:
      'Vietnam veteran turned anti-hero who builds a new criminal empire in New Bordeaux.',
  },
  {
    name: 'Vito Scaletta',
    image: '/Bilder/vito3.webp',
    description: 'Returning from Mafia II, now working under Lincoln Clay in New Bordeaux.',
  },
  {
    name: 'John Donovan',
    image: '/Bilder/donovan.webp',
    description: 'CIA operative who helps Lincoln take down the Marcano family.',
  },
];

const router = useRouter();

const goBack = () => {
  router.push('/mafia');
};
</script>
