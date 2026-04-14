<template>
  <div class="layout-default">
    <Header />
    <main>
      <slot />
    </main>
    <button class="scroll-up" @click="scrollToTop">
      &#8593;
      <span class="sr-only">Nach oben</span>
    </button>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const setBodyClass = () => {
  document.body.className = '';
  const pageClass = route.name?.toString().toLowerCase() || '';

  if (pageClass) {
    document.body.classList.add(pageClass);
  }
};

onMounted(() => {
  setBodyClass();
});
watch(
  () => route.name,
  () => {
    setBodyClass();
  }
);
const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style scoped>
@reference "../assets/css/main.css";
.layout-default {
  display: flex;
  flex-direction: column;
}

.scroll-up {
  @apply fixed z-50 right-4 bottom-8 w-12 h-12 rounded-3xl opacity-90 transition-all duration-300 ease-in-out cursor-pointer hover:bottom-10 hover:opacity-100; /* تصميم الزر وموقعه */
  @apply bg-white text-black text-lg font-extrabold hover:bg-blue-500/60;
}
</style>
