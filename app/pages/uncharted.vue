<template>
  <div id="uncharted" class="w-full container">
    <!-- Welcome Section -->
    <div class="flex flex-col items-center space-y-4">
      <img src="/Bilder/wlc.to.png" alt="Welcome" width="300" />
      <img src="/Bilder/uncharted.logo.png" alt="Uncharted 4 Logo" width="400" />
      <img src="/Bilder/earned.png" alt="Earned" width="900" />
    </div>

    <p class="text-white text-center text-lg mb-6">
      Some secrets can't be found—they must be hunted.<br />
      Maps crumble, paths vanish, and every step could uncover a secret lost to time.<br />
      Old bonds will be tested, and new dangers will stir from shadows long forgotten.<br />
      The world is alive with mysteries, hidden treasures, and challenges that will push the brave
      to their limits.<br />
      Every choice matters, every step could change the course of history, and every risk could be
      your last.<br />
      Adventure is calling. Will you dare to answer?
    </p>

    <!-- Part 1 Content -->
    <div class="container py-8">
      <div class="flex flex-col items-center">
        <img src="/Bilder/gold.png" alt="Gold" width="700" />
        <img src="/Bilder/fam.png" alt="Family" width="700" />
      </div>

      <p class="text-white mt-4">
        Nathan never set out to be a hero. He didn't seek treasure, fame, or the thrill of
        danger—yet somehow, danger always seemed to find him. His life was built on ordinary
        routines, anchored by the people he loved most: his younger brother, whose laughter could
        light the darkest days; his family, whose support was unwavering even in the face of
        impossible odds; and his friends, a band of loyal companions who would follow him anywhere…
        sometimes willingly, sometimes because they had no choice. But when whispers of a lost
        artifact reached Nathan's ears, everything changed. The promise of adventure pulled him into
        a world where maps crumbled in his hands, secrets slept beneath layers of time, and every
        step carried a risk that could alter the course of his life—and the lives of those he cared
        about. Alongside his brother, Nathan learned that the greatest challenges weren't the traps
        or riddles guarding ancient treasures—they were the moments that tested trust, courage, and
        the ties of family. Every laugh shared in victory, every heated argument over danger, and
        every quiet moment of doubt reminded him that this journey wasn't about gold or glory—it was
        about the people who made the chase worthwhile. Friends became allies, allies became family,
        and family became the compass guiding him through storms both literal and metaphorical.
        Nathan discovered that some treasures can't be counted in coins, and some victories aren't
        marked by trophies—they're the bonds forged in fire, the choices made when the world demands
        everything, and the sacrifices taken to protect those you love. In the end, Nathan realized
        the truth every adventurer eventually learns: the world may hide its secrets, but the heart
        of a hero lies in the people they fight for, not the legends they chase. Every step of the
        journey mattered—not for what he found, but for who he became along the way.
      </p>

      <!-- Part 1 Characters Banner -->
      <img src="/Bilder/odds.png" alt="Uncharted 4 Characters" width="500" class="mx-auto mt-6" />

      <!-- Active Card for Part 1 -->
      <div
        v-if="activeCardPart1 !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <Card
          :image="charactersPart1[activeCardPart1].image"
          :name="charactersPart1[activeCardPart1].name"
          :onClick="
            () => {
              activeCardPart1 = activeCardPart1 === index ? null : index;
            }
          "
        />
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ charactersPart1[activeCardPart1].name }}</h3>
          <p>{{ charactersPart1[activeCardPart1].description }}</p>
        </div>
      </div>

      <!-- Part 1 Character Cards in Grouped Rows -->
      <div class="flex flex-wrap gap-6 justify-center">
        <template v-for="(char, index) in charactersPart1" :key="index">
          <Card
            :image="char.image"
            :name="char.name"
            :onClick="
              () => {
                activeCardPart1 = activeCardPart1 === index ? null : index;
              }
            "
          />
        </template>
      </div>
    </div>

    <!-- Game Features Section -->
    <div class="container py-8">
      <div>
        <img src="/Bilder/features.png" alt="Game Features" width="300" />
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
import Card from '../components/Card.vue';

const charactersPart1 = [
  {
    name: 'Nathan Drake',
    image: '/Bilder/nathan.webp',
    description:
      'Nathan Drake, a seasoned adventurer, is known for his daring exploits in search of ancient treasures. With a sharp mind and quick reflexes, he faces overwhelming odds on his quests.',
  },
  {
    name: 'Samuel Drake',
    image: '/Bilder/samuel.webp',
    description:
      'Samuel Drake, Nathan’s older brother, joins him on his quest. His loyalty to Nathan and his daring attitude make him a vital part of the adventure.',
  },
  {
    name: 'Rafe Adler',
    image: '/Bilder/rafe.webp',
    description:
      'Rafe Adler is a wealthy and ambitious treasure hunter. He’s a rival to Nathan, and his pursuit of wealth and glory makes him an unpredictable adversary.',
  },
  {
    name: 'Elena Fisher',
    image: '/Bilder/elena.webp',
    description:
      'Elena Fisher is a journalist and Nathan’s love interest. She’s resourceful, courageous, and provides much-needed support to Nathan throughout their perilous journey.',
  },
  {
    name: 'Victor Sullivan',
    image: '/Bilder/victor.webp',
    description:
      'Victor “Sully” Sullivan is a veteran treasure hunter and Nathan’s mentor. His quick wit and experience make him an invaluable guide on Nathan’s adventures.',
  },
  {
    name: 'Nadine Ross',
    image: '/Bilder/nadine.webp',
    description:
      'Nadine Ross is a fierce mercenary leader. With her tactical skills and ruthless determination, she proves to be a formidable force in the pursuit of treasure.',
  },
];

const activeCardPart1 = ref(null);

const features = [
  {
    title: '🗺️ Epic Adventure',
    description:
      'Join Nathan Drake on a globe-trotting journey through stunning locations filled with hidden treasures and ancient secrets.',
  },
  {
    title: '🔫 Action & Combat',
    description:
      'Engage in intense third-person gunfights, hand-to-hand combat, and stealth takedowns against well-armed enemies.',
  },
  {
    title: '🏞️ Stunning Environments',
    description:
      'Explore detailed, cinematic environments ranging from tropical islands to urban cities and treacherous mountains.',
  },
  {
    title: '🧩 Puzzles & Exploration',
    description:
      'Solve intricate environmental puzzles and uncover hidden relics to progress through the story.',
  },
  {
    title: '🚤 Vehicles & Traversal',
    description:
      'Drive, climb, swing, and use vehicles like jeeps and boats to traverse diverse landscapes and escape danger.',
  },
  {
    title: '🎯 Precision & Strategy',
    description:
      'Use cover, stealth, and tactical positioning to outsmart enemies in both large-scale battles and quiet encounters.',
  },
  {
    title: '🎬 Cinematic Storytelling',
    description:
      'Experience a rich, emotionally-driven narrative with memorable characters, cinematic cutscenes, and dramatic plot twists.',
  },
  {
    title: '🤝 Multiplayer & Co-op',
    description:
      'Engage in competitive multiplayer modes and team up with friends for co-op challenges (if applicable).',
  },
  {
    title: '💎 Treasure Hunting',
    description:
      'Discover collectibles, hidden treasures, and secret locations to unlock bonuses and lore.',
  },
  {
    title: '⚔️ Dynamic Action Sequences',
    description:
      'Participate in thrilling chase sequences, daring escapes, and epic set-pieces full of cinematic flair.',
  },
];

const activeFeatures = ref(features.map(() => false));

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}
</script>
