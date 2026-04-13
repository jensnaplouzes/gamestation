<template>
  <div class="flex flex-col justify-center items-center gap-6">
    <!-- الحاوية الرئيسية للنموذج، محاذاة عمودية + مسافات بين العناصر -->
    <h2 class="text-5xl text-center font-bold">Contact Form</h2>
    <!-- عنوان الصفحة -->
    <div class="flex items-center gap-4">
      <!-- حاوية للبلوككوت مع مسافة بينه وبين الصورة أو النص -->
      <blockquote class="border-l-4 border-red-700 pl-4 text-2xl italic mb-4">
        <!-- اقتباس تحذيري أو تشجيعي -->
        If you've been bitten, exposed, or have any symptoms, don't stay silent.
        <br />Send us a message immediately. Your survival could depend on it.
        <!-- نص الإرشاد -->
      </blockquote>
    </div>
  </div>
  <br />
  <!-- مسافة فارغة -->
  <div class="max-w-3xl mx-auto p-8 bg-black/60 rounded-md">
    <!-- حاوية للنموذج مع خلفية شبه شفافة + حواف مستديرة -->
    <p>
      <!-- فقرة تقديمية -->
      Time is critical, and every second counts.<br />
      <!-- تذكير بالوقت -->
      <br />
      Whether you need guidance, assistance, or simply someone to talk to, we're here to help you
      through it.<br />
      We understand the fear, the uncertainty, and the weight of what this might mean.<br />
      You're not alone.<br />
      We're ready to listen, to support, and to offer any resources we can.<br />
      <br />
      Even if you're unsure, even if it's just a scratch — reach out.<br />
      Your message could make all the difference.<br />
      We take every report seriously and handle each one with care, urgency, and confidentiality.<br />
      Don't wait in silence. Let us know what you're going through.<br />
      <br />
      <strong>Remember:</strong> staying quiet doesn't keep others safe — speaking up just might.<br />
      We're here, and we're listening.
      <!-- نص تشجيعي وتحفيزي -->
    </p>
    <br />

    <!-- النموذج قبل الإرسال -->
    <div v-if="!formSubmitted" class="flex flex-col md:flex-row md:items-start gap-6">
      <form @submit.prevent="sendMail" class="flex-1 space-y-4">
        <!-- النموذج نفسه، منع التحديث الافتراضي للصفحة -->
        <label class="block mb-1" for="name">Name:</label>
        <!-- تسمية حقل الاسم -->
        <input
          id="name"
          type="text"
          required
          class="w-full p-2 rounded bg-gray-700 focus:ring-2 focus:ring-red-500"
          v-model="formValues.name"
        /><br />

        <label class="block mb-1" for="email">E-Mail:</label>
        <input
          id="email"
          type="email"
          required
          class="w-full p-2 rounded bg-gray-700 focus:ring-2 focus:ring-red-500"
          v-model="formValues.email"
        /><br />

        <label class="block mb-1" for="nachricht">Message:</label>
        <textarea
          id="nachricht"
          rows="5"
          required
          class="w-full p-2 rounded bg-gray-700 focus:ring-2 focus:ring-red-500"
          v-model="formValues.message"
        ></textarea>
        <br />

        <p>
          And don't forget.. when you're lost in the darkness, look for the light.🌟
          <!-- تذكير تشجيعي داخل النموذج -->
        </p>

        <button type="submit" class="button-primary">Send</button>
        <!-- زر الإرسال -->
      </form>

      <!-- صورة بجانب النموذج على الشاشات الكبيرة -->
      <img
        src="/Bilder/clicker.boss.png"
        alt="Clicker Boss"
        class="sticker w-40 rounded-lg shadow-lg"
      />
    </div>

    <!-- رسالة بعد الإرسال -->
    <div v-else class="p-8 bg-green-400/60 text-white text-xl">
      Danke für die Nachricht!
      <!-- رسالة شكر بعد الإرسال -->
    </div>
  </div>
</template>

<script setup>
const mail = useMail();

const formSubmitted = ref(false);
const formValues = ref({
  name: '',
  email: '',
  message: '',
});

const sendMail = async (event) => {
  await mail.send({
    from: 'jennie@gigabit.de',
    subject: 'Formular Webseite',
    text: `Nachricht von: ${formValues.value.name}  <${formValues.value.email}>\n\nNachricht:\n${formValues.value.message}`,
  });
  formSubmitted.value = true;
};
</script>
