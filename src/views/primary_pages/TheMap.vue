<template>
  <the-header></the-header>

  <div class="bg-[url('../assets/images/allpurpose/map.png')]"> 
      <div class="pt-24 pb-12"> 
          <div class="relative mx-auto max-w-7xl px-4 -mt-20 sm:static"> 
              <div class=" bg-[#D2B48C] px-16 rounded-3xl border border-[#305c79]" >
                  <h1 class="font text-4xl font-bold tracking-tight text-[#305c79] sm:text-6xl text-center">World Map</h1>
                  <p class="mt-2 text-gray-700 text-center">Welcome, hunter! <br/> Danger, adventure, and fortune await you! <br/> Want a good story to tell at the village pub?</p>
                  <p class="my-2 text-center text-[#305c79] font-bold text-3xl">Click on an environment and good luck!</p>
              </div>                
          </div>
      </div>

<!-- initial game map -->
      <div v-if="conditionalStore.worldMap.basicMap" class="grid grid-cols-7 mx-10"> 
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/mountains/Mountains.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>

          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_forest'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/forest/Forest.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_marshes'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/marshes/Marshes.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>

          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center -mb-8 mt-8"> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 -mr-72 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center -mb-8 mt-8"> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 -ml-72 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>

          <div class="flex justify-center"> 
              <router-link :to="'/map_grassland'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 -mr-56 mt-8 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/village'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/allpurpose/Thornstalk_Village.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 -ml-56 mt-8 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>

          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center "> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 -mr-72 -mt-8 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center "> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center "> 
              <router-link :to="'/map_farmlands'" class="group h-28 w-28 -ml-72 -mt-8 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>

          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_jungle'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/jungle/Jungle.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_swamp'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/swamp/Swamp.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>

          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center mb-20"> 
              <router-link :to="'/map_desert'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/desert/Desert.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
      </div>

<!-- unlocked game map -->
      <div v-if="conditionalStore.worldMap.expandedMap" class="grid grid-cols-12 mx-10"> 
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/mountains/Mountains.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/mountains/Mountains.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>

          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_forest'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/forest/Forest.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_marshes'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/marshes/Marshes.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>

          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 -mr-28 mt-5 -mb-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 -ml-28 mt-5 -mb-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 -mr-28 mt-5 -mb-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 -ml-28 mt-5 -mb-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>

          <div class="flex justify-center"> 
              <router-link :to="'/map_grassland'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 -mr-16 mt-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/village'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/allpurpose/Thornstalk_Village.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 -ml-16 mt-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 -mr-16 mt-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/village'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/allpurpose/Thornstalk_Village.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 -ml-16 mt-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-36 w-36 mt-20 -mb-20 -ml-16 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>


          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center "> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 -mr-28 -mt-7 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center "> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center "> 
              <router-link :to="'/map_grassland'" class="group h-24 w-24 -ml-28 -mt-7 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/grassland/Grassland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 -mr-28 -mt-7 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-24 w-24 -ml-28 -mt-7 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>

          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_jungle'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/jungle/Jungle.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_swamp'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/swamp/Swamp.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center"> 
              <router-link :to="'/map_mountains'" class="group h-36 w-36 -mt-5 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>

          <div><p></p></div>
          <div class="flex justify-center mb-20"> 
              <router-link :to="'/map_desert'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/desert/Desert.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div class="flex justify-center mb-20"> 
              <router-link :to="'/map_desert'" class="group h-36 w-36 overflow-hidden rounded-full  border border-black">
                  <img src="../../assets/images/desert/Desert.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
              </router-link>
          </div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
          <div><p></p></div>
      </div>
  </div>
</template>

<script setup> 
  import { useConditionalsStore } from '@/stores/conditionals'

  const conditionalStore = useConditionalsStore();
</script>