<template>
  <div id="spiderman" class="w-full">
    <div class="container">
      <img src="/Bilder/spid.wlc.png" alt="Peter Parker" width="600" class="mx-auto mt-6" />
      <div class="flex justify-center">
        <img src="/Bilder/spid.logo.png" alt="Spider-Man" width="500" />
      </div>
      <br />

      <section>
        <p class="text-white text-center text-lg mb-6">
          Spider-Man Remastered is a visually stunning and enhanced version of the 2018 hit Marvel's
          Spider-Man, developed by Insomniac Games and released for PlayStation 5.<br />
          This remastered edition brings new life to the critically acclaimed open-world superhero
          adventure, offering better graphics, smoother performance, and additional content.<br />
          <br />
          The game follows Peter Parker, a 23-year-old Spider-Man, as he juggles his personal life
          and his responsibilities as a superhero in New York City.<br />
          <br />
          Players take control of Peter as he faces off against iconic villains like Kingpin,
          Vulture, and the enigmatic Mister Negative, while also navigating complex relationships
          with characters such as Mary Jane Watson and Aunt May.<br />
          One of the major highlights of Spider-Man Remastered is its impressive visual overhaul.
          <br />
          The game runs at a solid 60 frames per second on the PlayStation 5 and features
          ray-tracing technology for ultra-realistic lighting and reflections.<br />
          The character models have been updated, with Peter Parker's face being re-cast, making him
          look more expressive and younger.<br />
          The updated cityscape is more detailed than ever, with dynamic weather effects and
          breathtaking views of Manhattan's skyline. The gameplay remains as engaging as ever, with
          fluid combat that mixes acrobatic maneuvers with web-swinging around the city.
          <br />
          The remaster also includes the The City That Never Sleeps DLC, which introduces new story
          missions, challenges, and additional villains to the game. Players can explore new parts
          of the city, unlock new suits, and dive deeper into Spider-Man's world.<br />
          <br />
          In terms of performance, Spider-Man Remastered takes full advantage of the PS5's
          capabilities.<br />
          Load times are near-instantaneous, and the haptic feedback and adaptive triggers of the
          DualSense controller further immerse players into the experience, making each swing
          through the city feel even more realistic.<br />
          <br />
          For those who missed out on the original or are revisiting this epic adventure, Spider-Man
          Remastered offers the perfect opportunity to swing through New York City once again—better
          than ever before.
        </p>
      </section>

      <section class="space-y-8 mt-20">
        <!-- Character Selection (First Row) -->
        <div class="flex flex-wrap gap-10 justify-center mb-8">
          <template v-for="(char, index) in gtacharacters.slice(0, 3)" :key="index">
            <div class="text-center">
              <Card
                :name="char.name"
                :image="char.image"
                :onClick="() => (activeCardPart1 = activeCardPart1 === index ? null : index)"
              />
            </div>
          </template>
        </div>

        <!-- Character Selection (Second Row) -->
        <div class="flex flex-wrap gap-10 justify-center">
          <template v-for="(char, index) in gtacharacters.slice(3, 6)" :key="index">
            <div class="text-center">
              <Card
                :name="char.name"
                :image="char.image"
                :onClick="() => (activeCardPart1 = activeCardPart1 === index ? null : index)"
              />
            </div>
          </template>
        </div>
      </section>

      <!-- Game Features Section -->
      <section class="space-y-4 gap-8 mt-16">
        <div class="text-center">
          <img src="/Bilder/spid.f.png" alt="Game Features" width="400" />
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

const gtacharacters = [
  {
    name: 'Peter Parker',
    image: '/Bilder/pet.webp',
    description:
      'Peter Parker, ein begabter Fotograf und Student, wird zu Spider-Man, als er von einer radioaktiven Spinne gebissen wird.',
  },
  {
    name: 'Harry Osborn',
    image: '/Bilder/harry.webp',
    description:
      'Harry Osborn ist der beste Freund von Peter Parker und ein wichtiger Charakter in der Spider-Man-Geschichte.',
  },
  {
    name: 'Felicia',
    image: '/Bilder/felicia.webp',
    description:
      'Felicia Hardy, auch bekannt als Black Cat, ist eine Diebin und gelegentliche Verbündete von Spider-Man.',
  },
  {
    name: 'Martin Li',
    image: '/Bilder/martin.webp',
    description:
      'Martin Li ist ein charismatischer Führer und Gegner von Spider-Man, auch bekannt als Mister Negative.',
  },
  {
    name: 'Miles Morales',
    image: '/Bilder/miles.webp',
    description:
      'Miles Morales ist der zweite Spider-Man im Marvel-Universum, ein jugendlicher Held, der mit Spider-Man verbündet ist.',
  },
  {
    name: 'Mary Jane Watson',
    image: '/Bilder/maryjane.webp',
    description:
      'Mary Jane Watson ist eine wichtige Figur im Leben von Peter Parker und seine große Liebe.',
  },
];

const activeCardPart1 = ref(null);

const features = [
  {
    title: '🕷️ Superkräfte',
    description:
      'Spider-Man besitzt übermenschliche Kräfte wie erhöhte Agilität, Reflexe und die Fähigkeit, Wände zu erklimmen.',
  },
  {
    title: '🌆 Offene Welt',
    description:
      'Schwimme durch die Straßen von New York und erlebe die offene Welt, in der du deine Abenteuer erleben kannst.',
  },
  {
    title: '🎮 Kampf- und Bewegungssystem',
    description:
      'Verwende das flexible und schnelle Kampf- und Bewegungssystem, um Feinde zu besiegen und die Stadt zu beschützen.',
  },
  {
    title: '💥 Venom vs Spider-Man',
    description:
      'Spüre den Nervenkitzel, als Spider-Man gegen Venom kämpft, eine der gefährlichsten Bedrohungen für die Stadt.',
  },
];

const activeFeatures = ref(features.map(() => false));

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}
</script>
