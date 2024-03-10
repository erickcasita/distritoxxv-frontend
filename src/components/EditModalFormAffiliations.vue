<script setup>
import Spinner from '@/components/Spinner.vue';
import { ref } from 'vue'
import axios from 'axios'
defineProps ({
    modal:  Boolean,
    name: String,
    lastname: String,
    rol: String,
    entity: String,
    town: String,
    postcode: Number,
    secction_vote: Number,
    phone_number: Number,
    address_home: String,
    spinner: Boolean
  })
  const roles = ref([]);
  const entities = ref([]);
  const towns = ref([]);
  const entityname = ref('');
  const emit  = defineEmits(['cerrarModalEditAffiliations'])

  function btnModalEditAffiliationsClose() {
    emit('cerrarModalEditAffiliations',false)
  }
  const getRoles = async () => {
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/roles')
        .then((response) => (
            roles.value = response.data,
            console.log("<<Sucess get roles>>", response.data.response, "status", response.status
            )))
        .catch((error) => (console.log(error.message)))
};
const getEntities = async () => {
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/entities')
        .then((response) => (
            entities.value = response.data,
            console.log("<<Sucess get entities>>", response.data.response, "status", response.status
            )))
        .catch((error) => (console.log(error.message)))
};
const getTowns = async () => {
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/towns/' + entity.value)
        .then((response) => (
            towns.value = response.data,
            console.log("<<Sucess get towns>>", response.data.response, "status", response.status
            )))
        .catch((error) => (console.log(error.message)))
};
getEntities();
getRoles();
</script>

<template>
    
    <div class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal" v-show="modal">
        
        <form role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
           
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <Spinner v-if="spinner === true"/>
                <div v-else>
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Editar una afiliación
                </h1>
              
                <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nombre</label>
                <input id="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" :value="name">
                <label for="apellido"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Apellidos</label>
                <input id="apellido"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Gonzales" :value="lastname">
          
                <label for="rol"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Cargo</label>
                <select
                    id="rol"
                    class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    <option class="text-base" :value="rol">{{rol}}</option>
                    <option v-for="rol in roles.data" :value="rol.name">{{ rol.name }}</option>
                </select> 

                <label for="entity"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Municipio</label>
                <select
                    @change="getTowns"
                    id="entity"
                    class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    <option class="text-base" :value="entity">{{entity}}</option>
                    <option v-for="entitie in entities.data" :value="entitie.name">{{ entitie.name }}</option>
                </select> 
                <label for="town"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Colonia o Comunidad</label>
                <select
                    id="town"
                    class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    <option class="text-base" :value="town">{{town}}</option>
                    <option v-for="town in towns.data" :value="town.name">{{ town.name }}</option>
                </select> 
                <label for="postcode" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Código Postal</label>
                <input id="postcode"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="95870" :value="postcode">
                <label for="secction_electoral" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Sección Eléctoral</label>
                <input id="secction_electoral"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="258" :value="secction_vote">
                <label for="number_phone" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Número de teléfono</label>
                <input id="number_phone"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="2941007205" :value="phone_number">
                <label for="adress_home" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Domicilio</label>
                <input id="adress_home"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-900 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Claveles #33 " :value="address_home">
                <div class="flex items-center justify-start w-full">
                    <button
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900 transition duration-150 ease-in-out hover:bg-red-800 bg-red-900 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">Agregar</button>
                    <button
                    @click="btnModalEditAffiliationsClose" type="button" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">Cancelar</button>
                </div> 
                <button
                    @click="btnModalEditAffiliationsClose"
                    class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                    aria-label="close modal" type="button"><svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24"
                        stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg></button>
                </div>
            </div>
        </form>
    </div>

</template>