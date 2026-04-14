<template>
  <div id="codww2" class="w-full">
    <div class="container">
      <img src="/Bilder/cod.wlc.png" alt="Call of Duty WWII" width="600" class="mx-auto mt-6" />

      <div class="flex justify-center">
        <img src="/Bilder/cod.logo.png" alt="COD WWII Logo" width="500" />
      </div>

      <br />

      <section>
        <p class="text-white text-center text-lg mb-6">
          Call of Duty: WWII is a first-person shooter that returns the franchise to its roots in
          World War II. It follows the story of a young soldier fighting through the European front,
          experiencing the brutality, brotherhood, and sacrifice of war.
        </p>
      </section>

      <section class="space-y-8 mt-20">
        <!-- Active Character -->
        <div
          v-if="activeCardPart1 !== null"
          class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
        >
          <div
            class="card-large"
            :style="{ backgroundImage: `url(${characters[activeCardPart1].image})` }"
          ></div>
          <div class="text-white text-base md:text-lg flex-1 min-w-0">
            <h3 class="text-xl font-bold mb-2">{{ characters[activeCardPart1].name }}</h3>
            <p>{{ characters[activeCardPart1].description }}</p>
          </div>
        </div>

        <!-- Row 1 -->
        <div class="flex flex-wrap gap-10 justify-center mb-8">
          <template v-for="(char, index) in characters.slice(0, 3)" :key="index">
            <div class="text-center">
              <!-- Replace with Card component -->
              <Card
                :name="char.name"
                :image="char.image"
                @click="activeCardPart1 = activeCardPart1 === index ? null : index"
              />
            </div>
          </template>
        </div>

        <!-- Row 2 -->
        <div class="flex flex-wrap gap-10 justify-center">
          <template v-for="(char, index) in characters.slice(3, 6)" :key="index">
            <div class="text-center">
              <!-- Replace with Card component -->
              <Card
                :name="char.name"
                :image="char.image"
                @click="activeCardPart1 = activeCardPart1 === index + 3 ? null : index + 3"
              />
            </div>
          </template>
        </div>
      </section>

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
import Card from '@/components/Card.vue'; //

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

const activeCardPart1 = ref(null);

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
