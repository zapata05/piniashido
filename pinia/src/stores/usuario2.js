import { defineStore } from "pinia";

export const useCounterStore =defineStore({
    id: 'contador',
    state: () =>({
        Numero : 0
    }),
    actions: {
        sum (){
            this.Numero++
        },
        res (){
            this.Numero--
        },
        reset(){
            this.Numero=0
        },
    },
    getters:{
        parimpar: (state) =>{
           if (state.Numero % 2 === 0) return 'par'
           return 'impar'
        }
    }
})