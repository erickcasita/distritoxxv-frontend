<script setup>
    import SearchAffiliations from '@/components/SearchAffiliations.vue';
    import Sidebar from '@/components/Sidebar.vue';
    import Navbar from '@/components/Navbar.vue';
    
</script>
<template>
    
 <Navbar />
<div class="flex overflow-hidden bg-white rounded-lg">
    <Sidebar/>
    <SearchAffiliations/>
   
</div>
</template>