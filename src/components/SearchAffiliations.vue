<script setup>
import axios from 'axios'
import { ref } from 'vue'
import ModalVieAffiliations from '@/components/ModalViewAffiliations.vue';
  
const modal = ref(false);
const affiliationbyid = ref({
    name: "",
    lastname: "",
    rol: "",
    entity: "",
    town: "",
    postcode: null,
    secction_vote: null,
    phone_number: null,
    address_home: ""
});
const cerrarModal = (value) =>{
      
      modal.value = false;
      affiliationbyid.value = {}
  }
const affiliations = ref([]);



const  getAfffiliationsById = async(id)=>{
    console.log(id);
    modal.value = true;
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/affiliations/'+id)
        .then((response) => (
            affiliationbyid.value.name =  response.data.details.name,
            affiliationbyid.value.lastname =  response.data.details.last_name,
            affiliationbyid.value.rol = response.data.details.rol,
            affiliationbyid.value.entity = response.data.details.entity,
            affiliationbyid.value.town = response.data.details.town,
            affiliationbyid.value.postcode = response.data.details.postcode,
            affiliationbyid.value.secction_vote = response.data.details.secction_vote,
            affiliationbyid.value.phone_number = response.data.details.phone_number,
            affiliationbyid.value.address_home = response.data.details.address_home,
            console.log("<<Sucess get affiliations by id>>", response.data.response, "status", response.status
            )))
        .catch((error) => (console.log(error.message)))

 
} 

const getAffiliations = async () => {
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/affiliations')
        .then((response) => (
            affiliations.value = response.data,
            console.log("<<Sucess get affiliations>>", response.data.response, "status", response.status
            )))
        .catch((error) => (console.log(error.message)))
};

getAffiliations();

</script>
<template>
     
    <div class="w-full max-w-screen-xl mx-auto px-4">
        <div class="bg-wite-300 dark:bg-gray-800 transition-colors duration-300">
            <div class="container mx-auto p-4">
                <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Búsqueda de Afiliaciones</h1>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">Encuentre una nueva afiliación con base en el distrito
                        xxv.</p>
                    <div class="rounded-lg border border-gray-200">
                        <div class="overflow-x-auto rounded-t-lg">
                            <table class="min-w-full divide-y-2 divide-gray-200 bg-white ">
                                <thead class="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Comunidad /
                                            Colonia</th>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cargo</th>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Acciones</th>

                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-200 ltr:text-left rtl:text-right">
                                    <tr v-for="affiliation in affiliations.data">
                                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{ affiliation.name
                                        }}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ affiliation.town }}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ affiliation.rol }}</td>
                                        <td><span class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                                                <button
                                                    @click="getAfffiliationsById(affiliation._id)"
                                                    class="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                                    title="Ver detalles de la afiliación">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">   
                                                        </path></svg>
                                                </button>
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <ModalVieAffiliations  :modal = "modal"  :="affiliationbyid" @cerrarModal="cerrarModal"></ModalVieAffiliations>
</template>