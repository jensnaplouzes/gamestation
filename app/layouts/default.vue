<template>
  <div class="layout-default">
    <Header />
    <main>
      <slot />
    </main>
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
</script>
