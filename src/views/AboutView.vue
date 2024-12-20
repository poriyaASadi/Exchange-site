<template>
<div class="dark:bg-black font-Dim">
 <HeaderMainComponent></HeaderMainComponent>
 <main>
    <div>
        <div class="w-full flex py-10 items-center justify-center flex-col ">
            <h2 class="text-[3rem] text-center mb-1 font-bold dark:text-slate-100">Blockchain & Crypto</h2>
            <p class="text-slate-300 text-lg dark:text-slate-400">A Beginner`s Guide to TradingView</p>
            <div class="flex items-center gap-x-2 mt-3">
                <button class="bg-blue-500 border-2 border-blue-500 text-white py-2 text-sm px-5 rounded-full">Learn now</button>
                <button class="border-2 border-slate-300 dark:border-slate-500 dark:text-slate-100 rounded-full py-2 px-5 text-sm">Video tutorial</button>
            </div>
        </div>
        <!-- box video player -->
         <div class="flex items-center mx-auto justify-center max-w-[1000px] p-2">
            <video class="w-full h-full rounded-lg" id="player" playsinline controls data-poster="/path/to/poster.jpg">
                <source src="../assets/videos/Designed for Mac. Accessories for your Mac.mp4" type="video/mp4" />
              </video>
         </div>
         <!-- start main about page for site  -->
          <section class="mt-10 bg-slate-100 dark:bg-slate-900 child:dark:text-white py-2">
            <div class="max-w-[1000px] mx-auto">
                <div class="flex items-center flex-col tablet:flex-row justify-between p-8 gap-x-32">
                    <div class="text-slate-400">
                        <span>OUR BLOG</span>
                    </div>
                    <div>
                        <h2 class="text-4xl font-bold">Latest Releases</h2>
                        <p class="py-3 text-slate-600 max-w-[400px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, numquam.</p>
                        <ul class="flex items-center gap-x-5 cursor-pointer">
                            <li class="bg-black dark:bg-white text-white dark:text-black py-1 px-3 rounded-full">Bitcoin</li>
                            <li>Blockchain</li>
                            <li>Tutorials</li>
                        </ul>
                    </div>
                </div>
                <ul class="max-w-[1000px] child:p-3 child:rounded-lg child:transition-all child:delay-100 mx-auto">
                    <li class="mb-5">
                        <div class="flex flex-col-reverse tablet:flex-row gap-y-5 items-center justify-between gap-x-5">
                            <div class="">
                                <span class="bg-orange-500 text-white py-1 px-3 text-sm rounded-sm">NEW</span>
                                <h2 class="font-bold text-2xl py-1">A Beginner`s Guide to TradingView</h2>
                                <span class="text-slate-400">Ethereum</span>
                                <p class="max-w-[500px] text-slate-500 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestias veniam in sequi alias ipsam!</p>
                                <span class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-8 h-8 text-slate-400 dark:text-white">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                            </div>
                            <div class=" w-full tablet:w-[600px] h-[300px] rounded-xl">
                                <img class="w-full h-full rounded-xl object-cover" src="../assets/image/poster/03.png" alt="">
                            </div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div class="flex flex-col-reverse tablet:flex-row gap-y-5 items-center justify-between gap-x-5">
                            <div class="">
                                <h2 class="font-bold text-2xl py-1">A Beginner`s Guide to TradingView</h2>
                                <span class="text-slate-400">Ethereum</span>
                                <p class="max-w-[500px] text-slate-500 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestias veniam in sequi alias ipsam!</p>
                                <span class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-7 h-7 text-slate-400 dark:text-white">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                            </div>
                            <div class="w-full tablet:w-[600px] h-[300px] rounded-xl">
                                <img class="w-full h-full rounded-xl object-cover" src="../assets/image/poster/01.png" alt="">
                            </div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div class="flex flex-col-reverse tablet:flex-row gap-y-5 items-center justify-between gap-x-5">
                            <div class="">
                                <span class="bg-green-500 text-white py-1 px-3 text-sm rounded-sm">BEGINNER</span>
                                <h2 class="font-bold text-2xl py-1">A Beginner`s Guide to TradingView</h2>
                                <span class="text-slate-400">Ethereum</span>
                                <p class="max-w-[500px] text-slate-500 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestias veniam in sequi alias ipsam!</p>
                                <span class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-7 h-7 text-slate-400 dark:text-white">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                            </div>
                            <div class="w-full tablet:w-[600px] h-[300px] rounded-xl">
                                <img class="w-full h-full rounded-xl object-cover" src="../assets/image/poster/02.png" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          </section>
          <!-- finish main about page fot search -->
           <!-- ⭐🫡 -->
            <!-- start search anything section box -->
             <section>
                <div class="max-w-[1000px] mx-auto mt-20 laptop:mt-32">
                    <div class="flex flex-col-reverse tablet:flex-row gap-y-5 items-center justify-between px-2 border-b dark:border-slate-700 pb-5">
                        <h4 class="text-2xl dark:text-slate-100">Search anything about crypto</h4>
                        <span class="bg-blue-500 w-11 h-11 rounded-full flex items-center justify-center">
                            <BxSearchAlt class="w-6 h-6 text-white"/>
                        </span>
                    </div>
                    <!-- -.-.-.-.-.-.-.- -->
                     <div class="flex flex-col tablet:flex-row gap-y-5 tablet:gap-y-0 items-center px-2 justify-between mt-3">
                        <div>                      
<button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>
    <!-- Dropdown menu -->
    <div id="dropdownDelay" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
    </div>
                        </div>
                        <div>
                            <ul class="flex items-center gap-x-5 flex-wrap child:text-slate-400 child-hover:cursor-pointer">
                                <li @click="filterType = '' " class="bg-black !text-white dark:bg-white dark:!text-black py-1 px-3 rounded-full">Tutorial</li>
                                <li @click="filterType = 'case'  ">Usecase</li>
                                <li @click="filterType = 'trad'  ">Trading</li>
                                <li @click="filterType = 'wallet'  ">Wallet</li>
                            </ul>
                        </div>
                     </div>
                     <!-- --------------- -->
                      <div class="w-full mt-10 transition-all delay-150 px-2 grid grid-cols-1 mobile:grid-cols-2  tablet:grid-cols-3 gap-x-3 laptop:gap-x-5 gap-y-10">
         <!-- post box -->
         <div class=" w-full mobile:max-w-[300px] mx-auto tablet:m-0"  v-for="post in filterCartd" :key="post.id">
            <div>
                <!-- image box post -->
                   <div class="h-[15rem]  w-full relative">
                    <img v-bind:key="post.id" src="../assets/image/Composition_15 1.png" class="w-full h-full object-cover rounded-xl bg-slate-100 dark:bg-slate-700" v-bind:alt="post.name">
                    <span class="absolute top-2 left-5 text-sm text-white py-[.3rem] tracking-tight px-2 rounded-[.3rem]" :style="post.shortCatcolor ? `background-color: ${post.shortCatcolor}` : '' ">{{post.shortCat}}</span>
                   </div>
                   <!-- main title post box -->
                    <div class="mt-3 flex items-center justify-between">
                        <div class="flex items-center gap-x-3">
                            <img src="../assets/image/Composition_08 1.png" alt="img" class="rounded-full bg-slate-100 object-cover w-10 h-10">
                            <div>
                                <h6 class="text-lg font-bold dark:text-slate-100">{{post.name}}</h6>
                                <p class="text-sm text-slate-400">{{post.about}}</p>
                            </div>
                        </div>
                        <div class="">
                            <span class="text-sm border-2 border-green-500 text-green-500 font-[600] py-[.2rem] px-2 cursor-pointer rounded-md">POPULAR</span>
                        </div>
                    </div>
              </div>
       </div>
       <!-- post box END -->
                      </div>
                </div>
             </section>
             <!-- finish search anything box -->
              <section class="mt-20">
                <div class="flex items-center justify-center flex-col text-center mb-10">
                    <span class="flex items-center gap-x-1 font-[600] dark:text-slate-300"><img src="../assets/image/logo symbol.png" alt="logo">BitCloud</span>
                    <h2 class="text-4xl py-2 font-bold dark:text-slate-100">Stay in the Know on <br>crypto with BitCloud</h2>
                    <p class="text-sm text-slate-300">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <!-- slide -->
                 <div>
                    <swiper
                    :modules="modules"
                    :slides-per-view="3"
                    :space-between="50"
                    navigation
                    :pagination="{ clickable: true }"
                    :scrollbar="{ draggable: true }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                  >
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    ...
                  </swiper>
                 </div>
              </section>
    </div>
 </main>
 <FooterComponent></FooterComponent>
</div>
</template>
<script setup>
import { computed, onMounted , ref } from 'vue';
 import HeaderMainComponent from '@/components/HeaderMainComponent.vue';
 import FooterComponent from '@/components/FooterComponent.vue'
 import { BxSearchAlt } from '@kalimahapps/vue-icons';
 import { dataPost } from '../js/dataPostAbout.js';
 import { navigation, Pagination } from 'swiper/modules';
 import { Swiper } from 'swiper';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css';
const filterType = ref('');
const filterCartd = computed(() => {
    let data_Post = ref(dataPost);
  if (filterType.value) {
    return data_Post.value.filter(item => item.type == filterType.value);
  }
  return data_Post.value
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
</script>
<style scoped>
</style>