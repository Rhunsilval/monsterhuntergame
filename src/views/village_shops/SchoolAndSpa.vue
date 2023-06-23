<template>
    <the-header></the-header>

<!-- the lobby -->
    <div v-if="inLobby" class="bg-[url('../assets/images/village_school/school_lobby.png')] bg-contain"> 
        <div class="flex justify-center pt-16">
            <div class="text-center w-1/2 bg-white bg-opacity-70 flex justify-center pb-3 px-10">
                <div class="pt-3">
                    <p class="font-extrabold font-serif text-7xl ">Matilda the Mage's </p>                
                    <p class="font-extrabold font-serif text-5xl mt-2 ">Magic School and Restorative Spa</p>                
                </div>             
            </div>        
        </div>
        <div class="flex justify-center">
            <div class="text-center w-1/3 bg-white bg-opacity-70 flex justify-center">
                <div class="pt-3 ">
                    <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>                     
                </div>             
            </div>        
        </div>
        <div class="flex justify-center"> 
            <div class="text-center w-1/3 bg-white bg-opacity-70 flex justify-center"> 
                <div class="mt-5 px-5 font-semibold"> 
                    <p class="text-2xl font-bold">Welcome to my establishment</p>
                    <p class="pt-3">If you're interested in magical training, the entry to my school is on the left.</p>
                    <p class="pt-3">If you need your magical energies restored, my spa services are available through the door on the right.</p>
                    <p class="py-3">If you have any questions, let me know.</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="w-1/3 bg-white bg-opacity-70 py-3">
                <div class="grid grid-cols-2 gap-5">
                    <div class="flex justify-end "> 
                        <router-link type="button" :to="'/village'" class="w-2/3 px-3 py-3 text-center bg-[#a6bf8e] hover:bg-green-100 border border-slate-600 rounded-lg">
                            Explore the Village</router-link>
                    </div>
                    <div> 
                        <router-link :to="'/map'" type="button" class="w-2/3 px-3 py-3 text-center bg-[#305c79] hover:bg-blue-200 border border-gray-600 rounded-lg text-gray-300 hover:text-black">
                            Hunt for Monsters</router-link>
                    </div>  
                </div>
            </div>
        </div>
        <div class="flex justify-center"> 
            <div class="w-1/3 bg-white bg-opacity-70 mb-10"> 
                <div class="grid grid-cols-2 gap-5 my-10 text-2xl font-serif font-bold">
                    <div class="ml-5"> 
                        <button @click="goToSchool" class="px-3 py-3 w-11/12 h-40 bg-[#efdecd] border border-gray-600 rounded-full">School of Magic</button>
                    </div>
                    <div class="flex justify-end mr-5"> 
                        <button @click="goToSpa" class="px-3 py-3 w-11/12 bg-[#add8e6] border border-gray-600 rounded-full">Magic Spa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- in school -->
    <div v-if="inschool" class="bg-[url('../assets/images/village_school/school_library.png')] bg-contain"> 
        <div class="flex justify-center pt-16">
            <div class="text-center w-1/2 bg-white bg-opacity-70 flex justify-center pb-3 px-10">
                <div class="pt-3">
                    <p class="font-extrabold font-serif text-7xl ">Matilda the Mage's </p>                
                    <p class="font-extrabold font-serif text-5xl mt-2 ">School of Magic</p>
                </div>             
            </div>        
        </div>
        <div class="flex justify-center">
            <div class="text-center w-1/3 bg-white bg-opacity-70 flex justify-center pb-10">
                <div class="pt-3 ">
                    <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>                     
                </div>             
            </div>        
        </div>
    </div>

    <div v-if="inSpa" class="bg-[url('../assets/images/village_school/school_spa.png')] bg-contain"> 
        <div class="flex justify-center pt-16">
            <div class="text-center w-1/2 bg-white bg-opacity-70 flex justify-center pb-3 px-10">
                <div class="pt-3">
                    <p class="font-extrabold font-serif text-7xl ">Matilda the Mage's </p>                
                    <p class="font-extrabold font-serif text-5xl mt-2 ">Restorative Spa</p>
                </div>             
            </div>        
        </div>
        <div class="flex justify-center">
            <div class="text-center w-1/3 bg-white bg-opacity-70 flex justify-center pb-10">
                <div class="pt-3 ">
                    <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>                     
                </div>             
            </div>        
        </div>
    </div>

</template>

<script setup> 
    import { ref } from 'vue'

    const inLobby = ref(true);
    const inschool = ref(false);
    const inSpa = ref(false);

    function goToSchool() {
        inLobby.value = false;
        inschool.value = true;
    }
    function goToSpa() {
        inLobby.value = false;
        inSpa.value = true;
    }

</script>