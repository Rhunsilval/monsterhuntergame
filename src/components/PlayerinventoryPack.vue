<template>
    <div v-if="index < limit_by" class="overflow-hidden bg-white mx-5 mt-8">
<!-- item image -->
        <button @click="openActions" class="pb-5 mb-2 aspect-w-1 aspect-h-1 w-24 h-24 align-top">
            <img :src="imageSrc" alt="" class="w-24 h-24" />
        </button>
        <div v-if="examineItem">
            <p class="font-semibold"> {{ name }}</p>
            <p class="text-xs "> {{ value }}</p>
        </div>
<!-- action buttons -->
        <div v-if="actionsVisible" class="flex flex-col items-center">
        <!-- <div v-if="actionsVisible" class="flex flex-col items-center pt-3"> -->
            <button @click="emitequipItem(id)" class="rounded-md w-16 mt-1 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Equip</button>
            <button class="rounded-md w-16 mt-3 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Use</button>
            <button @click="emitDropItem(id)" class="rounded-md w-16 mt-3 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                Drop</button>
            <button @click="examineItem = !examineItem" class="rounded-md w-16 mt-3 px-1 py-1 bg-slate-300 border border-black text-sm font-medium hover:bg-slate-500 hover:text-white hover:border-2">
                {{ examineItem? 'Hide Info' : 'Show Info' }}</button>
        </div>               
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        components: [],
        props: [
            'id',
            'imageSrc',
            'index',
            'name',
            'value',
            'limit_by',
        ],
        emits: [
            'emit-equip-item',
            'emit-drop-item'
        ],
        setup(props, context) {
            const actionsVisible = ref(false);
            function openActions() {
                actionsVisible.value = !actionsVisible.value;
            }

            function emitequipItem() {
                context.emit('emit-equip-item', props.id);
            } 
            function emitDropItem() {
                context.emit('emit-drop-item', props.id);
            }
            
            const examineItem = ref(false)

            return {
                actionsVisible,
                openActions,
                emitequipItem,
                emitDropItem,
                examineItem,
            }
        }
    }
</script>