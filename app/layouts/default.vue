<template>
  <div class="layout-default">
    <Header />
    <main>
      <slot />
    </main>
    <button class="scroll-up" @click="scrollToTop">
      <!-- زر للعودة للأعلى -->
      &#8593;
      <!-- سهم للأعلى -->
      <span class="sr-only">Nach oben</span>
      <!-- نص لقراء الشاشة -->
    </button>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); // الحصول على بيانات الصفحة الحالية

const setBodyClass = () => {
  // دالة لتعيين كلاس للـ body حسب الصفحة
  document.body.className = ''; // مسح أي كلاس موجود
  const pageClass = route.name?.toString().toLowerCase() || ''; // تحويل اسم الصفحة لكلاس صغير

  if (pageClass) {
    document.body.classList.add(pageClass); // إضافة كلاس الصفحة للجسم
  }
};

onMounted(() => {
  // تنفيذ عند تحميل الكمبوننت
  setBodyClass(); // استدعاء دالة تعيين الكلاس
});
watch(
  () => route.name, // مراقبة تغيير اسم الصفحة
  () => {
    setBodyClass(); // إعادة تعيين الكلاس عند التغيير
  }
);
const scrollToTop = (e) => {
  // دالة للتمرير للأعلى عند الضغط
  e.preventDefault(); // منع السلوك الافتراضي للزر
  window.scrollTo({
    top: 0, // اذهب لأعلى الصفحة
    behavior: 'smooth', // تمرير سلس
  });
};
</script>

<style scoped>
@reference "../assets/css/main.css"; /* استدعاء ملف CSS خارجي */
.layout-default {
  display: flex; /* ترتيب العناصر أفقي/عمودي */
  flex-direction: column; /* ترتيب عمودي */
}

.scroll-up {
  @apply fixed z-50 right-4 bottom-8 w-12 h-12 rounded-3xl opacity-90 transition-all duration-300 ease-in-out cursor-pointer hover:bottom-10 hover:opacity-100; /* تصميم الزر وموقعه */
  @apply bg-white text-black text-lg font-extrabold hover:bg-blue-500/60; /* ألوان وحجم النص + hover */
}
</style>
