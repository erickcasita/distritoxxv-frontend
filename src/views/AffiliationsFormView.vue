<script setup>
import axios from 'axios'
import { ref } from 'vue'
const name = ref('');
const lastname = ref('');
const rol = ref('');
const entity = ref('');
const town = ref('');
const postcode = ref('');
const secction_vote = ref('');
const phone_number = ref('');
const address_home = ref('');

const entities = ref([]);
const roles = ref([]);
const towns = ref([]);
const errors = ref([]);
const  sucess = ref(false);

const getEntities = async () => {
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/entities')
        .then((response) => (
            entities.value = response.data,
            console.log("<<Sucess get entities>>", response.data.response, "status", response.status
            )))
        .catch((error) => (console.log(error.message)))
};

const getRoles = async () => {
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/roles')
        .then((response) => (
            roles.value = response.data,
            console.log("<<Sucess get roles>>", response.data.response, "status", response.status
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

const send = async () => {
    await axios.post('https://distritoxxv-api.onrender.com/api/v1/affiliations', {
        name: name.value,
        last_name: lastname.value,
        rol: rol.value,
        entity: entity.value,
        town: town.value,
        postcode: postcode.value,
        secction_vote: secction_vote.value,
        phone_number: phone_number.value,
        address_home: address_home.value
    }).then((response) =>
        (console.log("<<Sucess>>", response.data.response, "status", response.status)))
        .catch((error) => (console.log(error.message)))
    //limpiar el formulario
    cleanInput();
    sucess.value = true;
};

const cleanInput = () => {
    name.value = "";
    lastname.value = "";
    rol.value = "";
    entity.value = "";
    town.value = "";
    postcode.value = "";
    secction_vote.value = "";
    phone_number.value = "";
    address_home.value = "";
};


const validateForm = () => {

    errors.value = [];
    if (name.value && lastname.value && rol.value && entity.value && town.value && postcode.value && secction_vote.value && phone_number.value && address_home.value) send();

    if (!name.value) errors.value.push('Nombre');
    if (!lastname.value) errors.value.push('Apellido Paterno o Materno');
    if (!rol.value) errors.value.push('Cargo');
    if (!entity.value) errors.value.push('Municipio');
    if (!town.value) errors.value.push('Localiad o Colonia');
    if (!postcode.value) errors.value.push('Código postal');
    if (!secction_vote.value) errors.value.push('Sección Eléctoral');
    if (!phone_number.value) errors.value.push('Número de teléfono');
    if (!address_home.value) errors.value.push('Domicilio');

};

getEntities();
getRoles();
</script>
<template>
    <div class="w-full max-w-screen-xl mx-auto px-4">
        <div class="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div class="container mx-auto p-4">

                <div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                    <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Nueva Afiliación</h1>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">Registre una nueva afiliación con base en el distrito
                        xxv.</p>

                    
                        <div v-if="sucess" role="alert" class="rounded border-s-4 border-green-500 bg-green-50 p-4">
                        <div class="flex items-center gap-2 text-green-800">
                            <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

                            <strong class="block font-medium"> Afiliación creada correctamente </strong>
                        </div>
                    </div>    





                    <div v-if="errors.length" role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
                        <div class="flex items-center gap-2 text-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clip-rule="evenodd" />
                            </svg>

                            <strong class="block font-medium"> Por favor, revise los siguientes campos: </strong>
                        </div>
                        <p v-for="error in errors" class="mt-2 text-sm text-red-900 list-none"
                            style="display: inline-block;">
                            {{ error }} ,
                        </p>
                    </div>
                    <br>
                    <form>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" v-model="name" placeholder="Nombre(s)" class="border p-2 rounded w-full">
                            <input type="text" v-model="lastname" placeholder="Apellidos" class="border p-2 rounded w-full">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <select v-model="rol" class="border p-2 rounded w-full">
                                <option value="">Seleccione un Cargo</option>
                                <option v-for="rol in roles.data" :value="rol.name">{{ rol.name }}</option>
                            </select>
                            <select v-model="entity" class="border p-2 rounded w-full" @change="getTowns">
                                <option value="">Seleccione una localidad</option>
                                <option v-for="entitie in entities.data" :value="entitie.name">{{ entitie.name }}</option>
                            </select>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <select v-model="town" class="border p-2 rounded w-full">
                                <option value="">Seleccione una Colonia o Comunidad</option>
                                <option v-for="town in towns.data" :value="town.name">{{ town.name }}</option>
                            </select>
                            <input type="number" v-model="postcode" placeholder="Código postal"
                                class="border p-2 rounded w-full">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="number" v-model="secction_vote" placeholder="Sección electoral"
                                class="border p-2 rounded w-full">
                            <input type="number" v-model="phone_number" placeholder="Número de teléfono"
                                class="border p-2 rounded w-full">
                        </div>

                        <div class="mb-4">
                            <input type="textarea" v-model="address_home" placeholder="Domicilio"
                                class="border p-2 rounded w-full">
                        </div>
                        <button type="button" id="theme-toggle" @click="validateForm"
                            class="px-4 py-2 rounded bg-red-900 text-white hover:bg-red-950 focus:outline-none transition-colors">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>