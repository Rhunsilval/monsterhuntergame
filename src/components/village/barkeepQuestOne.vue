<template>
    <div class="grid grid-cols-1">

<!-- start -->
        <div v-if="convoStart" class="text-center flex justify-center"> 
            <div class="grid grid-cols-1">
                <div class=""> 
                    <p class="text-xl font-semibold">Hmmm. </p>
                    <p class="text-lg">Depends.</p>
                    <p class="text-lg ">Can you be discrete?</p>
                </div>
                <div class="flex justify-center mt-8">
                    <div class="grid grid-cols-1 ">
                        <div class="grid grid-cols-2 gap-3"> 
                            <button @click="conversationOption1a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                Discretion is my middle name!</button>
                            <button @click="conversationOption1b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                Of course.</button>                    
                        </div>
                        <div class="mt-3"> 
                            <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                I need to go.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!-- conversation 1 options -->
        <div v-if="option1A">
            <div> 
                <p class="text-lg">Yes. <br/> Right.</p>
                <p class="">Sorry, friend.  But now that I think about it, I was mistaken.</p>
                <p class="text-xl font-semibold">Can't think of anything worth talking about.</p>
            </div>
            <div class="mt-8 w-80">
                <div class="mt-3"> 
                    <button @click="endConversation" class="px-2 py-2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                        Oh.  Okay then.</button>
                </div>
            </div>                    
        </div>
        <div v-if="option1B"> 
            <div> 
                <p class="text-xl font-bold">Good.</p>
                <p v-if="playerStore.playerLevel < 5" class="">Well, you look like you're new around town.<br/>  Probably trying to make a good impression with the folks over at the Guild. </p>
                <p v-if="playerStore.playerLevel > 5" class="">I've seen you around.  Working hard to make a good impression with the Guild.</p>
                <p class="text-2xl font-semibold">Yes?</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption2a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Yes.</button>
                        <button @click="conversationOption2b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Pfft. Like I care what the guild thinks!</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>


<!-- conversation 2 options -->
        <div v-if="option2A"> 
            <div> 
                <p class="text-xl font-bold">I thought so.</p>
                <p class="">Well, you know, friend.  There are multiple ways of making an impression over there.</p>
                <p class="">In spite of what they WANT you to think, the truth is that </p>
                <p class="">you can spend all day out in the wilds killing monsters, <br/>and still barely make it onto the leaderboard.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption3a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Tell me about it.</button>
                        <button @click="conversationOption3b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Do you know a better way?</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option2B"> 
            <div> 
                <p class="text-xl font-bold">Really?</p>
                <p class="">Well, then it looks like you got things in hand, friend.</p>
                <p class="">Just keep carrying on with what you're doing.</p>
                <p class="text-2xl font-semibold">I'm sure it'll work out for you, eventually.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption3a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Wait!  I didn't really mean that!</button>
                        <button @click="reallyEndConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Agreed.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>

<!-- conversation 3 options -->
        <div v-if="option3A"> 
            <div> 
                <p class="text-xl font-bold">Uh huh.</p>
                <p class="">Well, as it turns out there's ... someone ... of some importance to the Guild, </p>
                <p class="">who has something of a situation that could use some discrete handling.  Help me help them, and</p>
                <p class="text-2xl font-semibold">you could also help yourself.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            What would I have to do?</button>
                        <button @click="conversationOption4b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            I can't help them directly?</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option3B"> 
            <div> 
                <p class="text-xl font-bold">As a matter of fact, I do.</p>
                <p class="">I've got a friend in the Guild who needs some help.</p>
                <p class="">Some DISCRETE help. <br/> I'm looking for the right person to lend a hand.  And you look like you just might be </p>
                <p class="text-2xl font-semibold">the right fit for the job.</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Yes, I am!</button>
                        <button @click="endConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Eh, maybe not.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        
<!-- conversation 4 options -->
        <div v-if="option4A"> 
            <div> 
                <p class="text-xl font-bold">It's easy.</p>
                <p class="">There's an item that's needed that's for sale in a shop here in town.</p>
                <p class="">They can't get it themselves for ... reasons. </p>
                <p class="">And if I go to get it for them, well ... <br/> I can't just show up with that kind of money in hand without raising questions.</p>
                <p class="">But if an eager adventurer like YOURSELF were to buy it ...</p>
                <p class="text-2xl font-semibold">No one would think twice.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption5a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Count me in!</button>
                        <button @click="conversationOption5b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            How does this help ME?</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option4B"> 
            <div> 
                <p class="text-xl font-bold">No.</p>
                <p class="">You don't know who it is, and I won't tell you.</p>
                <p class="">If you help, I'll make sure they know it was YOU who helped, but that's as good as I'll be able to do.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Okay.  What's the job?</button>
                        <button @click="conversationOption5c" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            And I'm just supposed to trust you?</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div>
        </div>
        
<!-- conversation option 5 -->
        <div v-if="option5A"> 
            <div> 
                <p class="text-xl font-bold">Glad to hear it.</p>
                <p class="text-lg font-semibold">The item is an Enchanted Ring of Vigor.</p>
                <p class="">Old Abernathy's got one in his shop.  Way overpriced, but no one else has got one to undercut him.</p>
                <p class="">Buy it and bring it to me.  I'll pay you back for it, and</p>
                <p class="text-2xl font-semibold">I'll make sure the Guild knows who helped them out.</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="acceptQuest1" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Done!</button>
                        <button @click="reallyEndConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            You know what, nevermind.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option5B"> 
            <div> 
                <p class="text-xl font-bold">Not the brightest beer on tap, are you?</p>
                <p class="">You'd be helped because I would be letting my friend know who it was who helped me help them.</p>
                <p class="text-sm">But if you don't think word of mouth is worth anything, then</p>
                <p class="text-2xl font-semibold">that's alright.</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption5a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            No.  I'll help.</button>
                        <button @click="reallyEndConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Cool.  Bye.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option5C"> 
            <div> 
                <p class="text-xl font-bold">You don't have to do anything.</p>
                <p class="text-lg font-semibold">Some friendly advise though - </p>
                <p class="">being cautious is one thing.  Being insulting is another.</p>
                <p class="text-sm">Now, if you'll excuse me.</p>
                <p class="text-2xl font-semibold">I need to get back to work.</p>
            </div>
            <div class="mt-8 w-80">
                <div class="mt-3"> 
                    <button @click="endConversation" class="px-2 py-2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                        Oh.  Okay then.</button>
                </div>
            </div>  
        </div>
    </div>
</template>

<script setup> 
    import { ref } from 'vue';
    import { useConditionalsStore } from '@/stores/conditionals';
    import { useQuestStore } from '@/stores/quests';
    import { usePlayerStore } from '@/stores/player';

    const conditionalStore = useConditionalsStore();
    const questStore = useQuestStore();
    const playerStore = usePlayerStore();

    const emit = defineEmits([
            'emit-end-conversation',
    ])
    function endConversation() {
        emit('emit-end-conversation');
    }
    function reallyEndConversation() {
        conditionalStore.conversationsDrunkard.convo1Available = false;
        conditionalStore.conversationsDrunkard.convo2Availalbe = true;
        endConversation();
    }

    const convoStart = ref(true);

    const option1A = ref(false);
    const option1B = ref(false);
    function conversationOption1a() {
        convoStart.value = false;
        option1A.value = true;
    }
    function conversationOption1b() {
        convoStart.value = false;
        option1B.value = true;
    }

    const option2A = ref(false);
    const option2B = ref(false);
    function conversationOption2a() {
        option1A.value = false;
        option1B.value = false;
        option2A.value = true;
    }
    function conversationOption2b() {
        option1A.value = false;
        option1B.value = false;
        option2B.value = true;
    }

    const option3A = ref(false);
    const option3B = ref(false);
    function conversationOption3a() {
        option2A.value = false;
        option2B.value = false;
        option3A.value = true;
    }
    function conversationOption3b() {
        option2A.value = false;
        option3B.value = true;
    }

    const option4A = ref(false);
    const option4B = ref(false);
    function conversationOption4a() {
        option3A.value = false;
        option3B.value = false;
        option4A.value = true;
    }
    function conversationOption4b() {
        option3A.value = false;
        option4A.value = false;
        option4B.value = true;
    }

    const option5A = ref(false);
    const option5B = ref(false);
    const option5C = ref(false);
    function conversationOption5a() {
        option4A.value = false;
        option4B.value = false;
        option5B.value = false;
        option5A.value = true;
    }
    function conversationOption5b() {
        option4A.value = false;
        option4B.value = false;
        option5B.value = true;
    }
    function conversationOption5c() {
        option4B.value = false;
        option5C.value = true;
    }

    let barkeepQuest1 = questStore.quests.find(quest => quest.id === 'barkeepQuest1');
    function acceptQuest1() {
        conditionalStore.bigDawgPub.barkeepQuestAccepted = true;
        conditionalStore.conversationsBarkeep.barkeepQuest1Activated = true;
        conditionalStore.conversationsBarkeep.convo1Available = false;
        barkeepQuest1.active = true;
        playerStore.playerActiveQuests.push(barkeepQuest1);
        endConversation();
    }

</script>