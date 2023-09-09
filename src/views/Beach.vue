<template>
  <div class="PageTitle_2">
    <div class="p-1 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
    <div class="bg-white p-5 rounded-lg">
      <h4 class="flex   justify-center text-2xl font-bold"> Egyptian Best Beaches</h4>
     </div>
  </div>
  </div>
 

 <swiper
   :grabCursor="true"
   :effect="'creative'"

   :navigation="true"
  :pagination="{
    clickable: true,
  }"
  :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }"

  :creativeEffect="{
     prev: {
       shadow: true,
       origin: 'left center',
       translate: ['-5%', 0, -200],
       rotate: [0, 100, 0],
     },
     next: {
       origin: 'right center',
       translate: ['5%', 0, -200],
       rotate: [0, -100, 0],
     },
   }"
   :modules="modules"
   class="mySwiper"
 >
   <swiper-slide>
    <div class="card-content ">
        
   <img src="../assets/Beach/sharm el sheikh/138995678008e2cdb61be36d8389309fecee7d3272.jpg" alt="" class="image">
   
   <div class="card-details ">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
  <p class="description text-xl"> </p>
             
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
      
    <img src="../assets/Beach/sharm el sheikh/Camels_in_sunset-1000x666zc.jpg" alt=""  class="image">

    <div class="card-details ">
  
      <span class="title text-5xl">Sharm El Sheikh </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
      
   <img src="../assets/Beach/sharm el sheikh/different-tropical-fish-on-a-coral-reef-in-the-red-sea.jpg" alt=""  class="image">
   
   <div class="card-details ">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
<p class="description text-xl"> </p>
</div>
</div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
    <img src="../assets/Images/diving-1656619_640.jpg" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
<p class="description text-xl"> </p>
         </div>
     </div>
    </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/sharm el sheikh/SHA_889_original.jpg" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
<p class="description text-xl"> </p>
  
         </div>
     </div>

   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/sharm el sheikh/sharm beach.jpeg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
<p class="description text-xl"> </p>
  
         </div>
     </div>

   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/sharm el sheikh/image_750x_621d47df4d749.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
<p class="description text-xl"> </p>
  
         </div>
     </div>

   </swiper-slide>
  
   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/sharm el sheikh/_methode_sundaytimes_prod_web_bin_73e1e6be-2319-11ea-81b4-b78674dd3224.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
<p class="description text-xl"> </p>
  
         </div>
     </div>

   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">

        <img src="../assets/Beach/sharm el sheikh/baa97078.avif" alt=""  class="image">
   
<div class="card-details ">
  
  <span class="title text-5xl">Sharm El Sheikh </span>
<p class="description text-xl"> </p>
  
         </div>
     </div>

    </swiper-slide>
 </swiper>
 <swiper
   :grabCursor="true"
   :effect="'creative'"

   :navigation="true"
  :pagination="{
    clickable: true,
  }"
  :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }"

  :creativeEffect="{
     prev: {
       shadow: true,
       translate: ['-125%', 0, -800],
       rotate: [0, 0, -90],
     },
     next: {
       shadow: true,
       translate: ['125%', 0, -800],
       rotate: [0, 0, 90],
     },
   }"
   :modules="modules"
   class="mySwiper2"
 >
 <swiper-slide>
   <div class="card-content ">
      
   <img src="../assets/Beach/hurghada/hurghada - 3.jpeg" alt="" class="image">
   
   <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
    <img src="../assets/Beach/hurghada/hurghada - 5.jpeg" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
    
   <img src="../assets/Beach/hurghada/hurghada - 6.jpeg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada -2.webp" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
    </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada-4.jpeg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>

   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/hurghada/hurghada-m1.avif" alt=""  class="image">
   <div class="card-details">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada-scuba_or_a_snorkel.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
   </swiper-slide>
  
   <swiper-slide>
    <div class="card-content ">
    
      <img src="../assets/Beach/hurghada/snorkeling-in-Hurghada.jpg" alt=""  class="image">
      <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/Tourism-in-Hurghada-in-2021.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
          
       </div>
     </div>
    </swiper-slide>
 </swiper>
 <swiper
   :grabCursor="true"
   :effect="'creative'"

               :navigation="true"
             :pagination="{
               clickable: true,
             }"
             :autoplay="{
               delay: 2000,
               disableOnInteraction: false,
             }"

             :creativeEffect="{
     prev: {
       shadow: true,
       translate: [0, 0, -800],
       rotate: [180, 0, 0],
     },
     next: {
       shadow: true,
       translate: [0, 0, -800],
       rotate: [-180, 0, 0],
     },
   }"
   :modules="modules"
   class="mySwiper3"
 >
 <swiper-slide>
  <div class="card-content ">
    
 <img src="../assets/Beach/El Gouna/440997878.jpg" alt=""  class="image">
 <div class="card-details ">
  
  <span class="title text-5xl">El Gouna </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
 </swiper-slide>


   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/El Gouna/ABut-TIG-scaled.jpg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">El Gouna </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/El Gouna/el gouna beaches_d93ba_lg.jpg" alt=""  class="image">
   <div class="card-details">
  
  <span class="title text-5xl">El Gouna </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/El Gouna/el guona 1.jpeg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">El Gouna </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>
   
   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/El Gouna/El-Gouna-Red-Sea.jpg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">El Gouna </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/El Gouna/Kite-El-Gouna-safari-detail.jpg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">El Gouna </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/El Gouna/SHR_El_Gouna_exterior_Main_Pool_2_8ead0bd847.jpg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">El Gouna </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/Marsa Alam/marsa alam_1.jpeg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">Marsa Alam </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/Marsa Alam/marsa alam_2.jpg" alt=""  class="image">
   <div class="card-details">
  
  <span class="title text-5xl">Marsa Alam</span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>
 </swiper>
 <swiper
   :grabCursor="true"
   :effect="'creative'"

   :navigation="true"
  :pagination="{
    clickable: true,
  }"
  :autoplay="{
    delay: 3500,
    disableOnInteraction: false,
  }"

   :creativeEffect="{
     prev: {
       shadow: true,
       translate: [0, 0, -800],
       rotate: [180, 0, 0],
     },
     next: {
       shadow: true,
       translate: [0, 0, -800],
       rotate: [-180, 0, 0],
     },
   }"
   :modules="modules"
   class="mySwiper4"
 >
 <swiper-slide>
  <div class="card-content ">
    
   <img src="../assets/Beach/Marsa Alam/images.jpeg" alt="" class="image">
   
   <div class="card-details">
  
  <span class="title text-5xl">Marsa Alam </span>
  <p class="description text-xl"> </p>
             
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/Marsa Alam/marsa alam_4.jpeg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">Marsa Alam </span>
  <p class="description text-xl"> </p>
                 
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/Marsa Alam/marsa alam_6.jpeg" alt=""  class="image">
    <div class="card-details">
               <span class="name">Marsa Alam </span>
               <p class="description text-xl"> </p>
         </div> 
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/Marsa Alam/marsa-alam-xl-jpg_header-213604 (1).jpeg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl"> Marsa Alam </span>
  <p class="description text-xl"> </p>
         </div>
     </div>
    </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
    <img src="../assets/Beach/Marsa Alam/Marsa-Alam_3.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">Marsa Alam </span>
  <p class="description text-xl"> </p>
  
         </div>
     </div>

   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/Marsa Alam/Marsa-Mubarak-Boat-Trip-Marsa-Alam-1-e1669163875344.webp" alt=""  class="image">
   <div class="card-details">
  
  <span class="title text-5xl">Marsa Alam </span>
  <p class="description text-xl"> </p>

         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada-scuba_or_a_snorkel.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>
  
   <swiper-slide>
    <div class="card-content ">
    
      <img src="../assets/Beach/hurghada/snorkeling-in-Hurghada.jpg" alt=""  class="image">
      <div class="card-details">
  
  <span class="title text-5xl">hurghada</span>
  <p class="description text-xl"> </p>
            
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/Tourism-in-Hurghada-in-2021.jpg" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl">Hurghada </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
    </swiper-slide>
 </swiper>
 <swiper
   :grabCursor="true"
   :effect="'creative'"

   :navigation="true"
             :pagination="{
               clickable: true,
             }"
             :autoplay="{
               delay: 2000,
               disableOnInteraction: false,
             }"

   :creativeEffect="{
     prev: {
       shadow: true,
       translate: ['-125%', 0, -800],
       rotate: [0, 0, -90],
     },
     next: {
       shadow: true,
       translate: ['125%', 0, -800],
       rotate: [0, 0, 90],
     },
   }"
   :modules="modules"
   class="mySwiper5"
 >
 <swiper-slide>
  <div class="card-content ">
    
   <img src="../assets/Beach/hurghada/hurghada - 3.jpeg" alt="" class="image">
   
   <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
             
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada - 5.jpeg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
                 
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
   <img src="../assets/Beach/hurghada/hurghada - 6.jpeg" alt=""  class="image">
   <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
         </div> 
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
    <img src="../assets/Beach/hurghada/hurghada -2.webp" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl"> hurghada </span>
  <p class="description text-xl"> </p>
         </div>
     </div>
    </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
    <img src="../assets/Beach/hurghada/hurghada-4.jpeg" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
  
         </div>
     </div>

   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/hurghada/hurghada-m1.avif" alt=""  class="image">
   <div class="card-details">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>

         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada-scuba_or_a_snorkel.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>
  
   <swiper-slide>
    <div class="card-content">
    
      <img src="../assets/Beach/hurghada/snorkeling-in-Hurghada.jpg" alt=""  class="image">
      <div class="card-details">
  
  <span class="title text-5xl">hurghada</span>
  <p class="description text-xl"> </p>
            
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/Tourism-in-Hurghada-in-2021.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">Hurghada </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
    </swiper-slide>
 </swiper>
 <swiper
   :grabCursor="true"
   :effect="'creative'"

   :navigation="true"
             :pagination="{
               clickable: true,
             }"
             :autoplay="{
               delay: 3000,
               disableOnInteraction: false,
             }"

   :creativeEffect="{
     prev: {
       shadow: true,
       origin: 'left center',
       translate: ['-5%', 0, -200],
       rotate: [0, 100, 0],
     },
     next: {
       origin: 'right center',
       translate: ['5%', 0, -200],
       rotate: [0, -100, 0],
     },
   }"
   :modules="modules"
   class="mySwiper6"
 >
 <swiper-slide>
  <div class="card-content">
    
   <img src="../assets/Beach/hurghada/hurghada - 3.jpeg" alt="" class="image">
   
   <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
             
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada - 5.jpeg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
                 
          
       </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
   <img src="../assets/Beach/hurghada/hurghada - 6.jpeg" alt=""  class="image">
   <div class="card-details">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
         </div> 
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/hurghada/hurghada -2.webp" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl"> hurghada </span>
  <p class="description text-xl"> </p>
         </div>
     </div>
    </swiper-slide>

   <swiper-slide>
    <div class="card-content">
    
    <img src="../assets/Beach/hurghada/hurghada-4.jpeg" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl">hurghada </span>
  <p class="description text-xl"> </p>
  
         </div>
     </div>

   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/Beach/North Coast/shutterstock_463219250-800x450.jpg" alt=""  class="image">
   <div class="card-details">
  
  <span class="title text-5xl">North Coast </span>
  <p class="description text-xl"> </p>

         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/North Coast/north coast - 1.jpeg" alt=""  class="image">
    <div class="card-details">
  
  <span class="title text-5xl">North Coast </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
   </swiper-slide>
  
   <swiper-slide>
    <div class="card-content">
    
      <img src="../assets/Beach/North Coast/8994b1_4909ffa3e9ac409499857fb164f4af52~mv2_d_2118_1249_s_2.webp" alt=""  class="image">
      <div class="card-details ">
  
  <span class="title text-5xl">North Coast</span>
  <p class="description text-xl"> </p>
            
         </div>
     </div>
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
    <img src="../assets/Beach/North Coast/1-New-Alamein.jpg" alt=""  class="image">
    <div class="card-details ">
  
  <span class="title text-5xl">North Coast </span>
  <p class="description text-xl"> </p>
               
         </div>
     </div>
    </swiper-slide>
 </swiper>


</template>
<script>
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

 // Import Swiper styles
 import 'swiper/css';

 import 'swiper/css/effect-creative';

// import './style.css';

 // import required modules
 import {  Autoplay, EffectCreative ,  Navigation, Pagination } from 'swiper/modules';
 import 'swiper/css/navigation';
import 'swiper/css/pagination';
 export default {
   components: {
     Swiper,
     SwiperSlide,
   },
   setup() {
     return {
       modules: [  Autoplay, EffectCreative,  Navigation, Pagination],
     };
   },
 };
</script>
<style scoped>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
}

.PageTitle_2{
  width: auto;
  height: 100px;
  background-color:#e3f2fd;
 }
 .container{
height: 100vh;
max-width: 1440px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #e3f2fd;

}


.swiper {
 margin: 50px auto;
 width: 500px;
 height: 440px;
}

.swiper-slide {
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 22px;
 font-weight: bold;
 color: #fff;
}

.card-content{
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 5%;

row-gap: 30px;
}
.card-content .image{
height: 500px;
width: 500px;
object-fit: cover;
border-radius: 5%;
}
.swiper-slide:nth-child(1n) {
 background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
 background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
 background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
 background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
 background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
 background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
 background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
 background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
 background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
 background-color: rgb(54, 94, 77);
}

</style>
