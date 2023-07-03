

<script setup>
import { RouterLink } from 'vue-router';
 </script>

<template>
  <div>
    <div style="display: flex; justify-content: center;">
      <RouterLink to="/usuario">usuario pinia</RouterLink>/
      <RouterLink to="/">cotadores</RouterLink>/
      <RouterLink to="/about">usuario</RouterLink>
    </div>
    <div style="display: flex; justify-content: center;">
      <RouterView></RouterView>
    </div>
  </div>
</template>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
div{
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
button {
  height: auto;
  width: auto;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
