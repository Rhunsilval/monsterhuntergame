<template>
    <div class="absolute inset-0 flex">
        <div class="w-3/4 bg-white" />
        <div class="w-1/4 bg-slate-500"/>        
    </div>
    <div class="relative mx-auto grid grid-cols-4">
<!-- inventory -->
        <div class="col-span-3 pb-10">
            <h1 class="text-center text-3xl text-teal-800 font-semibold mt-3">Equipped Items</h1>
            <div class="overflow-hidden bg-white mx-5 mt-5 grid grid-cols-3">
<!-- magics -->
                <div class="col-span-1 text-center my-12 w-80 ">
                    <p class="-mt-10 mb-5 text-3xl text-teal-800 font-semibold">SPELLS</p>
                    <div class="col-span-3">
        <!-- fire -->
                        <button @click="showF1SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_F1_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="f1spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>                    
                        <button @click="showF2SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_F2_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="f2spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button>                    
                        <button @click="showF3SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_F3_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="f3spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button>                    
        <!-- water -->
                        <button @click="showW1SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_W1_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="w1spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showW2SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_W2_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="w2spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showW3SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_W3_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="w3spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
        <!-- earth -->
                        <button @click="showE1SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_E1_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="e1spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button>
                        <button @click="showE2SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_E2_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="e2spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button>
                        <button @click="showE3SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_E3_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="e3spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button>
        <!-- air -->
                        <button @click="showA1SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_A1_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="a1spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showA2SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_A2_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="a2spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showA3SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_A3_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="a3spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
        <!-- dark -->
                        <button @click="showD1SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_D1_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="d1spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showD2SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_D2_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="d2spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showD3SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_D3_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="d3spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
        <!-- light -->
                        <button @click="showL1SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_L1_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="l1spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showL2SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_L2_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="l2spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                        <button @click="showL3SpellDetails" class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_L3_spell" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-20 w-20 rounded-lg border border-black" />
                                    <p v-if="l3spellDetailsVisible" class="w-20 text-xs"> {{ item.value }}</p>
                                </ul>                                        
                            </li>                                                                                               
                        </button> 
                    </div>                    
                </div>
<!-- equipment center -->
                <div class="col-span-1 mt-20 -ml-40 ">
                    <div class="grid grid-cols-2">
                        <div class="col-span-1">
<!-- necklace -->
                            <div class="flex justify-center mb-5">
                                <button @click="necklaceOptionsVisible"> 
                                    <li v-for="item in playerStore.playerEquipped.player_necklace" :key="item.id" class="list-none">
                                        <ul>
                                            <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                                        </ul>                                        
                                    </li>                                                                                               
                                </button>                    
                            </div>
                            <div v-if="examineNecklaceItem" class="grid grid-cols-1 text-center mb-7 -mt-28 ml-0 w-full border rounded-xl bg-green-300">
                                <p class="font-semibold bg-white bg-opacity-90 ">{{ playerStore.playerEquipped.player_necklace[0].name }}</p>
                                <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_necklace[0].description }}</p>
                                <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_necklace[0].value }}</p>
                            </div> 
                            <div v-if="necklaceOptions" class="w-24 ml-28 -mt-3 grid grid-cols-1 object-center items-center text-center " >
                                <button @click="unequipNecklace()" class="px-2 py-2 mb-1 -ml-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Unequip</button>
                                <button @click="dropNecklace()" class="px-2 py-2 mb-1 -ml-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Drop</button>
                                <button @click="examineNecklaceItem = !examineNecklaceItem" class="mb-2 -ml-2 px-2 py-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    {{ examineNecklaceItem? 'Hide Details' : 'Examine' }}</button>
                            </div>
<!-- ring -->
                            <div class="flex justify-center mb-5">
                                <button @click="ringOptionsVisible">
                                    <li v-for="item in playerStore.playerEquipped.player_ring" :key="item.id" class="list-none">
                                        <ul>
                                            <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                                        </ul>                                        
                                    </li>                                                                                               
                                </button>                    
                            </div>
                            <div v-if="examineRingItem" class="grid grid-cols-1 text-center mb-7 -mt-28 ml-0 w-full border rounded-xl bg-green-300">
                                <p class="font-semibold bg-white bg-opacity-90  ">{{ playerStore.playerEquipped.player_ring[0].name }}</p>
                                <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_ring[0].description }}</p>
                                <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_ring[0].value }}</p>
                            </div> 
                            <div v-if="ringOptions" class="w-24 ml-28 -mt-3 grid grid-cols-1 object-center items-center text-center " >
                                <button @click="unequipRing()" class="px-2 py-2 mb-1 -ml-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Unequip</button>
                                <button @click="dropRing()" class="px-2 py-2 mb-1 -ml-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Drop</button>
                                <button @click="examineRingItem = !examineRingItem" class="mb-2 -ml-2 px-2 py-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    {{ examineRingItem? 'Hide Details' : 'Examine' }}</button>
                            </div>
<!-- belt -->
                            <div class="flex justify-center mb-5">
                                <button @click="beltOptionsVisible">
                                    <li v-for="item in playerStore.playerEquipped.player_belt" :key="item.id" class="list-none">
                                        <ul>
                                            <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                                        </ul>                                        
                                    </li>                                                                                               
                                </button>                    
                            </div>
                            <div v-if="examineBeltItem" class="grid grid-cols-1 text-center mb-7 -mt-28 ml-0 w-full border rounded-xl bg-green-300">
                                <p class="font-semibold bg-white bg-opacity-90  ">{{ playerStore.playerEquipped.player_belt[0].name }}</p>
                                <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_belt[0].description }}</p>
                                <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_belt[0].value }}</p>
                            </div> 
                            <div v-if="beltOptions" class="w-24 ml-28 -mt-3 grid grid-cols-1 object-center items-center text-center " >
                                <button @click="unequipBelt()" class="px-2 py-2 mb-1 -ml-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Unequip</button>
                                <button @click="dropBelt()" class="px-2 py-2 mb-1 -ml-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Drop</button>
                                <button @click="examineBeltItem = !examineBeltItem" class="px-2 py-2 mb-2 -ml-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    {{ examineBeltItem? 'Hide Details' : 'Examine' }}</button>
                            </div>
                        </div>
<!-- no inventory space -->
                        <div class="col-span-1 -ml-16">
                            <div v-if="openMessage" class="mt-32 text-center ">
                                <img src="../../assets/images/allpurpose/bagsfull.png" alt="" class="rounded-2xl block mx-auto border border-gray-400 aspect-square h-40 " aria-hidden="true" />
                                <h1 class="font-semibold">Looks like you've overpacked</h1>
                                <p class="text-sm">There's no room left in your inventory.</p>
                                <button @click="openMessage = false" class="px-2 py-2 mt-2 border border-gray-500 rounded-lg bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Okay</button>
                            </div>
<!-- player stats center -->
                            <div class="flex justify-center">
                                <div class="text-center my-20 w-36">
                                    <p class="mb-5">Attack: {{ playerStore.playerBaseAttack }} + {{ playerStore.attackBonus }} <br/>
                                        Total Attack: {{ playerStore.playerAttack }}</p>
                                    <p class="mb-5">Defense: {{ playerStore.playerBaseDefense }} + {{ playerStore.defenseBonus }} <br/>
                                        Total Defense: {{ playerStore.playerDefense }}</p>
                                    <p class="mb-5">Strength: {{ playerStore.playerBaseStrength }} + {{ playerStore.strengthBonus }} <br/>
                                        Total Strength: {{ playerStore.playerStrength }}</p>
                                    <p>Intelligence: {{ playerStore.playerBaseIntelligence }} + {{ playerStore.intelligenceBonus }} <br/>
                                        Total Intelligence: {{ playerStore.playerIntelligence }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
<!-- scripts -->
                    <div class="-mt-16 ">
                        <h1 class="ml-10 text-center text-2xl text-teal-800 font-semibold my-3">SCRIPTS</h1>
                        <p class="ml-10 text-center text-sm -mt-4">Carry capacity : 5</p>
                        <div class="text-center grid grid-cols-5 ml-10">
                            <playerequipped-scripts
                                v-for="(item, index) in playerStore.playerScripts"
                                :key="item.id"
                                :index="index"
                                :id="item.id"
                                :imageSrc="item.imageSrc"
                                :name="item.name"
                                :description="item.description"
                                :value="item.value"
                                @emitUnequipItem="unequipScript"
                                @emitDropItem="dropScript"
                            ></playerequipped-scripts>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 mt-10 pb-10 w-full">
<!-- helm -->                    
                    <div class="flex justify-center mb-5">
                        <button @click="helmOptionsVisible">
                            <li v-for="item in playerStore.playerEquipped.player_helm" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                               
                        </button>                    
                    </div>
                    <div v-if="examineHelmItem" class="grid grid-cols-1 text-center mb-7 -mt-28 ml-0 w-full border rounded-xl bg-green-300">
                        <p class="font-semibold bg-white bg-opacity-90  ">{{ playerStore.playerEquipped.player_helm[0].name }}</p>
                        <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_helm[0].description }}</p>
                        <p class="text-sm bg-white bg-opacity-90">{{ playerStore.playerEquipped.player_helm[0].value }}</p>
                    </div> 
                    <div v-if="helmOptions" class="grid grid-cols-1 -ml-2" >
                        <button @click="unequipHelm()" class="w-24 px-2 py-2 mb-1 mx-48 -mt-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                            Unequip</button>
                        <button @click="dropHelm()" class="w-24 px-2 py-2 mb-1 mx-48 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                            Drop</button>
                        <button @click="examineHelmItem = !examineHelmItem" class="w-24 px-2 py-2 mb-1 mx-48 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                            {{ examineHelmItem? 'Hide Details' : 'Examine' }}</button>
                    </div>                    
                    <div class="flex justify-center mb-5 w-full ">
<!-- shield -->
                        <div class="ml-2">
                            <button @click="shieldOptionsVisible">
                                <li v-for="item in playerStore.playerEquipped.player_shield" :key="item.id" class="list-none">
                                    <ul class="">
                                        <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5 mt-5" />
                                    </ul>
                                </li>
                            </button>
                            <div class="w-24">
                                <div v-if="examineShieldItem" class="grid grid-cols-1 text-center mb-7 mr-24 -mt-24 -ml-4 w-32 bg-green-300 border rounded-xl">
                                    <p class="font-semibold bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_shield[0].name }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_shield[0].description }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_shield[0].value }}</p>
                                </div> 
                            </div>
                            <div v-if="shieldOptions" class="w-24 mt-4 grid grid-cols-1 object-center items-center text-center " >
                                <button @click="unequipShield()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Unequip</button>
                                <button @click="dropShield()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Drop</button>
                                <button @click="examineShieldItem = !examineShieldItem" class="px-2 py-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    {{ examineShieldItem? 'Hide Details' : 'Examine' }}</button>
                            </div>
                        </div>
<!-- gloves -->
                        <div>
                            <button @click="glovesOptionsVisible">
                                <li v-for="item in playerStore.playerEquipped.player_gloves" :key="item.id" class="list-none">
                                    <ul class="">
                                        <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5" />
                                    </ul>
                                </li>
                            </button>
                            <div class="w-24">
                                <div v-if="examineGlovesItem" class="grid grid-cols-1 text-center mb-7 mr-24 -mt-24 -ml-4 w-32 bg-green-300 border rounded-xl">
                                    <p class="font-semibold bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_gloves[0].name }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_gloves[0].description }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_gloves[0].value }}</p>
                                </div> 
                            </div>
                            <div v-if="glovesOptions" class="w-24 mt-4 grid grid-cols-1 object-center items-center text-center " >
                                <button @click="unequipGloves()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Unequip</button>
                                <button @click="dropGloves()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Drop</button>
                                <button @click="examineGlovesItem = !examineGlovesItem" class="px-2 py-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    {{ examineGlovesItem? 'Hide Details' : 'Examine' }}</button>
                            </div>
                        </div>
<!-- vambraces -->
                        <div>
                            <button @click="vambracesOptionsVisible">
                                <li v-for="item in playerStore.playerEquipped.player_vambraces" :key="item.id" class="list-none">
                                    <ul>
                                        <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5" />
                                    </ul>
                                </li>                                
                            </button>
                            <div class="w-24">
                                <div v-if="examineVambracesItem" class="grid grid-cols-1 text-center mb-7 mr-24 -mt-24 -ml-4 w-32 bg-green-300 border rounded-xl">
                                    <p class="font-semibold bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_vambraces[0].name }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_vambraces[0].description }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_vambraces[0].value }}</p>
                                </div> 
                            </div>
                            <div v-if="vambracesOptions" class="w-24 mt-4 grid grid-cols-1 object-center items-center text-center " >
                                <button @click="unequipVambraces()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Unequip</button>
                                <button @click="dropVambraces()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Drop</button>
                                <button @click="examineVambracesItem = !examineVambracesItem" class="px-2 py-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    {{ examineVambracesItem? 'Hide Details' : 'Examine' }}</button>
                            </div>
                        </div>
<!-- sword -->
                        <div>
                            <button @click="swordOptionsVisible">
                                <li v-for="item in playerStore.playerEquipped.player_sword" :key="item.id" class="list-none">
                                    <ul>
                                        <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mt-5 mr-3" />
                                    </ul>
                                </li>                                
                            </button>
                            <div class="w-24">
                                <div v-if="examineSwordItem" class="grid grid-cols-1 text-center mb-7 mr-24 -mt-24 -ml-4 w-32 bg-green-300 border rounded-xl">
                                    <p class="font-semibold bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_sword[0].name }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_sword[0].description }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_sword[0].value }}</p>
                                </div> 
                            </div>
                            <div v-if="swordOptions" class="w-24 mt-4 grid grid-cols-1 object-center items-center text-center " >
                                <button @click="unequipSword()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Unequip</button>
                                <button @click="dropSword()" class="px-2 py-2 mb-1 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    Drop</button>
                                <button @click="examineSwordItem = !examineSwordItem" class="px-2 py-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                    {{ examineSwordItem? 'Hide Details' : 'Examine' }}</button>
                            </div>
                        </div>
                    </div>
<!-- armor -->
                    <div class="flex justify-center mb-5">
                        <button @click="armorOptionsVisible">
                            <li v-for="item in playerStore.playerEquipped.player_armor" :key="item.id" class="list-none">
                                <ul>
                                    <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                                </ul>
                            </li>
                        </button>
                    </div>
                    <div class="w-24 ml-2">
                        <div v-if="examineArmorItem" class="grid grid-cols-1 text-center mb-9 -mt-24 ml-40 w-32 bg-green-300 border rounded-xl">
                            <p class="font-semibold bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_armor[0].name }}</p>
                            <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_armor[0].description }}</p>
                            <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_armor[0].value }}</p>
                        </div> 
                    </div>
                    <div v-if="armorOptions" class="grid grid-cols-1 -ml-2" >
                        <button @click="unequipArmor()" class=" w-24 px-2 py-2 mb-1 mx-48 -mt-2 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                            Unequip</button>
                        <button @click="dropArmor()" class="w-24 px-2 py-2 mb-1 mx-48 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                            Drop</button>
                        <button @click="examineArmorItem = !examineArmorItem" class="w-24 px-2 py-2 mb-1 mx-48 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                            {{ examineArmorItem? 'Hide Details' : 'Examine' }}</button>
                    </div>
<!-- boots -->
                    <div class="grid grid-cols-2 items-center text-center object-center">                        

                        <div class="">
                            <div class="flex justify-end mb-5 -mr-12">
                                <button @click="bootsOptionsVisible" class="">
                                    <li v-for="item in playerStore.playerEquipped.player_boots" :key="item.id" class="list-none">
                                        <ul>
                                            <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                                        </ul>
                                    </li>
                                </button>
                            </div>
                            <div class="w-full">
                                <div v-if="examineBootsItem" class="grid grid-cols-1 text-center mb-7 -mt-28 ml-10 w-full border rounded-xl bg-green-300">
                                    <p class="font-semibold bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_boots[0].name }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_boots[0].description }}</p>
                                    <p class="text-sm bg-white bg-opacity-90 px-4">{{ playerStore.playerEquipped.player_boots[0].value }}</p>
                                </div> 
                            </div>
                        </div>
                        <div v-if="bootsOptions" class="mt-4 grid grid-cols-1 object-center items-center text-center" >
                            <button @click="unequipBoots()" class="w-24 px-2 py-2 mb-1 mx-16  rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                Unequip</button>
                            <button @click="dropBoots()" class="w-24 px-2 py-2 mb-1 mx-16 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                Drop</button>
                            <button @click="examineBootsItem = !examineBootsItem" class="w-24 px-2 py-2 mx-16 rounded-lg border border-gray-500 bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                                {{ examineBootsItem? 'Hide Details' : 'Examine' }}</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>        
<!-- figure -->
        <div class="col-span-1">
            <div class="px-3 pb-3 pt-16 mt-2 flex justify-center">
                <img src="../../assets/images/allpurpose/human.png" alt="" class="h-96 w-auto border border-slate-600 "/>
            </div>
        </div>
    </div>



</template>

<script setup>
    import { ref, computed } from 'vue';
    import { usePlayerStore } from '@/stores/player'
    import PlayerequippedScripts from './PlayerequippedScripts.vue';
    const playerStore = usePlayerStore();

    const openMessage = ref(false)

// necklace actions
    const necklaceOptions = ref(false)
    const examineNecklaceItem = ref(false)
    function necklaceOptionsVisible() {
        if (playerStore.playerEquipped.player_necklace[0].id === 'necklace') {
           necklaceOptions.value === false; 
        } else {necklaceOptions.value = !necklaceOptions.value;}        
    }
    function unequipNecklace() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_necklace[0]);
            playerStore.playerEquipped.player_necklace.splice(0);
            playerStore.playerEquipped.player_necklace.push(
                {
                    id: 'necklace',
                    itemSlot: 'player_necklace',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/necklace.png'),
                }
            );
            necklaceOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropNecklace() {
        playerStore.playerEquipped.player_necklace.splice(0);
        playerStore.playerEquipped.player_necklace.push(
            {
                id: 'necklace',
                itemSlot: 'player_necklace',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/necklace.png'),
            }
        );
        necklaceOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// ring actions
    const ringOptions = ref(false)
    const examineRingItem = ref(false)
    function ringOptionsVisible() {
        if (playerStore.playerEquipped.player_ring[0].id === 'ring') {
           ringOptions.value === false; 
        } else {ringOptions.value = !ringOptions.value;}        
    }
    function unequipRing() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_ring[0]);
            playerStore.playerEquipped.player_ring.splice(0);
            playerStore.playerEquipped.player_ring.push(
                {
                    id: 'ring',
                    itemSlot: 'player_ring',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/ring.png'),
                },
            );
            ringOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropRing() {
        playerStore.playerEquipped.player_ring.splice(0);
        playerStore.playerEquipped.player_ring.push(
            {
                id: 'ring',
                itemSlot: 'player_ring',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/ring.png'),
            },
        );
        ringOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// belt actions
    const beltOptions = ref(false)
    const examineBeltItem = ref(false)
    function beltOptionsVisible() {
        if (playerStore.playerEquipped.player_belt[0].id === 'belt') {
           beltOptions.value === false; 
        } else {beltOptions.value = !beltOptions.value;}        
    }
    function unequipBelt() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_belt[0]);
            playerStore.playerEquipped.player_belt.splice(0);
            playerStore.playerEquipped.player_belt.push(
                {
                    id: 'belt',
                    itemSlot: 'player_belt',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/belt.png'),
                },
            );
            beltOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropBelt() {
        playerStore.playerEquipped.player_belt.splice(0);
        playerStore.playerEquipped.player_belt.push(
            {
                id: 'belt',
                itemSlot: 'player_belt',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/belt.png'),
            },
        );
        beltOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// helm actions
    const helmOptions = ref(false)
    const examineHelmItem = ref(false)
    function helmOptionsVisible() {
        if (playerStore.playerEquipped.player_helm[0].id === 'helm') {
           helmOptions.value === false; 
        } else {helmOptions.value = !helmOptions.value;}        
    }
    function unequipHelm() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_helm[0]);
            playerStore.playerEquipped.player_helm.splice(0);
            playerStore.playerEquipped.player_helm.push(
                {
                    id: 'helm',
                    itemSlot: 'player_helm',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/helm.png'),
                },
            );
            helmOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropHelm() {
        playerStore.playerEquipped.player_helm.splice(0);
        playerStore.playerEquipped.player_helm.push(
            {
                id: 'helm',
                itemSlot: 'player_helm',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/helm.png'),
            },
        );
        helmOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// shield actions
    const shieldOptions = ref(false)
    const examineShieldItem = ref(false)
    function shieldOptionsVisible() {
        if (playerStore.playerEquipped.player_shield[0].id === 'shield') {
           shieldOptions.value === false; 
        } else {shieldOptions.value = !shieldOptions.value;}        
    }
    function unequipShield() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_shield[0]);
            playerStore.playerEquipped.player_shield.splice(0);
            playerStore.playerEquipped.player_shield.push(
                {
                    id: 'shield',
                    itemSlot: 'player_shield',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/shield.png'),
                },
            );
            shieldOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropShield() {
        playerStore.playerEquipped.player_shield.splice(0);
        playerStore.playerEquipped.player_shield.push(
            {
                id: 'shield',
                itemSlot: 'player_shield',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/shield.png'),
            },
        );
        shieldOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// gloves actions
    const glovesOptions = ref(false)
    const examineGlovesItem = ref(false)
    function glovesOptionsVisible() {
        if (playerStore.playerEquipped.player_gloves[0].id === 'gloves') {
           glovesOptions.value === false; 
        } else {glovesOptions.value = !glovesOptions.value;}        
    }
    function unequipGloves() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_gloves[0]);
            playerStore.playerEquipped.player_gloves.splice(0);
            playerStore.playerEquipped.player_gloves.push(
                {
                    id: 'gloves',
                    itemSlot: 'player_gloves',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/gloves.png'),
                },
            );
            glovesOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropGloves() {
        playerStore.playerEquipped.player_gloves.splice(0);
        playerStore.playerEquipped.player_gloves.push(
            {
                id: 'gloves',
                itemSlot: 'player_gloves',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/gloves.png'),
            },
        );
        glovesOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// vambraces actions
    const vambracesOptions = ref(false)
    const examineVambracesItem = ref(false)
    function vambracesOptionsVisible() {
        if (playerStore.playerEquipped.player_vambraces[0].id === 'vambraces') {
           vambracesOptions.value === false; 
        } else {vambracesOptions.value = !vambracesOptions.value;}        
    }
    function unequipVambraces() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_vambraces[0]);
            playerStore.playerEquipped.player_vambraces.splice(0);
            playerStore.playerEquipped.player_vambraces.push(
                {
                    id: 'vambraces',
                    itemSlot: 'player_vambraces',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/vambraces.png'),
                },
            );
            vambracesOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropVambraces() {
        playerStore.playerEquipped.player_vambraces.splice(0);
        playerStore.playerEquipped.player_vambraces.push(
            {
                id: 'vambraces',
                itemSlot: 'player_vambraces',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/vambraces.png'),
            },
        );
        vambracesOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// sword actions
    const swordOptions = ref(false)
    const examineSwordItem = ref(false)
    function swordOptionsVisible() {
        if (playerStore.playerEquipped.player_sword[0].id === 'sword') {
           swordOptions.value === false; 
        } else {swordOptions.value = !swordOptions.value;}        
    }
    function unequipSword() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_sword[0]);
            playerStore.playerEquipped.player_sword.splice(0);
            playerStore.playerEquipped.player_sword.push(
                {
                    id: 'sword',
                    itemSlot: 'player_sword',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/sword.png'),
                },
            );
            swordOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropSword() {
        playerStore.playerEquipped.player_sword.splice(0);
        playerStore.playerEquipped.player_sword.push(
            {
                id: 'sword',
                itemSlot: 'player_sword',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/sword.png'),
            },
        );
        swordOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// armor actions
    const armorOptions = ref(false)
    const examineArmorItem = ref(false)
    function armorOptionsVisible() {
        if (playerStore.playerEquipped.player_armor[0].id === 'armor') {
           armorOptions.value === false; 
        } else {armorOptions.value = !armorOptions.value;}        
    }
    function unequipArmor() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_armor[0]);
            playerStore.playerEquipped.player_armor.splice(0);
            playerStore.playerEquipped.player_armor.push(
                {
                    id: 'armor',
                    itemSlot: 'player_armor',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/armor.png'),
                },
            );
            armorOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropArmor() {
        playerStore.playerEquipped.player_armor.splice(0);
        playerStore.playerEquipped.player_armor.push(
            {
                id: 'armor',
                itemSlot: 'player_armor',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/armor.png'),
            },
        );
        armorOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// boots actions
    const bootsOptions = ref(false)
    const examineBootsItem = ref(false)
    function bootsOptionsVisible() {
        if (playerStore.playerEquipped.player_boots[0].id === 'boots') {
           bootsOptions.value === false; 
        } else {bootsOptions.value = !bootsOptions.value;}        
    }
    function unequipBoots() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(playerStore.playerEquipped.player_boots[0]);
            playerStore.playerEquipped.player_boots.splice(0);
            playerStore.playerEquipped.player_boots.push(
                {
                    id: 'boots',
                    itemSlot: 'player_boots',
                    itemShop: '',
                    name: '',
                    description: '',
                    value: '',
                    attack: null,
                    defense: null,
                    strength: null,
                    life: null,
                    mana: null,
                    intelligence: null,
                    price: '',
                    imageSrc: require('../../assets/images/placeholders/boots.png'),
                },
            );
            bootsOptions.value = false;
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }      
    }
    function dropBoots() {
        playerStore.playerEquipped.player_boots.splice(0);
        playerStore.playerEquipped.player_boots.push(
            {
                id: 'boots',
                itemSlot: 'player_boots',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/boots.png'),
            },
        );
        bootsOptions.value = false;
        playerStore.getAttackValues();
        playerStore.getDefenseValues();
        playerStore.getStrengthValues();
        playerStore.getExtraHealth();
        playerStore.getExtraMana();
        playerStore.getIntelligenceValues();
    }

// spell actions
    const f1spellDetailsVisible = ref(false)
    function showF1SpellDetails() {
        f1spellDetailsVisible.value = !f1spellDetailsVisible.value;
    }
    const f2spellDetailsVisible = ref(false)
    function showF2SpellDetails() {
        f2spellDetailsVisible.value = !f2spellDetailsVisible.value;
    }
    const f3spellDetailsVisible = ref(false)
    function showF3SpellDetails() {
        f3spellDetailsVisible.value = !f3spellDetailsVisible.value;
    }
    
    const w1spellDetailsVisible = ref(false)
    function showW1SpellDetails() {
        w1spellDetailsVisible.value = !w1spellDetailsVisible.value;
    }
    const w2spellDetailsVisible = ref(false)
    function showW2SpellDetails() {
        w2spellDetailsVisible.value = !w2spellDetailsVisible.value;
    }
    const w3spellDetailsVisible = ref(false)
    function showW3SpellDetails() {
        w3spellDetailsVisible.value = !w3spellDetailsVisible.value;
    }
    
    const e1spellDetailsVisible = ref(false)
    function showE1SpellDetails() {
        e1spellDetailsVisible.value = !e1spellDetailsVisible.value;
    }
    const e2spellDetailsVisible = ref(false)
    function showE2SpellDetails() {
        e2spellDetailsVisible.value = !e2spellDetailsVisible.value;
    }
    const e3spellDetailsVisible = ref(false)
    function showE3SpellDetails() {
        e3spellDetailsVisible.value = !e3spellDetailsVisible.value;
    }
    
    const a1spellDetailsVisible = ref(false)
    function showA1SpellDetails() {
        a1spellDetailsVisible.value = !a1spellDetailsVisible.value;
    }
    const a2spellDetailsVisible = ref(false)
    function showA2SpellDetails() {
        a2spellDetailsVisible.value = !a2spellDetailsVisible.value;
    }
    const a3spellDetailsVisible = ref(false)
    function showA3SpellDetails() {
        a3spellDetailsVisible.value = !a3spellDetailsVisible.value;
    }
    
    const d1spellDetailsVisible = ref(false)
    function showD1SpellDetails() {
        d1spellDetailsVisible.value = !d1spellDetailsVisible.value;
    }
    const d2spellDetailsVisible = ref(false)
    function showD2SpellDetails() {
        d2spellDetailsVisible.value = !d2spellDetailsVisible.value;
    }
    const d3spellDetailsVisible = ref(false)
    function showD3SpellDetails() {
        d3spellDetailsVisible.value = !d3spellDetailsVisible.value;
    }
    
    const l1spellDetailsVisible = ref(false)
    function showL1SpellDetails() {
        l1spellDetailsVisible.value = !l1spellDetailsVisible.value;
    }
    const l2spellDetailsVisible = ref(false)
    function showL2SpellDetails() {
        l2spellDetailsVisible.value = !l2spellDetailsVisible.value;
    }
    const l3spellDetailsVisible = ref(false)
    function showL3SpellDetails() {
        l3spellDetailsVisible.value = !l3spellDetailsVisible.value;
    }

// script actions
    const chosenItemId = ref('')
    const chosenItem = computed(function() {
        return playerStore.playerScripts.find(item => item.id === chosenItemId.value);
    })
    function unequipScript(id) {
        if(id!==undefined) {
            console.log('chosen ID = ' + id);
        }
        chosenItemId.value = id;
        let x = playerStore.playerScripts.findIndex(item => item.id === chosenItem.value.id);

        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openMessage.value = true;
        } else {
            playerStore.playerPacked.push(chosenItem.value);
            playerStore.playerScripts.splice(x, 1);
        }
    }
    function dropScript(id) {
        if(id!==undefined) {
            console.log('chosen Id = ' + id);
        }
        chosenItemId.value = id;
        let x = playerStore.playerScripts.findIndex(item => item.id === chosenItem.value.id);
        playerStore.playerScripts.splice(x, 1);
    }

</script>