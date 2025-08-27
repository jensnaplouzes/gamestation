<template>
  <header>
    <NuxtLink to="/">
      <img src="/Bilder/tlou1.png" alt="The Last of Us" width="300" />
    </NuxtLink>
    <nav>
      <NuxtLink to="/">The Last of Us</NuxtLink>
      <NuxtLink to="/ueber">About The Game</NuxtLink>
      <NuxtLink to="/charaktere">Characters</NuxtLink>
      <NuxtLink to="/infected">Infected</NuxtLink>
      <NuxtLink to="/fireflies">Fireflies</NuxtLink>
      <NuxtLink to="/fedra">Fedra</NuxtLink>
      <NuxtLink to="/wlf">WLF</NuxtLink>
      <NuxtLink to="/scars">Scars</NuxtLink>
      <NuxtLink to="/hbo">HBO Series</NuxtLink>
      <NuxtLink to="/kontakt">Contact</NuxtLink>
    </nav>
  </header>
</template>
<style scoped>
@reference "../assets/css/main.css";
header {
  @apply flex justify-center flex-col items-center gap-8;
}
</style>
