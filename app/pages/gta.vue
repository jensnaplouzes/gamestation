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

        <Charaktere v-if="activeCardgta !== null" :character="gtacharacters[activeCardgta]" />

        <!-- Characters Grid -->
        <div class="character-grid">
          <template v-for="(char, index) in gtacharacters" :key="index">
            <div class="text-center">
              <Card
                :name="char.name"
                :image="char.image"
                @click="activeCardgta = activeCardgta === index ? null : index"
              />
              <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Game Features -->
      <section class="space-y-4 mt-16">
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
            <p v-if="activeFeatures[index]" class="mt-1">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Charaktere from '@/components/Charaktere.vue';
import Card from '@/components/Card.vue';

const gtacharacters = [
  {
    name: 'Michael De Santa',
    image: '/Bilder/michael.webp',
    description:
      `Michael De Santa is a former bank robber who is now living under witness protection after testifying against his criminal associates. Having once been a part of a violent and dangerous world, he has tried to leave it all behind. But his transition into a so-called 'peaceful' life has not been as easy as he hoped. Settling into a lavish home with luxury cars and a seemingly perfect family, Michael quickly discovers that the dream of an ideal suburban life comes with its own set of complications.` +
      `His high-end lifestyle, built on blood money, is far from the peaceful retirement he imagined. Michael is haunted by the choices of his past—memories of old heists, betrayals, and the violence that marked his life. He is stuck in a constant internal battle between the family he´s trying to reconnect with and the pull of his criminal past, which he cannot fully escape. His wife, Amanda, has grown distant, and his children, Jimmy and Tracey, are rebellious and increasingly out of control. Despite having all the wealth he could ever need, Michael finds himself empty, dissatisfied, and yearning for the thrill that his past life once gave him.` +
      `When the opportunity for one last heist presents itself, Michael finds himself torn. The excitement and danger of his old life call to him, tempting him to risk everything for one final score. But with so much to lose—a fractured family, a fragile peace, and his own safety—Michael must decide: Will he return to his old ways and embrace the violence once more, or will he take a stand and try to break free of the life that has haunted him for so long?` +
      `In the end, Michael´s journey is about more than just crime and money; it´s about redemption and reconciling with the past. Can he truly leave the world of crime behind, or will the life he once knew pull him back in, forcing him to confront his demons once and for all?`,
  },
  {
    name: 'Franklin Clinton',
    image: '/Bilder/frankie.webp',
    description:
      'Franklin Clinton is a young and ambitious hustler, born and raised in the rough neighborhoods of Los Santos. He´s determined to escape the never-ending grind of street life and make a name for himself. Having grown up in an environment where crime is a way of life, Franklin has always dreamed of something bigger—a life where he can rise above his circumstances and leave the streets behind. But every step toward success seems to come with a cost.' +
      'Despite his ambition, Franklin is caught between two worlds. On one hand, he feels a strong loyalty to his roots—the community and people who raised him. On the other, he´s drawn to the allure of wealth, power, and the opportunities that come with a life filled with luxury. As he navigates this dangerous path, Franklin must decide how far he´s willing to go to escape the cycle of crime and poverty.' +
      'With a sharp mind, natural street smarts, and an innate ability to adapt, Franklin is willing to take risks in pursuit of his dreams. His ambitions lead him to work with dangerous criminals and shady figures, all while trying to stay true to his values. However, the more he gets involved in the high-stakes world of money and power, the more he risks losing himself to the temptation of success.' +
      'Will Franklin rise above the challenges of his environment, or will he be consumed by the city´s endless pursuit of money, status, and betrayal? His journey is a constant battle between ambition, loyalty, and the desire for a better life. The question remains: Can Franklin truly escape his past, or will he be forever trapped by it?',
  },
  {
    name: 'Trevor Philips',
    image: '/Bilder/trev.jpg',
    description:
      'Trevor Philips is a force of nature—unpredictable, volatile, and utterly dangerous. A former military man turned career criminal, Trevor has no respect for rules, boundaries, or consequences. He thrives in the chaos of his own making, driven by the adrenaline of violence and the thrill of lawlessness. His past is as dark and unstable as his present, and his actions are fueled by a deep need for control and destruction.' +
      "Living in the desolate wastelands outside of Los Santos, Trevor has carved out a criminal empire where there are no laws, only the law of the strongest. Whether he´s running illicit operations or causing complete mayhem, Trevor's disregard for authority and civilization makes him a dangerous figure. His unpredictable nature means that no one can truly trust him, not even his closest allies—because just as quickly as he´s a loyal friend, he can become an unstoppable force of destruction." +
      'Trevor´s temper is as wild as his thirst for chaos. He´s driven by a need to prove himself, not just to others, but to the world at large. His volatile personality often puts him at odds with everyone around him, making him a constant source of fear and fascination. In a city as corrupt as Los Santos, only the truly insane can survive—and Trevor is more than willing to embrace his madness.' +
      'His loyalty is fierce, but it´s also unstable. His relationships with friends and enemies alike are a dangerous balancing act, and his actions often leave a trail of destruction in his wake. Trevor is both a terrifying enemy and a formidable ally, but his madness is what ultimately defines him. Will he continue his violent rampage, or will his destructive tendencies finally lead to his downfall? In the lawless world he inhabits, one thing is certain: Trevor Philips is a man who cannot be contained.',
  },
];

const activeCardgta = ref(null);

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
