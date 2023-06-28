import {ref,computed} from "vue"
import { defineStore } from "pinia";



export const usedefineStore = defineStore( "user", ()=> {
    //state
   const user = ref ({
    name: "juan",
    email: "juanxd@gmail.utt",
    lastmae: 'elpepe',
   });
   //action
   const website = computed (()=>
   user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
   );
   //action
   const changename =(newname) => {
    user.value.name=newname;
   };
   const apellido = (NeuLast) => {
    user.value.lastmae=NeuLast;
   }
   //getters
   return{
    user,
    website,
    changename,
    apellido,
   };
 } );
