<template>
    <div class="w-full relative pt-3 font-Dim">
        <!-- header main page  -->
        <HeaderMainComponent></HeaderMainComponent>
        <!-- header main page finish  -->
         <!-- section title main page -->
          <section class="w-full tablet:h-[60vh] px-1 tablet:bg-pink-200">
            <div class="h-full flex flex-col-reverse tablet:flex-row  items-center justify-center tablet:gap-x-10 mx-auto">
                <div class="w-fit">
                    <h1 class="text-center tablet:text-left  text-[2em] leading-[2rem] mobile:text-[3rem] mobile:leading-[3rem] laptop:text-[3.5rem] laptop:leading-[3.7rem] font-bold tracking-wider">Today`s <br> Cryptocurrency <br>price</h1>
                    <p class="mt-2 tablet:mt-5 text-lg text-slate-700 text-center tablet:text-left">the global crypto market cap is <b>$1.86T</b></p>
                </div>
                <div class="max-w-[28rem] laptop:w-[40rem] h-full">
                    <img src="../assets/image/BTC.png" class="w-full h-full object-cover" alt="">
                </div>
            </div>
            <div class="-top-14 tablet:relative mt-10 tablet:mt-0 bg-white rounded-3xl  shadow-2xl  p-5 max-w-[1000px] mx-auto">
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
                            <h2 class="text-4xl text-slate-800 font-bold my-1">36,623,54</h2>
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
                            <h2 class="text-4xl text-slate-800 font-bold my-1">36,623,54</h2>
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
                            <h2 class="text-4xl text-slate-800 font-bold my-1">36,623,54</h2>
                            <span class="text-slate-400">34,536,76</span>
                        </div>
                    </div>
                </div>
                <div class="flex  flex-wrap items-center justify-between mt-10">
                    <div>
                        <ul class="flex items-center flex-wrap gap-5 tablet:gap-x-7 child-hover:cursor-pointer child:text-slate-400">
                            <li class="bg-black !text-white rounded-full px-2 py-1">Cryptocurrency</li>
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
          <section class="relative  mt-[3rem] tablet:mt-[17rem] max-w-[1300px] mx-auto">
            <div class="">
                <table class="w-full mx-auto" border="2px">
                    <thead class="border-b-1 border-slate-300  mb-5">
                        <tr class="child:p-1 child:text-center">
                            <td>#</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>24%</td>
                            <td>7d%</td>
                            <td>Marketcap</td>
                            <td>Volume(24)</td>
                            <td class="hidden laptop:inline-table">Chart</td>
                        </tr>
                    </thead>
                    <tbody class="">
                        <tr class="child:p-1 child:text-center">
                            <td class="flex items-center !py-2 px-1 justify-center gap-x-2 text-slate-400 text-md">
                                <span class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4 ">
                                        <path d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                                1
                            </td>
                            <td>
                                <h3 class="font-bold tracking-wide">Bitcoin <span class="text-slate-400 ml-1">BTC</span></h3>
                            </td>
                            <td>
                                <span class="font-bold">$36,245,22</span>
                            </td>
                            <td>
                                <span class="text-green-500 tracking-wide">+6.05%</span>
                            </td>
                            <td>
                                <span class="text-red-500 tracking-wide">-1.64%</span>
                            </td>
                            <td>
                                <span class="font-bold">$343,423,876,231,676,2</span>
                            </td>
                            <td>
                                <span class="font-bold">$353,456,976,321,567</span>
                            </td>
                            <td class="hidden laptop:inline-table">
                                <button class="bg-blue-500 text-white py-2 px-5 cursor-pointer rounded-full">Buy</button>
                            </td>
                        </tr>
                        <tr class="child:p-1 child:text-center">
                            <td class="flex items-center !py-2 px-1 justify-center gap-x-2 text-slate-400 text-md">
                                <span class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4 ">
                                        <path d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                                1
                            </td>
                            <td>
                                <h3 class="font-bold tracking-wide">Bitcoin <span class="text-slate-400 ml-1">BTC</span></h3>
                            </td>
                            <td>
                                <span class="font-bold">$36,245,22</span>
                            </td>
                            <td>
                                <span class="text-green-500 tracking-wide">+6.05%</span>
                            </td>
                            <td>
                                <span class="text-red-500 tracking-wide">-1.64%</span>
                            </td>
                            <td>
                                <span class="font-bold">$343,423,876,231,676,2</span>
                            </td>
                            <td>
                                <span class="font-bold">$353,456,976,321,567</span>
                            </td>
                            <td class="hidden laptop:inline-table">
                                <button class="bg-blue-500 text-white py-2 px-5 cursor-pointer rounded-full">Buy</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>
    </div>
</template>
<script setup>
import HeaderMainComponent from '../components/HeaderMainComponent.vue';
</script>