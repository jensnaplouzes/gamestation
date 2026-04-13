<template>
  <div id="hbo" class="w-full">
    <!-- الحاوية الرئيسية لصفحة HBO -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8">
      <!-- حاوية بعرض محدود + محاذاة للوسط + حشوة -->
      <div class="flex justify-center">
        <!-- محاذاة الصورة للوسط -->
        <img src="/Bilder/hbo.logo.png" alt="HBO" width="500" />
        <!-- شعار HBO -->
      </div>
      <br />
      <!-- مسافة فارغة -->
      <h3 class="text-3xl mb-2 font-bold">
        From game to screen — a story reborn with even more heart...
        <!-- العنوان الفرعي -->
      </h3>
      <p class="text-base leading-relaxed">
        <!-- فقرة نصية -->
        When HBO said they were turning
        <em><strong>The Last of Us</strong></em> into a TV show, gamers everywhere held their
        breath.
        <!-- تقديم المسلسل -->
        This game is legendary — epic story, unforgettable characters, and a world that's both
        brutal and beautiful.
        <!-- وصف اللعبة -->
        Could a show really do it justice? Spoiler: It totally did.<br /><br />
        <!-- تعليق على التحويل -->

        <strong class="text-2xl">Faithful to the Game — But Leveling Up</strong><br />
        <!-- عنوان فرعي -->
        Craig Mazin (<em>Chernobyl</em>) teamed up with Neil Druckmann, the game's creator, to bring
        this world to life.
        <!-- معلومات عن الإنتاج -->
        They nailed the story but added cool new scenes and deeper details that make the world even
        richer.
        <!-- مميزات إضافية للمسلسل -->
        Whether you're a die-hard fan or new to the story, you're hooked from the moment the
        infection breaks out and Joel meets Ellie — a duo you'll be rooting for hard.<br /><br />
        <!-- تجربة المشاهدة -->

        <strong class="text-2xl">Casting That Hits the Mark</strong><br />
        <!-- عنوان فرعي عن الكاست -->
        Pedro Pascal as Joel? Bella Ramsey as Ellie? Some fans were skeptical at first, but these
        two crushed it.
        <!-- الكاست -->
        Pascal brings all the gritty, tough-love vibes, while Ramsey nails Ellie's smart mouth and
        fierce heart.
        <!-- أداء الممثلين -->
        Their slow-building bond is pure gold. And don't sleep on the episode about Bill and Frank —
        it's emotional AF and shows this world isn't just about zombies, but about real, messy human
        connections.<br /><br />
        <!-- تفاصيل الأحداث -->

        <strong class="text-2xl">Expanding the Universe</strong><br />
        <!-- عنوان فرعي -->
        The show doesn't just stick to the game's map — it adds new characters and stories that
        explain what went down when the world fell apart.
        <!-- توسع القصة -->
        The infected are scary, sure, but the real danger? Other people losing it.
        <!-- وصف المخاطر -->
        It's a world full of tension, surprises, and moments that hit right in the feels.<br /><br />
        <!-- جو العالم -->

        <strong class="text-2xl">More Than Just Survival</strong><br />
        <!-- عنوان فرعي -->
        At its core, <em>The Last of Us</em> is about love, loss, and the crazy lengths people go to
        protect each other.
        <!-- محور القصة -->
        Joel's on a path to find hope again, while Ellie learns what it means to trust someone.
        <!-- رحلة الشخصيات -->
        The Season 1 ending? It's heartbreaking and thought-provoking — just like the game's, making
        you question what you'd do in their shoes.<br /><br />
        <!-- نهاية الموسم الأول -->

        <strong class="text-2xl">Big Hit and What's Next</strong><br />
        <!-- عنوان فرعي -->
        The show blew up — critics and fans gave it mad props, and tons of new players jumped into
        the game after watching.
        <!-- نجاح المسلسل -->
        Season 2 is coming, and it's diving into the darker, heavier story of the sequel.
        <!-- الموسم الثاني -->
        Fans are hyped (and nervous) to see how it all plays out.<br /><br />
        <!-- توقعات الجمهور -->

        <strong class="text-2xl">Wrap Up</strong><br />
        <!-- عنوان فرعي للختام -->
        HBO's <em>The Last of Us</em> proves games aren't just for playing — they're stories waiting
        to be told in new ways.
        <!-- خاتمة -->
        With respect, heart, and some serious talent, this show brought Joel and Ellie's journey to
        a whole new level.
        <!-- تقييم المسلسل -->
        In a world full of chaos, it reminds us why love and connection are the ultimate power-ups.
        <!-- رسالة المسلسل -->
      </p>
      <br />
      <!-- مسافة فارغة -->
      <div class="mt-10">
        <!-- مسافة من الأعلى -->
        <div class="flex justify-center items-center gap-16 mb-6 flex-wrap text-center">
          <h3 class="text-5xl font-bold">Episode Overview 🎬</h3>
          <!-- عنوان القسم -->
          <img src="/Bilder/hbo.webp" alt="HBO" class="w-[200px]" />
          <!-- صورة ثانوية -->
        </div>

        <div class="flex justify-center gap-4 mb-6">
          <!-- أزرار اختيار الموسم -->
          <button
            class="button-primary"
            @click="selectedSeason = 1"
            :class="{ 'opacity-70': selectedSeason !== 1 }"
          >
            Season 1
            <!-- زر الموسم الأول -->
          </button>

          <button
            class="button-primary"
            @click="selectedSeason = 2"
            :class="{ 'opacity-70': selectedSeason !== 2 }"
          >
            Season 2
            <!-- زر الموسم الثاني -->
          </button>
        </div>

        <ul class="w-full px-4 bf-black bg-opacity-60 rounded">
          <!-- قائمة الحلقات -->
          <li
            v-for="ep in filteredEpisodes"
            :key="ep.id"
            class="flex flex-col md:flex-row gap-8 bg-black/60 p-4 shadow rounded mb-6 w-full"
          >
            <img
              v-if="ep.image"
              :src="ep.image.medium"
              alt="Episodenbild"
              class="w-full md:w-48 rounded"
            />
            <div class="flex-1">
              <h4 class="text-xl font-semibold text-white">
                {{ ep.season }}x{{ ep.number }} - {{ ep.name }}
              </h4>
              <p class="text-sm text-white">{{ ep.airdate }} ( Runtime: {{ ep.runtime }} Min)</p>
              <p class="mt-1 text-white">
                {{ ep.summary ? ep.summary.replace(/<[^>]*>/g, '') : 'keine Beschreibung' }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

type Episode = {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  runtime: number;
  image?: { medium: string };
  summary?: string;
};

type ApiResponse = {
  _embedded?: { episodes: Episode[] };
};

const { data: apiData, error } = await useFetch<ApiResponse>(
  'https://api.tvmaze.com/singlesearch/shows?q=the%20last%20of%20us&embed=episodes'
);

const selectedSeason = ref(1);

const episodes = computed(() => {
  return apiData.value?._embedded?.episodes || [];
});

const filteredEpisodes = computed(() =>
  episodes.value.filter((ep) => ep.season === selectedSeason.value)
);
</script>
