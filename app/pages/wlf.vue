<template>
  <div id="uncharted" class="w-full">
    <!-- Welcome Section -->
    <div class="flex flex-col items-center space-y-4">
      <img src="/Bilder/wlc.to.png" alt="Welcome" width="300" />
      <img src="/Bilder/uncharted.logo.png" alt="Uncharted 4 Logo" width="400" />
      <img src="/Bilder/earned.png" alt="Earned" width="900" />
    </div>
    <br />

    <p class="text-white text-center text-lg mb-6">
      Legends aren't found—they're chased.<br />
      Maps crumble, paths vanish, and every step could uncover a secret lost to time.<br />
      Old bonds are tested, new dangers awaken, and the world waits for those willing to risk
      everything.<br />
      Adventure calls. Will you answer?
    </p>

    <br />

    <!-- Part 1 Content -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8 space-y-12">
      <div class="flex justify-center">
        <img src="/Bilder/p01.png" alt="The Last of Us - Part I" width="700" />
      </div>

      <p class="text-white mt-4">Game Story</p>
      <br />

      <!-- Part 1 Characters Banner -->
      <img
        src="/Bilder/character1.png"
        alt="Characters - Part I"
        width="500"
        class="mx-auto mt-6"
      />
      <br />

      <!-- Active Card for Part 1 -->
      <div
        v-if="activeCardPart1 !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${charactersPart1[activeCardPart1].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ charactersPart1[activeCardPart1].name }}</h3>
          <p>{{ charactersPart1[activeCardPart1].description }}</p>
        </div>
      </div>

      <!-- Part 1 Character Cards in Grouped Rows -->
      <div class="flex flex-wrap gap-6 justify-center">
        <template v-for="(char, index) in charactersPart1" :key="index">
          <div class="text-center">
            <div
              class="card"
              :style="{ backgroundImage: `url(${char.image})` }"
              @click="activeCardPart1 = activeCardPart1 === index ? null : index"
            ></div>
            <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
          </div>
        </template>
      </div>
    </div>

    <br />
    <br />

    <!-- Part 2 Content -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8 space-y-2">
      <div class="flex justify-center">
        <img src="/Bilder/p02.png" alt="The Last of Us - Part II" width="700" />
      </div>
      <img src="/Bilder/story2.png" alt="The Last of Us - Part II" width="600" class="mx-auto" />
      <br />

      <p class="text-white mt-4">Game Story II</p>
      <br />
      <br />

      <!-- Part 2 Characters Banner -->
      <img
        src="/Bilder/character2.png"
        alt="Characters - Part II"
        width="500"
        class="mx-auto mt-6"
      />
      <br />

      <!-- Active Card for Part 2 -->
      <div
        v-if="activeCardPart2 !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${charactersPart2[activeCardPart2].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ charactersPart2[activeCardPart2].name }}</h3>
          <p>{{ charactersPart2[activeCardPart2].description }}</p>
        </div>
      </div>

      <!-- Part 2 Character Cards -->
      <div class="flex flex-wrap gap-6 justify-center">
        <div v-for="(char, index) in charactersPart2" :key="index" class="text-center">
          <div
            class="card"
            :style="{ backgroundImage: `url(${char.image})` }"
            @click="activeCardPart2 = activeCardPart2 === index ? null : index"
          ></div>
          <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
        </div>
      </div>
    </div>

    <br />

    <!-- Infected Section -->
    <div class="mt-12">
      <div class="flex flex-col justify-center items-center">
        <img src="/Bilder/human.png" alt="The Infected" width="600" class="shrink-0" />
      </div>
      <div class="flex justify-center">
        <img src="/Bilder/infecteds0.png" alt="Infecteds 0" width="300" />
      </div>
      <img src="/Bilder/infecteds1.png" alt="Infecteds 1" width="900" class="mx-auto" />
      <br />
      <br />
      <br />

      <!-- Active Infected Card -->
      <div
        v-if="activeInfected !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${infected[activeInfected].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ infected[activeInfected].name }}</h3>
          <p>{{ infected[activeInfected].description }}</p>
        </div>
      </div>

      <!-- Infected Cards -->
      <div class="flex flex-wrap gap-6 justify-center">
        <div v-for="(inf, index) in infected" :key="index" class="text-center">
          <div
            class="card-infected"
            :style="{ backgroundImage: `url(${inf.image})` }"
            @click="activeInfected = activeInfected === index ? null : index"
          ></div>
          <p class="mt-2 font-semibold text-white">{{ inf.name }}</p>
        </div>
      </div>
    </div>
    <br />

    <!-- Game Features Section -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8">
      <div>
        <img src="/Bilder/features.png" alt="Game Features" width="300" />
        <br />
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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const charactersPart1 = [
  {
    name: 'Joel',
    image: '/Bilder/joel2.webp',
    description: ``,
  },
];

const activeCardPart1 = ref(null);

const charactersPart2 = [
  {
    name: 'Joel',
    image: '/Bilder/joel0.webp',
    description: ``,
  },
];

const activeCardPart2 = ref(null);

const infected = [
  {
    name: 'Runner',
    image: '/Bilder/runner.webp',
    description: '',
  },
];

const activeInfected = ref(null);

const features = [
  {
    title: '🧟 Stealth',
    description: '',
  },
];

const activeFeatures = ref(features.map(() => false));

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}

const showText = ref(false);
</script>

<style scoped>
.card {
  width: 250px;
  height: 350px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
}
.card-infected {
  width: 400px;
  height: 400px;
  border-radius: 30px;
  background-size: cover;
  background-position: top center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card-infected:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
}

.card-large {
  width: 250px;
  height: 400px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}
.text-white {
  color: white;
}
.feature-row {
  transition:
    background-color 0.7s ease,
    transform 0.4s ease;
  cursor: pointer;
  border-radius: 6px;
  padding: 1px;
}

.feature-row:hover {
  background-color: rgba(223, 35, 35, 0.247);
  box-shadow: 0 0 12px #ff6347;
  transform: scale(1.1);
}
</style>
