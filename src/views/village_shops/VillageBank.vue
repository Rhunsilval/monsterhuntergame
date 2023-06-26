<template>
    <the-header></the-header>

    <div class="bg-[url('../assets/images/allpurpose/bank_background.png')] bg-contain">
        <div class="flex justify-center"> 
            <div class="w-2/3 bg-white bg-opacity-70 flex justify-center mt-14"> 
                <h1 class="font-serif font-bold text-7xl py-10 text-center">The First-And-Only Village Bank</h1>
            </div>
        </div>
<!-- bank lobby -->
        <div v-if="inLobby" class="flex justify-center"> 
            <div class="w-2/3 bg-white bg-opacity-70"> 
                <div class="grid grid-cols-3">
                    <div> 
                        <div class="ml-10 -mr-10"> 
                            <img src="../../assets/images/allpurpose/arch.png" alt="" class="w-full rounded-3xl"/>
                            <div class="flex justify-center -mt-36"> 
                                <button @click="speakWithBanker" class="px-2 py-2 border border-gray-600 h-36 w-36 rounded-full font-serif font-semibold bg-white hover:bg-slate-400 "> 
                                    Speak with a Banker </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="mt-14">
                            <div class="pt-3 ">
                                <img src="../../assets/images/allpurpose/bank_banker.png" alt="" class="h-56 border border-black"/>                     
                            </div>             
                        </div>        
                    </div>
                    <div> 
                        <div class="mr-10 -ml-10"> 
                            <img src="../../assets/images/allpurpose/arch.png" alt="" class="w-full rounded-3xl"/>
                            <div v-if="openAccount" class="flex justify-center -mt-36"> 
                                <button class="px-2 py-2 border border-gray-600 h-36 w-36 rounded-full font-serif font-semibold bg-white hover:bg-slate-400 "> 
                                    Visit your Deposit Box</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div v-if="inLobby" class="flex justify-center "> 
            <div class="w-2/3 bg-white bg-opacity-70 flex justify-center text-center"> 
                <div class="grid grid-cols-1 pb-10">
                    <h1 class="text-2xl font-serif font-bold pt-10">Welcome, welcome!</h1>
                    <p>Have a drink!  Have a seat!</p>
                    <p>Tell me how I can help you today!</p>
                </div>  
            </div>
        </div>
        <div v-if="inLobby" class="flex justify-center pb-32"> 
            <div class="w-2/3 bg-white bg-opacity-70 flex justify-center"> 
                    <div class="relative flex self-center rounded-lg p-0.5 pb-10">
                        <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Explore the Village</router-link>
                        <router-link :to="'/map'" type="button" class="relative ml-1 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                            Hunt for Monsters</router-link>
                    </div>               
            </div>            
        </div> 

<!-- talk to banker -->
        <div v-if="talkToBanker" class="flex justify-center"> 
            <div class="w-2/3 bg-white bg-opacity-70 flex justify-center mb-44">
                <div class="grid grid-cols-1"> 
                    <div class="flex justify-center"> 
                        <img src="../../assets/images/allpurpose/bank_banker3.png" class="border border-gray-500" />
                    </div>
        <!-- new account -->
                    <div v-if="!openAccount" class="flex justify-center pt-5 pb-10"> 
                        <div class="grid grid-cols-1 text-center font-serif text-lg">
                            <div v-if="introText" class="grid grid-cols-1"> 
                                <p class="font-semibold text-2xl ">Well, hello there, my friend!</p>
                                <p>Good to see a new face around here!</p>
                                <p>Tell me, are you interested in opening an account with us today?</p>
                            </div>
                            <div v-if="introText2" class="grid grid-cols-1"> 
                                <p class="font-semibold text-2xl ">Excellent, excellent!</p>
                                <p>We here at the First-And-Only Village Bank pride ourselves</p>
                                <p>on our ability to safely store, protect, and invest in our customer's treasures.</p>
                                <p>Which, I'm sure, is something an up-and-coming Hunter such as yourself can appreciate!</p>
                                <p>Now, we have a lot of different options here for our customers <br/>when it comes to the SIZE of the storage safes we offer. </p>
                                <p>To someone like you, I recommend our standard, basic size, which is a guaranteed locked vault that can hold up to 50 items!</p>
                                <p class="font-semibold pt-3">Now, how does that sound?</p>
                            </div>
                            <div v-if="introText3" class="grid grid-cols-1"> 
                                <p class="font font-semibold text-2xl"> Wonderful!</p>
                                <p>Just pay a one-time 500 coin fee, and we'll get you set right up!</p>
                            </div>


                            <div v-if="introButton" class="pt-8 grid grid-cols-2 gap-x-6"> 
                                <button @click="accountSetup" class="px-2 py-2 border border-slate-500 rounded-3xl bg-emerald-400 hover:bg-emerald-800 hover:text-white font-bold text-2xl">
                                    Yes!</button>
                                <button @click="returnToLobby" class="px-2 py-2 border border-slate-500 rounded-3xl bg-stone-300 hover:bg-slate-400 text-sm font-light">
                                    Not today?</button>
                            </div>
                            <div v-if="introButton2" class="pt-8 grid grid-cols-2 gap-x-6"> 
                                <button @click="accountSetup2" class="px-2 py-2 border border-slate-500 rounded-3xl bg-emerald-400 hover:bg-emerald-800 hover:text-white font-bold text-2xl">
                                    Ummm ... okay!</button>
                                <button @click="returnToLobby2" class="px-2 py-2 border border-slate-500 rounded-3xl bg-stone-300 hover:bg-slate-400 text-sm font-light">
                                    Not today?</button>
                            </div>
                            <div v-if="introButton3" class="pt-8 grid grid-cols-2 gap-x-6"> 
                                <button @click="accountSetup3" class="px-2 py-2 border border-slate-500 rounded-3xl bg-emerald-400 hover:bg-emerald-800 hover:text-white font-bold text-2xl">
                                    Sure!</button>
                                <button @click="returnToLobby3" class="px-2 py-2 border border-slate-500 rounded-3xl bg-stone-300 hover:bg-slate-400 text-sm font-light">
                                    What!? No!</button>
                            </div>
                        </div>
                    </div>
                    <div v-if="openAccount" class="flex justify-center pt-5"> 
                        <div class="grid grid-cols-1 text-center font-serif text-lg">
                            <div class="grid grid-cols-1"> 
                                <p class="font-semibold text-2xl ">Welcome back, {{ playerStore.playerId }}!</p>
                                <p>Good to see you're still with us!</p>
                                <p>Can I interest you in a vault upgrade today?</p>
                            </div>

                        </div>
                    </div>
            <!-- nav buttons -->
                    <div v-if="openAccount" class="flex justify-center"> 
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
            <!-- upgrade options -->
                    <div v-if="openAccount" class="flex justify-center pb-16"> 
                        <div class="grid grid-cols-4 gap-x-4">  
                            <div v-for="item in vaultUpgrades" :key="item.id">
                                <button @click="upgradeVault(item.id)">
                                    <img :src="item.image" alt="" class="h-40 w-56 rounded-lg "/>
                                    <div class="text-center text-xl pt-2"> 
                                        <p>{{ item.description }}</p>
                                    </div>
                                    <div class="text-center text-2xl font-serif"> 
                                        <p>{{ item.price }} coin</p>
                                    </div> 
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- player vault -->
        <div v-if="visitVault" class="flex justify-center"> 
            <div class="w-2/3 bg-white bg-opacity-70 min-h-screen mb-32"> 
                <div class="flex justify-center"> 
                    <div class="grid grid-cols-2"> 
                        <div class="grid grid-cols-1 mt-20"> 
                            <div class=" flex justify-center h-20">
                                <button @click="returnToLobby" type="button" class="w-1/3 h-14 relative whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    Return to Lobby</button>
                            </div>
                            <div class="grid grid-cols-2 gap-5 pb-3 ">
                                <div class="flex justify-end "> 
                                    <router-link type="button" :to="'/village'" class="w-2/3 h-14 px-3 py-3 text-center text-sm font-semibold bg-[#a6bf8e] hover:bg-green-100 border border-slate-600 rounded-lg">
                                        Explore the Village</router-link>
                                </div>
                                <div> 
                                    <router-link :to="'/map'" type="button" class="w-2/3 h-14 px-3 py-3 text-center text-sm font-semibold bg-[#305c79] hover:bg-blue-200 border border-gray-600 rounded-lg text-gray-300 hover:text-black">
                                        Hunt for Monsters</router-link>
                                </div>  
                            </div>
                            <div class="grid grid-cols-2 gap-5 pb-3 ">
                                <div class="flex justify-end "> 
                                    <button class="h-28 w-28 rounded-full px-2 py-2 border border-gray-500 bg-white hover:bg-slate-400"> Make a Deposit</button>
                                </div>
                                <div> 
                                    <button class="h-28 w-28 rounded-full px-2 py-2 border border-gray-500 bg-white hover:bg-stone-400"> Make a Withdrawl</button>
                                </div>  
                            </div>
                            
                        </div>
                        <div> 
                            <img src="../../assets/images/allpurpose/vault.png" class="rounded-3xl w-11/12" />
                        </div>
                    </div>                    
                </div>

                <div class="flex justify-center mt-10"> 
                    <p>Item list</p>
                </div>
                

            </div>
        </div>

        
    </div>
</template>

<script setup> 
    import { ref, computed } from 'vue';
    import { usePlayerStore } from '@/stores/player'

    const playerStore = usePlayerStore();
    const inLobby = ref(false);
    const openAccount = ref(true);
    const talkToBanker = ref(false);
    const visitVault = ref(true);
    const insufficientFunds = ref(false);

    function speakWithBanker() {
        inLobby.value = false;
        talkToBanker.value = true;
    }
    function returnToLobby() {
        talkToBanker.value = false;
        inLobby.value = true;
    }

// set up an account    
    const introText = ref(true);
    const introText2 = ref(false);
    const introText3 = ref(false);

    const introButton = ref(true);
    const introButton2 = ref(false);
    const introButton3 = ref(false);

    function accountSetup() {
        introText.value = false;
        introText2.value = true;
        introButton.value = false;
        introButton2.value = true;
    }
    function accountSetup2() {
        introText2.value = false;
        introText3.value = true;
        introButton2.value = false;
        introButton3.value = true;
    }
    function accountSetup3 () {
        if (playerStore.coinOnHand - 500 < 0 ){
            insufficientFunds.value = true;
        } else {
            playerStore.coinOnHand = (playerStore.coinOnHand - 500);
            playerStore.playerBankLimit = 50;
            talkToBanker.value = false;
            visitVault.value = true;
            openAccount.value = true;
        }
    }
    function returnToLobby2() {
        introText.value = true;
        introButton.value = true;
        introText2.value = false;
        introButton2.value = false;
        talkToBanker.value = false;
        inLobby.value = true;
    }
    function returnToLobby3() {
        introText.value = true;
        introButton.value = true;
        introText3.value = false;
        introButton3.value = false;
        talkToBanker.value = false;
        inLobby.value = true;
    }

// vault upgrades:
    const vaultUpgrades = [
        {
            id: 'upgrade1',
            image: require('../../assets/images/allpurpose/100vault.png'),
            description: 'Vault holds 100 items',
            price: 1500,
            size: 100
        },
        {
            id: 'upgrade2',
            image: require('../../assets/images/allpurpose/200vault.png'),
            description: 'Vault holds 200 items',
            price: 3700,
            size: 200
        },
        {
            id: 'upgrade3',
            image: require('../../assets/images/allpurpose/500vault.png'),
            description: 'Vault holds 500 items',
            price: 8000,
            size: 500
        },
        {
            id: 'upgrade4',
            image: require('../../assets/images/allpurpose/1000vault.png'),
            description: 'Vault holds 1000 items',
            price: 10000,
            size: 1000
        },
    ];

    const chosenUpgradeId = ref('');
    const chosenUpgrade = computed(function() {
        return vaultUpgrades.find(product => product.id === chosenUpgradeId.value);
    })
    function upgradeVault(productId) {
        chosenUpgradeId.value = productId;
        if (playerStore.coinOnHand - chosenUpgrade.value.price < 0) {
            insufficientFunds.value = true;
        } else {
            playerStore.coinOnHand = (playerStore.coinOnHand - chosenUpgrade.value.price);
            playerStore.playerBankLimit = chosenUpgrade.value.size;
        // my goal is to have sold items (and any items before the sold item) get deleted from the list 
        // but it's not working and i don't know why.  this code works for my playerstore inventory array?
        // is it because this upgrades array is defined instead of random?
            // let x = vaultUpgrades.id = chosenUpgrade.value.id;
            // let x = vaultUpgrades.findIndex(item => item.id === chosenUpgrade.value.id);
            // vaultUpgrades.splice(x, 1);
        }
    }

</script>