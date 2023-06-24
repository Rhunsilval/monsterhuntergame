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

        <div class="grid grid-cols-3">
            <div class="ml-5"> 
                <button @click="goToSchool" class="px-3 py-3 w-11/12 bg-[#efdecd] hover:bg-[url('../assets/images/village_school/school_button.png')] border border-gray-600 rounded-full h-full text-4xl font-serif font-semibold">
                    School of Magic</button>
            </div>

            <div>
                <div class="flex justify-center ">
                    <div class="text-center w-full bg-white bg-opacity-70 flex justify-center">
                        <div class="pt-3 ">
                            <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>                     
                        </div>             
                    </div>        
                </div>
                <div class="flex justify-center"> 
                    <div class="text-center w-full bg-white bg-opacity-70 flex justify-center"> 
                        <div class="mt-5 px-5 font-semibold"> 
                            <p class="text-2xl font-bold">Welcome to my establishment</p>
                            <p class="pt-3">If you're interested in magical training, the entry to my school is on the left.</p>
                            <p class="pt-3">If you need your magical energies restored, my spa services are available through the door on the right.</p>
                            <p class="py-3">If you have any questions, let me know.</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center"> 
                    <div class="w-full bg-white bg-opacity-70 flex justify-center">
                        <button class="px-3 py-3 border border-gray-600 rounded-md bg-[#7aa0bd] hover:bg-[#305c79] hover:text-white">
                            Speak with Matilda</button>
                    </div>
                </div>
                <div class="flex justify-center mb-10">
                    <div class="w-full bg-white bg-opacity-70 py-3">
                        <div class="grid grid-cols-2 gap-5 pb-3">
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
            </div>
            <div class="flex justify-end mr-5"> 
                <button @click="goToSpa" class="px-3 py-3 w-11/12 bg-[#add8e6] hover:bg-[url('../assets/images/village_school/spa_button.png')] hover:text-white border border-gray-600 rounded-full text-4xl font-serif font-semibold">
                    Restorative Spa</button>
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
        <div class="flex justify-center"> 
            <div class="w-1/3 bg-white bg-opacity-70 flex justify-center">
                <button class="px-3 py-3 border border-gray-600 rounded-md bg-[#7aa0bd] hover:bg-[#305c79] hover:text-white">
                    Speak with Matilda</button>
            </div>
        </div>
        <div class="flex justify-center"> 
            <div class="w-1/3 bg-white bg-opacity-70 flex justify-center py-3"> 
                <div class="grid grid-cols-1 pt-4"> 
                    <div class=" flex justify-center">
                        <button @click="returnToLobby" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Return to School Lobby</button>
                    </div>
                    <div class="relative flex self-center rounded-lg p-0.5 pb-10 mt-3">
                        <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Explore the Village</router-link>
                        <router-link :to="'/map'" type="button" class="relative ml-1 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Hunt for Monsters</router-link>
                    </div>
                </div>                
            </div>            
        </div>
        <div class="flex justify-center"> 
            <div class="w-1/3 bg-white bg-opacity-70 flex justify-center mb-5"> 
                <div class="grid grid-cols-2 gap-x-24  mb-10">
                    <div> 
                        <button class="px-3 py-3 h-36 w-36 border border-gray-600 rounded-full bg-slate-500 font-semibold hover:bg-slate-400">Learn Charms</button>
                    </div>
                    <div>
                        <button class="px-3 py-3 h-36 w-36 border border-gray-600 rounded-full bg-slate-500 font-semibold hover:bg-slate-400">Craft Items</button>
                    </div>
                </div>
            </div>
        </div>

    </div>


<!-- in SPA -->
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
        <div class="flex justify-center">
            <div class="w-1/3 bg-white bg-opacity-70 flex justify-center pb-10">
                <div class="pt-3 flex justify-center">
                    <p class="w-3/5 text-center text-xl">I offer a variety of hand-crafted, herbal soaks, each guaranteed to restore your exhausted mana. </p>                     
                </div>             
            </div>        
        </div>
        <div v-if="spaOptionsAvailable" class="flex justify-center">
            <div class="w-1/3 bg-white pt-5 flex justify-center pb-10">
                <div class="grid grid-cols-2 gap-x-12 gap-y-5 ">
                    <div> 
                        <button @click="simpleSoak" class="border border-slate-600 px-3 py-3 rounded-full bg-white hover:bg-black ">
                            <img src="../../assets/images/village_school/spa_package1.png" class="w-28 h-28 border border-slate-600 rounded-full " />
                        </button>
                        <div class="text-center font-serif w-32"> 
                            <p class="text-xl font-semibold">Simple Soak</p>
                            <p class="text-sm">Restores up to 25% worth of mana</p>
                            <p class="text-2xl font-bold">50 coins</p>
                        </div>                    
                    </div> 
                    <div> 
                        <button @click="freshSoak" class="border border-slate-600 px-3 py-3 rounded-full bg-white hover:bg-black">
                            <img src="../../assets/images/village_school/spa_package2.png" class="w-28 h-28 border border-slate-600 rounded-full " />
                        </button>
                        <div class="text-center font-serif w-32"> 
                            <p class="text-xl font-semibold">Fresh Soak</p>
                            <p class="text-sm">Restores up to 50% worth of mana</p>
                            <p class="text-2xl font-bold">100 coins</p>
                        </div>                    
                    </div> 
                    <div> 
                        <button @click="choiceSoak" class="border border-slate-600 px-3 py-3 rounded-full bg-white hover:bg-black">
                            <img src="../../assets/images/village_school/spa_package3.png" class="w-28 h-28 border border-slate-600 rounded-full " />
                        </button>
                        <div class="text-center font-serif w-32"> 
                            <p class="text-xl font-semibold">Choice Soak</p>
                            <p class="text-sm">Restores up to 75% worth of mana</p>
                            <p class="text-2xl font-bold">200 coins</p>
                        </div>                    
                    </div> 
                    <div> 
                        <button @click="deluxeSoak" class="border border-slate-600 px-3 py-3 rounded-full bg-white hover:bg-black">
                            <img src="../../assets/images/village_school/spa_package4.png" class="w-28 h-28 border border-slate-600 rounded-full " />
                        </button>
                        <div class="text-center font-serif w-32"> 
                            <p class="text-xl font-semibold">Deluxe Soak</p>
                            <p class="text-sm">Restores 100% of mana</p>
                            <p class="text-2xl font-bold">400 coins</p>
                        </div>                    
                    </div> 
                </div>
            </div>        
        </div>
        <div v-if="noFunds" class="flex justify-center"> 
            <div class="w-1/3 bg-white flex justify-center py-44  "> 
                <div class="text-center text-xl font-semibold font-serif"> 
                    <p class="text-4xl font-bold">Sorry, pal.</p>
                    <p>This is a business, not a charity</p>
                    <p>Come back when you have some coins.</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center"> 
            <div class="w-1/3 bg-white bg-opacity-70 flex justify-center py-3 mb-10"> 
                <div class="grid grid-cols-1 pt-4"> 
                    <div class=" flex justify-center">
                        <button @click="returnToLobby" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Return to School Lobby</button>
                    </div>
                    <div class="relative flex self-center rounded-lg p-0.5 pb-10 mt-3">
                        <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Explore the Village</router-link>
                        <router-link :to="'/map'" type="button" class="relative ml-1 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Hunt for Monsters</router-link>
                    </div>
                </div>                
            </div>            
        </div>
        



    </div>

</template>

<script setup> 
    import { ref } from 'vue'
    import { usePlayerStore } from '@/stores/player'

    const playerStore = usePlayerStore();
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
    function returnToLobby() {
        inLobby.value = true;
        inSpa.value = false;
        spaOptionsAvailable.value = true;
        noFunds.value = false;
        inschool.value = false;
    }

    const spaOptionsAvailable = ref(true)
    const noFunds = ref(false);
    function simpleSoak() {
        if (playerStore.coinOnHand - 50 < 0 ) {
            spaOptionsAvailable.value = false;
            noFunds.value = true;
        } else {
            playerStore.coinOnHand = playerStore.coinOnHand - 50;
            playerStore.playerActiveMana = playerStore.playerActiveMana + (playerStore.playerMana * .25);
        }
        if (playerStore.playerActiveMana > playerStore.playerMana) {
            playerStore.playerActiveMana = playerStore.playerMana;
        } else (playerStore.playerActiveMana)
    }
    function freshSoak() {
        if (playerStore.coinOnHand - 100 < 0 ) {
            spaOptionsAvailable.value = false;
            noFunds.value = true;
        } else {
            playerStore.coinOnHand = playerStore.coinOnHand - 100;
            playerStore.playerActiveMana = playerStore.playerActiveMana + (playerStore.playerMana * .5);
        }        
        if (playerStore.playerActiveMana > playerStore.playerMana) {
            playerStore.playerActiveMana = playerStore.playerMana;
        } else (playerStore.playerActiveMana)
    }
    function choiceSoak() {
        if (playerStore.coinOnHand - 200 < 0 ) {
            spaOptionsAvailable.value = false;
            noFunds.value = true;
        } else {
            playerStore.coinOnHand = playerStore.coinOnHand - 200;
            playerStore.playerActiveMana = playerStore.playerActiveMana + (playerStore.playerMana * .75);
        }        
        if (playerStore.playerActiveMana > playerStore.playerMana) {
            playerStore.playerActiveMana = playerStore.playerMana;
        } else (playerStore.playerActiveMana)
    }
    function deluxeSoak() {
        if (playerStore.coinOnHand - 400 < 0 ) {
            spaOptionsAvailable.value = false;
            noFunds.value = true;
        } else {
            playerStore.coinOnHand = playerStore.coinOnHand - 400;
            playerStore.playerActiveMana = playerStore.playerMana;
        }        
        if (playerStore.playerActiveMana > playerStore.playerMana) {
            playerStore.playerActiveMana = playerStore.playerMana;
        } else (playerStore.playerActiveMana)
    }

</script>