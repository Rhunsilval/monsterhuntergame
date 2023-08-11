<template>
    <div class="grid grid-cols-1"> 

<!-- start -->
        <div v-if="convoStart"> 
            <div> 
                <p class="text-xl font-semibold">So, I was walking home the other night,</p>
                <p class="text-lg">you know, just minding my own *hic* business.</p>
                <p class="text-lg">It was late.  Like, after they kicked me out of here late, right?</p>
                <p class="text-2xl font-semibold">And guess what happened!</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption1a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            I have no idea.</button>
                        <button @click="conversationOption1b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            You tripped and fell?</button>                    
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
                <p class="text-3xl font-bold">BAM!</p>
                <p class="text-lg">Smacked right in the head!</p>
                <p class="text-lg">Someone threw a *hic* ... a book at me!</p>
                <p class="text-2xl font-semibold">Nearly knocked me right out!</p>
            </div>
            <div class="flex justify-center mt-8 -ml-8 w-80">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption2a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Oh my!</button>
                        <button @click="conversationOption2b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Why would someone do that?</button>
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
                <p class="text-xl font-bold">What? No, I *hic* didn't!</p>
                <p class="text-lg font-semibold">Well, yeah, I fell.  But not because I tripped!</p>
                <p class="">I'm not always *hic* ... I wasn't even drunk. I fell because</p>
                <p class="text-2xl font-semibold">someone threw a book at me!</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption2b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            What?  Why?</button>
                        <button @click="conversationOption2a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Who would do that?</button>
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
                <p class="text-xl font-bold">I know, right!?</p>
                <p class="">It was really weird.  But, I think *hic* ...</p>
                <p class="">I think it was also fate. Like the ... the whole UNIVERSE wanted me to know something!</p>
                <p class="text-2xl font-semibold">I read the book.</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption3a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Oh? What was it about?</button>
                        <button @click="conversationOption3b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Wait, you can read?</button>
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
                <p class="text-xl font-bold">I don't know!</p>
                <p class="">But you're missing the *hic* point!</p>
                <p class="">It doesn't matter, why.  What matters is that</p>
                <p class="text-2xl font-semibold">the universe chose me!</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption3c" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Chose you?</button>
                        <button @click="conversationOption3d" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            The universe, huh?</button>
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
                <p class="text-xl font-bold">The TRUTH.</p>
                <p class="">About ... about everything!  The whole *hic* ... the whole dang WORLD!</p>
                <p class="">Like, everything that people think they know- it isn't true! </p>
                <p class="text-2xl font-semibold">Not really!</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Like what?</button>
                        <button @click="conversationOption4b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Uh huh.</button>
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
                <p class="text-xl font-bold">Funny.</p>
                <p class="">Real funny.  Why are you such a jerk, huh?</p>
                <p class="">But you know what?  It doesn't even *hic* matter.  I can be the bigger person.  You don't want to know the truth?</p>
                <p class="text-2xl font-semibold">Fine with *hic* me!</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Wait.  What truth?</button>
                        <button @click="reallyEndConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Cool.  Whatever.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option3C"> 
            <div> 
                <p class="text-xl font-bold">Yes!  Chose me!</p>
                <p class="">The book - it told me everything!  The whole *hic* truth!</p>
                <p class="">Not just like, what you THINK is the truth.  But the real ... </p>
                <p class="text-2xl font-semibold">the really REAL *hic* truth!</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            What did it say?</button>
                        <button @click="conversationOption4b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Wow.  That's ... special.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        <div v-if="option3D"> 
            <div> 
                <p class="text-xl font-bold">Yeah!  The universe!</p>
                <p class="">You know that ... that thing that's EVERYTHING!?</p>
                <p class="">I read it.  The book.  It told me the *hic* truth about everything. </p>
                <p class="text-2xl font-semibold">I AM BURDENED WITH GLORIOUS *hic* PURPOSE!</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            What truth?</button>
                        <button @click="conversationOption4b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Well, okay then.</button>
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
                <p class="text-xl font-bold">Oceans!</p>
                <p class="">There's a huge! *hic* GIANT ocean!</p>
                <p class="">It's hiding right there in plain sight!  It's like this ocean, it has a *hic* consciousness </p>
                <p class="">and it doesn't want anyone to know it's there.  So, it's in disguise </p>
                <p class="text-2xl font-semibold">as a DESERT!</p>
            </div>
            <div class="flex justify-center mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption4b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            That's ridiculous.</button>
                        <button @click="conversationOption5" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Wow!</button>
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
                <p class="text-xl font-bold">You don't believe me.</p>
                <p class="">You know what, that's *hic* ... that's fine.</p>
                <p class="">No one else in this small-minded town believes me either, but I'll show *hic* ... show you!</p>
                <p class="text-2xl font-semibold">I'LL SHOW YOU ALL!! *belch*</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="mt-3 w-72"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        
<!-- conversation option 5 -->
        <div v-if="option5"> 
            <div> 
                <p class="text-xl font-bold">Wow is right!</p>
                <p class="text-lg font-semibold">I can prove it too!</p>
                <p class="">Well ... I mean.  I know how *hic* ... HOW to prove it.  I can't ... I can't really prove it myself.</p>
                <p class="text-sm">It's too dangerous for someone like me to go out there.</p>
                <p class="text-2xl font-semibold">But I can prove it!</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption6" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Maybe I can help?</button>
                        <button @click="endConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Cool.  Good luck with that.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        
<!-- conversation option 6 -->
        <div v-if="option6"> 
            <div> 
                <p class="text-xl font-bold">You know what?</p>
                <p class="">I bet you can!</p>
                <p class="">You know ... you know how there's Sand Crabs out there?</p>
                <p class="">Well, they're out there because they're CRABS and it's the OCEAN!</p>
                <p class="">So ... yeah.  If you could bring me, like, just a bunch of crabs.</p>
                <p class="text-2xl font-semibold">Like, 3 Sand Crab Shells,</p>
                <p class="">then that'll prove to everyone that I'm right and they're all just *burp* ... stupid!</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption7A" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            I'll do it!</button>
                        <button @click="conversationOption7B" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            What's in it for me?</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>
        
<!-- conversation option 7 -->
        <div v-if="option7A"> 
            <div> 
                <p class="text-xl font-bold">Great!  You know where the desert is, right?</p>
                <p class="">Go straight south from here and just keep on *hic* walking.  It's a bit further away than the Moving Jungle and ... and Noxus Swamp.</p>
                <p class="text-lg">But you can't miss it!  Look for the sand.  Lots and lots of sand! </p>
            </div>
            <div class="flex justify-center -ml-6 mt-8"> 
                <div class="grid grid-cols-1 align-middle"> 
                    <div class=""> 
                        <button @click="acceptQuest1A" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Okay!</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="option7B"> 
            <div> 
                <p class="text-xl font-bold">What do you mean 'what's in it for you'?</p>
                <p class="">It's not about the *hic* ... the money!  It's about the principle!  It's about the TRUTH!!</p>
                <p class="">But fine!  If money's what you care about, then money's what you'll get.</p>
                <p class="">I want 3 shells.  I'll give you 100 coins each.</p>
                <p class="text-2xl font-semibold">That's 300 coins.</p>
            </div>
            <div class="flex justify-center -ml-6 mt-8">
                <div class="grid grid-cols-1 align-middle">
                    <div class="grid grid-cols-2 gap-3 w-72"> 
                        <button @click="conversationOption8" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            I accept.</button>
                        <button @click="endConversation" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            No, thanks.</button>
                    </div>
                    <div class="mt-3"> 
                        <button @click="endConversation" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                            I need to go.</button>
                    </div>
                </div>
            </div> 
        </div>

<!-- conversation option 8 -->
        <div v-if="option8"> 
            <div> 
                <p class="text-xl font-bold">Fine.  You know where the desert is, right?</p>
                <p class="">Go straight south from here and just keep on *hic* walking.</p>
                <p class="">It's a bit further away than the Moving Jungle and ... and Noxus Swamp.</p>
                <p class="">But you can't miss it!  Look for the sand.  Lots and lots of sand! </p>
            </div>
            <div class="flex justify-center -ml-6 mt-8"> 
                <div class="grid grid-cols-1 align-middle"> 
                    <div class=""> 
                        <button @click="acceptQuest1B" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Fine.</button>
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
    const option3C = ref(false);
    const option3D = ref(false);
    function conversationOption3a() {
        option2A.value = false;
        option3A.value = true;
    }
    function conversationOption3b() {
        option2A.value = false;
        option3B.value = true;
    }
    function conversationOption3c() {
        option2B.value = false;
        option3C.value = true;
    }
    function conversationOption3d() {
        option2B.value = false;
        option3D.value = true;
    }

    const option4A = ref(false);
    const option4B = ref(false);
    function conversationOption4a() {
        option3A.value = false;
        option3B.value = false;
        option3C.value = false;
        option3D.value = false;
        option4A.value = true;
    }
    function conversationOption4b() {
        option3A.value = false;
        option3C.value = false;
        option3D.value = false;
        option4A.value = false;
        option4B.value = true;
    }

    const option5 = ref(false);
    function conversationOption5() {
        option4A.value = false;
        option5.value = true;
    }

    const option6 = ref(false);
    function conversationOption6() {
        option5.value = false;
        option6.value = true;
    }

    const option7A = ref(false);
    const option7B = ref(false);
    function conversationOption7A() {
        option6.value = false;
        option7A.value = true;
    }
    function conversationOption7B() {
        option6.value = false;
        option7B.value = true;
    }
    
    const option8 = ref(false);
    function conversationOption8() {
        option7B.value = false;
        option8.value = true;
    }

    let drunkardQuest1 = questStore.quests.find(quest => quest.id === 'drunkardQuest1');
    function acceptQuest1A() {
        // full treasure
        conditionalStore.bigDawgPub.drunkardQuestAccepted = true;
        conditionalStore.conversationsDrunkard.drunkardQuest1Activated = true;
        conditionalStore.conversationsDrunkard.convo1Available = false;
        conditionalStore.worldMap.desertAvailable = true;
        drunkardQuest1.active = true;
        drunkardQuest1.playerXP = 300;
        drunkardQuest1.coins = 300;
        playerStore.playerActiveQuests.push(drunkardQuest1);
        endConversation();
    }
    function acceptQuest1B() {
        // 300 coin treasure
        conditionalStore.bigDawgPub.drunkardQuestAccepted = true;
        conditionalStore.conversationsDrunkard.drunkardQuest1Activated = true;
        conditionalStore.conversationsDrunkard.convo1Available = false;
        conditionalStore.worldMap.desertAvailable = true;
        drunkardQuest1.active = true;
        drunkardQuest1.coins = 300;
        playerStore.playerActiveQuests.push(drunkardQuest1);
        endConversation();
    }

</script>