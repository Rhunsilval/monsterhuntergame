<template>
    <p> List of Loot </p>
    <p>{{ lootStore.monsterId }} </p>
    <ul>
        <li v-for="item in lootStore.lootList" :key="item.id">
            <p>{{ item.name }}</p>
            <img :src="item.imageSrc" />
        </li>
    </ul>
</template>

<script setup>
    import { useLootStore } from '@/stores/loot'
    const lootStore = useLootStore();

</script>