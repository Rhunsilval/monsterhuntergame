<template>
    <div class="grid grid-cols-1 font-normal font-serif mx-2">

<!-- start -->
        <div v-if="convoStart">
            <div class="text-sm leading-6 text-gray-900"> 
                <p class="text-lg font-bold">You know, I think maybe you can.</p>
                <p class="">I was in the middle of developing a new amulet when I ran out of some essential supplies.</p>
                <p class="">If you could procure some for me, it would be a huge help.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption1a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            What kind of amulet?</button>
                        <button @click="conversationOption1b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Of course!  What do you need?</button>                    
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div>
        </div>

<!-- conversation 1 options -->
        <div v-if="option1A">
            <div> 
                <p class="text-xl font-bold">A very useful one, I hope.</p>
                <p class="">If my design and enchantments work, it should provide significant protection against the undead.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption2a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            That does sound very useful!</button>
                        <button @click="conversationOption2b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Meh.  They're not that dangerous.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="option1B"> 
            <div> 
                <p class="text-lg font-bold">Nothing too difficult to obtain, though I do need them in some quantity.</p>
                <p class="">Some Green Chicken from the Headless Chickens you can find roaming around in the Farmlands around the village.</p>
                <p class="">And some Rotten Femurs from the Undead Soldiers terrorizing the Grasslands.</p>
                <p class="text-lg font-semibold">About 10 of each should do it.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption2c" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Ten of each is kind of a lot, though.  What do I get for doing this for you?</button>
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable" @click="acceptQuest3" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Consider it done!</button>
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable === false" @click="acceptQuest3" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Consider it done! <br/> But, could you show me where The Grasslands are?</button>
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
                <p class="">If you're willing to help, I will gladly reward you with</p>
                <p class="text-lg font-bold">one of my first prototypes. </p>
                <p class="">You can try it out and tell me how it works.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption3a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            It's a deal!  What do you need?</button>
                        <button @click="conversationOption3b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Wait.  You don't even know if it will work?</button>
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
                <p class="text-xl font-bold">Well, perhaps not to a skilled hunter such as yourself.</p>
                <p class="mt-2">But think of the other, less experienced hunters just starting out out there.</p>
                <p class="">Or the villagers and merchants just trying to live in this world.</p>
                <p class="text-2xl font-semibold">I'm sure they at least would find some value in something like that.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <!-- <div class="grid grid-cols-2 gap-3 w-72">  -->
                        <button @click="conversationOption1b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            I suppose you're right.  What do you need?</button>
                    <!-- </div> -->
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option2C"> 
            <div> 
                <p class="text-xl font-bold">Of course, I will compensate you for your work.</p>
                <p class="">I can offer you either</p>
                <p class="text-xl my-2">one of my first prototypes for you to test out.</p>
                <p class="">Or, if you prefer, I can compensate you with coin.</p>
                <p class="text-xl mt-2">I would be willing to pay 800 for the full delivery.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable" @click="acceptQuest1" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            I'll take the amulet.</button>
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable === false" @click="acceptQuest1" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            I'll take the amulet. <br/> If you could just show me where The Grasslands are ...</button>
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable" @click="acceptQuest2" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            I'll take the coin.</button>
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable === false" @click="acceptQuest2" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            I'll take the coin. <br/> But could you please tell me where I can find The Grasslands?</button>
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
                <p class="text-xl font-bold">Great!</p>
                <p class="">I need you to collect some artifacts from undead creatures for me.</p>
                <p class="">Some Green Chicken from the Headless Chickens you can find roaming around in the Farmlands around the village.</p>
                <p class="">And some Rotten Femurs from the Undead Soldiers terrorizing the Grasslands.</p>
                <p class="text-lg font-bold">About 10 of each should do it.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <!-- <div class="grid grid-cols-2 gap-3 w-72">  -->
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable" @click="acceptQuest1" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Great!  I'm on it!</button>
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable === false" @click="acceptQuest1" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            I can do that - if you can show me where The Grasslands are?</button>
                    <!-- </div> -->
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option3B"> 
            <div> 
                <p class="text-xl font-bold">Oh, I'm quite confident it will work.</p>
                <p class="">I'm just not entirely sure how well.</p>
                <p class="">Such is the nature of prototype development and experimentation. </p>
                <p class="text-2xl font-semibold">So, are you interested?</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-3 gap-3 w-72"> 
                        <button @click="conversationOption3a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Yes, I am.</button>
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Yes, but I don't really want an untested amulet.</button>
                        <button @click="endConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
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
                <p class="text-xl font-bold">Oh.  Well, that's fine. </p>
                <p class="">If you're not interested in an amulet,</p>
                <p class="">I could pay you for your efforts in coin.</p>
                <p class="text-lg">I'm willing to pay 800 upon full delivery.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <!-- <div class="grid grid-cols-2 gap-3 w-72">  -->
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable" @click="acceptQuest2" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            Agreed!  I'll be back soon.</button>
                        <button v-if="conditionalStore.worldMap.grasslandsAvailable === false" @click="acceptQuest2" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-[#84b0e3] hover:bg-[#225691] hover:text-white">
                            I can do that - if you can just show me where The Grasslands are?</button>
                    <!-- </div> -->
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
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

    const convoStart = ref(true);

    const option1A = ref(false);
    const option1B = ref(false);
    function conversationOption1a() {
        convoStart.value = false;
        option1A.value = true;
    }
    function conversationOption1b() {
        convoStart.value = false;
        option2B.value = false;
        option1B.value = true;
    }

    const option2A = ref(false);
    const option2B = ref(false);
    const option2C = ref(false);
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
    function conversationOption2c() {
        option1A.value = false;
        option1B.value = false;
        option2C.value = true;
    }

    const option3A = ref(false);
    const option3B = ref(false);
    function conversationOption3a() {
        option2A.value = false;
        option3B.value = false;
        option3A.value = true;
    }
    function conversationOption3b() {
        option2A.value = false;
        option3B.value = true;
    }

    const option4A = ref(false);
    function conversationOption4a() {
        option3B.value = false;
        option4A.value = true;
    }

    let magicshopQuest1a = questStore.quests.find(quest => quest.id === 'magicshopQuest1a');
    function acceptQuest1() {
        conditionalStore.magicShop.magicQuest1Started = true;
        conditionalStore.magicShop.questAvailable = false;
        questStore.questStarted = true;
        questStore.questID = "magicshopQuest1a";
        conditionalStore.worldMap.grasslandsAvailable = true;
        magicshopQuest1a.active = true;
        playerStore.playerActiveQuests.push(magicshopQuest1a);
        endConversation();
    }

    let magicshopQuest1b = questStore.quests.find(quest => quest.id === 'magicshopQuest1b');
    function acceptQuest2() {
        conditionalStore.magicShop.magicQuest1Started = true;
        conditionalStore.magicShop.questAvailable = false;
        questStore.questStarted = true;
        questStore.questID = "magicshopQuest1b";
        conditionalStore.worldMap.grasslandsAvailable = true;
        magicshopQuest1b.active = true;
        playerStore.playerActiveQuests.push(magicshopQuest1b);
        endConversation();
    }

    let magicshopQuest1c = questStore.quests.find(quest => quest.id === 'magicshopQuest1c');
    function acceptQuest3() {
        conditionalStore.magicShop.magicQuest1Started = true;
        conditionalStore.magicShop.questAvailable = false;
        questStore.questStarted = true;
        questStore.questID = "magicshopQuest1c";
        conditionalStore.worldMap.grasslandsAvailable = true;
        magicshopQuest1c.active = true;
        playerStore.playerActiveQuests.push(magicshopQuest1c);
        endConversation();
    }

</script>