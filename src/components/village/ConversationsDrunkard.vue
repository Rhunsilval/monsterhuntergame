<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-1">
        <!-- vanishing text if a conversation is started -->
            <div v-if="!anyConversation" class="w-full "> 
                <h1 class="text-3xl font-bold">Thanks for the drink, *hic* friend!</h1>
            </div>

            <div class="flex justify-center my-4"> 
                <img src="../../assets/images/quests/Pub_drunkard.png" class="h-52 rounded-xl border border-gray-500 "/>
            </div>

            <div >
                <div v-if="!anyConversation">
                    <p class="text-xl font-semibold">Hey, you want to hear something crazy?</p>
                </div>

                <div v-if="!anyConversation" class="flex justify-center mt-8">
                    <div class="grid grid-cols-2 gap-3"> 
                        <button @click="startConvo1" class="px-2 py-2 border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Sure!</button>
                        <button @click="endConversations" class="px-2 py-2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white  ">
                            No, thanks.</button>
                    </div>
                </div>

                <div v-if="conditionalStore.bigDawgPub.convo1Available === true"> 
                    <drunkard-quest-one
                        @emit-end-conversation="endConversation1"
                    ></drunkard-quest-one>
                </div>  

            </div>            
        </div>
    </div>
</template>

<script setup> 
    import { ref } from 'vue';
    import { useConditionalsStore } from '@/stores/conditionals';
    import DrunkardQuestOne from './drunkardQuestOne.vue'

    const emit = defineEmits([
            'emit-end-conversation',
    ])
    function endConversations() {
        emit('emit-end-conversation');
    }
    
    const conditionalStore = useConditionalsStore();

    const anyConversation = ref(true)   //header bar - visible when player arrives, turns off when quest conversation starts
    
    const convo1 = ref(true)
    function startConvo1() {
        anyConversation.value = true;
        convo1.value = true;        
    }
    function endConversation1() {
        anyConversation.value = false;
        convo1.value = false;
        endConversations();
    }


</script>