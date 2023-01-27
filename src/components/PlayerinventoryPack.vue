<template>
    <div v-if="index < limit_by" class="overflow-hidden bg-white mx-5 mt-8">
<!-- item image -->
        <button @click="openActions" class="pb-5 aspect-w-1 aspect-h-1 w-24 h-24 align-top">
            <img :src="imageSrc" alt="" class="w-24 h-24 " />
        </button>
<!-- action buttons -->
        <div v-if="actionsVisible" class="flex flex-col items-center">
        <!-- <div v-if="actionsVisible" class="flex flex-col items-center pt-3"> -->
            <button @click="emitequipItem(id)" class="rounded-md w-16 bg-slate-400 border border-black text-sm">
                Equip</button><br/>
            <button class="rounded-md w-16 bg-slate-400 border border-black text-sm">
                Use</button><br/>
            <button class="rounded-md w-16 bg-slate-400 border border-black text-sm">
                Drop</button>
            <button class="rounded-md w-16 bg-slate-400 border border-black text-sm">
                Examine</button>
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
            'limit_by',
        ],
        emits: [
            'emit-equip-item'
        ],
        setup(props, context) {
            const actionsVisible = ref(false);
            function openActions() {
                actionsVisible.value = !actionsVisible.value;
            }

            function emitequipItem() {
                context.emit('emit-equip-item', props.id);
            } 
            
            return {
                actionsVisible,
                openActions,
                emitequipItem,
            }
        }
    }
</script>