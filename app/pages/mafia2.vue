<template>
  <button @click="goBack" class="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded">
    Back
  </button>
  <div id="mafia2" class="w-full">
    <div class="container max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div class="flex flex-col justify-center items-center gap-6">
        <img src="/Bilder/mafia2.logo.png" alt="Mafia logo" width="450" class="shrink-0" />
        <blockquote class="border-l-4 border-red-700 pl-4 text-2xl italic mb-4 text-center">
          "You know when we first started out, I thought I was gonna be the biggest, baddest wiseguy
          in the world." — Vito Scaletta
        </blockquote>
      </div>

      <p class="text-base leading-relaxed text-white/90 text-center">
        <strong>Vito Scaletta</strong> was born in 1925 in San Martino, Sicily, and moved to Empire
        Bay with his family to escape poverty.<br />
        After his father's early death, Vito turned to crime, teaming up with his childhood friend,
        Joe Barbaro. Following a stint in the U.S. Army, Vito was arrested and sentenced to prison,
        where he was mentored by Leo Galante. Upon release, Vito rejoined Joe in the Falcone family
        and quickly rose through the ranks, taking on hits and facing betrayals.<br />
        Vito's journey saw him taking down rivals like Alberto Clemente and Luca Gurino, but his
        loyalty was tested when he refused to participate in the murder of Leo Galante. After a
        violent war with the Triads and the death of his best friend, Joe, Vito became embroiled in
        further conflict with the Marcano family.<br />
        He eventually left Empire Bay and moved to New Bordeaux, where he worked for Sal Marcano,
        only to later break free with the help of Lincoln Clay.<br />
        As a key member of Lincoln's crew, Vito sought revenge on Marcano, killed Michael Grecco,
        and took over Marcano's rackets.<br />
        He later discovered Joe was alive and working in Empire Bay. If Lincoln stayed in New
        Bordeaux, Vito continued his life as an underboss. If Lincoln left, Vito seized control,
        completing Marcano's unfinished casino and transforming New Bordeaux into a thriving city,
        now known as the
        <strong>"Las Vegas of the South."</strong>
      </p>

      <Charaktere v-if="activeCard !== null" :character="characters[activeCard]" />

      <!-- CARD GRID -->
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
    name: 'Vito Scaletta',
    image: '/Bilder/vito.webp',
    description:
      'A WWII veteran turned gangster who rises through the ranks of the Empire Bay mafia.',
  },
  {
    name: 'Joe Barbaro',
    image: '/Bilder/barbaro.webp',
    description: "Vito's best friend and reckless partner in crime, loyal but unpredictable.",
  },
  {
    name: 'Leo Galante',
    image: '/Bilder/galante.webp',
    description: "A powerful mafia advisor who becomes Vito's mentor inside and outside prison.",
  },
];
const router = useRouter();

const goBack = () => {
  router.push('/mafia');
};
</script>
