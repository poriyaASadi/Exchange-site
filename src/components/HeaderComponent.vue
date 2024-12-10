<template>
    <div class="fixed top-0 left-0 w-full h-[6rem] child:font-Dim border-b bg-slate-50 dark:border-slate-700 dark:bg-black shadow-sm z-10">
        <div class="flex items-center justify-between w-full  relative h-full px-2 tablet:px-5  laptop:px-20 desktop:px-32   z-0">
            <!-- left header -->
            <div class="flex items-center  gap-x-5 laptop:gap-x-20">
                <!-- logo header -->
                 <div class="flex items-center gap-x-1">
                    <img src="../assets/image/logo symbol.png" alt="logo">
                    <span class="font-bold text-3xl tracking-tight">Bitcloud</span>
                 </div>
                 <!-- btn header item -->
                  <div class="hidden tablet:inline-block">
                    <ul class="flex items-center gap-x-3 laptop:gap-x-5 desktop:gap-x-10 child:text-slate-400 child:text-lg  child:font-[600] transition-colors child:cursor-pointer">
                        <li class="hover:text-slate-600">Exchange</li>
                        <li class="hover:text-slate-600">Buy Crypto</li>
                        <li class="hover:text-slate-600">Market</li>
                        <li class="hover:text-slate-600">Discover</li>
                    </ul>
                  </div>
            </div> 
            <!-- right header -->
            <div class="items-center gap-x-5 hidden tablet:flex">
                <!-- span Englich -->
                <div>
                    <span class="font-bold">EN/USD</span>
                </div>
                <!-- end -->
                <!-- btn login and sign up  -->
                <div class="items-center flex gap-x-2 child:cursor-pointer">
                    <router-link class="bg-blue-500 font-[400] text-white py-2 px-5 rounded-full" to="/signup">Sign up</router-link>
                    <router-link  class="border border-slate-300 dark:border-slate-700 dark:border-2 rounded-full px-6 py-2 font-[600]" to="/login">login</router-link>
                </div>
                <!-- end -->
            </div>

            <!-- btn show menu mobile -->
             <div @click="showmenu()" class="p-3 tablet:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black w-10 h-10 cursor-pointer">
                    <path d="M5 17H13M5 12H19M11 7H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                    
             </div>

            <!-- mobile menu -->
             <div ref="menumobile" class="tablet:hidden absolute -right-[15rem] transition-all delay-300 top-0 z-10 bg-slate-100 h-[100lvh] shadow-md px-5 py-10 overflow-x-hidden overflow-y-auto">
                <!-- btn remove menu -->
                 <div @click="removemenu()" class="w-full  h-10 rounded-full bg-blue-500   flex items-center justify-center cursor-pointer mb-3 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                      </svg>
                 </div>
                    <!-- btn login and sign up  -->
                    <div class="items-center flex gap-x-2 child:cursor-pointer ">
                        <router-link class="bg-blue-500 text-white py-2 px-5 rounded-full" to="/login">login</router-link>
                        <router-link  class="border border-slate-300 rounded-full px-5 py-2" to="/login">login</router-link>
                    </div>
                    <!-- end -->
                        <!-- btn header item -->
                  <div class="mt-5">
                    <ul class="flex items-center flex-col gap-y-5 laptop:gap-x-10 child:text-slate-400 child:text-lg  child:font-semibold transition-colors child:cursor-pointer">
                        <li class="hover:text-slate-600">Exchange</li>
                        <li class="hover:text-slate-600">Buy Crypto</li>
                        <li class="hover:text-slate-600">Market</li>
                        <li class="hover:text-slate-600">Discover</li>
                        <li class="!text-black !text-xl border-t w-full text-center py-2 tracking-tight">EN/USD</li>
                    </ul>
                  </div>
             </div>

        </div>
        <keep-alive>
      
      <ModalComponents></ModalComponents>

        </keep-alive>
    </div>
</template>
<script>
import ModalComponents from '../components/ModalComponents.vue';
export default {
    name : 'HeaderComponent',
    components : {
        ModalComponents  
    },
    methods : {
        showmenu : function () {
          const  menuMobileClass = this.$refs.menumobile;            
            if (!menuMobileClass.classList.contains('!right-0')) {
                menuMobileClass.classList.add('!right-0');
            }
        },
        removemenu : function () {
            const  menuMobileClass = this.$refs.menumobile;        
                menuMobileClass.classList.remove('!right-0');   
        }
    }
}
</script>
