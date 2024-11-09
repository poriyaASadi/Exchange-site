<template>
  <div class="bg-slate-50 relative">
    <!-- header -->
    <HeaderComponent></HeaderComponent>
    <section class=" mt-[6rem] font-Dim">
      <div class="w-full  flex flex-col  items-center justify-center laptop:flex-row-reverse overflow-hidden desktop:h-[45rem]">
        <!-- right logo -->
        <div class="h-[30rem] desktop:h-[auto] desktop:mt-[4rem]">
          <img src="../assets/image/Composition_02 5.png" class="object-cover desktop:object-none w-full h-full " alt="">
        </div>
        <!-- left title -->
        <div>
              <div class="w-full text-center laptop:text-left">
                <h1 class="font-Dim font-bold text-[2.5rem] tablet:text-[3rem] desktop:text-[3.7em] leading-[3.5rem]">Buy & sell <br>crypto in minutes</h1>
                <p class="my-5 px-1 tablet:px-0 max-w-[25rem]  text-slate-400 text-sm tracking-tight w-fit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consequuntur. Id quibusdam provident </p>
                <button type="button" class="bg-blue-500  text-white py-2 px-5 rounded-full shadow-md">Get start now</button>
                <div class="mx-auto laptop:mx-0 flex items-center mt-16 mb-1 justify-center w-12 h-12 bg-white shadow-md rounded-full">
                  <span class=" cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-6 h-6 text-blue-500">
                      <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>                  
                  </span>
                </div>
              </div>
        </div>
      </div>
    </section>
    <!-- coins favorites change -->
   <section class="mt-14 laptop:mt-0 px-2 mobile:px-0 w-full">
  <!-- box coins favorites . . .  -->
<div  class="flex items-center justify-center font-Dim">
<div class="desktop:bg-[#F4F5F6]  desktop:py-10 desktop:px-9  rounded-[2rem] ">
 <ul class="flex flex-col mobile:flex-row mobile:flex-wrap mobile:justify-center  items-center gap-y-12 mobile:gap-y-0 mobile:gap-2 tablet:gap-7 laptop:gap-x-12 child:shadow-lg desktop:child:shadow-none child:transition-shadow child:delay-100 child-hover:shadow-lg">
   <li class="rounded-xl">
     <div class="w-[17rem] h-[13rem] rounded-xl cursor-pointer   p-5 px-2 laptop:px-6 ">
       <!-- icon coins -->
       <div class="mb-2">
         <svg width="220" height="220" viewBox="0 0 220 220" fill="none" class="w-10 h-10">
           <g clip-path="url(#clip0_108_86)">
           <path d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z" fill="#F7931A"/>
           <path d="M159.424 96.3875C161.583 81.9775 150.603 74.2294 135.602 69.0594L140.47 49.5344L128.59 46.5781L123.846 65.5875C120.725 64.8037 117.521 64.075 114.324 63.3462L119.102 44.2131L107.222 41.25L102.355 60.7681C99.7697 60.1769 97.226 59.5994 94.7647 58.9806L94.7785 58.9187L78.3885 54.8281L75.226 67.5194C75.226 67.5194 84.0466 69.5406 83.861 69.6644C88.6735 70.8675 89.5397 74.0506 89.3954 76.5806L83.8541 98.8212C84.1841 98.9037 84.6104 99.0275 85.0916 99.2131L83.8335 98.9037L76.0647 130.061C75.4735 131.519 73.9816 133.712 70.6129 132.88C70.7366 133.052 61.9779 130.728 61.9779 130.728L56.0791 144.327L71.5479 148.184C74.4216 148.906 77.2404 149.662 80.011 150.37L75.0954 170.115L86.9685 173.071L91.836 153.546C95.081 154.419 98.2297 155.231 101.31 156.001L96.456 175.443L108.336 178.399L113.252 158.696C133.519 162.532 148.754 160.985 155.168 142.656C160.338 127.903 154.914 119.384 144.251 113.836C152.02 112.049 157.863 106.941 159.424 96.3875ZM132.268 134.461C128.603 149.222 103.75 141.24 95.6929 139.239L102.224 113.08C110.282 115.094 136.111 119.075 132.268 134.461ZM135.946 96.1744C132.598 109.601 111.918 102.774 105.215 101.104L111.127 77.385C117.83 79.0556 139.438 82.17 135.946 96.1744Z" fill="white"/>
           </g>
           <defs>
           <clipPath id="clip0_108_86">
           <rect width="220" height="220" fill="white"/>
           </clipPath>
           </defs>
           </svg>                
       </div>
       <div class="flex flex-col gap-y-2 ">
         <div class="flex items-center gap-x-2 text-slate-400 text-sm font-[500]">BTC/USDT <span class="py-1 px-2 rounded-full bg-orange-500 text-white">-0.79%</span></div>
         <h3 class="text-4xl tracking-tight">36,641.20</h3>
         <span class="text-slate-400 text-sm">36,431.20</span>
       </div>
     </div>
   </li>
   <li class="rounded-xl laptop:hidden desktop:inline-block">
     <div class="w-[17rem] h-[13rem] rounded-xl cursor-pointer shadow-lg  p-5 px-6 ">
       <!-- icon coins -->
       <div class="mb-2">
         <svg width="220" height="220" viewBox="0 0 220 220" fill="none" class="w-10 h-10">
           <path d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z" fill="#272731"/>
           <path d="M185.625 110.206C185.625 130.213 177.753 149.394 163.721 163.543C156.8 170.535 148.562 176.087 139.483 179.877C130.404 183.667 120.664 185.621 110.825 185.625V166.361C137.968 166.444 161.184 146.719 165.715 119.735H138.971C140.03 116.6 140.573 113.314 140.58 110C140.537 106.693 139.994 103.411 138.971 100.265H165.715C161.123 73.315 137.94 53.625 110.825 53.6388V34.375C152.13 34.7737 185.453 68.5575 185.625 110.206ZM135.754 126.424H156.874C149.064 149.146 126.129 162.862 102.609 158.874C79.0969 154.873 61.875 134.344 61.875 110.296C61.875 86.2469 79.0969 65.725 102.609 61.7306C126.129 57.7431 149.064 71.4588 156.874 94.1806H135.754C133.376 90.567 130.3 87.4651 126.706 85.0575C123.421 82.9439 119.748 81.5027 115.902 80.8172C112.056 80.1318 108.112 80.2156 104.298 81.064C100.485 81.9124 96.8772 83.5085 93.6844 85.7599C90.4915 88.0113 87.7766 90.8734 85.6969 94.1806C76.8694 108.116 80.9188 126.631 94.7444 135.534C98.0297 137.648 101.701 139.089 105.547 139.775C109.393 140.461 113.337 140.378 117.151 139.53C120.964 138.682 124.572 137.087 127.765 134.836C130.958 132.586 133.673 129.724 135.754 126.418V126.424Z" fill="white"/>
           </svg>                
       </div>
       <div class="flex flex-col gap-y-2 ">
         <div class="flex items-center gap-x-2 text-slate-400 text-sm font-[500]">BTC/USDT <span class="py-1 px-2 rounded-full bg-blue-500 text-white">-0.79%</span></div>
         <h3 class="text-4xl tracking-tight">36,641.20</h3>
         <span class="text-slate-400 text-sm">36,431.20</span>
       </div>
     </div>
   </li>
   <li class="rounded-xl">
     <div class="w-[17rem] h-[13rem] rounded-xl cursor-pointer   p-5 px-6  ">
       <!-- icon coins -->
       <div class="mb-2">
         <svg width="220" height="220" viewBox="0 0 220 220" fill="none" class="w-10 h-10">
           <g clip-path="url(#clip0_108_277)">
           <path d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z" fill="#58BF00"/>
           <path d="M171.875 155.238L123.819 132.839V83.2013L171.875 66.1581V155.238ZM101.908 178.75L55 156.894V68.4613L101.908 90.3237V178.75ZM170.727 62.9544L169.95 63.2294L123.819 79.5988L122.664 80.0112L103.118 86.9412L56.8494 65.3813L122.664 42.0337L123.241 41.8275L124.458 41.3944L124.884 41.25L171.153 62.81L170.72 62.9544H170.727Z" fill="white"/>
           </g>
           <defs>
           <clipPath id="clip0_108_277">
           <rect width="220" height="220" fill="white"/>
           </clipPath>
           </defs>
           </svg>                
       </div>
       <div class="flex flex-col gap-y-2 ">
         <div class="flex items-center gap-x-2 text-slate-400 text-sm font-[500]">BTC/USDT <span class="py-1 px-2 rounded-full bg-green-500 text-white">-0.79%</span></div>
         <h3 class="text-4xl tracking-tight">36,641.20</h3>
         <span class="text-slate-400 text-sm">36,431.20</span>
       </div>
     </div>
   </li>
   <li class="rounded-xl">
     <div class="w-[17rem] h-[13rem] rounded-xl cursor-pointer   p-5 px-6  ">
       <!-- icon coins -->
       <div class="mb-2">
         <svg width="220" height="220" viewBox="0 0 220 220" fill="none" class="w-10 h-10">
           <g clip-path="url(#clip0_108_407)">
           <path d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z" fill="#26A17B"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M123.214 119.51V119.497C122.458 119.552 118.56 119.785 109.863 119.785C102.919 119.785 98.0311 119.579 96.3124 119.497V119.517C69.5824 118.342 49.6311 113.687 49.6311 108.118C49.6311 102.557 69.5824 97.9022 96.3124 96.7059V114.883C98.0586 115.007 103.064 115.303 109.98 115.303C118.278 115.303 122.437 114.959 123.214 114.89V96.7197C149.889 97.9091 169.792 102.563 169.792 108.118C169.792 113.687 149.889 118.328 123.214 119.51ZM123.214 94.8291V78.5628H160.435V53.7578H59.0911V78.5628H96.3124V94.8222C66.0624 96.2109 43.313 102.206 43.313 109.383C43.313 116.561 66.0624 122.549 96.3124 123.945V176.071H123.214V123.931C153.416 122.542 176.11 116.554 176.11 109.383C176.11 102.213 153.416 96.2247 123.214 94.8291Z" fill="white"/>
           </g>
           <defs>
           <clipPath id="clip0_108_407">
           <rect width="220" height="220" fill="white"/>
           </clipPath>
           </defs>
           </svg>                
       </div>
       <div class="flex flex-col gap-y-2 ">
         <div class="flex items-center gap-x-2 text-slate-400 text-sm font-[500]">BTC/USDT <span class="py-1 px-2 rounded-full bg-slate-500 text-white">-0.79%</span></div>
         <h3 class="text-4xl tracking-tight">36,641.20</h3>
         <span class="text-slate-400 text-sm">36,431.20</span>
       </div>
     </div>
   </li>
 </ul>
</div>
</div>
   </section>
   <!-- about coins -->
   <section class="font-Dim p-2 tablet:p-10 mx-auto mt-10 max-w-[1300px]">
    <div class="w-full">
      <div class="flex w-full flex-col gap-6 mobile:gap-0 mobile:flex-row items-center justify-between mb-10">
        <div><h2 class="text-4xl font-bold">Learn crypto</h2></div>
        <div><span class="py-2 px-5 border shadow-sm rounded-full ">View more</span></div>
    </div>
      <div class="">
        <ul class="flex items-center flex-wrap gap-3 child:py-1 child-hover:text-white child-hover:font-normal child-hover:bg-slate-800 cursor-pointer child:text-slate-400 child:px-5 child:rounded-full child:font-[600]">
          <li class="!text-white !font-normal bg-black px-5 py-1 rounded-full">All</li>
          <li>Bitcoin</li>
          <li>Blockchein</li>
          <li>Tutorlal</li>
        </ul>
      </div>
      <!-- box item for about coins -->
       <div class="grid grid-cols-1 laptop:grid-cols-2 laptop:gap-x-5 mt-8">
        <div class="">
          <div>
               <div class="bg-green-200 rounded-xl w-full h-[550px]">
                <img src="../assets/image/Composition_15 1.png" class="w-full h-full rounded-xl object-cover" alt="">
               </div>
               <div class="">
                <div class="flex flex-col mobile:flex-row items-center justify-between px-5 py-3">
                  <h2 class="text-center mobile:text-left mb-2 mobile:mb-0 text-2xl tablet:text-3xl">Leveraged tokens now <br> available</h2>
                  <button class="border-2 w-[180px] rounded-full px-5 py-1 hover:bg-slate-200 transition-all">Learn more</button>
                </div>
                <p class="px-5 text-slate-400 text-center tablet:text-left tablet:max-w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, obcaecati.</p>
               </div>
          </div>
        </div>
        <div class="mt-5 laptop:mt-0">
          <ul>
            <ItemCardCoinAbout></ItemCardCoinAbout>
          </ul>
        </div>
       </div>
      <!-- ------ -->
      </div>
  </section>
  <section class="font-Dim p-5 mobile:p-10  mx-auto max-w-[1300px]">
    <div>
      <div class="flex flex-col gap-6 mobile:gap-0 mobile:flex-row items-center justify-between mb-10">
        <div><h2 class="text-4xl font-bold">Market trend</h2></div>
        <div><span class="py-2 px-5 border shadow-sm rounded-full ">View more</span></div>
      </div>
      <div class="">
        <ul class="flex items-center flex-wrap gap-3 child:py-1 child-hover:text-white child-hover:font-normal child-hover:bg-slate-800 cursor-pointer child:text-slate-400 child:px-5 child:rounded-full child:font-[600]">
          <li class="!text-white !font-normal bg-black px-5 py-1 rounded-full">All</li>
          <li>Def</li>
          <li>Innovation</li>
          <li>Pos</li>
          <li>NFT</li>
          <li>POW</li>
          <li>Storage</li>
        </ul>
      </div>
      <!-- table charts -->
       <div class="mt-10">
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm !font-Dim   text-center rtl:text-right ">
                <thead class="text-xs child:font-bold text-center  child:text-slate-400 border-b-2 pb-3 uppercase ">
                    <tr class="border-t-2">
                      <th scope="col" class="px-6 py-3">
                        #
                    </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            24 change
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Chart
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Trade
                        </th>
                    </tr>
                </thead>
                <tbody v-html="creatorTableChart.join('')">
                </tbody>
            </table>
        </div>
       </div>
      <!-- finish chart table -->
    </div>
   </section>
   <!-- table trading end -->
     <section class="font-Dim mx-auto max-w-[1300px] text-center py-10">
      <h2  class="text-4xl font-bold">Become a crypto <br> trader in seconds</h2>
      <p class="py-5 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div>
        <ul class="flex flex-col tablet:flex-row gap-y-5 items-center  tablet:gap-x-5 justify-center">
          <li>
            <div class="max-w-[20rem] h-[26rem] p-5 rounded-xl shadow-sm flex flex-col items-center justify-center bg-white">
              <img src="../assets/image/Composition_04 1.png" alt="" class="mb-5 w-fit h-fit">
              <h3 class="text-center text-lg font-bold">Trade Assets</h3>
              <p class="text-center py-3 text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam illo, modi excepturi vel sequi possimus at totam dolorem ipsa.</p>
              <a href="#" class="py-2 px-4 text-sm border-2 border-slate-400 rounded-full">Buy crypto</a>
            </div>
          </li>
          <li>
            <div class="max-w-[20rem] flex tablet:hidden laptop:flex h-[29rem] p-5 rounded-xl shadow-md flex-col items-center justify-center bg-white">
              <img src="../assets/image/Composition_11 1.png" alt="" class="mb-5 w-fit h-fit">
              <h3 class="text-center text-lg font-bold">Trade Assets</h3>
              <p class="text-center py-3 text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam illo, modi excepturi vel sequi possimus at totam dolorem ipsa.</p>
              <a href="#" class="py-2 px-4 text-sm border-2 border-slate-400 rounded-full">Trade now</a>
            </div>
          </li>
          <li>
            <div class="max-w-[20rem] h-[26rem] p-5 rounded-xl shadow-sm flex flex-col items-center justify-center bg-white">
              <img src="../assets/image/Composition_13 1.png" alt="" class="mb-5 w-fit h-fit">
              <h3 class="text-center text-lg font-bold">Trade Assets</h3>
              <p class="text-center py-3 text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam illo, modi excepturi vel sequi possimus at totam dolorem ipsa.</p>
              <a href="#" class="py-2 px-4 text-sm border-2 border-slate-400 rounded-full">Learn now</a>
            </div>
          </li>
        </ul>
      </div>
     </section>
     <!-- download app website section -->
      <section class="font-Dim  bg-white rounded-xl  0 mx-auto max-w-[1300px]">
        <div class="flex items-center flex-col laptop:flex-row justify-center gap-x-14">
          <div class="flex items-center flex-col mt-5 laptop:mt-0 p-2">
            <h2 class="text-4xl font-bold text-center">Trade anywhere</h2>
            <p class="text-sm text-slate-400 text-center mt-2 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus!</p>
            <ul class="flex items-center justify-center  laptop:flex-col gap-x-5 flex-wrap gap-y-5 child:cursor-pointer">
              <li class="flex items-center gap-x-5">
                <span class="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-7 h-7">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3137 22.3726C12.8284 22.1716 12.4142 22 12 22C11.5858 22 11.1716 22.1716 10.6863 22.3726C10 22.6569 9.17157 23 8 23C5 23 2.99997 17.9998 3 14C3.00003 10.0002 4 6 8 6C9.0718 6 9.71281 6.28719 10.3078 6.55375C10.8231 6.78461 11.3038 7 12 7C12.6962 7 13.1769 6.78461 13.6922 6.55375C14.2872 6.28719 14.9282 6 16 6C18.2181 6 19.5138 7.23009 20.2279 9.00809L20.2336 9.02233C20.3336 9.2727 20.422 9.53386 20.5 9.80393C20.5876 10.1074 20.6619 10.4221 20.7243 10.7454C20.7503 10.8801 20.6372 11 20.5 11C19.1193 11 18 12.1193 18 13.5C18 14.8807 19.1193 16 20.5 16C20.6754 16 20.8243 16.1495 20.7946 16.3224C20.7171 16.7724 20.6185 17.2208 20.5 17.6602C20.4696 17.773 20.4378 17.8853 20.4048 17.9968L20.4041 17.999C19.599 20.7152 18.028 23 16 23C14.8284 23 14 22.6569 13.3137 22.3726ZM12 20C11.1714 20 10.4155 20.3174 10.0073 20.4887C9.3592 20.7608 8.71303 21 8 21C7.70005 21 6.95842 20.6947 6.16385 19.1055C5.43774 17.6533 4.99999 15.7127 5 14C5.00001 12.1022 5.24783 10.4766 5.78887 9.39448C6.04525 8.88172 6.3359 8.5548 6.64068 8.35161C6.93294 8.15676 7.34999 8 8 8C8.34662 8 8.59033 8.04494 8.78421 8.10023C8.99677 8.16085 9.18406 8.24184 9.49009 8.37895L9.53985 8.40128C10.0616 8.63559 10.8731 9 12 9C13.1269 9 13.9384 8.63558 14.4602 8.40128L14.5099 8.37895C14.8159 8.24185 15.0032 8.16085 15.2158 8.10023C15.4097 8.04494 15.6534 8 16 8C16.7144 8 17.1538 8.18873 17.4605 8.42402C17.7602 8.65398 18.0486 9.01925 18.2966 9.57542C16.9259 10.3466 16 11.8152 16 13.5C16 15.2517 17.0008 16.7696 18.4618 17.5131C18.1105 18.6679 17.6292 19.6219 17.1142 20.2498C16.5826 20.898 16.1964 21 16 21C15.287 21 14.6408 20.7608 13.9927 20.4887C13.5845 20.3174 12.8286 20 12 20Z" fill="#FCFCFD"/>
                    <path d="M12 4.75C12 2.67893 13.6789 1 15.75 1C15.8881 1 16 1.11193 16 1.25C16 3.32107 14.3211 5 12.25 5C12.1119 5 12 4.88807 12 4.75Z" fill="#FCFCFD"/>
                    </svg>                  
                </span>
                <div>
                  <p class="text-slate-400 text-sm tracking-tight">Download from</p>
                  <h6 class="font-bold text-xl">App store</h6>
                </div>
              </li>
              <li class="flex items-center gap-x-5">
                <span class="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-7 h-7">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill="#FCFCFD"/>
                    </svg>                                 
                </span>
                <div>
                  <p class="text-slate-400 text-sm tracking-tight">Download from</p>
                  <h6 class="font-bold text-xl">Google Play</h6>
                </div>
              </li>
              <li class="flex items-center gap-x-5">
                <span class="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-7 h-7">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3137 22.3726C12.8284 22.1716 12.4142 22 12 22C11.5858 22 11.1716 22.1716 10.6863 22.3726C10 22.6569 9.17157 23 8 23C5 23 2.99997 17.9998 3 14C3.00003 10.0002 4 6 8 6C9.0718 6 9.71281 6.28719 10.3078 6.55375C10.8231 6.78461 11.3038 7 12 7C12.6962 7 13.1769 6.78461 13.6922 6.55375C14.2872 6.28719 14.9282 6 16 6C18.2181 6 19.5138 7.23009 20.2279 9.00809L20.2336 9.02233C20.3336 9.2727 20.422 9.53386 20.5 9.80393C20.5876 10.1074 20.6619 10.4221 20.7243 10.7454C20.7503 10.8801 20.6372 11 20.5 11C19.1193 11 18 12.1193 18 13.5C18 14.8807 19.1193 16 20.5 16C20.6754 16 20.8243 16.1495 20.7946 16.3224C20.7171 16.7724 20.6185 17.2208 20.5 17.6602C20.4696 17.773 20.4378 17.8853 20.4048 17.9968L20.4041 17.999C19.599 20.7152 18.028 23 16 23C14.8284 23 14 22.6569 13.3137 22.3726ZM12 20C11.1714 20 10.4155 20.3174 10.0073 20.4887C9.3592 20.7608 8.71303 21 8 21C7.70005 21 6.95842 20.6947 6.16385 19.1055C5.43774 17.6533 4.99999 15.7127 5 14C5.00001 12.1022 5.24783 10.4766 5.78887 9.39448C6.04525 8.88172 6.3359 8.5548 6.64068 8.35161C6.93294 8.15676 7.34999 8 8 8C8.34662 8 8.59033 8.04494 8.78421 8.10023C8.99677 8.16085 9.18406 8.24184 9.49009 8.37895L9.53985 8.40128C10.0616 8.63559 10.8731 9 12 9C13.1269 9 13.9384 8.63558 14.4602 8.40128L14.5099 8.37895C14.8159 8.24185 15.0032 8.16085 15.2158 8.10023C15.4097 8.04494 15.6534 8 16 8C16.7144 8 17.1538 8.18873 17.4605 8.42402C17.7602 8.65398 18.0486 9.01925 18.2966 9.57542C16.9259 10.3466 16 11.8152 16 13.5C16 15.2517 17.0008 16.7696 18.4618 17.5131C18.1105 18.6679 17.6292 19.6219 17.1142 20.2498C16.5826 20.898 16.1964 21 16 21C15.287 21 14.6408 20.7608 13.9927 20.4887C13.5845 20.3174 12.8286 20 12 20Z" fill="#FCFCFD"/>
                    <path d="M12 4.75C12 2.67893 13.6789 1 15.75 1C15.8881 1 16 1.11193 16 1.25C16 3.32107 14.3211 5 12.25 5C12.1119 5 12 4.88807 12 4.75Z" fill="#FCFCFD"/>
                    </svg>                  
                </span>
                <div>
                  <p class="text-slate-400 text-sm tracking-tight">Download for</p>
                  <h6 class="font-bold text-xl">Max OS</h6>
                </div>
              </li>
            </ul>
          </div>
          <div class="max-w-[40rem]">
            <img src="../assets/image/01.png" alt="">
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
      <!-- footer finish  -->
  </div>
</template>
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import ItemCardCoinAbout from '../components/ItemCardCoinAbout.vue';
import FooterComponent from '../components/FooterComponent.vue'

import { ref, onMounted } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale );
import { data } from '../js/dataChart.js'

const lineChartSeries = ref([
    {
      name : 'Sales',
      data : [30 , 30 , 40 , 50 , 60]
    }
  ]);
  const lineChartOptions = ref({
    chart: {
    toolbar: { show: false } ,
    height: 150,
  },
    dataLabels: {enabled: false },
            stroke: {curve: 'smooth'},
            colors: ['#3A6FF8'],
  fill: {
    colors: ['#3A6FF8'],
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.1,
      opacityTo: 2,
      stops: [0, 10]
    }
  },
          xaxis : {
          categories : ["jan" , "feb" , 'may' , 'apr'],
          labels: { show: false },
          axisBorder: { show: false }, 
          axisTicks: { show: false } 
          },
          yaxis: { show: false },
          grid: { show: false },
          tooltip: {enabled : false},
          legend: { show: false }
  });

const creatorTableChart = data.map((item , index) => {
  return `
     <tr class="child:border-b">
                    <td class="px-2 laptop:px-6 py-4 font-bold tracking-wide text-slate-600 text-md">
                      ${item.id}
                  </td>
                      <th scope="row" class="px-2 laptop:px-6 py-4 font-medium  whitespace-nowrap ">
                          <div class="flex items-center gap-x-3 font-bold tracking-wide text-slate-600 text-md">
                            ${item.svg}
                              ${item.name}                       
                          </div>
                      </th>
                      <td class="px-2 laptop:px-6 py-4 font-bold tracking-wide text-slate-600 text-md">
                          $${item.price}
                      </td>
                           ${item.change < 0 ? `<td class=" px-2 laptop:px-6 py-4 text-red-500  font-bold tracking-wide text-md">${item.change}%</td>` : `<td class=" px-2 laptop:px-6 py-4 font-bold tracking-wide text-md text-green-500">+${item.change}%</td>`}
                      <td class="px-2 laptop:px-6 py-4 w-[10rem] !h-[4rem]">
                        <canvas id="${'chart' + index}" class="w-[15rem] overflow-x-auto !h-[4rem]"></canvas>
                    </td>
                      <td class="px-3 py-2">
                          <a href="#" class="font-bold text-md  border-2 py-2 px-7 text-slate-500  rounded-full">Trade</a>
                      </td>
                  </tr>
  `
})
onMounted(() => {
  function genarytorchart (itemID , color , datachart) {
    const ctx = document.getElementById(itemID).getContext('2d');
    const data = {
      labels: datachart,
  datasets: [{
    label: 'Example Data',
    data: datachart,
    borderColor: color,
    backgroundColor: 'red',
    borderWidth: 2,
    fill: true,
    tension: 0.4,
    responsive: true,
    pointRadius: 0,
  }],
};
    new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });
  }
  // genarytorchart('chart1' , 'red');
  // genarytorchart('chart2' , 'blue');
  for(let i = 0 ; i < 6 ; i++) {
    genarytorchart('chart' + i , `${data[i].change < 0 ? 'red' : 'green'}` , data[i].chart.ChartDadas);
  }
});    
</script>