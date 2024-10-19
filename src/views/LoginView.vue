<template>
  <div>
         <div class="bg-slate-100 text-black">
          <div class="w-full h-[100vh] flex items-center overflow-x-hidden relative">
            <div class="hidden desktop:flex w-[45rem] h-full bg-gray-900 relative overflow-hidden  justify-center items-center pr-3">
              <img src="../assets/image/caracter.png" alt="cover-wallet" class="w-[30rem]  transform -rotate-90 translate-x-20  object-cover">
            </div>
            <div class="w-full h-full child:font-Roboto">
                 <div class="w-full h-full flex items-center justify-center flex-col font-Roboto">
                    <h1 class="font-extrabold text-[3rem] tracking-tight">Sign in to BitCloud</h1>
                    <p class="mt-5 text-[.8rem] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="text-green-500 flex items-center p-3 px-10 mt-2 bg-slate-200 rounded-full"> 
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-5 h-5">
                        <path d="M9.23047 9H7.2002C6.08009 9 5.51962 9 5.0918 9.21799C4.71547 9.40973 4.40973 9.71547 4.21799 10.0918C4 10.5196 4 11.0801 4 12.2002V17.8002C4 18.9203 4 19.4801 4.21799 19.9079C4.40973 20.2842 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07902 21 7.19694 21H16.8031C17.921 21 18.48 21 18.9074 20.7822C19.2837 20.5905 19.5905 20.2842 19.7822 19.9079C20 19.4805 20 18.9215 20 17.8036V12.1969C20 11.079 20 10.5192 19.7822 10.0918C19.5905 9.71547 19.2837 9.40973 18.9074 9.21799C18.4796 9 17.9203 9 16.8002 9H14.7689M9.23047 9H14.7689M9.23047 9C9.10302 9 9 8.89668 9 8.76923V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V8.76923C15 8.89668 14.8964 9 14.7689 9" stroke="currentColor" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                      https://<span class="text-black">accounts.bitcloud.com/login</span></div>
                      <div class="flex items-center gap-x-5 cursor-pointer my-7">
                        <span @click="cheangTypeInput($event)" id="emailbtn" class="py-2 px-6 inline-flex rounded-full text-sm text-white bg-black">Email</span>
                        <span @click="cheangTypeInput($event)" id="mobilebtn" class="py-2 px-6 inline-flex rounded-full text-sm">Mobile</span>
                      </div>
                      <form class="flex flex-col w-[25rem]">
                        <label ref="labelinput" for="email" class="text-slate-300 text-sm mb-1">EMAIL</label>
                        <input ref="inputform" type="email" class="py-2 px-3 border-2 mb-5 border-slate-300 rounded-lg outline-none bg-transparent" placeholder="Email address" id="email">
                        <label for="password" class="text-slate-300 text-sm mb-1">PASSWORD</label>
                        <div class="flex items-center flex-row-reverse border-2 border-slate-300 rounded-lg py-2 px-3">
                          <svg @click="cheangTypePassword()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>                          
                          <input ref="inputpassword" type="text" placeholder="Password" class="w-full h-full bg-transparent border-none outline-none" id="password">
                        </div>
                      </form>
                      <div class="w-[24rem] my-5 flex justify-between">
                        <span class="text-slate-400 text-sm font-extrabold">Scan to login</span>
                        <span class="text-blue-500  tracking-tight font-extrabold">Forgot Password?</span>
                      </div>
                      <button class="text-white bg-blue-500 w-[25rem] rounded-full py-2">Login</button>
                 </div>
            </div>
            <div class="absolute w-full h-[7rem] top-0 left-0 ">
              <div class="w-full h-full flex  items-center  tablet:flex-row-reverse flex-col-reverse tablet:justify-between gap-y-4 tablet:gap-y-0 pt-5 tablet:pt-0  tablet:px-12">
                <div>
                  <p class="text-[1rem] font-extrabold font-Roboto">Don`t have an account ?   <router-link class="text-blue-500 cursor-pointer" to="/signup">Sign up for free</router-link></p>
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
   export default {
    data () {
      return {

      }
    },
    methods : {
      cheangTypeInput : function (event) {
        const classToAdd = ['bg-black' , 'text-white'];
        this.$refs.inputform.value = ''
        if (event.target.innerHTML === 'Mobile') {
          document.querySelector('#emailbtn').classList.remove(...classToAdd);
          event.target.classList.add(...classToAdd);
          this.$refs.inputform.type = 'text';
          this.$refs.inputform.placeholder = 'Number mobile';
          this.$refs.labelinput.innerHTML = 'Mobile'
          
        }else {
          document.querySelector('#mobilebtn').classList.remove(...classToAdd);
          event.target.classList.add(...classToAdd);
          this.$refs.inputform.type = 'email';
          this.$refs.inputform.placeholder = 'Email address';
          this.$refs.labelinput.innerHTML = 'Email'
        }
        
      },
      cheangTypePassword : function () {
        console.log(this.$refs.inputpassword.type);
        
        if (this.$refs.inputpassword.type == 'text') {
          console.log('b');
          this.$refs.inputpassword.type = 'password'
        } else {
          this.$refs.inputpassword.type = 'text'
        }
      }
    }
   }
</script>