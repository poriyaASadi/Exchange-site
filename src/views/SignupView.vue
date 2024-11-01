<template>
    <div>
        <div class="bg-slate-100 text-black">
         <div class="w-full h-[100vh] flex items-center flex-col-reverse desktop:flex-row overflow-x-hidden relative">
           <div class="hidden desktop:flex w-[45rem] h-full bg-gray-900 relative overflow-hidden  justify-center items-center pr-3" >
             <img src="../assets/image/caracter.png" alt="cover-wallet" class="w-[30rem]  transform -rotate-90 translate-x-20  object-cover" data-aos="fade-left" data-aos-duration="1500">
           </div>
           <div ref="parentbox"  class="w-full h-full child:font-Roboto relative flex items-center flex-col justify-center ">
         
            <div @click="remove_ctive_signup()" v-if="activelogin" class=" mb-5 bg-blue-500 p-2 rounded-full w-fit cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg> 
          </div>

                <div v-if="!activelogin" class="w-full h-full flex items-center justify-center flex-col font-Roboto">
                   <h1 class="font-extrabold  text-[3rem] tracking-tight">Sign up</h1>
                   <p class="mt-5 text-[.8rem] text-slate-400">Use Your OpenID to Sign up</p>
                   <div class="flex items-center gap-x-5 child:cursor-pointer my-7">
                    <span class="bg-white w-36 text-black py-2 text-center rounded-full flex items-center flex-wrap justify-center gap-x-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-5 h-5">
                        <g clip-path="url(#clip0_0_154)">
                        <path d="M11.9998 9.81815V14.4654H18.4579C18.1743 15.96 17.3233 17.2255 16.047 18.0764L19.9415 21.0982C22.2106 19.0037 23.5197 15.9273 23.5197 12.2728C23.5197 11.4219 23.4433 10.6037 23.3015 9.81828L11.9998 9.81815Z" fill="#4285F4"/>
                        <path d="M5.27461 14.284L4.39625 14.9564L1.28711 17.3782C3.26165 21.2945 7.30862 24 11.9995 24C15.2394 24 17.9557 22.9309 19.9412 21.0982L16.0467 18.0764C14.9776 18.7964 13.614 19.2328 11.9995 19.2328C8.87951 19.2328 6.22868 17.1273 5.27952 14.291L5.27461 14.284Z" fill="#34A853"/>
                        <path d="M1.28718 6.62183C0.469042 8.23631 0 10.0581 0 11.9999C0 13.9417 0.469042 15.7636 1.28718 17.378C1.28718 17.3889 5.27997 14.2799 5.27997 14.2799C5.03998 13.5599 4.89812 12.7963 4.89812 11.9998C4.89812 11.2033 5.03998 10.4398 5.27997 9.71976L1.28718 6.62183Z" fill="#FBBC05"/>
                        <path d="M11.9997 4.77818C13.767 4.77818 15.3379 5.38907 16.5925 6.56727L20.0288 3.13095C17.9452 1.18917 15.2398 0 11.9997 0C7.30887 0 3.26165 2.69454 1.28711 6.62183L5.27978 9.72001C6.22882 6.88362 8.87976 4.77818 11.9997 4.77818Z" fill="#EA4335"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_0_154">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>                        
                      Google</span>
                    <span class="bg-black w-36 text-white py-2 gap-x-1 rounded-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-5 h-5">
                        <g clip-path="url(#clip0_0_49)">
                        <path d="M21.792 18.7036C21.429 19.5421 20.9994 20.3139 20.5016 21.0235C19.8231 21.9909 19.2676 22.6605 18.8395 23.0323C18.1758 23.6427 17.4647 23.9553 16.7032 23.973C16.1566 23.973 15.4973 23.8175 14.73 23.5019C13.9601 23.1879 13.2525 23.0323 12.6056 23.0323C11.9271 23.0323 11.1994 23.1879 10.4211 23.5019C9.64153 23.8175 9.01355 23.9819 8.53342 23.9982C7.80322 24.0293 7.07539 23.7079 6.3489 23.0323C5.88521 22.6279 5.30523 21.9346 4.61043 20.9524C3.86498 19.9035 3.25211 18.6873 2.77198 17.3006C2.25777 15.8029 2 14.3526 2 12.9485C2 11.3401 2.34754 9.95287 3.04367 8.79038C3.59076 7.85663 4.31859 7.12006 5.22953 6.57934C6.14046 6.03861 7.12473 5.76307 8.18469 5.74544C8.76467 5.74544 9.52524 5.92484 10.4704 6.27742C11.4129 6.63119 12.0181 6.81059 12.2834 6.81059C12.4817 6.81059 13.154 6.60082 14.2937 6.18261C15.3714 5.79477 16.281 5.63418 17.0262 5.69744C19.0454 5.8604 20.5624 6.65637 21.5712 8.0904C19.7654 9.18459 18.8721 10.7171 18.8898 12.6832C18.9061 14.2145 19.4617 15.4888 20.5535 16.5007C21.0483 16.9703 21.6009 17.3332 22.2156 17.591C22.0823 17.9777 21.9416 18.348 21.792 18.7036ZM17.161 0.480411C17.161 1.68069 16.7225 2.80138 15.8484 3.83868C14.7937 5.07183 13.5179 5.7844 12.1343 5.67196C12.1167 5.52796 12.1065 5.37641 12.1065 5.21716C12.1065 4.0649 12.6081 2.83175 13.4989 1.82348C13.9436 1.31298 14.5092 0.888503 15.1951 0.54989C15.8796 0.21633 16.5269 0.0318637 17.1358 0.000274658C17.1536 0.160733 17.161 0.321201 17.161 0.480396V0.480411Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_0_49">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>                        
                      Apple</span>
                   </div>
                   <div class="border border-slate-200 w-[22rem] mb-5"></div>
                     <form class="flex flex-col w-[19rem] tablet:w-[25rem] ">
                       <label  class="text-slate-300 text-sm mb-1">EMAIL</label>
                       <input v-model="email" type="email" class="py-2 px-3 border-2 mb-5 border-slate-300 rounded-lg outline-none bg-transparent" placeholder="Email address" id="email">
                       <label for="password" class="text-slate-300 text-sm mb-1">PASSWORD</label>
                       <div class="flex mb-5 items-center flex-row-reverse border-2 border-slate-300 rounded-lg py-2 px-3">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 cursor-pointer">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                         </svg>                          
                         <input ref="inputpassword" type="text" placeholder="Password" class="w-full h-full bg-transparent border-none outline-none" id="password">
                       </div>
                       <label for="password" class="text-slate-300 text-sm mb-1">CONFIRM PASSWORD</label>
                       <div class="flex items-center flex-row-reverse border-2 border-slate-300 rounded-lg py-2 px-3">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 cursor-pointer">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                         </svg>                          
                         <input ref="inputconfrim_password" type="text" placeholder="Password" class="w-full h-full bg-transparent border-none outline-none" id="password">
                       </div>
                     </form>
                     <div class="max-w-[23rem] my-5 flex items-stretch gap-x-2 p-1">
                        <input ref="agree_input"  type="checkbox"  id="agree_about" class="w-10 border-none outline-none cursor-pointer">
                        <p class="text-slate-400 text-left">Lorem ipsum dolor sit amet <span class="font-bold text-black">consectetur </span> consectetur adipisicing elit. Veritatis nihil expedita assumenda, magnam amet sit?</p>
                     </div>
                     <button ref="btn" @click="signupNext()" class="text-white bg-blue-500 w-[19rem] tablet:w-[22rem] rounded-full py-2">Sign up</button>
                </div>
                <SignupSendcode  v-if="activelogin" :data="email"></SignupSendcode> 
           </div>

           <div class="desktop:absolute w-full h-[7rem] top-0 left-0 " data-aos="flip-down" data-aos-duration="2000">
             <div class="w-full h-full flex  items-center  tablet:flex-row-reverse flex-col-reverse tablet:justify-between gap-y-4 tablet:gap-y-0 pt-5 tablet:pt-0  tablet:px-12">
               <div>
                 <p class="text-[1rem] font-extrabold font-Roboto">Already have an account?   <router-link class="text-blue-500 cursor-pointer" to="/login">Sign up for free</router-link></p>
               </div>
               <div class="flex items-center flex-row-reverse gap-x-1">
                 <h2 class=" desktop:text-white font-Roboto font-extrabold text-2xl">BitCloud</h2>
                 <img src="../assets/image/logo symbol.png" class="w-10 h-10 object-cover" alt="logo">
               </div>
             </div>
           </div>

         </div>

        </div>
 </div>  
</template>
<script>
import SignupSendcode from '@/components/SignupSendcode.vue';
import MakerIsToast from '../js/utils'
 export default {
  created () {
    addcoloractiveBTN();
  },
  components : {
    SignupSendcode
  },
  data () { 
    return {
      activelogin : false,
      email : ' '
    }
  },
  methods : {
    signupNext : function () {
            const regexemail =  /^\w+([\._]?\w)*@\w+([\._]?\w)*(\.\w{2,3})+$/g
            if (regexemail.test(this.email)) {
               if (this.$refs.inputpassword.value === this.$refs.inputconfrim_password.value && 
               this.$refs.agree_input.checked
               ) {
                this.activelogin = true
               }else {
                MakerIsToast('Warning' ,'Please enter a valid passowrd & Accept the rules');
               }
            }else {
              MakerIsToast('Warning' ,'Please enter a valid email');
            };
    },
    remove_ctive_signup : function () {
      this.activelogin = false
      this.email = ''
    }
  },
 }

 function addcoloractiveBTN () {

 }

</script>