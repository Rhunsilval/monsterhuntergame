<template>
    <div v-if="props.index < 5" class="overflow-hidden bg-white mx-5 mt-2">
<!-- item image -->
        <button @click="openActions" class="border border-gray-500">
            <img :src="imageSrc" alt="" class="w-20 h-20" />
        </button>
        <div v-if="itemInfoVisible" @click="examineItem" class=" w-full">
            <p class="text-xs"> {{ props.name }}</p>
            <!-- too long to see on screen.  shortened version? -->
            <!-- <p> {{ props.description }}</p> -->
            <!-- <p class="text-xs"> {{ props.value }}</p> -->
        </div>
<!-- options buttons -->
        <div v-if="actionsVisible" class="flex flex-col items-center" >
            <button @click="examineItem" class="rounded-md px-1 py-1 mt-2 bg-slate-300 border border-black text-sm- font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Examine</button>
            <button @click="emitUnequipItem" class="rounded-md px-1 py-1 mt-2 bg-slate-300 border border-black text-sm- font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Unequip</button>
            <button @click="emitDropItem" class="rounded-md px-1 py-1 mt-2 bg-slate-300 border border-black text-sm- font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Drop</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        index: {},
        id: {},
        imageSrc: {},
        name: {},
        // description: {},
        // value: {},
    });

    const emit = defineEmits([
        'emitUnequipItem',
        'emitDropItem',
    ])

// to toggle the actions options per item
    const actionsVisible = ref(false)
    function openActions() {
        actionsVisible.value = !actionsVisible.value;
    }

    const itemInfoVisible = ref(false)
    function examineItem() {
        itemInfoVisible.value = !itemInfoVisible.value;
    }

    function emitUnequipItem() {
        emit('emitUnequipItem', props.id);
    }
    function emitDropItem() {
        emit('emitDropItem', props.id);
    }

</script>