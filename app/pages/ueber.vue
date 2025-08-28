<template>
  <div id="story">

      <h2 class="text-3xl font-bold">The Story 🎮</h2>
      <br></br>
            <img src="/Bilder/tloupart1.png" alt="The Last of Us - Part I" width="300" /><br></br>
      <p>
        The story is set in a post-apocalyptic United States devastated by a
        <strong>deadly fungal infection</strong> that turns people into agressive, zombie-like creatures.<br></br>
        The world has collapsed into quarantined cities, isolated settlements, and dangerous wilderness. The game follows <strong>Joel Miller</strong>, a hardened survivor who tragically lost his daughter on the first night of the outbreak.
      </p>
      <p>Twenty years later, he's tasked with smuggling a teenage girl named <strong>Ellie</strong> out of a quarantine zone. <strong>Ellie is immune to the infection and may be the key to a cure.</strong></p>
      <p>Over their dangerous journey, Joel and Ellie form a deep <strong>father-daughter bond.</strong> But when Joel discovers that saving humanity means losing Ellie,<br></br>
      he makes a devastating choice to save her instead.</p>
      <br></br>
      <br></br>
      <img src="/Bilder/tloupart2.png" alt="The Last of Us - Part II" width="300" /><br></br>
      <p>Five years later, Joel and Ellie live in a safe community in Jackson, Wyoming.</p>
      <p>Their peace is shattered when a woman named <strong>Abby</strong>, seeking revenge for her father's death, brutally kills Joel.</p>
      <p>Consumed by grief and rage, Ellie hunts Abby across a ruined Seattle, driven by revenge. Along the way, the game also tells Abby's side of the story, showing how violence and loss shape both women.</p>
      <p>In the end, Ellie realizes that revenge has cost her everything, and she chooses to let Abby live.<br></br>
      breaking the cycle of violence but <strong>losing herself in the process.</strong></p>
      <br></br>
      <br></br>
      <p>
        <em>The Last Of US</em> is a powerful story about love, loss, survival, and the consequences of revenge in a brutal world.
      </p>
      <br></br>

      <h2 class="text-2xl font-semibold">Gameplay Features</h2>
      <table class="w-0.5/4 table-auto border-collapse">

        <tbody>
          <tr v-for="(feature, index) in features" :key="index" @click="toggleFeature(index)"
              class="feature-item cursor-pointer transition transform hover:scale-105 hover:bg-red-700/20 rounded-md">
            <td class="p-2">
              <span :class="{'icon inline-block mr-2 transition-transform': true, 'rotate-90': activeFeatures[index]}">☰</span>
            </td>
            <td class="p-2 font-semibold">{{ feature.title }}</td>
            <td class="p-2">
              <span v-if="activeFeatures[index]">{{ feature.description }}</span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = [
  {
    title: '🧟 Stealth',
    description: 'Use stealth tactics to avoid infected and hostile humans.',
  },
  {
    title: '🔪 Combat',
    description: 'Engage in intense close-quarters combat and brutal gunfights.',
  },
  {
    title: '🧰 Crafting',
    description: 'Scavenge for scarce supplies and craft essential items.',
  },
  {
    title:'🔓 Upgrades',
    description: 'Customize your weapons and skills to suit your playstyle - but choose wisely.',
  },
  {
    title:'🧠 Strategy',
    description: 'Use your environment, resources, and instincts to outsmart enemies.',
  },
  {
    title:'🎯 Precision',
    description: 'Master realistic weapon handling and limites resources - every shot counts.',
  },
  {
    title:'🌍 Exploration',
    description: 'Navigate hauntingly detailed environments, from overgrown cities to abandoned homes.',
  },
  {
    title:'📖 Lore',
    description: 'Uncover notes, recordings, and environmental clues that piece together the world\'s collapse',
  },
  {
    title:'🎭 Storytelling',
    description: 'Experience emotional, character-driven storytelling with cinematic depth.',
  },
  {
    title:'⚖️ Morality',
    description: 'Face difficult choices that challenge your sense of right and wrong.',
  },
]

const activeFeatures = ref({})

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index]
}
</script>

<style>
@reference "../assets/css/main.css";

.feature-item:hover .icon{
@apply rotate-90;
}

</style>
