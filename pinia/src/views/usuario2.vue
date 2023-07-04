<script setup>
import {ref,computed} from 'vue'
import {useCounterStore} from '@/stores/usuario2'
const elpep = useCounterStore ()
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
            {{ elpep.Numero }}
        </div>
        <div class="botones">
            <button @click="elpep.res">-</button>
            <button @click="elpep.sum">+</button>
            <button @click="elpep.reset">resetear</button>
        </div>
        <hr>
        <div>
            el numero es: {{elpep.parimpar }}
        </div>
    </div>
</template>