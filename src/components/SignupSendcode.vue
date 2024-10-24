<template>
    <div class=" flex items-center justify-center flex-col font-Roboto">
        <h1 class="font-extrabold  text-[3rem] tracking-tight max-w-[25rem] text-center leading-[2.8rem]">Let`s confrim it`s realiy you</h1>
        <p class="mt-10 text-sm max-w-[20rem] text-center text-slate-400">Help us secure your account Please complete the verifications below . . . </p>
        <ul class="max-w-[25rem] mt-5">
            <li class="flex items-center mb-5 p-1 gap-x-3 border-b border-slate-300 pb-5">
                <input type="radio" name="options" id="radio_input" class="w-4 h-4 cursor-pointer" checked>
                <p class="text-slate-500 ">Get the code by text message  <br><b class="text-black text-lg">(SM) at Git-Hub</b></p>
            </li>
            <li class="flex items-center mb-5 p-1 gap-x-4">
                <input type="radio" name="options" id="radio_input" class="w-4 h-4 cursor-pointer">
                <p class="text-slate-500">Get the code by email at <br> <span class="text-black text-lg">{{data}}</span></p>
            </li>
        </ul>
        <button class="text-white bg-blue-500 w-[20rem] tablet:w-[22rem] rounded-full py-2" @click="sendMSG()">Continue</button>
    </div>
</template>
<script>
export default  {
    name : 'SignupSendcode',
    props : ['data'],
    methods : {
        sendMSG : function () {
            this.$router.replace('/');
        }
    }
}
</script>