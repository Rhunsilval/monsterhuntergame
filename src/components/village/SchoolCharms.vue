<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-3 bg-white bg-opacity-70">

            <div class="grid grid-cols-1 ">
                <div class="text-center my-3 flex justify-center"> 
                    <p class="text-2xl font-serif bg-white pt-5 pb-2 mt-5 w-3/4">Healing Charms:</p>
                </div>
                <div class="mx-3">
                    <button class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_magic/Magic_book_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Lesser Healing charm</p>
                                <p>Used in battle</p>
                                <p>Heals between 10 and 25 points, using 1-5 mana</p>
                                <p>Cost: <br/> 100 coin</p>
                                <p>Minimum Intelligence to learn: <br/> 1</p>
                            </div>                            
                        </div>                        
                    </button>
                </div>

                <div class="text-center my-3 "> 
                    <p class="text-2xl font-serif">Attack Charms:</p>
                </div>
                <div class="mx-3">
                    <button class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_magic/Magic_book_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Lesser Healing charm</p>
                                <p>Used in battle</p>
                                <p>Heals between 10 and 25 points, using 1-5 mana</p>
                                <p>Cost: <br/> 100 coin</p>
                                <p>Minimum Intelligence to learn: <br/> 1</p>
                            </div>                            
                        </div>                        
                    </button>                     
                </div>
                
            </div>

            <div class="grid grid-cols-1 bg-white bg-opacity-70 mt-20"> 
                <div class="flex justify-center mt-5"> 
                    <h1 class=" font-bold text-7xl text-gray-500 px-5 py-5">Charm School</h1>
                </div> 
                <div class="flex justify-center mt-5"> 
                    <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>
                </div>
                <div class="flex justify-center"> 
                    <div class="grid grid-cols-1 text-center mt-5 py-5 px-5"> 
                        <div> 
                            <p class="text-xl">Welcome, dear Student.</p> 
                        </div>
                        <div> 
                            <p>Let's see what I can teach you today.</p>
                        </div>                    
                    </div>                
                </div>            
                <div class="flex justify-center"> 
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

            <div class="grid grid-cols-1"> 
                <div class="text-center my-3 "> 
                    <p class="text-2xl font-serif">Luck Charms:</p>
                </div>
                <div class="mx-3">
                    <button class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_magic/Magic_book_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Lesser Healing charm</p>
                                <p>Used in battle</p>
                                <p>Heals between 10 and 25 points, using 1-5 mana</p>
                                <p>Cost: <br/> 100 coin</p>
                                <p>Minimum Intelligence to learn: <br/> 1</p>
                            </div>                            
                        </div>                        
                    </button>                     
                </div>

                <div class="text-center my-3 "> 
                    <p class="text-2xl font-serif">Defense Charms:</p>
                </div>
                <div class="mx-3">
                    <button class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_magic/Magic_book_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Lesser Healing charm</p>
                                <p>Used in battle</p>
                                <p>Heals between 10 and 25 points, using 1-5 mana</p>
                                <p>Cost: <br/> 100 coin</p>
                                <p>Minimum Intelligence to learn: <br/> 1</p>
                            </div>                            
                        </div>                        
                    </button>                     
                </div>
            </div>
        <div class="h-32 mb-20 "></div>
        </div>
        
    </div>
</template>

<script setup> 
    const emit = defineEmits([
            'emit-returnTo-Lobby',
    ])
    function returnToLobby() {
        emit('emit-returnTo-Lobby');
    }

</script>