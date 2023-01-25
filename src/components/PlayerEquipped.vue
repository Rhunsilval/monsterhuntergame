<template>
    <div class="absolute inset-0 flex">
        <div class="w-3/4 bg-white" />
        <div class="w-1/4 bg-slate-500"/>        
    </div>
    <div class="relative mx-auto grid grid-cols-4">
<!-- inventory -->
        <div class="col-span-3 pb-10">
            <h1 class="text-center text-3xl text-teal-800 font-semibold mt-3">Equipped Items</h1>
            <div class="overflow-hidden bg-white mx-5 mt-5 grid grid-cols-2">

                <div class="col-span-1 mt-20 ml-60 ">
                    <div class="flex justify-center mb-5">
                        <img :src="playerStore.playerEquipped.player_necklace.imageSrc" alt="" class="h-20 rounded-lg border border-black" />
                    </div>
                    <div class="flex justify-center mb-5">
                        <img :src="playerStore.playerEquipped.player_ring.imageSrc" alt="" class="h-20 rounded-lg border border-black" />
                    </div>
                    <div class="flex justify-center">
                        <img :src="playerStore.playerEquipped.player_belt.imageSrc" alt="" class="h-20 rounded-lg border border-black" />
                    </div>
                </div>

                <div class="col-span-1 mt-1 mx-10 pb-10">
                    <div class="flex justify-center mb-5">
                        <img :src="playerStore.playerEquipped.player_helm.imageSrc" alt="" class="h-20 rounded-lg border border-black" />
                    </div>
                    <div class="flex justify-center mb-5">
                        <img :src="playerStore.playerEquipped.player_shield.imageSrc" alt="" class="h-20 rounded-lg border border-black mr-5 mt-5" />
                        <img :src="playerStore.playerEquipped.player_gloves.imageSrc" alt="" class="h-20 rounded-lg border border-black mr-5" /> 
                        <img :src="playerStore.playerEquipped.player_vambraces.imageSrc" alt="" class="h-20 rounded-lg border border-black mr-5" /> 
                        <img :src="playerStore.playerEquipped.player_sword.imageSrc" alt="" class="h-20 rounded-lg border border-black mt-5" />
                    </div>
                     <div class="flex justify-center mb-5">
                        <img :src="playerStore.playerEquipped.player_armor.imageSrc" alt="" class="h-20 rounded-lg border border-black" />
                    </div>                   
                    <div class="flex justify-center">
                        <img :src="playerStore.playerEquipped.player_boots.imageSrc" alt="" class="h-20 rounded-lg border border-black" />
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