<template>
  <div id="story" class="w-full">
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8 space-y-12">
      <h2 class="text-3xl font-bold">The Story 🎮</h2>

      <img
        src="/Bilder/tloupart1.png"
        alt="The Last of Us - Part I"
        width="300"
      />
      <p>
        In the world of The Last of Us, humanity didn't fall with a bang — it
        rotted from the inside out. A mutated strain of the Cordyceps fungus
        tore through the United States, infecting millions and turning them into
        violent, mindless husks. Civilization collapsed almost overnight.
        Governments fell. Cities were walled off into harsh quarantine zones.
        Outside them? Lawless wastelands, ruined towns, fungal forests — and
        worse. This is the world Joel Miller lives in. Joel wasn't always a
        smuggler. Twenty years earlier, he was just a father — until one
        gut-wrenching night, the outbreak took everything from him, including
        his daughter. What was left behind wasn't a man trying to survive. It
        was a man who had nothing left to lose. That is, until Ellie. When we
        meet Joel again, he's been hired to smuggle this foul-mouthed, scrappy
        teenage girl out of a heavily guarded quarantine zone. Sounds like just
        another job — until he learns that Ellie is immune. Somehow, the
        infection doesn't affect her. She could be the key to a cure. Maybe even
        the future of humanity. What starts as a simple escort mission turns
        into a brutal, cross-country odyssey through what's left of the U.S.
        Together, they sneak through crumbling cities, fight off infected
        monstrosities, and tangle with ruthless survivors who've long abandoned
        morality. Every step forward is a fight. But the longer Joel travels
        with Ellie, the more she chips away at the walls he's built around his
        heart. She's funny. Sharp. Fierce. And under all her bravado, she's just
        a kid who's grown up in a world where hope feels like a fairytale. And
        Joel? He starts to care. Maybe too much. When they finally reach the
        Fireflies — the rebel group that might be able to turn Ellie's immunity
        into a cure — Joel is hit with a choice no one should ever have to make.
        Saving the world means sacrificing Ellie. It means handing over the one
        person who gave his life meaning again. So Joel makes the only choice
        his heart can live with: He saves Ellie — and dooms the cure. It's not a
        happy ending. It's not a clean one. But it's real. Raw. And
        unforgettable.<br />
        The Last of Us isn't just about zombies. It's about what happens when
        the world ends and your heart keeps beating. It's about grief, love,
        survival — and the blurred line between doing the right thing… and doing
        what you can live with. For gamers, this isn't just a story you watch.
        You live it. You feel it. And once you've walked a mile in Joel's
        blood-stained boots, it never really leaves you.
      </p>
      <br />

      <img
        src="/Bilder/tloupart2.png"
        alt="The Last of Us - Part II"
        width="300"
      />
      <p>
        Five years have passed. Joel and Ellie, scarred by their journey but
        still standing, have carved out a new life in the peaceful town of
        Jackson, Wyoming. It's not perfect, but it's safe — a rare thing in a
        world still haunted by infected and humanity's worst instincts. Ellie's
        grown older, stronger, and more independent, but her bond with Joel
        remains complicated — full of love, guilt, and the weight of things left
        unsaid. But peace never lasts long in The Last of Us. Out of nowhere, a
        brutal act of revenge shatters everything. Joel is ambushed and murdered
        — savagely — by a stranger named Abby. To Ellie, it feels like her
        entire world is ripped away in an instant. The man who became her
        protector, her father figure, is gone… and all she can feel is fury.
        With nothing but rage and a thirst for vengeance, Ellie sets off for
        Seattle — a city now overrun with infected, militia factions, and
        secrets. She's not alone: Dina, her closest friend (and maybe something
        more), joins her. But the deeper Ellie goes, the more the lines between
        right and wrong blur. Revenge is never clean. Then the game flips the
        script. You become Abby. The very person who killed Joel — now you see
        the world through her eyes. Her pain. Her losses. Her reasons. You learn
        that Joel's past sins had devastating consequences. Her father was the
        Firefly surgeon Joel killed to save Ellie. For Abby, this isn't just
        violence — it's justice. And suddenly, the monster you thought you hated
        becomes... human. The game forces you to walk in both women's shoes, to
        see how trauma, loss, and vengeance twist them in parallel ways. It
        doesn't offer easy answers. Instead, it asks brutal questions: How far
        would you go for the people you love? And at what cost? By the end,
        Ellie has lost almost everything — her friends, her home, even parts of
        herself. She catches up with Abby, beaten and broken, ready for one last
        fight. But just as she's about to finish what she started... she stops.
        She lets Abby go. It's not victory. It's not closure. But it's
        something. Ellie walks away alone, missing fingers, haunted by memories,
        and unsure of what's left of her soul. The cycle of violence is broken —
        but not without a price.<br />
        The Last of Us Part II isn't just a sequel. It's a gut-punch. It
        challenges you to feel empathy for people you hate. It breaks your
        expectations. It hurts. And yet, it's one of the boldest, most
        emotionally ambitious games ever made. This isn't about heroes or
        villains. It's about people — flawed, messy, heartbreaking people —
        trying to survive in a world that refuses to heal.
      </p>
      <p>
        <em>The Last Of US</em> is a powerful story about love, loss, survival,
        and the consequences of revenge in a brutal world.
      </p>

      <h2 class="text-2xl font-semibold">Gameplay Features</h2>
      <table class="w-0.5/4 table-auto border-collapse">
        <tbody>
          <tr
            v-for="(feature, index) in features"
            :key="index"
            @click="toggleFeature(index)"
            class="feature-item cursor-pointer transition transform hover:scale-105 hover:bg-red-700/20 rounded-md"
          >
            <td class="p-2">
              <span
                :class="{
                  'icon inline-block mr-2 transition-transform': true,
                  'rotate-90': activeFeatures[index],
                }"
                >☰</span
              >
            </td>
            <td class="p-2 font-semibold">{{ feature.title }}</td>
            <td class="p-2">
              <span v-if="activeFeatures[index]">{{
                feature.description
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const features = [
  {
    title: '🧟 Stealth',
    description: 'Use stealth tactics to avoid infected and hostile humans.',
  },
  {
    title: '🔪 Combat',
    description:
      'Engage in intense close-quarters combat and brutal gunfights.',
  },
  {
    title: '🧰 Crafting',
    description: 'Scavenge for scarce supplies and craft essential items.',
  },
  {
    title: '🔓 Upgrades',
    description:
      'Customize your weapons and skills to suit your playstyle - but choose wisely.',
  },
  {
    title: '🧠 Strategy',
    description:
      'Use your environment, resources, and instincts to outsmart enemies.',
  },
  {
    title: '🎯 Precision',
    description:
      'Master realistic weapon handling and limites resources - every shot counts.',
  },
  {
    title: '🌍 Exploration',
    description:
      'Navigate hauntingly detailed environments, from overgrown cities to abandoned homes.',
  },
  {
    title: '📖 Lore',
    description:
      "Uncover notes, recordings, and environmental clues that piece together the world's collapse",
  },
  {
    title: '🎭 Storytelling',
    description:
      'Experience emotional, character-driven storytelling with cinematic depth.',
  },
  {
    title: '⚖️ Morality',
    description:
      'Face difficult choices that challenge your sense of right and wrong.',
  },
];

const activeFeatures = ref({});

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}
</script>

<style>
@reference "../assets/css/main.css";

.feature-item:hover .icon {
  @apply rotate-90;
}
</style>
