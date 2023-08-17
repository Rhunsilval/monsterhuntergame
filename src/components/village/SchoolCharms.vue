<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-3 bg-white bg-opacity-70">

            <div class="grid grid-cols-1 ">
                <div class="text-center my-3 flex justify-center"> 
                    <p class="text-2xl font-serif bg-white pt-5 pb-2 mt-5 w-3/4 rounded-full">Healing Charms:</p>
                </div>
                <div v-if="conditionalStore.matildaSchool.healing1CharmAvailable" class="mx-3">
                    <button @click="attemptBuyHealing1Charm" class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/healing_charm_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Lesser Healing charm</p>
                                <p>Charm can be used in battle</p>
                                <p>Heals you between 10 and 25 points, using 1-5 mana</p>
                                <p>Cost to learn: </p>
                                <p class="text-xl font-bold text-blue-600">100 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 1</p>
                            </div>                            
                        </div>                        
                    </button>
                </div>
                <div v-if="conditionalStore.matildaSchool.healing2CharmAvailable" class="mx-3">
                    <button @click="attemptBuyHealing2Charm" class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/healing_charm_2.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Greater Healing charm</p>
                                <p>Charm can be used in battle</p>
                                <p>Heals 50% of your full health value, using 5-10 mana</p>
                                <p>Cost to learn: </p>
                                <p class="text-xl font-bold text-blue-600">1000 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 5</p>
                            </div>                            
                        </div>                        
                    </button>
                </div>
                <div v-if="conditionalStore.matildaSchool.healing3CharmAvailable" class="mx-3">
                    <button @click="attemptBuyHealing3Charm" class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/healing_charm_3.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Full Healing charm</p>
                                <p>Charm can be used in battle</p>
                                <p>Heals you to full health, using 1-15 mana</p>
                                <p>Cost to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 5000 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 10</p>
                            </div>                            
                        </div>
                    </button>
                </div>

                <div class="text-center my-3 flex justify-center "> 
                    <p class="text-2xl font-serif bg-white pt-5 pb-2 w-3/4 rounded-full">Attack Charms:</p>
                </div>
                <div v-if="conditionalStore.matildaSchool.attack1CharmAvailable" class="mx-3">
                    <button class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div @click="attemptBuyAttack1Charm" class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/attack_charm_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Lesser Attack charm</p>
                                <p>Charm can be used in battle</p>
                                <p>A charged attack that's available after at least 3 moves</p>
                                <p>Base hit between 10 and 25 points, using 1-20 mana</p>
                                <p>Cost: </p>
                                <p class="text-xl font-bold text-blue-600"> 100 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 1</p>
                            </div>                            
                        </div>
                    </button>                     
                </div>
                <div v-if="conditionalStore.matildaSchool.attack2CharmAvailable" class="mx-3">
                    <button @click="attemptBuyAttack2Charm" class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/attack_charm_2.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Vicious Attack charm</p>
                                <p>Charm can be used in battle</p>
                                <p>A charged attack that's available after at least 3 moves</p>
                                <p>Base hit between 20 and 40 points, using 1-15 mana</p>
                                <p>Cost: </p>
                                <p class="text-xl font-bold text-blue-600"> 1500 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 5</p>
                            </div>                            
                        </div>                        
                    </button>                     
                </div>
                <div v-if="conditionalStore.matildaSchool.attack3CharmAvailable" class="mx-3">
                    <button @click="attemptBuyAttack3Charm" class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/attack_charm_3.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Greater Attack charm</p>
                                <p>Charm can be used in battle</p>
                                <p>A charged attack that's available after at least 3 moves</p>
                                <p>Base hit between 30 and 80 points, using 1-10 mana</p>
                                <p>Cost: </p>
                                <p class="text-xl font-bold text-blue-600"> 7000 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 10</p>
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
                <div v-if="insufficicnetFunds" class="flex justify-center"> 
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

            <div class="grid grid-cols-1"> 
                <div class="text-center my-3 flex justify-center"> 
                    <p class="text-2xl font-serif bg-white pt-5 pb-2 mt-5 w-3/4 rounded-full">Luck Charms:</p>
                </div>
                <div class="mx-3">
                    <button class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/luck_charm_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Kinda Lucky charm</p>
                                <p>Works in the background</p>
                                <p>Not sure of the effect yet ... </p>
                                <p>Cost: </p>
                                <p class="text-xl font-bold text-blue-600"> 100 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 1</p>
                            </div>
                        </div>
                    </button>
                </div>

                <div class="text-center my-3 flex justify-center"> 
                    <p class="text-2xl font-serif bg-white pt-5 pb-2 w-3/4 rounded-full">Defense Charms:</p>
                </div>
                <div v-if="conditionalStore.matildaSchool.defense1CharmAvailable" class="mx-3">
                    <button class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div @click="attemptBuyDefense1Charm" class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/defense_charm_1.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Defense charm</p>
                                <p>A charm that offers constant background protection</p>
                                <p>Will reduce the strength of any attack against you by 10%</p>
                                <p>Will cost you 1 mana each time it's activated</p>
                                <p>Cost: </p>
                                <p class="text-xl font-bold text-blue-600"> 500 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 3</p>
                            </div>                            
                        </div>
                    </button>                     
                </div>
                <div v-if="conditionalStore.matildaSchool.defense2CharmAvailable" class="mx-3">
                    <button @click="attemptBuyDefense2Charm" class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/defense_charm_2.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Greater Defense charm</p>
                                <p>A charm that offers constant background protection</p>
                                <p>Will reduce the strength of any attack against you by 25%</p>
                                <p>Will cost you 1 mana each time it's activated</p>
                                <p>Cost: </p>
                                <p class="text-xl font-bold text-blue-600"> 3000 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 10</p>
                            </div>                            
                        </div>                        
                    </button>                     
                </div>
                <div v-if="conditionalStore.matildaSchool.defense3CharmAvailable" class="mx-3">
                    <button @click="attemptBuyDefense3Charm" class="bg-white border border-gray-500 hover:bg-gray-500 hover:opacity-50"> 
                        <div class="grid grid-cols-2"> 
                            <div class="flex justify-center"> 
                                <img src="../../assets/images/village_school/defense_charm_3.png" class="" />
                            </div>
                            <div class="mx-2 my-3"> 
                                <p class="text-2xl font-semibold">Valiant Defense charm</p>
                                <p>A charm that offers constant background protection</p>
                                <p>Will reduce the strength of any attack against you by 50%</p>
                                <p>Will cost you 1 mana each time it's activated</p>
                                <p>Cost: </p>
                                <p class="text-xl font-bold text-blue-600"> 8000 coin</p>
                                <p>Minimum Intelligence to learn: </p>
                                <p class="text-xl font-bold text-blue-600"> 14</p>
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
    import { ref } from 'vue';
    import { useConditionalsStore } from '@/stores/conditionals'
    import { usePlayerStore } from '@/stores/player';

    const emit = defineEmits([
            'emit-returnTo-Lobby',
    ]);
    function returnToSchool() {
        emit('emit-returnTo-School');
    }

    const conditionalStore = useConditionalsStore();
    const playerStore = usePlayerStore();
    const welcomeScript = ref(true);
    const insufficicnetFunds = ref(false);
    const insufficientIntel = ref(false);


    function attemptBuyHealing1Charm() {
        if (playerStore.coinOnHand - 100 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyHealing1CharmIntel();
        }
    }
    function checkBuyHealing1CharmIntel() {
        if (playerStore.playerIntelligence < 1) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyHealing1Charm();
        }
    }
    function buyHealing1Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 100);
        conditionalStore.matildaSchool.healing1CharmAvailable = false;
        conditionalStore.matildaSchool.healing2CharmAvailable = true;
        conditionalStore.monsterFighter.healingCharmAvailable = true;
        playerStore.healing1Charm = true;
    }
    function attemptBuyHealing2Charm() {
        if (playerStore.coinOnHand - 1000 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyHealing2CharmIntel();
        }
    }
    function checkBuyHealing2CharmIntel() {
        if (playerStore.playerIntelligence < 5) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyHealing2Charm();
        }
    }
    function buyHealing2Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 1000);
        conditionalStore.matildaSchool.healing2CharmAvailable = false;
        conditionalStore.matildaSchool.healing3CharmAvailable = true;
        playerStore.healing1Charm = false;
        playerStore.healing2Charm = true;
    }
    function attemptBuyHealing3Charm() {
        if (playerStore.coinOnHand - 5000 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyHealing3CharmIntel();
        }
    }
    function checkBuyHealing3CharmIntel() {
        if (playerStore.playerIntelligence < 10) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyHealing3Charm();
        }
    }
    function buyHealing3Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 5000);
        conditionalStore.matildaSchool.healing3CharmAvailable = false;
        playerStore.healing2Charm = false;
        playerStore.healing3Charm = true;
    }

    function attemptBuyAttack1Charm() {
        if (playerStore.coinOnHand - 100 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyAttack1CharmIntel();
        }
    }
    function checkBuyAttack1CharmIntel() {
        if (playerStore.playerIntelligence < 1) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyAttack1Charm();
        }
    }
    function buyAttack1Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 100);
        conditionalStore.matildaSchool.attack1CharmAvailable = false;
        conditionalStore.matildaSchool.attack2CharmAvailable = true;
        conditionalStore.monsterFighter.attackCharmAvailalbe = true;
        playerStore.attack1Charm = true;
    }
    function attemptBuyAttack2Charm() {
        if (playerStore.coinOnHand - 1500 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyAttack2CharmIntel();
        }
    }
    function checkBuyAttack2CharmIntel() {
        if (playerStore.playerIntelligence < 5) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyAttack2Charm();
        }
    }
    function buyAttack2Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 1500);
        conditionalStore.matildaSchool.attack2CharmAvailable = false;
        conditionalStore.matildaSchool.attack3CharmAvailable = true;
        playerStore.attack1Charm = false;
        playerStore.attack2Charm = true;
    }
    function attemptBuyAttack3Charm() {
        if (playerStore.coinOnHand - 7000 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyAttack3CharmIntel();
        }
    }
    function checkBuyAttack3CharmIntel() {
        if (playerStore.playerIntelligence < 10) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyAttack3Charm();
        }
    }
    function buyAttack3Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 7000);
        conditionalStore.matildaSchool.attack3CharmAvailable = false;
        playerStore.attack2Charm = false;
        playerStore.attack3Charm = true;
    }

    function attemptBuyDefense1Charm() {
        if (playerStore.coinOnHand - 500 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyDefense1CharmIntel();
        }
    }
    function checkBuyDefense1CharmIntel() {
        if (playerStore.playerIntelligence < 3) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyDefense1Charm();
        }
    }
    function buyDefense1Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 500);
        conditionalStore.matildaSchool.defense1CharmAvailable = false;
        conditionalStore.matildaSchool.defense2CharmAvailable = true;
        conditionalStore.monsterFighter.defenseCharmAvailable = true;
        playerStore.defense1Charm = true;
    }
    function attemptBuyDefense2Charm() {
        if (playerStore.coinOnHand - 3000 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyDefense2CharmIntel();
        }
    }
    function checkBuyDefense2CharmIntel() {
        if (playerStore.playerIntelligence < 10) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyDefense2Charm();
        }
    }
    function buyDefense2Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 3000);
        conditionalStore.matildaSchool.defense2CharmAvailable = false;
        conditionalStore.matildaSchool.defense3CharmAvailable = true;
        playerStore.defense1Charm = false;
        playerStore.defense2Charm = true;
    }
    function attemptBuyDefense3Charm() {
        if (playerStore.coinOnHand - 8000 < 0 ) {
            welcomeScript.value = false;
            insufficicnetFunds.value = true;
        } else {
            checkBuyDefense3CharmIntel();
        }
    }
    function checkBuyDefense3CharmIntel() {
        if (playerStore.playerIntelligence < 14) {
            welcomeScript.value = false;
            insufficientIntel.value = true;
        } else {
            buyDefense3Charm();
        }
    }
    function buyDefense3Charm() {
        playerStore.coinOnHand = (playerStore.coinOnHand - 8000);
        conditionalStore.matildaSchool.defense3CharmAvailable = false;
        playerStore.defense2Charm = false;
        playerStore.defense3Charm = true;
    }

</script>