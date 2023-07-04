<script setup>
import {usedefinestore} from '@/stores/xd'
import {ref} from 'vue'
const store = usedefinestore ()
const Numero = ref(0)

</script>
<template>
<div class="container">
    <div class="ref">
        {{ store.Numero }}
    </div>
    <div class="boton">
        <div><button @click="store.res">-</button></div>
        <div><button @click="store.sum">+</button></div>
    </div>
</div>
</template>