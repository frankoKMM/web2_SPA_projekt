<script setup>
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/converter">Converter</RouterLink>
      <RouterLink to="/game">Game</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  background-color: wheat; /* Bootstrap bg-light color */
  border: 1px solid #343a40; /* Bootstrap border color */
  padding: 0.75rem; /* Bootstrap p-3 padding */
  align-items: baseline;
}

nav {
  display: flex;
  justify-content: center;
  background-color: #555;
  padding: 10px;
}

nav a {
  color: white;
  padding: 10px;
  margin: 0 10px;
}
</style>
