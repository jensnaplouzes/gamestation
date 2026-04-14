<template>
  <div id="gta" class="w-full container">
    <div class="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <!-- Welcome -->
      <section class="flex flex-col items-center space-y-2">
        <img src="/Bilder/gta.wlc.png" alt="Welcome" width="450" />
        <img src="/Bilder/gta.logo.png" alt="GTA Logo" width="650" />
        <img src="/Bilder/gta.wrd.png" alt="World" width="250" />
      </section>

      <!-- Game Introduction -->
      <section>
        <p class="text-white text-center text-lg mb-6">
          In the heart of a city where everything is for sale, the stakes are high, and nothing
          comes easy.<br />
          The streets pulse with danger, wealth, and ambition, where every corner hides a new
          opportunity—or a deadly trap.<br />
          Old loyalties are tested, and new enemies rise from the shadows, ready to seize
          control.<br />
          In a world where the line between right and wrong is blurred, every decision counts, and
          every action could be your last.<br />
          The city never sleeps, and neither do the risks. Money, power, and survival are at your
          fingertips—if you're bold enough to take them.<br />
          The game is on.
        </p>
      </section>

      <!-- Win -->
      <div class="flex justify-center">
        <img src="/Bilder/gta.left.png" alt="Win" width="900" />
      </div>

      <section>
        <p class="text-white text-center text-lg mb-6">
          But in a city like Los Santos, it's not just the streets that hold secrets—its residents
          do too.<br />
          Meet the faces that shape the chaos of this world: A washed-up bank robber looking for one
          last score, a volatile former gangster trying to keep a low profile, and a young,
          ambitious hustler caught between loyalty and greed.<br />
          Each one hides a past they'd rather forget, and a future they can't escape.<br />
          <br />
          In a place where trust is a commodity—and betrayal is often the price—you'll have to
          decide who's really on your side. As the city's underbelly stirs with danger, alliances
          will shift, and the shadows will reveal more than you ever bargained for. In Los Santos,
          survival isn't guaranteed... but power? That's something you can take, if you're willing
          to risk everything.
        </p>
      </section>

      <section class="space-y-8 mt-20">
        <div class="flex justify-center gap-20">
          <img class="hover:glow-scale" src="/Bilder/gta.lo.png" alt="GTA" width="600" />
          <img class="hover:glow-scale" src="/Bilder/gta.on.png" alt="GTA" width="400" />
        </div>

        <!-- Michael -->
        <img
          src="/Bilder/m.gta.png"
          alt="Characters - Michael De Santa"
          width="300"
          class="mx-auto mt-6"
        />

        <div
          v-if="activeCardPart1 !== null"
          class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
        >
          <div
            class="card-large"
            :style="{ backgroundImage: `url(${gtacharacters[activeCardPart1].image})` }"
          ></div>
          <div class="text-white text-base md:text-lg flex-1 min-w-0">
            <h3 class="text-xl font-bold mb-2">{{ gtacharacters[activeCardPart1].name }}</h3>
            <p>{{ gtacharacters[activeCardPart1].description }}</p>
          </div>
        </div>

        <!-- Character Michael -->
        <div class="flex flex-wrap gap-6 justify-center">
          <template v-for="(char, index) in gtacharacters" :key="index">
            <div class="text-center">
              <div
                class="card transition duration-300 hover:scale-105"
                :style="{ backgroundImage: `url(${char.image})` }"
                @click="activeCardPart1 = activeCardPart1 === index ? null : index"
              ></div>
              <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Game Features -->
      <section class="space-y-4">
        <div class="text-center">
          <img src="/Bilder/gta.f.png" alt="Game Features" width="400" />
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

//The 3 Main Characters
const gtacharacters = [
  {
    name: 'Michael',
    image: '/Bilder/michael.webp',
    description:
      'Michael De Santa is a former bank robber who is now living a life in witness protection after testifying against his former criminal associates. The high-end house, luxury cars, and a seemingly perfect family life were supposed to be his escape. But the quiet life is far from what he expected. Haunted by his past, Michael is torn between the family he’s trying to rebuild and the criminal world he can never fully leave behind. The thrill of the heist calls him back, but will he make one final score, or will he risk everything to break free once and for all?',
  },
  {
    name: 'Franklin',
    image: '/Bilder/frankie.webp',
    description:
      "Franklin Clinton is a young and ambitious hustler, determined to escape the grind of life in the streets of Los Santos. Raised in the rough neighborhoods, he’s always dreamed of something bigger, but every step toward success seems to come with a price. Franklin is caught between his loyalty to his roots and the lure of a life filled with wealth, power, and opportunity. With a sharp mind and a willingness to take risks, he’s willing to do whatever it takes to rise above his circumstances—but will he stay true to himself, or will he get lost in the city's endless pursuit of money and status?",
  },
  {
    name: 'Trevor',
    image: '/Bilder/trev.jpg',
    description:
      'Trevor Philips is a force of nature—unpredictable, volatile, and dangerous. A former military man turned career criminal, Trevor is a man driven by chaos, craving the adrenaline of violence and lawlessness. He thrives in the desert wastes outside Los Santos, where he runs his own criminal empire with no rules, no boundaries, and no regard for the consequences. His loyalty is as wild as his temper, and his thirst for destruction knows no limits. Trevor’s unpredictable nature makes him both a formidable ally and a terrifying enemy, but in a city as corrupt as Los Santos, only the truly insane can survive.',
  },
];

const activeCardPart1 = ref(null);

const features = [
  {
    title: '🚗 Open World',
    description:
      'Explore the vast, immersive world of GTA, from the bustling city streets of Los Santos to the wild countryside. Drive, fly, and explore at your own pace.',
  },
  {
    title: '🏙️ Dynamic Storytelling',
    description:
      'Engage in the dynamic and ever-evolving story of GTA, with deep character arcs, intense missions, and plot twists that keep you on the edge of your seat.',
  },
  {
    title: '💥 Crime and Chaos',
    description:
      'GTA allows players to dive deep into the criminal underworld. Rob banks, steal cars, and create chaos as you rise to the top of the criminal empire.',
  },
  {
    title: '🔫 Combat and Action',
    description:
      'Fight against enemies using a variety of weapons. Whether you prefer close combat, long-range shooting, or using explosives, GTA gives you all the tools you need.',
  },
];

const activeFeatures = ref(features.map(() => false));

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}
</script>
