<template>
    <div v-if="props.index < props.limit_by" class="overflow-hidden bg-white mt-8">
<!-- item image -->
        <button @click="openActions" class="pb-3 mb-2 w-24 align-top ">
            <img :src="imageSrc" alt="" class="h-24 w-24 border border-gray-400" />
        </button>
        <div v-if="examineItem" class="-mt-24 mb-10 ">
            <div class="">
                <p class="font-semibold text-black bg-gray-200 opacity-80 "> {{ props.name }}</p>
                <p class="text-xs text-black bg-gray-200 opacity-80 "> {{ props.description }}</p>
                <p>{{ props.uses }}</p>
            </div>
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
        value:{},
        uses: {},
    });

    const emit = defineEmits([
        'emitEquipItem',
        'emitUseItem',
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