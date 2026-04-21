<template>
  <div id="codww2" class="w-full">
    <div class="container">
      <!-- Tailwind Utility für den Container -->
      <img src="/Bilder/cod.wlc.png" alt="Call of Duty WWII" width="600" class="mx-auto mt-6" />
      <!-- Margin und Auto-Positionierung -->

      <div class="flex justify-center">
        <img src="/Bilder/cod.logo.png" alt="COD WWII Logo" width="500" />
      </div>

      <br />

      <section>
        <p class="text-white text-center text-lg mb-6">
          <strong>Call of Duty WWII</strong> is a first-person shooter that returns the franchise to
          its roots in the brutal, intense battles of World War II.<br />
          Players take on the role of Ronald "Red" Daniels, a young soldier in the 1st Infantry
          Division, as he fights through the European front.<br />
          From the iconic D-Day landings to the liberation of Paris, the game immerses players in
          the devastating reality of war, highlighting the sacrifices and camaraderie among soldiers
          in the face of overwhelming adversity.<br />
          <br />
          The single-player campaign is gripping, with cinematic combat and a focus on historical
          accuracy, portraying the grim conditions of war.<br />
          The story emphasizes teamwork, with Daniels relying on his squadmates for support, whether
          it's ammunition, healing, or tactical advantages.<br />
          The game returns to a more traditional, boots-on-the-ground experience, abandoning the
          advanced movement mechanics seen in earlier titles, making combat slower, more tactical,
          and grounded in realism.<br />
          <br />
          Multiplayer mode offers intense, competitive battles across classic WWII locations, while
          the game's Zombies mode delivers a thrilling, supernatural twist.<br />
          The attention to historical detail—from weapons to uniforms—adds to the immersion, making
          <strong>Call of Duty: WWII</strong> not only a fast-paced shooter but also a tribute to
          the sacrifices made by soldiers during the war.<br />
          The game balances emotional storytelling with action-packed gameplay, giving players an
          unforgettable experience in one of history's most defining conflicts.
        </p>
      </section>

      <Charaktere v-if="activeCardcod !== null" :character="characters[activeCardcod]" />

      <!-- Characters Grid -->
      <div class="character-grid">
        <!-- Flexbox und Grid von Tailwind -->
        <template v-for="(char, index) in characters" :key="index">
          <div class="text-center">
            <Card
              :name="char.name"
              :image="char.image"
              @click="activeCardcod = activeCardcod === index ? null : index"
            />
            <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
          </div>
        </template>
      </div>

      <!-- Features -->
      <section class="space-y-4 gap-8 mt-16">
        <div class="text-center">
          <img src="/Bilder/cod.features.png" alt="Features" width="400" />
        </div>

        <div class="space-y-4">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-row p-4 text-white"
            @click="toggleFeature(index)"
          >
            <p class="font-bold text-lg">{{ feature.title }}</p>
            <p v-if="activeFeatures[index]" class="mt-1">{{ feature.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
import Charaktere from '@/components/Charaktere.vue';

const characters = [
  {
    name: 'Ronald Daniels',
    image: '/Bilder/ronald.webp',
    description:
      'A young American soldier from Texas who experiences the horrors of war on the European front.',
  },
  {
    name: 'Robert Zussman',
    image: '/Bilder/zussman.jpg',
    description: 'Daniels best friend and fellow soldier, loyal and brave under pressure.',
  },
  {
    name: 'Joseph Turner',
    image: '/Bilder/turner.jpg',
    description:
      'A strict but respected squad leader who pushes his men to survive impossible situations.',
  },
  {
    name: 'William Pierson',
    image: '/Bilder/pierson.webp',
    description: 'A tough and aggressive officer who believes in discipline above all else.',
  },
  {
    name: 'Arthur Crowley',
    image: '/Bilder/crowley.webp',
    description: 'A member of the French Resistance who helps the squad behind enemy lines.',
  },
];

const activeCardcod = ref(null);

const features = [
  {
    title: '🎖️ Historical Campaign',
    description:
      'Experience a cinematic story set during World War II across iconic European battles.',
  },
  {
    title: '🔫 Realistic Combat',
    description: 'Engage in intense infantry combat with limited resources and tactical gameplay.',
  },
  {
    title: '🤝 Squad-Based Gameplay',
    description: 'Fight alongside your squad, relying on teamwork and support abilities.',
  },
  {
    title: '🌍 Authentic Locations',
    description:
      'Battle through historically inspired locations such as Normandy and the Ardennes.',
  },
  {
    title: '💥 Cinematic Experience',
    description: 'Immerse yourself in dramatic cutscenes and emotional storytelling.',
  },
];

const activeFeatures = ref(features.map(() => false));

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}
</script>
