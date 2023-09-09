<template>
  <nav>
      <!--Desktop Menu-->
     
      <div class="flex h-30 flex-col items-center justify-center gap-10 bg-gradient-to-br from-purple-800 via-pink-400/70 to-blue-600">
 
         <!-- Menu-->
         <div class="flex space-x-4">
           <!-- logo-->
                <div class="flex items-center space-x-2 py-5 px-2">
                <img src="../assets/icon/icon6.png" alt="" class="icon" >
                <span class="text-2xl font-extrabold text-white">Agypten3_Site
                </span>
                </div>
            <!-- Menu-->
            <ul          
               class = "hidden w-full md:flex md:items-center md:justify-between md:w-auto">

  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name : 'Health' }">Health Tourism</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name : 'Religious' }">Religious Tourism</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'Ancient' }">Ancient Tourism</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'Beach' }">Beach Tourism</router-link></li>
   <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'Famous_Eg' }">Famous Egyptians</router-link></li>
  <li> <router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'About' }">About</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ path: '/' }">
            
              <svg xmlns="http://www.w3.org/2000/svg"
               fill="none" 
               viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor"
                class="w-8 h-8">
                <path stroke-linecap="round"
               stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
        </router-link></li>
        </ul>


          <!-- right side-->
          <div class="flex items-center space-x-1">
          </div>

           <!--button show Mobile Menu-->
           <div class="md:hidden flex items-center">

              <button @click="showMenu= !showMenu" class="py-5 px-2">
                <!--Humbergur icon-->
                          <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 text-indigo-200"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5"
                              stroke="currentColor"
                            >
                            <path stroke-linecap="round" 
                            stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
            </button>
  
           </div>
      
      </div>
      </div>
   

       <!--Mobile Menu-->
         <ul
          :class="{ hidden: showMenu}"
          class="flex-col items-center md:hidden  bg-gradient-to-br from-purple-800 via-pink-400/70 to-blue-600 mt-8 space-y-4  md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">

  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name : 'Health' }">Health Tourism</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name : 'Religious' }">Religious Tourism</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'Ancient' }">Ancient Tourism</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'Beach' }">Beach Tourism</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'Famous_Eg' }">Famous Egyptians</router-link></li>
  <li> <router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ name: 'About' }">About</router-link></li>
  <li><router-link class=" block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 " :to="{ path: '/' }">
            
              <svg xmlns="http://www.w3.org/2000/svg"
               fill="none" 
               viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor"
                class="w-8 h-8">
                <path stroke-linecap="round"
               stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
        </router-link></li>
        </ul>
  </nav>

  <!--
  <div class="p-8 text-2xl font-extrabold text-center">
  content
  </div>
     -->   

  </template>
  
  <script setup>
  import { ref } from "vue";
  
  let showMenu = ref(true);
 
  </script>
  <style scoped>
  .icon{
      max-width: 100px;
      height: 100px;
      width: 100%;
      border-radius: 50%;
      background: #0c1dda;
    }
  </style>
  