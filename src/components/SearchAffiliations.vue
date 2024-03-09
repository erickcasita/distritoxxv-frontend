<script setup>
import axios from 'axios'
import { ref } from 'vue'
import ModalVieAffiliations from '@/components/ModalViewAffiliations.vue';
import Spinner from '@/components/Spinner.vue';
import EditModalFormAffiliations   from '@/components/EditModalFormAffiliations.vue';

const modal = ref(false);
const modalEditAffiliations = ref(false);
const spinner = ref(true);
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

const spinnermodal = ref(true);
const spinnermodaledit = ref(true);
const cerrarModal = (value) => {

    modal.value = false;

    affiliationbyid.value = {}

}
const cerrarModalEditAffiliations = (value) => {

    modalEditAffiliations.value = false;



}

const editAffiliations = async (id) =>{
    modalEditAffiliations.value = true; 
    spinnermodaledit.value = true;
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/affiliations/' + id)
        .then((response) => (
            affiliationbyid.value.name = response.data.details.name,
            affiliationbyid.value.lastname = response.data.details.last_name,
            affiliationbyid.value.rol = response.data.details.rol,
            affiliationbyid.value.entity = response.data.details.entity,
            affiliationbyid.value.town = response.data.details.town,
            affiliationbyid.value.postcode = response.data.details.postcode,
            affiliationbyid.value.secction_vote = response.data.details.secction_vote,
            affiliationbyid.value.phone_number = response.data.details.phone_number,
            affiliationbyid.value.address_home = response.data.details.address_home,
            spinnermodaledit.value = false,
            console.log("<<Sucess get affiliations by id>>", response.data.response, "status", response.status,

            )))
        .catch((error) => (console.log(error.message)))
}


const affiliations = ref([]);
let affiliationscopy = [];
let affiliationxpage = ref();

const searchaffilition = ref('');
const getAfffiliationsById = async (id) => {
    console.log(id);
    modal.value = true;
    spinnermodal.value = true;
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/affiliations/' + id)
        .then((response) => (
            affiliationbyid.value.name = response.data.details.name,
            affiliationbyid.value.lastname = response.data.details.last_name,
            affiliationbyid.value.rol = response.data.details.rol,
            affiliationbyid.value.entity = response.data.details.entity,
            affiliationbyid.value.town = response.data.details.town,
            affiliationbyid.value.postcode = response.data.details.postcode,
            affiliationbyid.value.secction_vote = response.data.details.secction_vote,
            affiliationbyid.value.phone_number = response.data.details.phone_number,
            affiliationbyid.value.address_home = response.data.details.address_home,
            spinnermodal.value = false,
            console.log("<<Sucess get affiliations by id>>", response.data.response, "status", response.status,

            )))
        .catch((error) => (console.log(error.message)))


}

const getAffiliations = async () => {
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/affiliations')
        .then((response) => (
            affiliations.value = response.data,
            spinner.value = false,
            copyArrayAffiliations(),
            console.log("<<Sucess get affiliations>>", response.data.response, "status", response.status,

            )))
        .catch((error) => (console.log(error.message)))


};

const copyArrayAffiliations = () => {
    affiliationscopy = affiliations.value.data;
    affiliationxpage.value = 10;
}

const getSearchAffiliation = () => {
    affiliations.value.data = affiliationscopy;
    if (searchaffilition.value === "") {

        return affiliations.value.data;
    }



    affiliations.value.data = affiliations.value.data.filter(search => search.name == searchaffilition.value)

    affiliationxpage.value = 10;
}
getAffiliations();

</script>

<template>
    <div class="w-full max-w-screen-xl mx-auto px-4">
        <div class="bg-wite-300 dark:bg-gray-800 transition-colors duration-300">
            <div class="container mx-auto p-4">
                <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Búsqueda de Afiliaciones
                    </h1>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">Encuentre una nueva afiliación con base en el
                        distrito
                        xxv.</p>
                    <div class="relative flex items-center mt-4 md:mt-0 py-8">
                        <div class="absolute top-0 right-0">
                            <button type="button" @click="getSearchAffiliation" class="absolute"
                                data-svelte-h="svelte-rss0pz"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="w-8 h-8 mx-3 text-gray-400 dark:text-gray-600  pt-3">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                                    </path>
                                </svg></button>
                            <input @keyup.enter="getSearchAffiliation" type="text" v-model="searchaffilition"
                                placeholder="Busca una afiliación por nombre..."
                                class="block w-full py-1.5 pr-5  text-gray-700 bg-white border border-gray-300 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                        </div>
                    </div>

                    <div class="rounded-lg border border-gray-200">
                        <div class="overflow-x-auto rounded-t-lg">

                            <table class="min-w-full divide-y-2 divide-gray-200 bg-white ">
                                <thead class="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Municipio</th>

                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Comunidad /
                                            Colonia</th>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cargo</th>
                                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Acciones</th>

                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-200 ltr:text-left rtl:text-right">
                                    <Spinner v-if="spinner == true" />
                                    <tr v-else v-for="affiliation in affiliations.data.slice(0, affiliationxpage)">
                                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{
                                affiliation.name
                            }} {{ affiliation.last_name }}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ affiliation.entity }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ affiliation.town }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ affiliation.rol }}</td>
                                        <td><span
                                                class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                                                <button @click="getAfffiliationsById(affiliation._id)"
                                                    class="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                                    title="Ver detalles de la afiliación">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                                                        </path>
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </span>
                                            <span
                                                class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                                                <button
                                                    @click="editAffiliations(affiliation._id)"
                                                    class="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                                    title="Editar afiliación">
                                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" class="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" />
                                                        <path
                                                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
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
    <ModalVieAffiliations :modal="modal" :="affiliationbyid" :spinner="spinnermodal" @cerrarModal="cerrarModal">
    </ModalVieAffiliations>
    <EditModalFormAffiliations :modal="modalEditAffiliations" :="affiliationbyid"  :spinner="spinnermodaledit"   @cerrarModalEditAffiliations="cerrarModalEditAffiliations"/>

</template>