<template>
  <div class="container mx-auto">
   
   <div class="PageTitle_2">
      <div class="p-1 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
  <div class="bg-white p-5 rounded-lg">
    <h4 class="flex   justify-center text-2xl font-bold">Famous Egyptians</h4>
   
  </div>
</div>  
 
   </div>
<swiper
  :style="{
    '--swiper-navigation-color': '#000',
    '--swiper-pagination-color': '#fff',
  }"
  :speed="600"
  :parallax="true"
  :pagination="{
    clickable: true,
  }"
  :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }"
  :navigation="true"
  :modules="modules"
  class="mySwiper"
>
<div
        slot="container-start"
        class="parallax-bg"
        :style="{
          'background-image':
           
            
          'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7fMCmIxk6v4Kz0FyGpF-Nuglj3MqYsGh2g&usqp=CAU)'

        }" 
      
      data-swiper-parallax="-23%"
    >
    </div>

  <swiper-slide>
    <div class="card-content_2 flex justify-between ">
          <img src="../assets/FEgyptians/MagdiYacoub.jpeg" alt="" class="image" />
          
   
          <div class="card-details_2">

            <div class="title" data-swiper-parallax="-300">الدكتور مجدي يعقوب</div>
          <div class="subtitle" data-swiper-parallax="-200">Professor Sir Magdi Yacoub </div>
        
          <div class="text" data-swiper-parallax="-100">
              <p>
                Sir Magdi Yacoub is Professor of Cardiothoracic Surgery at the National Heart
          and Lung Institute, Imperial College London and Founder and Director of
          Research at the Harefield Heart
              </p>
          </div>
          </div> 
        </div>
        </swiper-slide>

        <swiper-slide>
          <div class="card-content_2 flex justify-between">
          <img src="../assets/FEgyptians/MSalah.jpeg" alt="" class="image">
       

          <div class="card-details_2">

            <div class="title" data-swiper-parallax="-300">محمد صلاح</div>
          <div class="subtitle" data-swiper-parallax="-200">Liverpool player</div>
         
          <div class="text" data-swiper-parallax="-100">
            <p>
              To Egyptians, Salah is known as the 'Fourth Pyramid'. Salah has also been
          credited for raising the profile of Liverpool among Egyptians.
            </p>
          </div>
          </div>
        </div>
          
        </swiper-slide>

          <swiper-slide>
            <div class="card-content_2 flex justify-between">
          <img src="../assets/FEgyptians/faroukel-baz.jpeg" alt="" class="image">

        

        <div class="card-details_2">

          <div class="title" data-swiper-parallax="-300"> الدكتور فاروق الباز </div>
          <div class="subtitle" data-swiper-parallax="-200">D. Farouk El Baz</div>  
          <div class="text" data-swiper-parallax="-100">
            <p>
              Farouk El-Baz (born January 2, 1938) is an Egyptian American space scientist and geologist,
                 who worked with NASA in the scientific exploration of the Moon. 
            </p>
          </div>
            </div>
          </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card-content_2 flex justify-between">
          <img src="../assets/FEgyptians/UmmKulthum.jpeg" alt="" class="image">

        

        <div class="card-details_2">


          <div class="title" data-swiper-parallax="-300">أم كلثوم</div>
          <div class="subtitle" data-swiper-parallax="-200">Kawkab al-Sharq </div>

          <div class="text" data-swiper-parallax="-100">
            <p>
              Umm Kulthum was an Egyptian singer, songwriter, and film actress active from
          the 1920s to the 1970s. She was given the honorific title Kawkab al-Sharq
            </p>
          </div>
            </div>
          </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card-content_2 flex justify-between">
          <img src="../assets/FEgyptians/AhmedZewail.jpeg" alt="" class="image">

        

        <div class="card-details_2">

          <div class="title" data-swiper-parallax="-300">الدكتور احمد زويل</div>
          <div class="subtitle" data-swiper-parallax="-200"> D.Ahmed Zewail</div>
          <div class="text" data-swiper-parallax="-100">
            <p>
              Ahmed Hassan Zewail was an Egyptian and American chemist, known as the "father
          of femtochemistry He took Nobel Prize in femtochemistry
            </p>
          </div>
            </div>
          </div>
          </swiper-slide>

          <swiper-slide>


          

            <div class="card-content_2 flex justify-between">
          <img src="../assets/FEgyptians/NaguibMahfouz.jpeg" alt="" class="image">


        <div class="card-details_2">

          <div class="title" data-swiper-parallax="-300"> نجيب محفوظ </div>
          <div class="subtitle" data-swiper-parallax="-200"> Naguib Mahfouz </div>

          <div class="text" data-swiper-parallax="-100">
            <p>
             
               Naguib Mahfouz Abdelaziz Ibrahim Ahmed Al-Basha was an Egyptian writer who won
          the 1988 Nobel Prize in Literature.
            </p>
          </div>
            </div>
        </div>

          </swiper-slide>

          <swiper-slide>
            <div class="card-content_2 flex justify-between">
          <img src="../assets/FEgyptians/Anwar-el-Sadat.webp" alt="" class="image">


        <div class="card-details_2">

          <div class="title" data-swiper-parallax="-300"> محمد انور السادات</div>
          <div class="subtitle" data-swiper-parallax="-200">Anwar El-Sadat </div>

          <div class="text" data-swiper-parallax="-100">
            <p>
             
              Muhammad Anwar el-Sadat was an Egyptian politician and military officer
               who served as the third president of Egypt, from 15 October 1970
                until his assassination by fundamentalist army officers on 6 October 1981
            </p>
          </div>
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

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  //import './style.css';

  // import required modules
  import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Parallax, Pagination, Navigation],
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
 .container{
   height: 100vh;
   max-width: 1000px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #e3f2fd;
 
 }
 .PageTitle_2{
  width: auto;
  height: 100px;
  background-color:#e3f2fd;
 }


 .swiper {
   width: 100%;
   height: 100%;
   margin-left: auto;
   margin-right: auto;
  
 }
.swiper-slide {

text-align: center;
font-size: 24px;
color: #fff;
-webkit-box-sizing: border-box;
box-sizing: border-box;
padding: 10px 20px;
 justify-content: center;
 
}


.parallax-bg {
position: absolute;
 left: 0;
top: 0;
width: 130%;
height: 100%;
opacity: 0.6;
-webkit-background-size: cover;
background-size: cover;
background-position: center;
padding: 50px 0;
overflow: hidden; 
background-color:#e5e4e2;
}
.card-content_2 {
 width: 100%;
align-items: center ;
justify-content:center;
}

.card-content_2 .image{
height: 160px;
width: 160px;
object-fit: cover;
align-items: center;
justify-content: center;
border-radius: 50%;
}
.card-details_2 {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

}

.swiper-slide .title {
padding: 0px;
font-size: 41px;
font-weight: 700;
justify-content: center;
color: #000;
}

.swiper-slide .subtitle {
font-size: 24px;
font-weight: 600;
justify-content: center;
color: #000;
}

.swiper-slide .text {
align-items: center;
font-size: 20px;
max-width: 500px;
line-height: 1.7;
color: #000;
}


button {
  border-radius: 0.5rem;
  border-style: solid;
  border-image-source:var(--gradient);
  border-image-slice: 1;

  font:inherit;
  padding: 1rem 3rem;
  background: transparent;
  border-radius: 5rem;
  }
  bottom:hover{
    border:var(--gradient);
    color:white;
  }

</style>

