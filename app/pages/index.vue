<template>
  <div id="index" class="w-full">
    <div class="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold text-white">Welcome to Game Station Central</h1>
        <h2 class="text-2xl text-white/80">Trust no one. Fear Everything.</h2>
        <h3 class="text-xl italic text-white/70">
          Your ultimate hub for everything PlayStation<br />
          – from The Last of Us, Red Dead II, God Of War, Mafia, usw. to epic adventures,
          characters, and hidden secrets.
        </h3>
      </div>
      <div class="text-white text-base leading-relaxed space-y-4">
        <p>
          Step into a hauntingly atmospheric world where the familiar has become strange, and every
          step could mean survival or loss.<br />
          Through decaying structures, overgrown landscapes, and silent ruins, you navigate a
          reality where hope and despair exist side by side. Every choice matters — and every second
          has the power to change everything.<br />
        </p>
      </div>

      <section class="space-y-4 text-white">
        <h3 class="text-2xl font-semibold">
          So… what happens when myth and reality start to blur?
        </h3>
        <p class="text-white/80">
          When gods walk unseen among criminals, and empires built on lies begin to collapse?
        </p>
        <h3 class="font-semibold">
          So… who can you trust when every ally hides a secret of their own?
        </h3>
        <p>And every mission pulls you deeper into a world you were never meant to survive?</p>
        <h3 class="font-semibold">
          So… will you follow the path of honor, or embrace the chaos to get what you want?
        </h3>
        <p>
          Because every city has its underworld. Every legend has a beginning. And every hero is
          just one decision away from becoming something else.
        </p>
        <h3 class="font-semibold">
          So… are you ready to step into a story where nothing is what it seems?
        </h3>
      </section>

      <!-- FEATURES -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-white">Meet The Heroes</h2>

        <table class="w-full border-collapse text-white">
          <tbody>
            <tr
              v-for="(feature, index) in features"
              :key="index"
              @click="toggleFeature(index)"
              class="cursor-pointer transition hover:bg-red-700/20 hover:scale-[1.01]"
            >
              <td class="p-3 w-10">
                <span
                  class="inline-block transition-transform"
                  :class="{ 'rotate-90': activeFeatures[index] }"
                >
                  ☰
                </span>
              </td>

              <td class="p-3 font-semibold">
                {{ feature.title }}
              </td>

              <td class="p-3 text-white/70">
                <span v-if="activeFeatures[index]">
                  {{ feature.description }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const features = [
  {
    title: 'Joel Miller',
    description: '',
  },
  {
    title: 'Arthur Morgan',
    description: '',
  },
  { title: 'Kratos', description: '' },
  {
    title: 'Vito',
    description: '',
  },
  {
    title: 'Nate',
    description: '',
  },
  {
    title: 'CJ',
    description: '',
  },
  {
    title: 'Lara Croft',
    description: '',
  },
];

const activeFeatures = ref([]);

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}
</script>
