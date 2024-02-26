<script setup>
    import FormAddAffiliations from '@/components/FormAddAffiliations.vue';
    import Sidebar from '@/components/Sidebar.vue';
    import Navbar from '@/components/Navbar.vue';
</script>
<template>
 <Navbar />
<div class="flex overflow-hidden bg-white rounded-lg">
    <Sidebar/>
    <FormAddAffiliations/>
</div>
</template>