<script setup>
    import axios from 'axios'
    import { ref } from 'vue'

    const affiliations = ref([]);

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
                    <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead class="ltr:text-left rtl:text-right">
                            <tr>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Comunidad / Colonia</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cargo</th>
              
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="affiliation in affiliations.data">
                                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{affiliation.name }}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{affiliation.town }}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{affiliation.rol }}</td>
                            </tr>
  
                        </tbody>
                    </table>
                         </div>
                        </div>
                </div>
            </div>

        </div>
    </div>
</template>