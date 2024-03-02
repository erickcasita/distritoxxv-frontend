<script setup>
  import Spinner from  '@/components/Spinner.vue';
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
  const emit  = defineEmits(['cerrarModal'])

  function btnModalClose() {
    emit('cerrarModal',false)
    
}
</script>

<template>
    <Transition enterActiveClass="ease-out duration-300" enterFromClass="opacity-0" enterToClass="opacity-100"
    leaveActiveClass="ease-in duration-200" leaveFromClass="opacity-100" leaveToClass="opacity-0">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"  v-show="modal">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <Transition enterActiveClass="ease-out duration-300" enterFromClass="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterToClass="opacity-100 translate-y-0 sm:scale-100" leaveActiveClass="ease-in duration-200" leaveFromClass="opacity-100 translate-y-0 sm:scale-100"
      leaveToClass="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" v-show="modal">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Spinner v-if="spinner === true"/>
              <div v-else>
              <h2  class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Detalles de la Afiliación: {{name}} {{lastname}}</h2>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Nombre: {{name}} {{lastname}} </p>
                <p class="text-sm text-gray-500">Cargo: {{rol}}</p>
                <p class="text-sm text-gray-500">Municipio: {{ entity }}</p>
                <p class="text-sm text-gray-500">Colonia o Comunidad: {{ town }}</p>
                <p class="text-sm text-gray-500">Código Postal: {{ postcode }}</p>
                <p class="text-sm text-gray-500">Sección Electoral: {{ secction_vote }} </p>
                <p class="text-sm text-gray-500">Teléfono: {{ phone_number }} </p>
                <p class="text-sm text-gray-500">Dirección: {{ address_home }}  </p>
              </div>
             </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button @click="btnModalClose"  type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cerrar</button>
        </div>
      </div>
      </Transition>
    </div>
  </div>
    </div>
    </Transition>

</template>