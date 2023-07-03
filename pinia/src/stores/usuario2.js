import { defineStore } from "pinia";

export const useCounterStore =defineStore({
    id: 'contador',
    state: () =>({
        Numero : 10
    }),
    actions: {
        sum (){
            this.Numero++
        },
        res (){
            this.Numero--
        }
    }
})