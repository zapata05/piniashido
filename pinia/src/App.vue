<script setup>

import { usedefineStore } from './stores/pinia';
import {ref} from "vue";
const store = usedefineStore();
const nameInput =ref("");
const nameInput2 =ref("");
const nombre = () =>{
    store.changename(nameInput.value);
    nameInput.value="";
  }
  const epellido = () =>  {
    store.apellido(nameInput2.value);
    nameInput2.value="";
  }
 </script>

<template>
 <div> 
  <h1>yo soy {{store.user.name}} {{ store.user.lastmae }}</h1> 
  <h2>mi email {{ store.user.email }}</h2>
<H2>website is {{ store.website }}</H2></div>
 <div> <input type="text"
  placeholder="nuevo nombre"
  v-model="nameInput"
  >  
  <button @click="nombre">agregame</button></div>

 <div> <input type="text"
  placeholder="apellido"
  v-model="nameInput2"
  >

  <button @click="epellido">apellido</button></div>
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
