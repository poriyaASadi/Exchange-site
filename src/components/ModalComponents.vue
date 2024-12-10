<template>
    <div ref="BoxAlert" @click.self="clickHandler" class="hidden absolute top-0 right-0 left-0 w-full h-[100vh] !z-40 bg-liner flex-col  justify-center items-center" >
        <span @click="clickHandler" class="w-12 h-12 close-btn  mb-5 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-8 h-8 text-black hover:text-white">
                <path d="M5 14H10V19M19 10H14V5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
        </span>
        <div class="max-w-[30rem] px-5 py-5 rounded-xl  box-drop">
            <div class="bg-transparent font-Dim text-center">
               <h5 class="text-white text-3xl font-bold">Go Trading Page</h5>
               <p class="py-2  text-lg inline-block text-slate-50">Welcome User</p>
               <p class="text-slate-100">If you are familiar with the website so far, it.s time to go to the main page and start</p>
               <router-link to="./main" class="box-btn tracking-wide text-slate-700 px-5 py-2 font-[600] border-none  bg-slate-100 rounded-full mt-3 inline-block">Page main</router-link>
           </div>
       </div>
    </div>
</template>
<style scoped>
.box-drop {
    filter: drop-shadow(0 0 10px #3b82f6 );
    background-color: #3b83f620;
}
.close-btn {
    filter: drop-shadow(0 0 6px #97c0fc )
}
.box-btn {
    filter: drop-shadow(0 0 4px #ffff )
}
.box-btn:hover {
    transition: all .3s ease-in-out;
    filter: drop-shadow(0 0 15px #3b82f6 );
    background-color: #488eff4f;
    color: #ffffff;
}
.bg-liner {
    background:  linear-gradient(rgba(0,0,0,0.8) , rgba(0,0,0,0.8));
}
</style>
<script>
export default {
    name : 'ModalComponents',
    data () {
        return {
            BoxAlert : null , 
        }
    },
    mounted () {
        // this.BoxAlert = this.$refs.BoxAlert
        // setTimeout(() => {
        //     this.BoxAlert.classList.remove('hidden');
        //     this.BoxAlert.classList.add('flex');
        // }, 5000);
    },
    methods : {
        clickHandler () {
            this.BoxAlert.classList.add('hidden');
            this.BoxAlert.classList.remove('flex');
        }
    }
}
</script>