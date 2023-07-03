<script setup>
import {ref,computed} from 'vue'
import {usedefineStore} from '@/stores/usuario2'
const elpep = usedefineStore ()
const numero = ref(0)
const s = () =>{
    numero.value++
}
const r = () =>{
    numero.value--
}
// computed =porpidedad computada
//transforman la variable o hacen algún tipo de cálculo 
//antes de devolverla
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
            {{ elpep.numero }}
        </div>
        <div class="botones">
            <button @click="usar.res">-</button>
            <button @click="usar.sum">+</button>
            <button @click="resetear">resetear</button>
        </div>
        <hr>
        <div>
            el numero es par o impar: {{ parimp }}
        </div>
    </div>
</template>