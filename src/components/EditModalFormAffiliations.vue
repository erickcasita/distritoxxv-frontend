<script setup>

</script>

<template>

    <div class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <form role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div class="w-full flex justify-start text-gray-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52"
                        height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12">
                        </path>
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                    </svg>
                </div>
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Agregar nuevo usuario
                </h1>
                <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nombre</label>
                <input id="name"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="James">
                <label for="apellido"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Apellidos</label>
                <input id="apellido"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Gonzales">
          
                <label for="rol"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Cargo</label>
                <select
                    id="rol"
                    class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    <option class="text-base" value="armandina">Armandina</option>
                    <option class="text-base" value="san juana">San juana</option>
                    <option class="text-base" value="tianguis">Tianguis</option>
                </select> 

                <label for="entity"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Municipio</label>
                <select
                    id="entity"
                    class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    <option class="text-base" value="armandina">Armandina</option>
                    <option class="text-base" value="san juana">San juana</option>
                    <option class="text-base" value="tianguis">Tianguis</option>
                </select> 
                <label for="town"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Colonia o Comunidad</label>
                <select
                    id="town"
                    class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    <option class="text-base" value="armandina">Armandina</option>
                    <option class="text-base" value="san juana">San juana</option>
                    <option class="text-base" value="tianguis">Tianguis</option>
                </select> 
                <label for="postcode" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Código Postal</label>
                <input id="postcode"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="95870">
                <label for="secction_electoral" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Sección Eléctoral</label>
                <input id="secction_electoral"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="258">
                <label for="number_phone" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Número de teléfono</label>
                <input id="number_phone"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="2941007205">
                <label for="adress_home" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Domicilio</label>
                <input id="adress_home"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Claveles #33 ">
                <div class="flex items-center justify-start w-full">
                    <button
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">Agregar</button>
                    <button
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">Cancelar</button>
                </div> <button
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
        </form>
    </div>

</template>