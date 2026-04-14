<template>
  <div id="godofwar" class="w-full">
    <div class="max-w-6xl mx-auto px-4">
      <br />
      <header class="flex flex-col justify-center items-center gap-6">
        <div class="flex items-center">
          <img src="/Bilder/godofwar.logo.png" alt="God Of War logo" width="600" class="shrink-0" />
        </div>

        <blockquote class="border-l-4 border-red-700 pl-4 text-2xl italic mb-4">
          "Death can have me when it earns me." - Kratos
        </blockquote>
      </header>

      <!-- Kratos Character Card -->
      <Card name="Kratos" image="/Bilder/kratos.sticker.png" :onClick="() => {}" />

      <p class="text-white text-center mt-4">
        Kratos, the Ghost of Sparta, is one of gaming's most iconic characters.<br />
        Once a ruthless Spartan general, his life was shattered when the god Ares tricked him into
        killing his own wife and daughter.<br />
        Cursed with their ashes forever burned into his skin, Kratos set out on a brutal path of
        vengeance, taking down gods, titans, and anyone who stood in his way.<br />
        <br />
        With the Blades of Chaos chained to his arms, he became a living force of destruction and
        one of the most feared figures in Greek mythology.<br />
        What makes Kratos fascinating is how his story has evolved.<br />
        <br />
        In the original God of War games, he was all rage and violence—a relentless engine of
        revenge. But the Norse saga shows a different side: an older, wiser Kratos trying to guide
        his son Atreus while struggling to control the anger that once defined him.<br />
        He's still the same unstoppable warrior, but now his battles are as much internal as
        external—fighting his past while trying to build a better future.<br />
        <br />
        For gamers, Kratos is more than just a powerhouse; he's proof of how far video game
        storytelling has come.<br />
        From Greek tragedy to Norse epic, his journey is as much about redemption and fatherhood as
        it is about gods and monsters.<br />
        And that's what makes him unforgettable.
      </p>
    </div>
  </div>
</template>

<script setup>
// Import the Card component
import Card from '@/components/Card.vue';
</script>
