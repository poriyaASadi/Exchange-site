<template>
    <div class="w-full">
        <div class="font-Dim max-w-[1300px] mx-auto  rounded-xl p-5">
            <header class="mx-auto" data-aos="flip-up" data-aos-duration="800">
              <div class="flex items-center justify-between">
                 <!-- logo -->
                 <div class="flex items-center">
                     <img src="../assets/image/logo symbol.png" alt="logo-icon">
                     <span class="text-2xl tracking-tight font-bold pr-3">Bitcloud</span>
                           <!-- input search -->
                     <div class="border-l pl-3 hidden laptop:inline-block">
                         <input class="outline-none w-[20rem] py-1 border-2 rounded-full  border-slate-300 px-2 bg-transparent text-slate-400" type="text" placeholder="Exchange">                     
                     </div>
                 </div>
                 <!-- btn items  -->
                 <div class="flex items-center gap-x-5">
                     <div class="hidden laptop:inline-block ">
                         <select class="bg-transparent !outline-none !border-none child:!border-none child:outline-none">
                             <option value="EN">English</option>
                             <option value="AR">Arabic</option>
                             <option value="PR">Persian</option>
                         </select>
                     </div>
                      <div class="hidden laptop:inline-block">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                             <path d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>                            
                      </div>
                      <div>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                             <path d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7048 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29476 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>                            
                      </div>
                      <div class="hidden laptop:inline-block border-2 border-slate-300 rounded-full px-3 py-1 cursor-pointer">
                         Wallet
                      </div>
                      <div class="cursor-pointer hidden laptop:inline-block" @click="BtnSwitchTheme">
                         <!-- icon sun -->
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                             <path d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                             <!-- icon moon -->
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="hidden">
                                 <path d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg>                                
                      </div>
                      <div class="rounded-full w-11 h-11 cursor-pointer">
                         <img src="../assets/image/standing-original 1.png" alt="image profile" class="w-full h-full rounded-full object-cover">
                      </div>
                      <div class="cursor-pointer laptop:hidden" @click="BtnSwitchMenu">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-7 h-7">
                             <path d="M5 15H19M5 9H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>                            
                      </div>
                 </div>
              </div>
            </header>
        </div>
     <div ref="menuMobile" class="absolute laptop:hidden  z-20 duration-500 transition-all  -top-[110lvh]  right-0 w-[20rem] h-[100lvh] shadow-md bg-slate-100 px-5 py-5">
        <div>
            <div class="flex items-center justify-center mb-5">
                <img src="../assets/image/logo symbol.png" alt="logo-icon">
                <span class="text-2xl tracking-tight font-bold pr-3">Bitcloud</span>
            </div>
            <div class="mb-5">
            <input type="text" name="" id="" placeholder="Exchange" class="border-2 shadow-md border-slate-300 w-full py-2 px-2 rounded-lg cursor-text outline-none"/>
            </div>
            <div class="grid grid-cols-2 gap-5 child:shadow-md">
                <div class="cursor-pointer laptop:inline-block  border-slate-300 border-2 rounded-full py-1">
                    <!-- icon sun -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="mx-auto">
                        <path d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <!-- icon moon -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="hidden mx-auto">
                            <path d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                
                 </div>
                 <div class="border-2 text-center border-slate-300 rounded-full px-3 py-1 cursor-pointer">
                    Wallet
                 </div>
                 <div class="rounded-full">
                    <select class="bg-transparent !outline-none border-2 border-slate-300 px-2 py-1 rounded-full w-full child:!border-none child:outline-none">
                        <option value="EN">English</option>
                        <option value="AR">Arabic</option>
                        <option value="PR">Persian</option>
                    </select>
                </div>
                 <div class="border-2 border-slate-300 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                        <path d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                            
                 </div>
            </div>
            <div @click="BtnSwitchMenu" class="bg-blue-500 mt-5 rounded-full w-fit mx-auto p-3 cursor-pointer shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                  </svg>
            </div>
        </div>
     </div>
     <div ref="boxLiner" class="absolute bg-liner laptop:hidden hidden  left-0 top-0 w-full h-[100vh] z-10"></div>
     </div>
</template>
<script>
export default {
    name : 'HeaderMainComponent',
    data () {
        return {
        themes : 'light'
        }
    },
    mounted () {
        this.chekmode();
    },
    methods : {
        BtnSwitchMenu : function () {
            const menuMobile = this.$refs.menuMobile.classList;
            const boxLiner  = this.$refs.boxLiner.classList;
            menuMobile.toggle('-top-[110lvh]');
            menuMobile.toggle('top-0');
            boxLiner.toggle('hidden');
        },
        BtnSwitchTheme : function () {
            if (localStorage.theme === 'light') {
                this.themes = 'dark'
                localStorage.setItem('theme' , 'dark');
             //   localStorage.theme = this.theme
            }else {
                this.themes = 'light'
                localStorage.setItem('theme' , 'light');
            }
            this.chekmode()
        },
        chekmode : function () {
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark')
}
      },
    }
}
</script>
<style scoped>
.bg-liner {
    background:  linear-gradient(rgba(0,0,0,0.7) , rgba(0,0,0,0.7));
}
</style>
