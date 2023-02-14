<template>
    <div v-if="props.index < props.limit_by" class="overflow-hidden bg-white mx-5 mt-8">
<!-- item image -->
        <button @click="openActions" class="pb-3 mb-2 w-24 align-top ">
            <img :src="imageSrc" alt="" class="" />
        </button>
        <div v-if="examineItem">
            <p class="font-semibold text-black"> {{ props.name }}</p>
            <p class="text-xs text-black"> {{ props.description }}</p>
        </div>
<!-- action buttons -->
        <div v-if="actionsVisible" class="flex flex-col items-center">
            <button @click="emitEquipItem" class="rounded-md w-16 mt-1 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Equip</button>
            <button @click="emitUseItem" class="rounded-md w-16 mt-3 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Use</button>
            <button @click="emitDropItem" class="rounded-md w-16 mt-3 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Drop</button>
            <button @click="examineItem = !examineItem" class="rounded-md w-16 mt-3 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                {{ examineItem? 'Hide Details' : 'Examine' }}</button>
        </div>               
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        index:{},
        limit_by:{
            type: Number,
        },
        id: {},
        imageSrc: {},
        name:{},
        description: {},
    });

    const emit = defineEmits([
        'emitEquipItem',
        'emitDropItem',
    ])

// to toggle the actions log per item
    const actionsVisible = ref(false)
    function openActions() {
        actionsVisible.value = !actionsVisible.value;
    }
// to show/hide item details
    const examineItem = ref(false)

    function emitEquipItem() {
        emit('emitEquipItem', props.id);
    }
    function emitUseItem() {
        emit('emitUseItem', props.id);
    }
    function emitDropItem() {
        emit('emitDropItem', props.id);
    }

</script>