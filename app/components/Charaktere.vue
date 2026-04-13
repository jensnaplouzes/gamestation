<template>
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- ترتيب عمودي/أفقي + مسافات -->
    <div class="md:w-2/3 space-y-4">
      <!-- عرض 2/3 + مسافات بين العناصر -->
      <h3 class="text-7xl font-semibold">{{ title }}</h3>
      <!-- عنوان كبير وعريض -->
      <p class="leading-relaxed">
        <!-- فقرة بمسافة بين الأسطر -->
        <slot />
        <!-- مكان لمحتوى ممرر للكمبوننت -->
      </p>
    </div>
    <img
      :src="image"
      :alt="title"
      :class="['w-3/4 md:w-1/4 shadow-lg border-b-4 border-b-white', $props.class]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  // تعريف الخصائص
  title: String, // عنوان
  image: String, // رابط الصورة
  class: String, // كلاس إضافي
});
</script>

<style></style>
