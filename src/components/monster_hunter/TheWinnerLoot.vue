<template>
    <!-- <div> -->
        <p> List of Loot </p>
        <ul>
            <li v-for="item in lootStore.lootList" :key="item.id">
                <p>{{ item.name }}</p>
                <img :src="item.imageSrc" />
            </li>
        </ul>
        <!-- <p> {{ props.monsterId }} </p> -->
    <!-- </div> -->
</template>

<script setup>
    import { useLootStore } from '@/stores/loot'
    const lootStore = useLootStore();

    const props = defineProps({
        monsterId: {},
    })
    console.log(props.monsterId)
</script>