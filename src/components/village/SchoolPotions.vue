<template>
    <div class="flex justify-center">
        <div class="bg-white bg-opacity-70 w-3/4"> 
            <div class="grid grid-cols-2">

            <div class="grid grid-cols-1 bg-white bg-opacity-70 mt-20 mx-5"> 
                <div class="flex justify-center text-center mt-5"> 
                    <h1 class=" font-bold text-7xl text-gray-500 px-5 py-5">Potions Making Class</h1>
                </div> 
                <div class="flex justify-center mt-5"> 
                    <img src="../../assets/images/village_school/school_teacher.png" alt="" class="h-56 w-56 border border-black"/>
                </div>
                <div v-if="welcomeScript" class="flex justify-center"> 
                    <div class="grid grid-cols-1 text-center mt-5 py-5 px-5"> 
                        <div> 
                            <p class="text-xl">Welcome, dear Student.</p> 
                        </div>
                        <div> 
                            <p>Let's see what I can teach you today.</p>
                        </div>                    
                    </div>                
                </div>            
                <div v-if="insufficientFunds" class="flex justify-center"> 
                    <div class="grid grid-cols-1 text-center mt-5 py-5 px-5"> 
                        <div> 
                            <p class="text-xl">I may be passionate about teaching, <br/> but I don't do it for free.</p> 
                        </div>
                        <div class="mt-5"> 
                            <p>Please come back when you can afford the lesson fee.</p>
                        </div>                    
                    </div>                
                </div>            
                <div v-if="insufficientIntel" class="flex justify-center"> 
                    <div class="grid grid-cols-1 text-center mt-5 py-5 px-5"> 
                        <div> 
                            <p class="text-xl">You're not yet ready to learn this charm.</p> 
                        </div>
                        <div> 
                            <p>Study some more. <br/> Invest in your mind. <br/> And we can try again later.</p>
                        </div>                    
                    </div>                
                </div>            
                <div class="flex justify-center"> 
                    <div class="grid grid-cols-1 pt-4"> 
                        <div class=" flex justify-center">
                            <button @click="returnToSchool" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                Return to School</button>
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

            <div class="grid grid-cols-1 bg-white bg-opacity-70 mt-20 mx-5"> 
                <div class="flex justify-center text-center mt-5"> 
                    <h1 class="font-bold text-7xl text-gray-500 px-5 py-5">Potions Making Lab</h1>
                </div>
            </div>

            </div>
        </div>
    </div>
</template>

<script setup> 
    import { ref } from 'vue';
    // import { useConditionalsStore } from '@/stores/conditionals'
    // import { usePlayerStore } from '@/stores/player';

    const emit = defineEmits([
            'emit-returnTo-Lobby',
    ]);
    function returnToSchool() {
        emit('emit-returnTo-School');
    }

    // const conditionalStore = useConditionalsStore();
    // const playerStore = usePlayerStore();
    const welcomeScript = ref(true);
    const insufficientFunds = ref(false);
    const insufficientIntel = ref(false);
</script>