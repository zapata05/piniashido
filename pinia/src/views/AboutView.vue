<template>
  <div class="contenedor"> 
   <h1>yo soy {{store.user.name}} {{ store.user.lastmae }}</h1> 
   <h2>mi email {{ store.user.email }}</h2>
 <H2>website is {{ store.website }}</H2>
  <div> <input type="text"
   placeholder="nuevo nombre"
   v-model="nameInput"
   >  
   <button @click="nombre">agregame</button></div>
 
  <div> <input type="text"
   placeholder="apellido"
   v-model="nameInput2"
   >
 
   <button @click="epellido">apellido</button>
  </div>
  </div>
 </template>
<script setup>

import { usedefineStore } from '@/stores/pinia';
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

<style>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.count {
  font-size: 24px;
  margin-bottom: 16px;
}

.botones button {
  padding: 8px 16px;
  font-size: 16px;
}

</style>
