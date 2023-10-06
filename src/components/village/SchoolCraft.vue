<template>
    <div class="flex justify-center">
        <div v-if="!makingItem" class="bg-white bg-opacity-70 w-3/4 rounded-3xl">
            <div class="flex justify-center mt-5">
                <div class="bg-white bg-opacity-70 w-3/4 rounded-full">
                    <div class="flex justify-center mt-5"> 
                        <img src="../../assets/images/village_school/school_teacher.png" alt="" class=" mt-5 h-56 w-56 border border-black mx-2"/>
                        <img src="../../assets/images/village_blacksmith/Blacksmith_Shopkeeper.png" alt="" class="mt-5 h-56 w-56 border border-black mx-2"/>
                    </div>
                    <div v-if="welcomeScript" class="flex justify-center"> 
                        <div class="grid grid-cols-1 text-center py-5 px-5"> 
                            <div> 
                                <p class="text-xl">Welcome, dear Student.</p> 
                            </div>
                            <div> 
                                <p>Let's see what we can teach you today.</p>
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
                            <!-- disabled until I can think of scripts -->
                            <!-- <div class=" flex justify-center">
                                <button type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                    Ask a Question</button>
                            </div> -->
                            <div class="flex justify-center mt-2">
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
            </div>

            <div class="grid grid-cols-2">

                <div class="grid grid-cols-1 bg-white bg-opacity-70 mt-12 mx-5 mb-5"> 
                    <div class="flex justify-center text-center mt-5"> 
                        <h1 class=" font-bold text-7xl text-gray-500 px-5 py-5">Magic Items Crafting Class</h1>
                    </div>
                    <div class="mx-3 mb-3 grid grid-cols-2 gap-x-5"> 
                        <button
                            type="button"
                            v-for="lesson in availableItemsLessons"
                            @click="checkIntel(lesson.id)"
                            :key="lesson.id" 
                            class=" border border-gray-500 rounded-3xl px-2 py-2 text-sm bg-slate-200"
                        >
                            <h3 class="text-2xl font-bold font-serif text-blue-500">Learn to make <br/> a {{ lesson.id }}</h3>
                            <p class="mt-2">{{ lesson.L1 }}</p>
                            <p>{{ lesson.L2 }}</p>
                            <p class="text-xs my-2 text-red-800">*{{ lesson.L3 }}</p>
                            <p>Course requires a minimum of</p>
                            <p class="text-2xl font-bold font-serif text-blue-500">{{ lesson.intel }} Intelligence </p>
                            <p>to learn</p>
                            <p class="mt-2">Cost:</p>
                            <p class="text-2xl font-bold font-serif text-blue-500">{{ lesson.cost }} coin</p>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 bg-white bg-opacity-70 mt-12 mx-5 mb-5"> 
                    <div class="flex justify-center text-center mt-5"> 
                        <h1 class="font-bold text-7xl text-gray-500 px-5 py-5">Magic Crafting Workshop</h1>
                    </div>
                    <div class="mx-3 mb-3 grid grid-cols-4 gap-x-5"> 
                        <button
                            type="button"
                            @click="makeItem(item.id)"
                            v-for="item in availableItems"
                            :key="item.id" 
                            class=" border border-gray-500 rounded-3xl bg-slate-200 px-2 py-2"
                        >
                            <h3 class="font-bold font-serif text-blue-500">{{ item.id }}</h3>
                            <div class="flex justify-center mt-3"> 
                                <img :src="item.imageSrc" :alt="''" class="h-20 object-cover object-center border border-gray-300" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="makingItem" class="bg-white bg-opacity-70 w-3/4 rounded-3xl pb-12 mb-44">
            <school-craft-making
                :item="item"
                @emitComeBackLater="comeBackLater"
            ></school-craft-making>
        </div>
    </div>
</template>

<script setup> 
    import { ref, computed } from 'vue';
    // import { useConditionalsStore } from '@/stores/conditionals'
    import { usePlayerStore } from '@/stores/player';
    import { useCraftingStore } from '@/stores/crafting';
    import SchoolCraftMaking from './SchoolCraftMaking.vue';

    const emit = defineEmits([
            'emit-returnTo-Lobby',
    ]);
    function returnToSchool() {
        emit('emit-returnTo-School');
    }

    // const conditionalStore = useConditionalsStore();
    const playerStore = usePlayerStore();
    const craftingStore = useCraftingStore();

    const makingItem = ref(false);

    const welcomeScript = ref(true);
    const insufficientFunds = ref(false);
    const insufficientIntel = ref(false);

    const availableItemsLessons = computed(function() {
      let itemsList = craftingStore.itemsLessons;
      return (itemsList = itemsList.filter(item => item.available))
    })
    const availableItems = computed(function() {
        let itemsList = craftingStore.items;
        return (itemsList = itemsList.filter(item => item.learned))
    })

    // to know which lesson is being selected in the rendered playerPack array
    const chosenLessonId = ref('')
    const chosenLesson = computed(function() {
        return craftingStore.itemsLessons.find(item => item.id === chosenLessonId.value);
    })

    function checkIntel(id) {
        if (id === undefined) {
            console.log('chosen lesson = ' + id);
        }
        chosenLessonId.value = id;

        if (chosenLesson.value.intel > playerStore.playerIntelligence) {
            insufficientIntel.value = true;
        } else (checkFunds())
    }
    function checkFunds() {
        if (chosenLesson.value.cost > playerStore.coinOnHand) {
            insufficientFunds.value = true;
        } else (learnLesson())
    }
    function learnLesson() {
        let x = craftingStore.items.find(item => item.id === chosenLesson.value.id);
        playerStore.coinOnHand = (playerStore.coinOnHand - chosenLesson.value.cost);
        x.learned = true;
        chosenLesson.value.available = false;
    }

    const item = ref('')
    const chosenItemId = ref('');
    const chosenItem = computed(function() {
        return craftingStore.items.find(item => item.id === chosenItemId.value);
    })
    function makeItem(id){
        makingItem.value = true;
        if (id === undefined) {
            console.log('chosen item = ' + id);
        }
        chosenItemId.value = id;
        item.value = chosenItem.value.id
    }

    function comeBackLater() {
        makingItem.value = false;
    }
</script>