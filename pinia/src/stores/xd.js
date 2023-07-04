import { defineStore } from "pinia";

export const usedefinestore = defineStore ({
id: 'numeros',
    state: () => ({
        Numero: 0
    }),
    action: {
        sum (){
            this.Numero++
        },
        res(){
            this.Numero--
        }
    },
    getters:{
        parimpa: (state) =>{
           if (state.Numero % 2 === 0) return 'par'
           return 'impar'
        }
    }
   
})