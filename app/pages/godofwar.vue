<template>
  <div id="godofwar" class="w-full">
    <div class="flex flex-col items-center space-y-4">
      <img src="/Bilder/gow.wlc.png" alt="Welcome" width="500" />
      <header class="flex flex-col justify-center items-center gap-6">
        <!-- Flexbox für Layout -->
        <div class="flex items-center">
          <img src="/Bilder/godofwar.logo.png" alt="God Of War logo" width="600" class="shrink-0" />
        </div>

        <blockquote class="border-l-4 border-red-700 pl-4 text-2xl italic mb-4">
          "Death can have me when it earns me." - Kratos
        </blockquote>
      </header>

      <p class="text-white text-center mt-4">
        God of War Ragnarök is an action-adventure video game developed by Santa Monica Studio.<br />
        It continues the story of Kratos and his son Atreus, set in the world of Norse mythology.<br />
        <br />
        The game follows their journey as they try to prevent the prophecy of Ragnarök, the end of
        the world in Norse legend.<br />
        Players explore different realms, fight powerful enemies, and solve puzzles. The combat
        system is fast and intense, combining Kratos' brutal weapons like the Leviathan Axe and the
        Blades of Chaos with new abilities.<br />
        Atreus also plays a bigger role in both combat and storytelling.<br />
        The game focuses strongly on the relationship between father and son, showing how both
        characters grow and face difficult choices.<br />
        With impressive graphics, emotional storytelling, and deep gameplay, God of War Ragnarök is
        considered one of the standout titles in modern gaming.
      </p>

      <Charaktere v-if="activeCardgow !== null" :character="characters[activeCardgow]" />

      <!-- CARD GRID -->
      <div class="flex justify-center gap-6 flex-wrap">
        <Card
          v-for="(char, index) in characters"
          :key="index"
          :name="char.name"
          :image="char.image"
          @click="activeCardgow = activeCardgow === index ? null : index"
        />
      </div>
    </div>

    <div class="container py-8">
      <div>
        <img src="/Bilder/gow.features.png" alt="Game Features" width="600" />
      </div>

      <div class="space-y-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-row p-4 text-white"
          @click="toggleFeature(index)"
        >
          <p class="font-bold text-lg">{{ feature.title }}</p>
          <p v-if="activeFeatures[index]" class="mt-1">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
import Charaktere from '@/components/Charaktere.vue';

const characters = [
  {
    name: 'Kratos',
    image: '/Bilder/kratos.sticker.png',
    description: `Kratos, the Ghost of Sparta, is one of gaming's most iconic characters. Once a ruthless
        Spartan general, his life was shattered when the god Ares tricked him into killing his own
        wife and daughter. Cursed with their ashes forever burned into his skin, Kratos set out on a
        brutal path of vengeance, taking down gods, titans, and anyone who stood in his way. With
        the Blades of Chaos chained to his arms, he became a living force of destruction and one of
        the most feared figures in Greek mythology. What makes Kratos fascinating is how his story
        has evolved. In the original God of War games, he was all rage and violence—a relentless
        engine of revenge. But the Norse saga shows a different side: an older, wiser Kratos trying
        to guide his son Atreus while struggling to control the anger that once defined him. He's
        still the same unstoppable warrior, but now his battles are as much internal as
        external—fighting his past while trying to build a better future. For gamers, Kratos is more
        than just a powerhouse; he's proof of how far video game storytelling has come. From Greek
        tragedy to Norse epic, his journey is as much about redemption and fatherhood as it is about
        gods and monsters. And that's what makes him unforgettable.`,
  },
  {
    name: 'Atreus',
    image: '/Bilder/atreus.sticker.png',
    description: `Atreus is one of the main characters in the Atreus series. He is the son of Kratos and plays a key role in God of War (2018) and God of War Ragnarök.
At the beginning of the story, Atreus is a young boy who knows very little about his true identity. During his journey with his father, he discovers that he is half god and half Giant from Norse mythology. This revelation deeply changes his understanding of himself and his relationship with Kratos.
Atreus has unique abilities, including a strong connection to ancient languages and magical powers that grow as he learns to control them. He is also skilled with a bow, often supporting Kratos in combat by attacking enemies from a distance.
Throughout the series, Atreus develops from an inexperienced and curious child into a more confident and independent young warrior. His story focuses on identity, destiny, and his struggle to find his own path between gods, giants, and his father's expectations.`,
  },
];

const activeCardgow = ref(null);

const features = [
  {
    tag: 'Mythical Journey',
    title: '🗺️ Norse Adventure',
    description:
      'Follow Kratos and Atreus through the Nine Realms as they face gods, monsters, and the looming fate of Ragnarök.',
  },
  {
    tag: 'Combat',
    title: '⚔️ Brutal Combat System',
    description:
      'Engage in fast-paced, visceral combat using the Leviathan Axe, Blades of Chaos, and powerful Spartan abilities.',
  },
  {
    tag: 'World Design',
    title: '🏞️ Stunning Realms',
    description:
      'Explore beautifully crafted environments across Norse mythology, from frozen landscapes to fiery realms.',
  },
  {
    tag: 'Puzzles',
    title: '🧩 Environmental Puzzles',
    description:
      'Solve creative puzzles using physics, runes, and Atreus’ abilities to unlock new paths and secrets.',
  },
  {
    tag: 'Traversal',
    title: '🚶 Exploration & Travel',
    description:
      'Travel across realms using boats, mystical gates, climbing, and dynamic world traversal mechanics.',
  },
  {
    tag: 'Strategy',
    title: '🎯 Tactical Combat',
    description:
      'Use timing, parries, runic attacks, and smart positioning to defeat powerful enemies and bosses.',
  },
  {
    tag: 'Story',
    title: '🎬 Emotional Storytelling',
    description:
      'Experience a deep narrative focused on fatherhood, destiny, and the bond between Kratos and Atreus.',
  },
  {
    tag: 'Lore',
    title: '💎 Mythology & Secrets',
    description:
      'Discover hidden lore, collectibles, and secrets that expand the rich world of Norse mythology.',
  },
];

const activeFeatures = ref(features.map(() => false));
</script>
