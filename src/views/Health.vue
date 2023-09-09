<template>
   <div class="PageTitle_2">
    <div class="p-1 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"> 
     <div class="bg-white p-5 rounded-lg">
       <h4 class="flex   justify-center text-2xl font-bold"> Egyptian Healthy Places</h4>
     </div>
     </div>
   </div>
       <div class=" container h-auto max-w-full">
<swiper

:style="{ 
'--swiper-navigation-color': '#000',
'--swiper-pagination-color': '#fff',
}"

 :spaceBetween="30"
 :effect="'fade'"
 :navigation="true"
 :pagination="{
   clickable: true,
 }"
 :autoplay="{
   delay: 2500,
   disableOnInteraction: false,
 }"
 :modules="modules"
 class="mySwiper"
>
 <swiper-slide >
  <div class="card-content ">
 <img src="../assets/Health/Cleopatra.jpeg" class="image" />

 <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-3xl">Siwa Oasis  </span>
  <p class="description text-xl">Cleopatra lake</p>
      
   </div>

  </div>
 </swiper-slide>
 
 <swiper-slide >

  <div class="card-content">
 <img src="../assets/Health/Cleopatra2.jpeg" class="image" />

 <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-5xl">Siwa Oasis  </span>
  <p class="description text-xl">Cleopatra lake</p>
      
  </div>
 
</div>
 </swiper-slide>

 <swiper-slide>

  <div class="card-content ">
 <img src="../assets/Health/fantas island.jpeg" class="image"  />

 <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-5xl">Siwa Oasis  </span>
 <p class="description text-xl"> Fantas Island </p>
  </div>
  </div>
    
 </swiper-slide>

 <swiper-slide >

  <div class="card-content">
 <img src="../assets/Health/salt lake.jpeg" class="image" />

 <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-5xl">Siwa Oasis  </span>
 <p class="description text-xl"> Natural Salt Lake </p>
  </div>
  </div>
    
 </swiper-slide>
 <swiper-slide>

  <div class="card-content ">
 <img src="../assets/Health/siwa fantas island.jpeg" class="image" />
 
 <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-5xl">Siwa Oasis  </span>
 <p class="description text-xl"> Fantas Island </p>
  </div>
  </div>
 </swiper-slide>
 <swiper-slide>

  <div class="card-content ">
 <img src="../assets/Health/siwa salt lake.jpeg" class="image" />

 <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-5xl">Siwa Oasis  </span>
 <p class="description text-xl"> Natural Salt Lake </p>
  </div>
  </div>
   
 </swiper-slide>

 <swiper-slide >

  <div class="card-content ">
 <img src="../assets/Health/siwa salt lake.jpg" class="image" />

 <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-5xl">Siwa Oasis  </span>
 <p class="description text-xl"> Natural Salt Lake </p>
  </div>
  </div>
     
 </swiper-slide>
 <swiper-slide >

  <div class="card-content">
      <img src="../assets/Health/fantas.jpeg" class="image" />

      <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <span class="title text-5xl">Siwa Oasis  </span>
 <p class="description text-xl"> Fantas Island </p>
  </div>
  </div>
  </swiper-slide>
  <swiper-slide >

      <div class="card-content">
      <img src="../assets/Health/siwa desert.jpeg" class="image" />

      <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <span class="title text-5xl">Siwa Oasis  </span>
          <p class="description text-xl"> Siwa Desert </p>
  </div>
      </div>
  </swiper-slide>
  <swiper-slide >

      <div class="card-content ">
      <img src="../assets/Health/siwa oasis.jpeg" class="image" />
      <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <span class="title text-5xl">Siwa Oasis  </span>
    </div>
      </div>
  </swiper-slide>

</swiper>
</div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import './style.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default {
 components: {
   Swiper,
   SwiperSlide,
 },
 setup() {
   return {
     modules: [Autoplay, EffectFade, Navigation, Pagination],
   };
 },
};
</script>
<style scoped>
#app { height: 100% }

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
width: 100%;
height: 100%;
}

.swiper-slide {
background-position: center;
background-size: cover;
}

.swiper-slide img {
display: block;
width: 50%;
height: 50%;
border-radius: 5%;
}


.image{
 display: contents;
 width: 50px;
 height: 200px;
 object-fit: cover;
 border-radius: 5%;

}


.swiper-slide {
background-position: center;
background-size: cover;
}

.swiper-slide img {
display: block;
width: 100%;
}
</style>