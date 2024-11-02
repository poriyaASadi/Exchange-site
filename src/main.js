import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
createApp(App).use(router).mount('#app')
import VueApexCharts from 'vue3-apexcharts'
const app = createApp(App)
app.use(router)
app.use(VueApexCharts)
app.component("apexchart" , VueApexCharts)
app.mount("#app");

//createApp(App).use(router).mount('#app')

