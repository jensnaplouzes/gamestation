<template>
  <div id="tombraider" class="w-full">
    <div class="container">
      <div class="flex flex-col justify-center items-center gap-2">
        <div class="flex items-center">
          <img
            src="/Bilder/tombraider.logo.png"
            alt="Tomb Raider logo"
            width="600"
            class="shrink-0"
          />
        </div>

        <p class="text-base leading-relaxed text-center">
          Ready to step into a world where ancient secrets, lost civilizations, and deadly mysteries
          wait to be uncovered.<br />
          The Tomb Raider series isn't just a game—it's a journey through forgotten tombs, hidden
          ruins, and breathtaking landscapes filled with danger and discovery.<br />
          From Lara Croft's earliest expeditions to modern reimaginings of her origin, each chapter
          pushes you deeper into survival, exploration, and legend.<br /><br />
          Climb sheer cliffs, solve intricate puzzles, and explore ancient temples filled with traps
          and secrets long buried by time.<br />
          Face harsh wilderness, outsmart ruthless enemies, and uncover relics that could change
          history itself.<br />
          Every step tests your instincts, courage, and determination as you fight to survive the
          unknown.<br /><br />
          Whether you're here for intense action, rich storytelling, or immersive exploration,<br />
          the Tomb Raider saga delivers unforgettable adventures across the world's most dangerous
          places.<br />
          Pick up your gear, follow the legend, and discover what lies beneath the surface of
          history.
        </p>

        <div class="flex justify-center items-center space-x-6">
          <Card
            name="Lara Croft"
            image="/Bilder/lara.jpg"
            description=""
            @click="toggleText"
            :class="{ 'move-left': showText }"
          />
          <div v-if="showText" class="text-white transition-all duration-500 ease-in-out w-96">
            <p>
              Lara Croft is a fearless archaeologist, explorer, and survivor, driven by curiosity
              and an unbreakable will to uncover the truth buried beneath history's surface. From
              ancient tombs to forgotten ruins, she ventures into the most dangerous corners of the
              world, where every step could mean discovery—or disaster. Highly intelligent and
              resourceful, Lara combines sharp instincts with physical skill, solving deadly
              puzzles, scaling impossible cliffs, and surviving traps designed to keep secrets
              hidden forever. But behind her strength lies determination shaped by loss, experience,
              and an unrelenting pursuit of knowledge. Lara Croft is more than an adventurer—she is
              a symbol of resilience and discovery. Whether facing ruthless enemies or the mysteries
              of lost civilizations, she never turns away from the unknown, proving that courage is
              forged not in comfort, but in the depths of danger and the search for truth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
