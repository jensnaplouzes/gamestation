<template>
  <div id="index" class="w-full">
    <!-- الحاوية الرئيسية لصفحة البداية -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8 space-y-12">
      <!-- حاوية بعرض محدود + محاذاة للوسط + حشوة + فراغات بين العناصر -->
      <h1 class="text-4xl font-bold">Welcome to Game Station Central</h1>
      <!-- عنوان رئيسي -->
      <h2 class="text-2xl">Trust no one. Fear Everything.</h2>
      <!-- عنوان فرعي -->
      <h3 class="text-xl italic">
        Your ultimate hub for everything PlayStation<br />
        <!-- عنوان فرعي مائل -->
        – from “The Last of Us” to epic adventures, characters, and hidden secrets.
      </h3>
      <!-- تكملة النص -->
      <p class="text-base leading-relaxed">
        <!-- فقرة نصية -->
        Step into a hauntingly beautiful world where nature reclaims cities and everyday is a fight
        to stay alive.<br />
        <!-- وصف العالم -->
        In <strong>The Last Of Us</strong>, humanity is pushed to its breaking point. Fear and hope
        collide in abandoned streets, hidden forests, and crumbling buildings.
        <!-- محور اللعبة -->
      </p>
      <section class="quote p-4">
        <!-- قسم اقتباس -->
        <blockquote class="text-lg italic">
          <!-- اقتباس مائل -->
          "When you're lost in the darkness, look for the light."
          <span>– The Fireflies</span>
          <!-- مصدر الاقتباس -->
        </blockquote>
      </section>
      <br /><!-- مسافة فارغة -->

      <section class="cta space-y-4">
        <!-- قسم دعوة للتفاعل -->
        <h3 class="text-2xl font-semibold">Ready to face the infected?</h3>
        <!-- عنوان فرعي -->
        <p class="text-base leading-relaxed">
          <!-- فقرة -->
          The World ended - but the story didn't.<br />The silence that followed was louder than the
          screams.
          <!-- وصف الجو -->
        </p>
        <h3>What really happend in the quarantibe zones?</h3>
        <!-- سؤال لجذب القارئ -->
        <p>Secrets were buried under rubble and lies.</p>
        <!-- شرح مختصر -->
        <br />
        <h3>Every spore has a story.</h3>
        <!-- عنوان -->
        <p>Some chose survival. Others chose hope.</p>
        <!-- شرح مختصر -->
        <br />
        <h3>The fireflies had a plan. Or did they?</h3>
        <!-- استفهام -->
        <p>In the end. it all came down to two people.</p>
        <!-- شرح مختصر -->
        <br />
        <h3>
          Joel survived. But at what cost?<br />
          Ellie's immunity was never the whole story.
        </h3>
        <!-- العنوان الرئيسي للقصة -->
        <p>
          So ask yourself -
          <strong>What would you do for someone you love?</strong>
        </p>
        <!-- دعوة للتفكير -->
        <br />
        <br />
        <p>
          In a world like this, survival isn't just about strength - it's about the people you
          trust, the choises you make, and the burdens you carry.<br />Some followed order. Some
          followed hope. And some...just tried to make it trough the day.<br />These aren't heroes.
          They're survivors. And every one of them has price o pay.
        </p>
        <!-- شرح العالم وصراع البقاء -->
        <p>
          <strong>Survival of the fittest... yet stubbornness wins the longest battles.</strong>
        </p>
        <!-- خاتمة الفقرة -->

        <NuxtLink to="/charaktere" class="button-primary">
          The Last Faces Of Hope
          <!-- زر رابط للصفحة التالية -->
        </NuxtLink>
      </section>

      <h2 class="text-2xl font-semibold">Meet The Heroes</h2>
      <!-- عنوان قسم مميزات اللعب -->

      <table class="w-0.5/4 table-auto border-collapse">
        <!-- جدول مميزات اللعب -->

        <tbody>
          <tr
            v-for="(feature, index) in features"
            :key="index"
            @click="toggleFeature(index)"
            class="feature-item cursor-pointer transition transform hover:scale-105 hover:bg-red-700/20 rounded-md"
          >
            <!-- صف قابل للنقر لكل ميزة -->

            <td class="p-2">
              <span
                :class="{
                  'icon inline-block mr-2 transition-transform': true,
                  'rotate-90': activeFeatures[index],
                }"
                >☰</span
              >
              <!-- أيقونة صغيرة تدور عند النقر -->
            </td>

            <td class="p-2 font-semibold">{{ feature.title }}</td>
            <!-- اسم الميزة -->

            <td class="p-2">
              <span v-if="activeFeatures[index]">{{ feature.description }}</span>
              <!-- وصف الميزة يظهر عند النقر -->
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
    title: '🧟 Joel Miller',
    description: 'Use stealth tactics to avoid infected and hostile humans.',
  },
  {
    title: '🔪 Arthur Morgan',
    description: 'Engage in intense close-quarters combat and brutal gunfights.',
  },
  {
    title: '🧰 Kratos',
    description: 'Scavenge for scarce supplies and craft essential items.',
  },
  {
    title: '🔓 Vito',
    description: 'Customize your weapons and skills to suit your playstyle - but choose wisely.',
  },
  {
    title: '🧠 Nate',
    description: 'Use your environment, resources, and instincts to outsmart enemies.',
  },
  {
    title: '🎯 CJ',
    description: 'Master realistic weapon handling and limites resources - every shot counts.',
  },
  {
    title: '🌍 Lara Croft',
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
    description: 'Experience emotional, character-driven storytelling with cinematic depth.',
  },
  {
    title: '⚖️ Morality',
    description: 'Face difficult choices that challenge your sense of right and wrong.',
  },
];

const activeFeatures = ref({});

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}
</script>
