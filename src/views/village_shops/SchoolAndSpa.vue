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
                <button @click="goToSchool" class="px-3 py-3 w-11/12 bg-[#efdecd] hover:bg-[url('../assets/images/village_school/school_button.png')] bg-cover border border-gray-600 rounded-full h-full text-4xl font-serif font-semibold">
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
                            <!-- <p class="py-3">If you have any questions, let me know.</p> -->
                        </div>
                    </div>
                </div>
                <!-- doesn't yet do anything? -->
                <!-- <div class="flex justify-center"> 
                    <div class="w-full bg-white bg-opacity-70 flex justify-center">                        
                        <button class="px-3 py-3 border border-gray-600 rounded-md bg-[#7aa0bd] hover:bg-[#305c79] hover:text-white">
                            Speak with Matilda</button>
                    </div>
                </div> -->
                <div class="flex justify-center mb-40 ">
                    <div class="w-full bg-white bg-opacity-70 py-3">
                        <div class="grid grid-cols-2 gap-5 pb-3">
                            <div class="flex justify-end "> 
                                <router-link type="button" :to="'/village'" class="w-2/3 h-12 px-3 py-3 text-center bg-[#a6bf8e] hover:bg-green-100 border border-slate-600 rounded-lg">
                                    Explore the Village</router-link>
                            </div>
                            <div> 
                                <router-link :to="'/map'" type="button" class="w-2/3 h-12 px-3 py-3 text-center bg-[#305c79] hover:bg-blue-200 border border-gray-600 rounded-lg text-gray-300 hover:text-black">
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
        <div class="pb-28 "></div>
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
    <!-- if schooling not unlocked -->
        <div v-if="!workOnQuest">
            <div v-if="conditionalStore.matildaSchool.questCompleted === false">
                <div class="flex justify-center">
                    <div class="text-center w-1/3 bg-white bg-opacity-70 flex justify-center pb-10">
                        <div class="pt-3 ">
                            <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>                     
                        </div>
                    </div>        
                </div>
                <div class="flex justify-center"> 
                    <div class="w-1/3 bg-white bg-opacity-70 flex justify-center">
                        <button @click="speakToMatildaSchool" class="px-3 py-3 border border-gray-600 rounded-md bg-[#7aa0bd] hover:bg-[#305c79] hover:text-white">
                            Speak with Matilda</button>
                    </div>
                </div>
                <div v-if="matildaQuest.active" class="flex justify-center"> 
                    <div class="w-1/3 bg-white bg-opacity-70 flex justify-center pt-4">
                        <button @click="attemptCompleteQuest" class="px-3 py-3 border border-gray-600 rounded-md bg-[#7aa0bd] hover:bg-[#305c79] hover:text-white">
                            Complete the Quest</button>
                    </div>
                </div>
                <div class="flex justify-center"> 
                    <div class="w-1/3 bg-white bg-opacity-70 flex justify-center py-3"> 
                        <div class="grid grid-cols-1 pt-4"> 
                            <div class=" flex justify-center">
                                <button @click="returnToLobby" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                    Return to Lobby</button>
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
                <!-- gives visual framing to bottom of screen if school class options not yet activated -->
                <div class="flex justify-center"> 
                    <div class="w-1/3 bg-white bg-opacity-70 flex justify-center mb-52 "></div>
                </div>
            </div>
        </div>
<!-- if schooling unlocked -->
        <div v-if="conditionalStore.matildaSchool.questCompleted === true"> 
            <div class="flex justify-center">
                <div class="text-center w-1/3 bg-white bg-opacity-70 flex justify-center pb-10">
                    <div class="pt-3 ">
                        <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>                     
                    </div>
                </div>        
            </div>
            <div class="flex justify-center"> 
                <div class="w-1/3 bg-white bg-opacity-70 flex justify-center">
                    <button @click="speakToMatildaSchool" class="px-3 py-3 border border-gray-600 rounded-md bg-[#7aa0bd] hover:bg-[#305c79] hover:text-white">
                        Speak with Matilda</button>
                </div>
            </div>
            <div class="flex justify-center"> 
                <div class="w-1/3 bg-white bg-opacity-70 flex justify-center py-3"> 
                    <div class="grid grid-cols-1 pt-4"> 
                        <div class=" flex justify-center">
                            <button @click="returnToLobby" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                Return to Lobby</button>
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
    <!-- school class options -->
            <div class="flex justify-center"> 
                <div class="w-1/3 bg-white bg-opacity-70 flex justify-center mb-5"> 
                    <div class="grid grid-cols-3 gap-x-24 mb-10 ">
                        <div class="ml-8"> 
                            <button @click="startCharmSchool" class="px-3 py-3 h-36 w-36 border border-gray-600 rounded-full bg-slate-500 font-semibold hover:bg-slate-400">
                                Learn Charms</button>
                        </div>
                        <div>
                            <button @click="startCraftSchool" class="px-3 py-3 h-36 w-36 border border-gray-600 rounded-full bg-slate-500 font-semibold hover:bg-slate-400">
                                Craft Items</button>
                        </div>
                        <div class="-ml-8">
                            <button @click="startPotionSchool" class="px-3 py-3 h-36 w-36 border border-gray-600 rounded-full bg-slate-500 font-semibold hover:bg-slate-400">
                                Craft Potions</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!-- for completing the quest -->
        <div v-if="workOnQuest" class="flex justify-center"> 
            <div class="w-1/3 bg-white bg-opacity-70 flex justify-center mb-52"> 
                <quest-rendering
                    :quest="quest"
                    @emit-quest-complete="questComplete"
                    @emit-leave-quest="leaveQuest"
                ></quest-rendering>
            </div>
        </div>    
            
<!-- speak with teacher dialog modal display -->
        <TransitionRoot as="template" :show="openDialogModal">
            <Dialog as="div" class="relative z-10" @close="openDialogModal = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div class="mx-auto flex items-center justify-center rounded-full bg-green-100">
                                        <img src="../../assets/images/village_school/school_teacher.png" alt="" class="border border-gray-800 h-72 " aria-hidden="true" />
                                    </div>                
                        <!-- intro dialog -->
                                    <div v-if="introDialog" class="mt-3 text-center sm:mt-5">
                                        <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Welcome, Hunter</DialogTitle>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">How can I help you?</p>
                                        </div>
                                    </div>
                                    <div v-if="conditionalStore.matildaSchool.questNeedsStarting === true">
                                        <div v-if="introDialog2" class="mt-3 text-center sm:mt-5">
                                            <DialogTitle as="h3" class="text-xl font-medium leading-6 text-gray-900">Hmmm.</DialogTitle>
                                            <div class="mt-2 text-sm text-gray-500 ">
                                                <p class="">Maybe.</p>
                                                <p class="">But I don't know you.</p>
                                                <p class="">I don't accept just anyone who walks in, you know.</p>
                                                <p class="">I'm only interested in investing my time in serious students.</p>
                                            </div>
                                        </div>
                                        <div v-if="introDialog3" class="mt-3 text-center sm:mt-5">
                                            <DialogTitle as="h3" class="text-xl font-medium leading-6 text-gray-900">Perhaps.</DialogTitle>
                                            <div class="mt-2 text-sm text-gray-500 ">
                                                <p class="">There's something about you that makes me want to believe you.</p>
                                                <p class="">But I need proof.</p>
                                            </div>
                                        </div>
                                        <div v-if="introDialog4" class="mt-3 text-center sm:mt-5">
                                            <DialogTitle as="h3" class="text-xl font-medium leading-6 text-gray-900">I propose a quest.</DialogTitle>
                                            <div class="mt-2 text-sm text-gray-500 ">
                                                <p class="">Bring me 3 Sacred Spores from the Mushroom Spirits of the Black Forest</p>
                                                <p class="">Prove yourself as a capable hunter,</p>
                                                <p class="">and as an obedient student,</p>
                                                <p class="">and I'll let you enroll.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>              
                        <!-- buttons -->
                                <div class="mt-5 ">
                                    <div class=" pb-4">
                        <!-- intro buttons -->
                                        <div v-if="conditionalStore.matildaSchool.questNeedsStarting === true">
                                            <div v-if="introButton" class="flex justify-center">             
                                                <button @click="introDialog = false, introDialog2 = true, introButton = false, introButton2 = true" type="button" class="mt-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm">
                                                    I'd like to enroll in your school?</button>
                                            </div>                                
                                            <div v-if="introButton2" class="flex justify-center"> 
                                                <div class="grid grid-cols-2 gap-x-3"> 
                                                    <div class="flex justify-end"> 
                                                        <button @click="introDialog2 = false, introDialog3 = true, introButton2 = false, introButton3 = true" type="button" class="mt-3 px-4 py-2 w-2/3 border border-gray-300 rounded-md bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            But I am a serious student!</button>
                                                    </div>
                                                    <div> 
                                                        <button @click="nevermindThen" type="button" class="mt-3 px-4 py-2 w-2/3 border border-gray-300 rounded-md bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Oh.  Nevermind then.</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="introButton3" class="flex justify-center"> 
                                                <div class="grid grid-cols-2 gap-x-3"> 
                                                    <div class="flex justify-end"> 
                                                        <button @click="introDialog3 = false, introDialog4 = true, introButton3 = false, introButton4 = true" type="button" class="w-4/5 mt-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            How can I prove myself?</button>
                                                    </div>
                                                    <div> 
                                                        <button @click="nevermindThen" type="button" class="w-4/5 mt-3 px-4 py-2 border border-gray-300 rounded-md bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Oh.  Nevermind then.</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="introButton4" class="flex justify-center"> 
                                                <div class="grid grid-cols-2 gap-x-3"> 
                                                    <div class="flex justify-end"> 
                                                        <button @click="acceptMatildaQuest" type="button" class="w-4/5 mt-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            I'll do it!</button>
                                                    </div>
                                                    <div> 
                                                        <button @click="nevermindThen" type="button" class="w-4/5 mt-3 px-4 py-2 border border-gray-300 rounded-md bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Oh.  Nevermind then.</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        <!-- close modal button -->
                                    <button @click="returnToSchool" type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-[#7aa0bd] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-[#305c79] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                                        Return</button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
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
                            Return to Lobby</button>
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

<!-- charm school active -->
    <div v-if="charmSchool" class="bg-[url('../assets/images/village_school/school_library.png')] bg-contain"> > 
        <school-charm
            @emit-return-to-school="returnToSchool2"
        ></school-charm>
    </div>

<!-- craft item school active -->
    <div v-if="craftItemSchool" class="bg-[url('../assets/images/village_school/school_library.png')] bg-contain"> > 
        <school-craft
            @emit-return-to-school="returnToSchool2"
        ></school-craft>
    </div>

<!-- potions school active -->
    <div v-if="craftPotionSchool" class="bg-[url('../assets/images/village_school/school_library.png')] bg-contain"> > 
        <school-potions
            @emit-return-to-school="returnToSchool2"
        ></school-potions>
    </div>

</template>

<script setup> 
    import { ref } from 'vue'
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import QuestRendering from '../../components/quests/QuestRendering.vue';
    import SchoolCharm from '../../components/village/SchoolCharms.vue';
    import SchoolPotions from '../../components/village/SchoolPotions.vue';
    import SchoolCraft from '../../components/village/SchoolCraft.vue';
    import { usePlayerStore } from '@/stores/player';
    import { useQuestStore } from '@/stores/quests';
    import { useConditionalsStore } from '@/stores/conditionals'

    const playerStore = usePlayerStore();
    const questStore = useQuestStore();
    const conditionalStore = useConditionalsStore();

// page navigation
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
        charmSchool.value = false;
        craftItemSchool.value = false;
        craftPotionSchool.value = false;
    }
    function returnToSchool2() {
        inLobby.value = false;
        inSpa.value = false;
        spaOptionsAvailable.value = true;
        noFunds.value = false;
        inschool.value = true;
        charmSchool.value = false;
        craftItemSchool.value = false;
        craftPotionSchool.value = false;
    }

// school conversations
    const schoolOptionsAvailable = ref(false);
    const openDialogModal = ref(false)
    const introDialog = ref(false);
    const introButton = ref(false);
    const introDialog2 = ref(false);
    const introButton2 = ref(false);
    const introDialog3 = ref(false);
    const introButton3 = ref(false);
    const introDialog4 = ref(false);
    const introButton4 = ref(false);

    function speakToMatildaSchool() {
        openDialogModal.value = true;
        if (schoolOptionsAvailable.value === false) {
            introDialog.value = true;
            introButton.value = true;
        }
    }
    function returnToSchool() {        //differs from nevermind in that it will have controls to reset ALL conversations, not just intros
        openDialogModal.value = false;
        introDialog.value = true;
        introDialog2.value = false;
        introDialog3.value = false;
        introDialog4.value = false;
        introButton.value = true;
        introButton2.value = false;
        introButton3.value = false;
        introButton4.value = false;
    }
    function nevermindThen() {         // available just in intros
        openDialogModal.value = false;
        introDialog.value = true;
        introDialog2.value = false;
        introDialog3.value = false;
        introDialog4.value = false;
        introButton.value = true;
        introButton2.value = false;
        introButton3.value = false;
        introButton4.value = false;
    }

// Starting quest!
    const workOnQuest = ref(false);
    const quest = ref('');

    // not SUPER ideal - each quest will need its own set of commands and buttons 
    // fine here where there's just one quest.  but in the tavern and shops where i intend many possible quests
    // can get tedious?
    
    let matildaQuest = questStore.quests.find(quest => quest.id === 'matildaQuest');
    function acceptMatildaQuest() {
        openDialogModal.value = false;
        introDialog.value = true;
        introButton.value = true;
        introDialog4.value = false;
        introButton4.value = false;
        conditionalStore.matildaSchool.questNeedsStarting = false;
        conditionalStore.matildaSchool.questInProgress = true;
        quest.value = 'matildaQuest';
        matildaQuest.active = true;
        playerStore.playerActiveQuests.push(matildaQuest);
    }    
    function attemptCompleteQuest() {
        quest.value = 'matildaQuest';
        workOnQuest.value = true;
    }
    function leaveQuest() {
        workOnQuest.value = false;
    }
    function questComplete() {
        workOnQuest.value = false;
        conditionalStore.matildaSchool.questInProgress = false;
        conditionalStore.matildaSchool.questCompleted = true;
    }
    
// spa sales
    const noFunds = ref(false);
    const spaOptionsAvailable = ref(true)
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

// school classes
    const charmSchool = ref(false);
    const craftItemSchool = ref(false);
    const craftPotionSchool = ref(false);
    function startCharmSchool() {
        inschool.value = false;
        charmSchool.value = true;
    }
    function startCraftSchool() {
        inschool.value = false;
        craftItemSchool.value = true;
    }
    function startPotionSchool() {
        inschool.value = false;
        craftPotionSchool.value = true;
    }

</script>