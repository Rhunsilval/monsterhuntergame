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

                <div class="text-center -ml-36 mt-36">
                    <p class="mb-5">Attack: {{ playerStore.playerBaseAttack }} + {{ playerStore.attackBonus }} <br/>
                        Total Attack: {{ playerStore.playerAttack }}</p>
                    <p class="mb-5">Defense: {{ playerStore.playerBaseDefense }} + {{ playerStore.defenseBonus }} <br/>
                        Total Defense: {{ playerStore.playerDefense }}</p>
                    <p>Strength: {{ playerStore.playerBaseStrength }} + {{ playerStore.strengthBonus }} <br/>
                        Total Strength: {{ playerStore.playerStrength }}</p>
                </div>

                <div class="col-span-1 mt-20 -ml-64 ">
                    <div class="flex justify-center mb-5 ">
                        <li v-for="item in playerStore.playerEquipped.player_necklace" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_necklace.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" /> -->
                    </div>
                    <div class="flex justify-center mb-5">
                        <li v-for="item in playerStore.playerEquipped.player_ring" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_ring.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" /> -->
                    </div>
                    <div class="flex justify-center">
                        <li v-for="item in playerStore.playerEquipped.player_belt" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_belt.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" /> -->
                    </div>
                </div>

                <div class="col-span-1 mt-1 mx-10 pb-10 pr-28 -ml-5 w-full">
                    <div class="flex justify-center pl-10 mb-5">
                        <li v-for="item in playerStore.playerEquipped.player_helm" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_helm.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" /> -->
                    </div>
                    <div class="flex justify-center mb-5 w-96 ">
                        <li v-for="item in playerStore.playerEquipped.player_shield" :key="item.id" class="">
                            <ul class="">
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5 mt-5" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_shield.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5 mt-5" /> -->
                        <li v-for="item in playerStore.playerEquipped.player_gloves" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_gloves.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5" />  -->
                        <li v-for="item in playerStore.playerEquipped.player_vambraces" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_vambraces.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mr-5" />  -->
                        <li v-for="item in playerStore.playerEquipped.player_sword" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mt-5 mr-3" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_sword.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black mt-5" /> -->
                    </div>
                     <div class="flex justify-center mb-5 pl-10">
                        <li v-for="item in playerStore.playerEquipped.player_armor" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                            </ul>
                        </li>
                        <!-- <img :src="playerStore.playerEquipped.player_armor.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" /> -->
                    </div> 

                    <div class="flex justify-center pl-10">
                        <li v-for="item in playerStore.playerEquipped.player_boots" :key="item.id">
                            <ul>
                                <img :src="item.imageSrc" alt="" class="h-24 w-24 rounded-lg border border-black" />
                            </ul>
                        </li>
                    </div>

                </div>                
            </div>
        </div>        
<!-- figure -->
        <div class="col-span-1">
            <div class="px-3 pb-3 pt-16 mt-2 flex justify-center">
                <img src="../assets/images/human.png" alt="" class="h-96 w-auto border border-slate-600 "/>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { usePlayerStore } from '@/stores/player'
    const playerStore = usePlayerStore();

</script>