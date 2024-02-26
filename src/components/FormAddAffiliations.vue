<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength , minLength,minValue, integer,helpers  } from '@vuelidate/validators'
//variables ref
const entities = ref([]);
const roles = ref([]);
const towns = ref([]);
const sucess = ref(false);

const FormData = ref({
    name: "",
    last_name: "",
    rol: "",
    town: "",
    entity: "",
    secction_vote: "",
    phone_number: "",
    address_home: "",
    postcode : ""
})

const rules = {
    name: {required: helpers.withMessage('El campo Nombre es requerido', required)},
    last_name: {required: helpers.withMessage('El campo Apellido es requerido', required)},
    rol:{required : helpers.withMessage('Debe seleccionar un Rol', required)},
    town:{required : helpers.withMessage('Debe seleccionar un Municipio', required)},
    entity: {required : helpers.withMessage('Debe seleccionar una Localidad o Colonia', required)},
    phone_number: {required : helpers.withMessage('El campo Número de Teléfono es requerido', required),
        integer : helpers.withMessage('El campo Número de Teléfono debe ser un número entero',integer),
        minLength: helpers.withMessage('El campo Número de Teléfono debe ser minimo de 10 dígitos' ,minLength(10)),
        maxLength: helpers.withMessage('El campo Número de Teléfono debe ser maximo de 10 dígitos' ,maxLength(10)),
        minValue: helpers.withMessage('El campo Número de Teléfono no debe ser negativo' ,minValue(0)) 
    },
    secction_vote:{
        required: helpers.withMessage('El campo  Seccion Electoral es requerido', required),
        integer: helpers.withMessage('El campo Seccion Electoral  debe ser un número entero',integer),
    },
    address_home: {required : helpers.withMessage('El campo  Domicilio  es requerido', required)},
    postcode: {
        required : helpers.withMessage('El campo  Código Postal  es requerido', required),
        integer : helpers.withMessage('El campo Código Postal  debe ser un número entero',integer),
        minLength: helpers.withMessage('El campo Código Postal debe ser minimo de 5 dígitos' ,minLength(5)),
        maxLength: helpers.withMessage('El campo Código Postal debe ser maximo de 5 dígitos' ,maxLength(5)),
        minValue: helpers.withMessage('El campo Código Postal  no debe ser negativo' ,minValue(0)) 
    }
}

const v$ =  useVuelidate(rules  ,FormData)

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
    await axios.get('https://distritoxxv-api.onrender.com/api/v1/towns/' + FormData.value.entity)
        .then((response) => (
            towns.value = response.data,
            console.log("<<Sucess get towns>>", response.data.response, "status", response.status
            )))
        .catch((error) => (console.log(error.message)))
};

const send = async () => {

    await axios.post('https://distritoxxv-api.onrender.com/api/v1/affiliations', {
        name: FormData.value.name.toUpperCase().trim(),
        last_name: FormData.value.last_name.toUpperCase().trim(),
        rol: FormData.value.rol,
        entity:  FormData.value.entity,
        town:  FormData.value.town,
        postcode: FormData.value.postcode,
        secction_vote: FormData.value.postcode,
        phone_number: FormData.value.phone_number,
        address_home:  FormData.value.address_home.toUpperCase().trim()
    }).then((response) =>
        (console.log("<<Sucess>>", response.data.response, "status", response.status)))
        .catch((error) => (console.log(error.message)))
    //limpiar el formulario
    cleanInput();
    sucess.value = true;
};

const cleanInput = () => {
    FormData.value.name = "";
    FormData.value.last_name = "";
    FormData.value.rol = "";
    FormData.value.entity = "";
    FormData.value.town  = "";
    FormData.value.secction_vote = "";
    FormData.value.postcode = "";
    FormData.value.phone_number = "";
    FormData.value.address_home = "";
};


const validateForm = async () => {
  
    const resultValidate = await v$.value.$validate();
    if(resultValidate){
        send();
        v$.value.$reset();
    }
};

getEntities();
getRoles();
</script>
<template>
    <div class="w-full max-w-screen-xl mx-auto px-4">
        <div class="bg-wite-300 dark:bg-gray-800 transition-colors duration-300">
            <div class="container mx-auto p-4">

                <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Nueva Afiliación</h1>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">Registre una nueva afiliación con base en el distrito
                        xxv.</p>


                    <div v-if="sucess" role="alert" class="rounded border-s-4 border-green-500 bg-green-50 p-4">
                        <div class="flex items-center gap-2 text-green-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <strong class="block font-medium"> Afiliación creada correctamente </strong>
                        </div>
                    </div>
                    <div v-if="v$.$errors.length"  role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
                        <div class="flex items-center gap-2 text-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clip-rule="evenodd" />
                            </svg>

                            <strong class="block font-medium"> Por favor, revise los siguientes campos: </strong>
                        </div>
                        <p v-for="error in v$.$errors"  :key = "error.$uid" class="mt-2 text-sm text-red-900 list-none"
                            style="display: inline-block;">
                            {{error.$message}},
                        </p>
                    </div>
                    <br>
                    <form @submit.prevent="validateForm">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" v-model="FormData.name" @focus="sucess=false;"  placeholder="Nombre(s)" class="border p-2 rounded w-full">
                            <input type="text" v-model="FormData.last_name" @focus="sucess=false;" placeholder="Apellidos" class="border p-2 rounded w-full">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <select v-model="FormData.rol" class="border p-2 rounded w-full">
                                <option value="">Seleccione un Cargo</option>
                                <option v-for="rol in roles.data" :value="rol.name">{{ rol.name }}</option>
                            </select>
                            <select v-model="FormData.entity" class="border p-2 rounded w-full" @change="getTowns">
                                <option value="">Seleccione un Municipio</option>
                                <option v-for="entitie in entities.data" :value="entitie.name">{{ entitie.name }}</option>
                            </select>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <select v-model="FormData.town" class="border p-2 rounded w-full">
                                <option value="">Seleccione una Localidad o Colonia </option>
                                <option v-for="town in towns.data" :value="town.name">{{ town.name }}</option>
                            </select>
                            <input type="text" v-model="FormData.postcode" @focus="sucess=false;" placeholder="Código postal"
                                class="border p-2 rounded w-full">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" v-model="FormData.secction_vote" @focus="sucess=false;" placeholder="Sección electoral"
                                class="border p-2 rounded w-full">
                            <input type="text" v-model="FormData.phone_number" @focus="sucess=false;" placeholder="Número de teléfono"
                                class="border p-2 rounded w-full">
                        </div>

                        <div class="mb-4">
                            <input type="textarea" v-model="FormData.address_home" @focus="sucess=false;" placeholder="Domicilio"
                                class="border p-2 rounded w-full">
                        </div>
                        <button type="submit" id="theme-toggle"
                            class="px-4 py-2 rounded bg-red-900 text-white hover:bg-red-950 focus:outline-none transition-colors">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
    
</template>