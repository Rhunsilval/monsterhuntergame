<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-1">
        <!-- vanishing text if a conversation is started -->
            <div v-if="!anyConversation" class="w-full "> 
                <h1 class="text-3xl font-bold">Well, thank you, friend.</h1>
            </div>

            <div class="flex justify-center my-4"> 
                <img src="../../assets/images/quests/Pub_barkeep.png" class="h-52 rounded-xl border border-gray-500 "/>
            </div>

            <div >
                <div v-if="!anyConversation">
                    <p class="text-xl font-semibold">No one ever thinks of buying ME a drink.</p>
                </div>

                <div v-if="!anyConversation" class="flex justify-center mt-8">
                    <div class="grid grid-cols-2 gap-3"> 
                        <button v-if="conditionalStore.conversationsBarkeep.convo1Available" @click="startConvo1" class="px-2 py-2 border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Hear anything good lately?</button>
                        <button @click="endConversations" class="px-2 py-2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white  ">
                            Oh, look at the time!</button>
                    </div>
                </div>

                <div v-if="conditionalStore.conversationsBarkeep.convo1Started"> 
                    <div v-if="conditionalStore.conversationsBarkeep.convo1Available"> 
                        <barkeep-quest-one
                            @emit-end-conversation="endConversation1"
                        ></barkeep-quest-one>
                    </div> 
                </div>                

            </div>            
        </div>
    </div>
</template>

<script setup> 
    import { ref } from 'vue';
    import { useConditionalsStore } from '@/stores/conditionals';
    import BarkeepQuestOne from '../quests/barkeepQuestOne.vue'

    const emit = defineEmits([
            'emit-end-conversation',
    ])
    function endConversations() {
        emit('emit-end-conversation');
    }
    
    const conditionalStore = useConditionalsStore();

    const anyConversation = ref(false)   //header bar - visible when player arrives, turns off when quest conversation starts
    
    function startConvo1() {
        anyConversation.value = true;
        conditionalStore.conversationsBarkeep.convo1Started = true;        
    }
    function endConversation1() {
        anyConversation.value = false;
        conditionalStore.conversationsBarkeep.convo1Started = false;
        endConversations();
    }

</script>