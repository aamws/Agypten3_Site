<script setup>
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div>
 
 
    <Navbar />
 
 <router-view />



</div>
</template>

<style scoped>
.router-link-exact-active{
  color:red;
}
</style>


