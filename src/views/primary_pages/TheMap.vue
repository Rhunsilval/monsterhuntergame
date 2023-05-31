<template>
    <the-header></the-header>

    <div class="bg-[url('../assets/images/allpurpose/map.png')] py-10"> 

      <header class="relative overflow-hidden">
  
<!-- Hero section -->
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
  <!-- left side -->
            <div class="sm:max-w-lg bg-[#D2B48C] px-16 py-16  rounded-3xl border border-[#305c79]" >
              <h1 class="font text-4xl font-bold tracking-tight text-[#305c79] sm:text-6xl text-center">World Map</h1>
              <p class="mt-4 text-xl text-gray-700 text-center">Welcome, hunter! <br/> Danger, adventure, and fortune await you! <br/> Want a good story to tell at the village pub?</p>
              <br/>
              <p class="text-center text-[#305c79] font-bold text-3xl">Click on an environment and good luck!</p>
            </div>

            <div class="">
              <div class="mt-10">                
  <!-- Decorative image grid -->
                <div aria-hidden="true" class=" lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div class="bg-[#305c79] rounded-full absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div class="flex items-center space-x-6 lg:space-x-8">

                <!-- for the future: 2 more environments
                will need to change the size of other objects -->
                      <!-- <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <router-link :to="'/map_forest'" class="group h-44 w-32  overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 border border-black">
                            <img src="../assets/images/forest/Forest.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                        </router-link>
                      </div> -->

                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <router-link :to="'/map_forest'" class="group h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 border border-black">
                            <img src="../../assets/images/forest/Forest.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                        </router-link>
                        <router-link :to="'/map_jungle'" class="h-64 w-44 overflow-hidden rounded-lg border border-black">
                          <img src="../../assets/images/jungle/Jungle.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50" />
                        </router-link>
                      </div>

                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <router-link :to="'/map_mountains'" class="h-64 w-44 overflow-hidden rounded-lg border border-black">
                          <img src="../../assets/images/mountains/Mountains.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50" />
                        </router-link>
                        <router-link :to="'/map_grassland'" class="h-64 w-44 overflow-hidden rounded-lg border border-black">
                          <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50" />
                        </router-link>
                        <router-link :to="'/map_desert'" class="h-64 w-44 overflow-hidden rounded-lg border border-black">
                          <img src="../../assets/images/desert/Desert.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50" />
                        </router-link>
                      </div>

                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <router-link :to="'/map_marshes'" class="h-64 w-44 overflow-hidden rounded-lg border border-black">
                          <img src="../../assets/images/marshes/Marshes.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50" />
                        </router-link>
                        <router-link :to="'/map_swamp'" class="h-64 w-44 overflow-hidden rounded-lg border border-black">
                          <img src="../../assets/images/swamp/Swamp.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50" />
                        </router-link>
                      </div>

                      <!-- <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <router-link :to="'/map_marshes'" class="h-44 w-32 overflow-hidden rounded-lg border border-black">
                          <img src="../assets/images/marshes/Marshes.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50" />
                        </router-link>
                      </div> -->

                    </div>
                  </div>
                </div>
                <div class="ml-16">
                  <router-link to="/village" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                    Explore the Village</router-link>
                  <router-link to="/map" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                    Hunt for Monsters</router-link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </header>
    </div>
</template>
  

<script>
</script>