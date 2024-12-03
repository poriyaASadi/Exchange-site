<template>
    <div class="w-full relative pt-3 font-Dim dark:bg-black dark:text-slate-300">
        <!-- header main page  -->
        <HeaderMainComponent></HeaderMainComponent>
        <!-- header main page finish  -->
         <!-- section title main page -->
          <section class="w-full tablet:h-[60vh] px-1 tablet:bg-pink-200 dark:bg-black">
            <div class="h-full flex flex-col-reverse tablet:flex-row  items-center justify-center tablet:gap-x-10 mx-auto">
                <div class="w-fit">
                    <h1 class="text-center tablet:text-left  text-[2em] leading-[2rem] mobile:text-[3rem] mobile:leading-[3rem] laptop:text-[3.5rem] laptop:leading-[3.7rem] font-bold tracking-wider">Today`s <br> Cryptocurrency <br>price</h1>
                    <p class="mt-2 tablet:mt-5 text-lg text-slate-700 dark:text-slate-300 text-center tablet:text-left">the global crypto market cap is <b>$1.86T</b></p>
                </div>
                <div class="max-w-[28rem] laptop:w-[40rem] h-full">
                    <img src="../assets/image/BTC.png" class="w-full h-full object-cover" alt="">
                </div>
            </div>
            <div class="-top-14 tablet:relative mt-10 tablet:mt-0 bg-white dark:bg-black rounded-3xl  shadow-2xl  p-5 max-w-[1000px] mx-auto">
                <div class="flex items-center flex-wrap justify-center gap-10  tablet:justify-between tablet:gap-x-10 laptop:gap-x-32 ">
                    <div class="flex items-start gap-x-2">
                        <div>
                            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" class="w-10 h-10">
                                <g clip-path="url(#clip0_108_432)">
                                <path d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z" fill="#F7931A"/>
                                <path d="M178.592 135.809L174.845 150.817L164.842 148.329L168.582 133.314L153.574 129.574L156.07 119.571L171.078 123.311L174.825 108.302L184.828 110.798L181.088 125.806L196.096 129.546L193.6 139.556L178.592 135.809ZM141.694 94.6006C140.298 103.882 135.238 108.392 128.549 110.001C137.7 114.834 142.333 122.286 137.816 135.28C132.206 151.416 119.075 152.846 101.64 149.58L97.309 166.919L87.0927 164.375L91.3621 147.256C88.6411 146.583 85.9276 145.879 83.2221 145.146L78.9321 162.333L68.7296 159.789L73.0608 142.409C70.6683 141.797 68.2483 141.151 65.7733 140.532L52.4702 137.212L57.6127 125.236C57.6127 125.236 65.1408 127.236 65.0377 127.092C67.939 127.8 69.2315 125.868 69.7471 124.582L76.5808 97.165L77.6671 97.4331C77.32 97.2946 76.964 97.1798 76.6015 97.0894L81.4827 77.5162C81.6202 75.2956 80.8846 72.5044 76.739 71.4662C76.904 71.3631 69.3208 69.6237 69.3208 69.6237L72.1052 58.4587L86.199 61.9787L86.1852 62.0269C88.3027 62.5562 90.489 63.0581 92.7165 63.56L96.9996 46.3862L107.216 48.93L103.015 65.7737C105.758 66.3925 108.515 67.025 111.196 67.6987L115.37 50.9719L125.593 53.5156L121.31 70.6962C134.207 75.165 143.619 81.9231 141.694 94.6006ZM118.133 128.185C121.509 114.641 99.2821 111.272 92.3521 109.54L86.6252 132.551C93.5552 134.269 114.916 141.165 118.147 128.178L118.133 128.185ZM121.481 94.525C124.548 82.1981 105.958 79.5581 100.19 78.1212L94.9852 99.0006C100.753 100.444 118.532 106.336 121.481 94.525Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_108_432">
                                <rect width="220" height="220" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>                                
                        </div>
                        <div>
                            <p class="text-slate-400 text-lg">BTC/USDT <span class="bg-orange-400 text-base text-white px-3 py-1 rounded-full font-bold ml-1">+0.79%</span></p>
                            <h2 class="text-4xl text-slate-800 dark:text-white font-bold my-1">36,623,54</h2>
                            <span class="text-slate-400">34,536,76</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-x-2">
                        <div>
                            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" class="w-10 h-10">
                                <g clip-path="url(#clip0_108_214)">
                                <path d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z" fill="#FFC018"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M79.0625 99.6875H140.938V68.75H161.562V178.75H140.938V120.312H79.0625V151.25H58.4375V41.25H79.0625V99.6875Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_108_214">
                                <rect width="220" height="220" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                                              
                        </div>
                        <div>
                            <p class="text-slate-400 text-lg">BTC/USDT <span class="bg-yellow-400 text-base text-white px-3 py-1 rounded-full font-bold ml-1">+0.79%</span></p>
                            <h2 class="text-4xl text-slate-800 dark:text-white font-bold my-1">36,623,54</h2>
                            <span class="text-slate-400">34,536,76</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-x-2">
                        <div>
                            <svg width="220" height="220" viewBox="0 0 220 220" fill="none"  class="w-10 h-10">
                                <g clip-path="url(#clip0_108_335)">
                                <path d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z" fill="#2A2A2A"/>
                                <path d="M68.75 41.2911H124.513C125.187 41.0849 125.531 41.7036 125.971 42.0474C131.227 47.012 135.942 52.5199 140.037 58.4786C145.855 66.8118 150.423 75.9516 153.594 85.6074C156.908 95.8099 158.476 106.604 158.063 117.329H129.635C129.775 115.903 129.825 114.47 129.786 113.039C129.491 102.926 126.369 93.0049 121.454 84.2186C116.194 74.8068 108.852 66.6874 100.506 59.943C91.4169 52.5936 81.1869 46.7911 70.5306 42.1024C69.9394 41.8274 69.3206 41.6074 68.75 41.2911ZM89.3887 91.6643C98.9264 108.919 108.448 126.182 117.954 143.454C120.244 147.62 122.561 151.772 124.829 155.946C112.997 163.522 101.2 171.167 89.375 178.75V91.6643H89.3887Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_108_335">
                                <rect width="220" height="220" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>                                                        
                        </div>
                        <div>
                            <p class="text-slate-400 text-lg">BTC/USDT <span class="bg-black text-base text-white px-3 py-1 rounded-full font-bold ml-1">+0.79%</span></p>
                            <h2 class="text-4xl text-slate-800 dark:text-white font-bold my-1">36,623,54</h2>
                            <span class="text-slate-400">34,536,76</span>
                        </div>
                    </div>
                </div>
                <div class="flex  flex-wrap items-center justify-between mt-10">
                    <div>
                        <ul class="flex items-center flex-wrap gap-5 tablet:gap-x-7 child-hover:cursor-pointer child:text-slate-400 dark:child:text-slate-300">
                            <li class="bg-black dark:bg-white dark:!text-black !text-white rounded-full px-2 py-1">Cryptocurrency</li>
                            <li>Defi</li>
                            <li>innovation</li>
                            <li>POS</li>
                            <li>NFT</li>
                            <li>POW</li>
                        </ul>
                    </div>
                    <div class="border-2 m-3 border-slate-300 rounded-full py-2 px-4 cursor-pointer">
                        <span>Trade</span>
                    </div>
                </div>
            </div>
          </section>
         <!-- section title main page is end or finish -->
          <!-- section table charts start  -->
          <section class="relative  mt-[3rem] tablet:mt-[17rem] w-full overflow-x-auto laptop:max-w-[1300px] mx-auto">
            <div class="">
                <table class=" w-full mx-auto overflow-x-auto">
                    <thead class="border-b-1 border-slate-300">
                        <tr class="child:p-1 child:text-slate-400 child:text-center child:pb-8 border-b">
                            <td>
                                <div class="hidden mobile:flex items-center justify-center gap-x-1">
                                    #
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                                        <path d="M16 15L12 19L8 15M8 9L12 5L16 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </div>
                            </td>
                            <td>
                                <div class="flex items-center justify-center gap-x-1">
                                    Name
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                                        <path d="M16 15L12 19L8 15M8 9L12 5L16 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>     
                                </div>                              
                            </td>
                            <td>
                                <div class="flex items-center justify-center gap-x-1">
                                    Price
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                                        <path d="M16 15L12 19L8 15M8 9L12 5L16 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>     
                                </div>                              
                            </td>
                            <td>24 %</td>
                            <td>7d %</td>
                            <td>
                                <div class="hidden tablet:flex items-center justify-center gap-x-1">
                                    Marketcap
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                                        <path d="M15 9.99981L11 13.9998L8.99995 11.9998M13.246 3.45879L14.467 4.49929C14.7746 4.76143 15.1566 4.91991 15.5594 4.95206L17.1585 5.0795C18.0986 5.15452 18.8453 5.9008 18.9204 6.84093L19.0475 8.44024C19.0797 8.8431 19.2387 9.22559 19.5008 9.53319L20.5409 10.7538C21.1526 11.4716 21.1527 12.5275 20.541 13.2454L19.5009 14.4662C19.2388 14.7738 19.08 15.1564 19.0478 15.5593L18.9199 17.1583C18.8449 18.0984 18.0993 18.8452 17.1591 18.9202L15.5595 19.0478C15.1567 19.08 14.7744 19.2381 14.4667 19.5002L13.246 20.5407C12.5282 21.1525 11.4717 21.1526 10.7539 20.5409L9.53316 19.5003C9.22555 19.2382 8.84325 19.0798 8.44038 19.0477L6.84077 18.9202C5.90064 18.8452 5.15505 18.0986 5.08003 17.1585L4.9521 15.5594C4.91995 15.1565 4.76111 14.7742 4.49898 14.4666L3.45894 13.2454C2.84721 12.5276 2.84693 11.472 3.45865 10.7542L4.49963 9.53301C4.76176 9.22541 4.91908 8.84311 4.95122 8.44024L5.07915 6.84112C5.15417 5.90099 5.90192 5.15442 6.84205 5.0794L8.43989 4.95196C8.84276 4.91981 9.22525 4.76146 9.53285 4.49932L10.754 3.45879C11.4718 2.84707 12.5282 2.84707 13.246 3.45879Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </div>
                                </td>
                            <td>
                                <div class="hidden tablet:flex items-center justify-center gap-x-1">
                                    Volume(24)
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                                        <path d="M20.0005 7L14.1543 12.9375C14.0493 13.0441 13.9962 13.0976 13.9492 13.1396C13.1899 13.8193 12.0416 13.8193 11.2822 13.1396C11.2352 13.0976 11.1817 13.0442 11.0767 12.9375C10.9716 12.8308 10.9191 12.7774 10.8721 12.7354C10.1127 12.0557 8.96397 12.0557 8.20461 12.7354C8.15771 12.7773 8.10532 12.8305 8.00078 12.9367L4 17M20.0005 7L20 13M20.0005 7H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </div>
                            </td>
                            <td class="hidden laptop:inline-table">Chart</td>
                        </tr>
                    </thead>
                    <tbody v-html="Genarytorchart.join('')">   
                    </tbody>
                </table>
            </div>
          </section>
          <!-- section table charts coins end  -->
           <section class="max-w-[1300px] mx-auto p-2">
            <div class="text-center mb-5">
                <h2 class="text-2xl mobile:text-3xl tablet:text-5xl mb-2 tracking-tight">Learn and earn</h2>
                <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span class="text-slate-400">Lorem ipsum dolor sit amet.</span>
            </div>
            <div class="grid grid-cols-1 child:mx-auto mobile:grid-cols-2 tablet:grid-cols-3 gap-5">
                <div class="w-full mobile:max-w-[25rem] border-b pb-5 px-3 border-slate-300 dark:border-none">
                    <!-- video box -->
                     <div>
                        <video
                        id="my-video"
                        class="video-js w-full rounded-lg border-none"
                        controls
                        preload="auto"
                        width="640"
                        height="264"
                        poster="../assets/image/poster/01.png"
                        data-setup="{background-size : cover}"
                      >
                        <source src="../assets/videos/Designed for Mac. Accessories for your Mac.mp4" type="video/mp4" />
                      </video>
                     </div>
                     <div class="my-8 text-sm">
                        <span class="bg-orange-500 text-white py-1 px-2 rounded-sm">NEW</span>
                        <p class="py-1 text-xl tracking-tight text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ab?</p>
                     </div>
                     <div class="flex items-center justify-between text-slate-300">
                        <div class="flex items-center justify-center gap-x-2"><div class="w-5 h-5 rounded-full bg-green-400"></div><p>Floyd Bridge</p></div>
                        <div><span>Feb 03,2021</span></div>
                     </div>
                </div>
                <div class="w-full mobile:max-w-[25rem] border-b pb-5 px-3 border-slate-300 dark:border-none">
                    <!-- video box -->
                     <div>
                        <video
                        id="my-video"
                        class="video-js w-full rounded-lg border-none"
                        controls
                        preload="auto"
                        width="640"
                        height="264"
                        poster="../assets/image/poster/01.png"
                        data-setup="{background-size : cover}"
                      >
                        <source src="../assets/videos/Designed for Mac. Accessories for your Mac.mp4" type="video/mp4" />
                      </video>
                     </div>
                     <div class="my-8 text-sm">
                        <span class="bg-orange-500 text-white py-1 px-2 rounded-sm">NEW</span>
                        <p class="py-1 text-xl tracking-tight text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ab?</p>
                     </div>
                     <div class="flex items-center justify-between text-slate-300">
                        <div class="flex items-center justify-center gap-x-2"><div class="w-5 h-5 rounded-full bg-green-400"></div><p>Floyd Bridge</p></div>
                        <div><span>Feb 03,2021</span></div>
                     </div>
                </div>
                <div class="w-full tablet:max-w-[25rem] mobile:col-span-2 px-3 pb-5 tablet:col-span-1 border-b border-slate-300 dark:border-none">
                    <!-- video box -->
                     <div>
                        <video
                        id="my-video"
                        class="video-js w-full rounded-lg border-none"
                        controls
                        preload="auto"
                        width="640"
                        height="264"
                        poster="../assets/image/poster/03.png"
                        data-setup="{}"
                      >
                        <source src="../assets/videos/Designed for Mac. Accessories for your Mac.mp4" type="video/mp4" />
                      </video>
                     </div>
                     <div class="my-8 text-sm">
                        <span class="bg-blue-500 text-white py-1 px-2 rounded-sm">FEATURED</span>
                        <p class="py-1 text-xl tracking-tight text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ab?</p>
                     </div>
                     <div class="flex items-center justify-between text-slate-300">
                        <div class="flex items-center justify-center gap-x-2"><div class="w-5 h-5 rounded-full bg-green-400"></div><p>Floyd Bridge</p></div>
                        <div><span>Feb 03,2021</span></div>
                     </div>
                </div>
                
            </div>
           </section>
           <!-- btn load more  -->
            <div class="mt-5">
                <div class="w-fit py-1 px-4 rounded-full cursor-pointer text-md mx-auto border-2 dark:border-slate-500 border-slate-200">
                    Load more 
                </div>
            </div>
            <!-- btn load  finish-->
             <FooterComponent></FooterComponent>
    </div>
</template>
<script setup>
import { onMounted , onBeforeMount } from 'vue'
import HeaderMainComponent from '../components/HeaderMainComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'
import * as echarts from 'echarts';
import { dataHeadChart } from '../js/dataChartMain';
import 'video.js/dist/video-js.css';
import 'videojs-watermark';
let ChartIndex = [];
const Genarytorchart = dataHeadChart.map((data , index) => {         
    ChartIndex.push(data.id)    
        return `
                 <tr class="child:py-4 laptop:child:py-0 child:text-center">
                            <td class="text-slate-400">
                                <div class="hidden mobile:flex  gap-x-2 justify-center">
                                    <span class="cursor-pointer inline-block" @click="btn_active_star">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4 ">
                                            <path d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                                        
                                    </span>
                                    ${data.coinNumber}
                                </div>
                            </td>
                            <td>
                                <div class="flex items-center gap-x-3  mobile:ml-6 justify-start">
                                    ${data.svgIcon}
                                <h3 class="font-bold tracking-wide">${data.name}<span class="text-slate-400 ml-1">${data.nameCoin}</span></h3>
                                    </div>
                            </td>
                            <td>
                                <span class="font-bold">$${data.price.toLocaleString()}</span>
                            </td>
                            <td>
                                <span class="text-green-500 tracking-wide">+${data.changeTop}%</span>
                            </td>
                            <td>
                                <span class="text-red-500 tracking-wide">-${data.changeDown}%</span>
                            </td>
                            <td>
                                  <div class="hidden tablet:flex items-center justify-center"> 
                                     <span class="font-bold">$${data.marketCap.toLocaleString()}</span>
                                    </div>
                            </td>
                            <td>
                                <div class="hidden tablet:flex items-center justify-center">
                                    <span class="font-bold">$${data.volume.toLocaleString()}</span>
                                    </div>
                            </td>
                            <td class="hidden laptop:flex">
                                <div class=""> 
                                    <canvas id="${'elm' + data.id}" width="200px" height="100px" class="relative w-[200px] h-[100px]"></canvas>
                                </div>
                            </td>
                        </tr>
        `
    })
onMounted(() => {
    function createChart (item , colorChart , colorArea , dataChart) {
        var myChart = echarts.init(document.getElementById(item));
        myChart.setOption({
  tooltip: {},
  grid : {
    left : 0,
    right : 0 ,
    containLabel : true
  },
  xAxis: {
    type : 'category',
    data: dataChart,
    axisLine : {
        show : false 
    },
    axisLabel : {
        show : false 
    },
    splitLine : {
        show : false
    },
    axisTick : {
        show : false 
    }
  },
  yAxis: {
    type : 'value',
    axisLine : {
        show : false 
    },
    axisLabel : {
        show : false 
    },
    splitLine : {
        show : false
    }
  },
  series: [
    {
      name: 'sales',
      type: 'line',
      data: dataChart,
      itemStyle : {
        color : colorChart,
        shadowBlur : 5,
        shadowColor : colorChart
      },
      areaStyle: {
        color : colorArea,
        shadowBlur : 5,
        shadowColor : colorChart
      },
      smooth : true ,
      symbol : 'none', 
      optionPath : false ,

    }
  ],
  backgroundColor : 'transparent',
});
    };
 ChartIndex.map((item , index) => {    
   createChart('elm' + item , dataHeadChart[index].changeTop < dataHeadChart[index].changeDown ? 'red' : 'green' ,  dataHeadChart[index].changeTop < dataHeadChart[index].changeDown ? 'rgba(224, 0, 0, 0.324)' : 'rgba(0, 224, 0, 0.322)'  , dataHeadChart[index].ChartData);    
 });
function btn_active_star () {

}
})

</script>
<style scoped>

</style>