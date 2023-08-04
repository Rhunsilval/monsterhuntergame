<template>
    <the-header></the-header>

    <div class="bg-[url('../assets/images/allpurpose/map.png')]"> 
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pb-48"> 
            <div class="relative mx-auto max-w-7xl px-4 -mt-20 sm:static"> 
                <div class=" bg-[#D2B48C] px-16 rounded-3xl border border-[#305c79]" >
                    <h1 class="font text-4xl font-bold tracking-tight text-[#305c79] sm:text-6xl text-center">World Map</h1>
                    <p class="mt-2 text-gray-700 text-center">Welcome, hunter! <br/> Danger, adventure, and fortune await you! <br/> Want a good story to tell at the village pub?</p>
                    <p class="my-2 text-center text-[#305c79] font-bold text-3xl">Click on an environment and good luck!</p>
                </div>                
            </div>
        </div>
        <div class="grid grid-cols-3 mx-10"> 

            <div class="flex justify-center mb-20 border border-green-500"> 
                <router-link :to="'/map_forest'" class="group h-44 w-44 overflow-hidden rounded-full  border border-black">
                    <img src="../../assets/images/forest/Forest.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                </router-link>
                <p class="text-xl text-white -ml-36 mt-16 h-10 opacity-0 hover:opacity-100">Black Forest</p>
            </div>

            <div class="flex justify-center mb-20 border border-red-500">

                <router-link :to="'/village'" class="-mt-20 -mr-44 h-20 w-20 overflow-hidden rounded-full  border border-green-500">
                    <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                </router-link>
                <router-link :to="'/village'" class="-mt-12 -mr-28 h-20 w-20 overflow-hidden rounded-full  border border-black">
                    <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                </router-link>
                <router-link :to="'/village'" class="mt-9 h-20 w-20 overflow-hidden rounded-full  border border-red-500">
                    <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                </router-link>               
                <router-link :to="'/village'" class="-mt-12 ml-36 h-20 w-20 overflow-hidden rounded-full  border border-blue-500">
                    <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                </router-link>               

                <router-link :to="'/village'" class="-ml-56 h-44 w-44 overflow-hidden rounded-full  border border-black">
                    <img src="../../assets/images/allpurpose/Thornstalk_Village.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                </router-link>

                <div class="-ml-2"> 
                    <p class="text-xl text-white -ml-40 mt-16 h-10 opacity-0 hover:opacity-100">Thornstalk Village</p>
                </div>

                <router-link :to="'/village'" class="ml-2 mt-9 h-20 w-20 overflow-hidden rounded-full  border border-black">
                    <img src="../../assets/images/farmland/Farmland.png" alt="" class="h-full w-full object-cover object-center hover:opacity-50 " />
                </router-link>


                
            </div>
            <div class="flex justify-center mb-20 border border-blue-500"> 

            </div>
        </div>

    </div>
</template>