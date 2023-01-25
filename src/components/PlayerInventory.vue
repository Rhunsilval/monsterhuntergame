<template>
    <div class="absolute inset-0 flex">
        <div class="w-1/4 bg-slate-500" />
        <div class="w-3/4 bg-white" />
    </div>
    <div class="relative mx-auto grid grid-cols-4">
<!-- horse -->
        <div class="col-span-1">
            <div class="px-3 py-3 flex justify-center">
                <img src="../assets/images/horse.png" alt="" class="h-96  w-auto border border-slate-600 "/>
            </div>
            <ul class="grid grid-cols-3 gap-x-5 px-5 py-5">
                <li v-for="item in horseInventory" :key="item.id" class="relative" >
                    <div class="group aspect-w-3 aspect-h-3 block w-full overflow-hidden rounded-lg bg-white focus-within:ring-2 focus-within:ring-slate-800 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img :src="item.imageSrc" :alt="item.alt" />
                        <!-- <button type="button" class="absolute inset-0 focus:outline-none h-3 w-3"></button> -->
                    </div>
                </li>
            </ul>
        </div>
<!-- inventory -->
        <div class="col-span-3">
            <h1 class="text-center text-4xl text-teal-800 font-semibold my-3">Items on hand</h1>
            <div class="overflow-hidden  bg-white  mx-5 mt-8">
                <ul role="list" class="grid grid-cols-10 gap-x-2 ">
                    <li v-for="item in playerStore.playerPacked" :key="item.id" class="px-6 py-6 rounded-lg border border-slate-400">
                        <button class="pb-5">
                            <img :src="item.imageSrc" alt="" />
                            <!-- <p class="text-center text-xs ">{{ item.name }}</p> -->
                        </button>
                        <div class="flex flex-col items-center">
                            <button @click="equipItem(item.id)" class="px-2 py-2 rounded-md w-24 bg-slate-400 border border-black">
                                Equip</button><br/>
                            <button class="px-2 py-2 rounded-md w-24 bg-slate-400 border border-black">
                                Drop</button><br/>
                            <button class="px-2 py-2 rounded-md w-24 bg-slate-400 border border-black">
                                Sell</button>
                        </div>
                    </li>                    
                </ul>
            </div>
            <div v-if="playerStore.playerPacked.length==0" class="overflow-hidden rounded-md bg-white shadow shadow-gray-800 mx-5 mt-8">
                <ul role="list" class="grid grid-cols-10 gap-x-2 divide-x divide-gray-800">
                    <li v-for="item in items" :key="item.id" class="px-6 py-16 ">
                        <!-- <p>something</p> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref, computed } from 'vue'
    import { usePlayerStore } from '@/stores/player'
    const playerStore = usePlayerStore();

    const horseInventory = reactive([
        {
            id: 'shoes',
            itemSlot: 'horse_shoes',
            name: 'shoes',
            description: "",
            value: '',
            price: '',
            imageSrc: require('../assets/logo.png'),            
        },
        {
            id: 'saddle',
            itemSlot: 'horse_saddle',
            name: 'saddle',            
            description: "",
            value: '',
            price: '',
            imageSrc: require('../assets/logo.png'),            
        },
        {
            id: 'bag',
            itemSlot: 'horse_bag',
            name: 'bag',
            description: "",
            value: '',
            price: '',
            imageSrc: require('../assets/logo.png'),

        },
    ])

    const items = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
    ]

    const chosenItemId = ref('')
    const chosenItem = computed(function() {
        return playerStore.playerPacked.find(item => item.id === chosenItemId.value);
    })
    
    function equipItem(itemId) {
        chosenItemId.value = itemId;
        let x = horseInventory.findIndex(item => item.itemSlot === chosenItem.value.itemSlot);
        horseInventory.splice(x, 1, chosenItem.value);
        playerStore.playerPacked.splice(x, 1);
    }

</script>