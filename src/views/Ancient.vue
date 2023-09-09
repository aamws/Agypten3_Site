<template>
    
   
    <div class="PageTitle_2">
      <div class="p-1 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
    <div class="bg-white p-5 rounded-lg">
      <h4 class="flex   justify-center text-2xl font-bold"> Egyptian Ancient Civilization</h4>
     </div>
  </div>
    </div>
  <div class=" container h-auto max-w-full">

 <swiper

 :style="{
  '--swiper-navigation-color': '#000',
  '--swiper-pagination-color': '#fff',
}"

:effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
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
   <swiper-slide>

    <div class="card-content ">

   <img src="../assets/Ancient/tutankhamun-1038544_640.jpg" class="image" />

   <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <span class="title text-3xl">Egyptian Ancient  </span>
 
      
   </div>

  </div>
  
        
   </swiper-slide>
   
   <swiper-slide>
     <div class="card-content">
    
   <img src="../assets/ancient/Folie4-1024x576.jpg" class="image" />
   <div class="card-details p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
    <span class="title text-3xl">Egyptian Ancient  </span>
      
   </div>

  </div>
  
   
    
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/ancient/egypt-1083255_640.jpg" class="image"  />
   <div class="card-details">
    <span class="title text-3xl">Egyptian Ancient  </span>
      
   </div>

  </div>
  
      
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/ancient//pyramids_1.jpg" class="image" />
   <div class="card-details ">
    <span class="title text-3xl">Egyptian Ancient  </span>
      
   </div>

  </div>
      
   </swiper-slide>
   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/ancient/csm_07_nofret_01_88258f0ca2.jpg" class="image" />
   <div class="card-details">
    <span class="title text-3xl">Egyptian Ancient  </span>
   </div>

  </div>
   
       
   </swiper-slide>
   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/ancient/Aegypten_0108221825_low.jpg" class="image" />
   <div class="card-details ">
    <span class="title text-3xl">Egyptian Ancient  </span>
      
   </div>

  </div>
     
   </swiper-slide>

   <swiper-slide>
    <div class="card-content ">
    
   <img src="../assets/ancient/pexels-pixabay-2359-1.jpg" class="image" />
   <div class="card-details ">
    <span class="title text-3xl">Egyptian Ancient  </span>
   </div>

  </div>
     
       
   </swiper-slide>
   <swiper-slide>
    <div class="card-content ">
    
        <img src="../assets/ancient/imagesacient.jpg" class="image" />
        <div class="card-details">
          <span class="title text-3xl">Egyptian Ancient  </span>
      
   </div>

  </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-content">
    
        <img src="../assets/ancient/2C0M9MJ_Alamy_edit.webp" class="image" />
        <div class="card-details ">
          <span class="title text-3xl">Egyptian Ancient  </span>
      
   </div>

  </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-content ">
    
        <img src="../assets/ancient/aegypten_sphinx-1000x667.jpg" class="image" />
        <div class="card-details">
          <span class="title text-3xl">Egyptian Ancient  </span>
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

 import 'swiper/css/effect-coverflow';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';

 //import './style.css';

 // import required modules
 import { Autoplay,  EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

 export default {
   components: {
     Swiper,
     SwiperSlide,
   },
   setup() {
     return {
       modules: [Autoplay, EffectCoverflow, Navigation, Pagination],
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
  height: 120px;
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
width: 100%;
height: 100%;
border-radius: 5%;
}


.image{
 display: contents;
 width: 100%;
 height: 300px;
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