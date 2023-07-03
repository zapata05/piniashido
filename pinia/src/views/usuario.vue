<script setup>
import {ref,computed} from 'vue'
const numero = ref(0)
const s = () =>{
    numero.value++
}
const r = () =>{
    numero.value--
}
const parimp = computed(() =>{
    if ( numero.value % 2 === 0)return 'par'
    return 'impar'
})
const resetear = () =>{
    numero.value=0
}
</script>
<template>
    <div class="container">
        <div class="numero">
            {{ numero }}
        </div>
        <div class="botones">
            <button @click="r">-</button>
            <button @click="s">+</button>
            <button @click="resetear">resetear</button>
        </div>
        <hr>
        <div>
            el numero es par o impar: {{ parimp }}
        </div>
    </div>
</template>
<style>

</style>