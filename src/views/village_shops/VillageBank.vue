<template>
    <the-header></the-header>

    <div class="bg-[url('../assets/images/allpurpose/bank_background.png')] bg-cover">
        <div class="flex justify-center"> 
            <div class="w-2/3 bg-white bg-opacity-70 flex justify-center mt-14"> 
                <h1 class="font-serif font-bold text-7xl py-10 text-center">The First-And-Only Village Bank</h1>
            </div>
        </div>
<!-- bank lobby -->
        <div v-if="inLobby" class="flex justify-center pb-32"> 
            <div class="w-2/3 bg-white bg-opacity-70">
                <div class="grid grid-cols-1">                
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
                            <div class="">
                                <div class="pt-3 ">
                                    <img src="../../assets/images/allpurpose/bank_banker.png" alt="" class="h-56 border border-black"/>                     
                                </div>             
                            </div>        
                        </div>
                        <div> 
                            <div class="mr-10 -ml-10"> 
                                <img src="../../assets/images/allpurpose/arch.png" alt="" class="w-full rounded-3xl"/>
                                <div v-if="conditionalStore.villageBank.accountOpen === true" class="flex justify-center -mt-36"> 
                                    <button @click="goToVault" class="px-2 py-2 border border-gray-600 h-36 w-36 rounded-full font-serif font-semibold bg-white hover:bg-slate-400 "> 
                                        Visit your Deposit Box</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center text-center">
                        <div class="grid grid-cols-1 pb-10">
                            <h1 class="text-2xl font-serif font-bold pt-10">Welcome, welcome!</h1>
                            <p>Have a drink!  Have a seat!</p>
                            <p>Tell me how I can help you today!</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="relative flex self-center rounded-lg p-0.5 pb-10">
                            <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                Explore the Village</router-link>
                            <router-link :to="'/map'" type="button" class="relative ml-1 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                Hunt for Monsters</router-link>
                        </div>
                    </div>
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
                    <div v-if="conditionalStore.villageBank.accountOpen === false" class="flex justify-center pt-5 pb-10"> 
                        <div class="grid grid-cols-1 text-center font-serif text-lg">
                            <div v-if="introText" class="grid grid-cols-1"> 
                                <p class="font-semibold text-2xl ">Well, hello there, my friend!</p>
                                <p>Good to see a new face around here!</p>
                                <p>Tell me, are you interested in opening an account with us today?</p>
                            </div>
                            <div v-if="introText2" class="grid grid-cols-1 text-sm"> 
                                <p class="font-semibold text-2xl ">Excellent, excellent!</p>
                                <p>We here at the First-And-Only Village Bank pride ourselves</p>
                                <p>on our ability to safely store, protect, and invest in our customer's treasures.</p>
                                <p>Which, I'm sure, is something an up-and-coming Hunter such as yourself can appreciate!</p>
                                <p>Now, we have a lot of different options here for our customers <br/>when it comes to the SIZE of the storage safes we offer. </p>
                                <p class="text-base ">To someone like you, I recommend our standard, basic size, which is a guaranteed locked vault that can hold up to 50 items!</p>
                                <p class="text-lg font-semibold pt-3">Now, how does that sound?</p>
                            </div>
                            <div v-if="introText3" class="grid grid-cols-1"> 
                                <p class="font font-semibold text-2xl"> Wonderful!</p>
                                <p>Just pay a one-time 500 coin fee, and we'll get you set right up!</p>
                            </div>


                            <div v-if="introButton" class="pt-8 grid grid-cols-2 gap-x-6"> 
                                <button @click="accountSetup" class="px-2 py-2 border border-slate-500 rounded-3xl bg-emerald-400 hover:bg-emerald-800 hover:text-white font-bold text-2xl">
                                    Yes!</button>
                                <button @click="returnToLobby" class="px-2 py-2 border border-slate-500 rounded-3xl bg-stone-300 hover:bg-slate-400 text-sm font-light">
                                    Not today</button>
                            </div>
                            <div v-if="introButton2" class="pt-8 grid grid-cols-2 gap-x-6"> 
                                <button @click="accountSetup2" class="px-2 py-2 border border-slate-500 rounded-3xl bg-emerald-400 hover:bg-emerald-800 hover:text-white font-bold text-2xl">
                                    Ummm ... okay!</button>
                                <button @click="returnToLobby2" class="px-2 py-2 border border-slate-500 rounded-3xl bg-stone-300 hover:bg-slate-400 text-sm font-light">
                                    Not today</button>
                            </div>
                            <div v-if="introButton3" class="pt-8 grid grid-cols-2 gap-x-6"> 
                                <button @click="accountSetup3" class="px-2 py-2 border border-slate-500 rounded-3xl bg-emerald-400 hover:bg-emerald-800 hover:text-white font-bold text-2xl">
                                    Sure!</button>
                                <button @click="returnToLobby3" class="px-2 py-2 border border-slate-500 rounded-3xl bg-stone-300 hover:bg-slate-400 text-sm font-light">
                                    What!? No!</button>
                            </div>
                        </div>
                    </div>
                    <div v-if="conditionalStore.villageBank.accountOpen === true" class="flex justify-center pt-5"> 
                        <div class="grid grid-cols-1 text-center font-serif text-lg">
                            <div class="grid grid-cols-1"> 
                                <p class="font-semibold text-2xl ">Welcome back, {{ playerStore.playerId }}!</p>
                                <p>Good to see you're still with us!</p>
                                <p>Can I interest you in a vault upgrade today?</p>
                            </div>

                        </div>
                    </div>
            <!-- nav buttons -->
                    <div v-if="conditionalStore.villageBank.accountOpen === true" class="flex justify-center"> 
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
                    <div v-if="conditionalStore.villageBank.accountOpen === true" class="flex justify-center pb-16"> 
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
                                        <p class="pt-2">Explore the Village</p></router-link>
                                </div>
                                <div> 
                                    <router-link :to="'/map'" type="button" class="w-2/3 h-14 px-3 py-3 text-center text-sm font-semibold bg-[#305c79] hover:bg-blue-200 border border-gray-600 rounded-lg text-gray-300 hover:text-black">
                                        <p class="pt-2">Hunt for Monsters</p></router-link>
                                </div>  
                            </div>
                            <div class="grid grid-cols-2 gap-5 pb-3 ">
                                <div class="flex justify-end "> 
                                    <button @click="packinventoryVisible = !packinventoryVisible" class="h-28 w-28 rounded-full px-2 py-2 border border-gray-500 bg-white hover:bg-slate-400"> 
                                        Make a Deposit</button>
                                </div>
                                <div> 
                                    <button @click="withdrawalInstructions = !withdrawalInstructions" class="h-28 w-28 rounded-full px-2 py-2 border border-gray-500 bg-white hover:bg-stone-400"> 
                                        Make a Withdrawal</button>
                                </div>  
                            </div>
                            <div v-if="packinventoryVisible" class="flex justify-start"> 
                                <div class="w-1/3 ml-36"> 
                                    <p class="text-center text-lg">To make a deposit, click on an item in your pack.</p>
                                </div>
                            </div>
                            <div v-if="withdrawalInstructions" class="flex justify-end">
                                <div class="w-1/3 mr-36"> 
                                    <p class="text-center text-lg">To make a withdrawal, click on an item in your vault </p>
                                </div>                                 
                            </div>                            
                        </div>
                        <div> 
                            <img src="../../assets/images/allpurpose/vault.png" class="rounded-3xl w-11/12" />
                        </div>
                    </div>                    
                </div>
            <!-- player inventory -->
                <div v-if="packinventoryVisible" class="flex justify-center mt-10"> 
                    <h1 class="text-4xl font-serif font-semibold">Items in Your Pack: </h1>
                </div>
                <div v-if="packinventoryVisible" class="flex justify-center mt-10">
                    <ul class="grid grid-cols-10 gap-1 w-11/12">
                      <li v-for="item in playerStore.playerPacked" :key="item.id">
                        <button @click="depositItem(item.id)" class="pb-5 aspect-w-1 aspect-h-1 w-24 h-24 align-top">
                            <img :src="item.imageSrc" alt="" class="w-24 h-24 border border-gray-600 " />
                        </button>
                        <div class="flex justify-center pr-4"> 
                            <p class="text-center text-sm w-24">{{ item.name }}</p>
                        </div>                        
                      </li>
                    </ul>
                </div>
            <!-- player vault -->
                <div class="flex justify-center mt-10"> 
                    <div class="grid grid-cols-1 text-center"> 
                        <h1 class="text-4xl font-serif font-semibold ">Vault Size: {{ playerStore.playerBankLimit }}</h1>
                        <h1 class="text-2xl font-serif font-semibold mt-2 ">Space used:  {{ playerStore.playerBank.length }} / {{ playerStore.playerBankLimit }}</h1>
                        <h1 class="text-4xl font-serif font-semibold mt-4 mb-10">Items in Your Vault:</h1>
                    </div>                    
                </div>
                <div class="flex justify-center">
                    <ul class="grid grid-cols-10 gap-1 w-11/12 mb-10"> 
                        <li v-for="(item, index) in playerStore.playerBank" :key="item.id">
                            <div v-if="index < playerStore.playerBankLimit"> 
                                <button @click="withdrawItem(item.id)">
                                    <img :src="item.imageSrc" class="w-24 h-24 border border-gray-600" />
                                </button>
                                <div class="flex justify-center pr-4"> 
                                    <p class="text-center text-sm w-24">{{ item.name }} </p>
                                </div>                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

<!-- no space modal display -->
        <TransitionRoot as="template" :show="noSpace">
            <Dialog as="div" class="relative z-10" @close="noSpace = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div class="mt-3 text-center sm:mt-5">
                                        <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Out of space {{ location }}.</DialogTitle>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">Looks like you're out of room to hold anything else</p>
                                        </div>
                                    </div>                              
                                    <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                        <button @click="noSpace = false" type="button" class="inline-flex w-full justify-center rounded-md border border-slate-600 bg-[#7aa0bd] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-[#305c79] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                                            Okay</button>
                                        <button @click="returnToLobby" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-slate-600 bg-gray-400 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"  ref="cancelButtonRef">
                                            Return to Lobby</button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>        
    </div>
</template>

<script setup> 
    import { ref, computed } from 'vue';
    import { usePlayerStore } from '@/stores/player'
    import { useConditionalsStore } from '@/stores/conditionals';
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

    const playerStore = usePlayerStore();
    const conditionalStore = useConditionalsStore();

    const inLobby = ref(true);    
    const talkToBanker = ref(false);
    const visitVault = ref(false);

    const insufficientFunds = ref(false);
    
    function speakWithBanker() {
        inLobby.value = false;
        talkToBanker.value = true;
    }
    function returnToLobby() {
        talkToBanker.value = false;
        visitVault.value = false;
        noSpace.value = false;
        inLobby.value = true;
    }
    function goToVault() {
        inLobby.value = false;
        talkToBanker.value = false;
        visitVault.value = true;
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
            conditionalStore.villageBank.accountOpen = true;
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

// vault actions 
    const withdrawalInstructions = ref(false);
    const packinventoryVisible = ref(false);
    const noSpace = ref(false);
    const location = ref('');

// deposits into vault
    const choseninventoryItemId = ref('');
    const choseninventoryItem = computed(function() {
        return playerStore.playerPacked.find(item => item.id === choseninventoryItemId.value);
    })
    function depositItem(id) {
        choseninventoryItemId.value = id;
        let x = playerStore.playerPacked.findIndex(item => item.id === choseninventoryItem.value.id);
        if(id!==undefined) {
            console.log('chosen packitem Id = ' + id);
        }
        if (playerStore.playerBank.length >= playerStore.playerBankLimit) {
            noSpace.value = true;
            location.value = "in your vault"
        } else { 
            playerStore.playerBank.push(choseninventoryItem.value);
            playerStore.playerPacked.splice(x, 1);
        }        
    }
// withdrawals from vault
    const chosenbankItemId = ref('');    
    const chosenbankItem = computed(function() {
        return playerStore.playerBank.find(item => item.id === chosenbankItemId.value);
    })
    function withdrawItem(id) {
        chosenbankItemId.value = id;
        let x = playerStore.playerBank.findIndex(item => item.id === chosenbankItem.value.id);
        if(id!==undefined) {
            console.log('chosen bankitem Id = ' + id);
        }
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            noSpace.value = true;
            location.value = "in your pack"
        } else {
            playerStore.playerPacked.push(chosenbankItem.value);
            playerStore.playerBank.splice(x, 1);
        }        
    }


</script>