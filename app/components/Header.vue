<template>
  <header>
    <div class="header-container">
      <NuxtLink to="/">
        <img src="/Bilder/ps5.logo.png" alt="Game Station Central Logo" class="logo" width="100" />
        <nav class="nav-links"></nav>
      </NuxtLink>
      <nav>
        <NuxtLink to="/thelastofus">The Last Of Us</NuxtLink>
        <NuxtLink to="/reddead">Red Dead Redemption II</NuxtLink>
        <NuxtLink to="/godofwar">God Of War</NuxtLink>
        <NuxtLink to="/mafia">Mafia</NuxtLink>
        <NuxtLink to="/uncharted">Uncharted</NuxtLink>
        <NuxtLink to="/wlf">Grand Theft Auto</NuxtLink>
        <NuxtLink to="/scars">Tomb Raider</NuxtLink>
        <NuxtLink to="/hbo">Spider-Man </NuxtLink>
        <NuxtLink to="/kontakt">Call Of Duty</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@reference "../assets/css/main.css";
.header-container {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
}

.logo {
  height: 50px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  margin-left: 200px;
  font-weight: bold;
}

.nav-links a:hover {
  color: #f39c12;
}
</style>
