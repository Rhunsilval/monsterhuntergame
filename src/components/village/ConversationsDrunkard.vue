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

                <div v-if="convo1"> 
                    <drunkard-quest-one
                        @emit-end-conversation="endConversation1"
                    ></drunkard-quest-one>
                </div>

                <!-- conversation text 2 -->
                <!-- <div v-if="convo1Text2"> 
                    <p class="text-xl font-semibold">So, I was walking home the other night,</p>
                    <p class="text-lg">you know, just minding my own *hic* business.</p>
                    <p class="text-lg">It was late.  Like, after they kicked me out of here late, right?</p>
                    <p class="text-2xl font-semibold">And guess what happened!</p>
                </div>
                <div v-if="convo1Button2" class="flex justify-center mt-8">
                    <div class="grid grid-cols-1 align-middle">
                        <div class="grid grid-cols-2 gap-3 w-72"> 
                            <button @click="startConvo1_2a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                I have no idea.</button>
                            <button @click="startConvo1_2b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                You tripped and fell?</button>                    
                        </div>
                        <div class="mt-3"> 
                            <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                I need to go.</button>
                        </div>
                    </div>
                </div> -->
                <!-- conversation text 3 options -->
                <!-- <div v-if="convo1Text3a">
                    <div> 
                        <p class="text-3xl font-bold">BAM!</p>
                        <p class="text-lg">Smacked right in the head!</p>
                        <p class="text-lg">Someone threw a *hic* ... a book at me!</p>
                        <p class="text-2xl font-semibold">Nearly knocked me right out!</p>
                    </div>
                    <div class="flex justify-center mt-8 -ml-8 w-80">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button @click="startConvo1_3a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Oh my!</button>
                                <button @click="startConvo1_3b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Why would someone do that?</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div v-if="convo1Text3b"> 
                    <div> 
                        <p class="text-xl font-bold">What? No, I *hic* didn't!</p>
                        <p class="text-lg font-semibold">Well, yeah, I fell.  But not because I tripped!</p>
                        <p class="">I'm not always *hic* ... I wasn't even drunk. I fell because</p>
                        <p class="text-2xl font-semibold">someone threw a book at me!</p>
                    </div>
                    <div class="flex justify-center mt-8">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button @click="startConvo1_3b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    What?  Why?</button>
                                <button @click="startConvo1_3a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Who would do that?</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div> 
                </div> -->
                <!-- conversation text 4 options -->
                <!-- <div v-if="convo1Text4a"> 
                    <div> 
                        <p class="text-xl font-bold">I know, right!?</p>
                        <p class="">It was really weird.  But, I think *hic* ...</p>
                        <p class="">I think it was also fate. Like the ... the whole UNIVERSE wanted me to know something!</p>
                        <p class="text-2xl font-semibold">I read the book.</p>
                    </div>
                    <div class="flex justify-center mt-8">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button @click="startConvo1_4a" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Oh? What was it about?</button>
                                <button @click="startConvo1_4b" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Wait, you can read?</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div v-if="convo1Text4b"> 
                    <div> 
                        <p class="text-xl font-bold">I don't know!</p>
                        <p class="">But you're missing the *hic* point!</p>
                        <p class="">It doesn't matter, why.  What matters is that</p>
                        <p class="text-2xl font-semibold">the universe chose me!</p>
                    </div>
                    <div class="flex justify-center -ml-6 mt-8">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button @click="startConvo1_4c" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Chose you?</button>
                                <button @click="startConvo1_4d" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    The universe, huh?</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div> 
                </div> -->

                <!-- conversation text 5 options -->
                <!-- <div v-if="convo1Text5a"> 
                    <div> 
                        <p class="text-xl font-bold">The TRUTH.</p>
                        <p class="">About ... about everything!  The whole *hic* ... the whole dang WORLD!</p>
                        <p class="">Like, everything that people think they know- it isn't true! </p>
                        <p class="text-2xl font-semibold">Not really!</p>
                    </div>
                    <div class="flex justify-center mt-8">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Like what?</button>
                                <button class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Uh huh.</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div v-if="convo1Text5b"> 
                    <div> 
                        <p class="text-xl font-bold">Funny.</p>
                        <p class="">Real funny.  Why are you such a jerk, huh?</p>
                        <p class="">But you know what?  It doesn't even *hic* matter.  I can be the bigger person.  You don't want to know the truth?</p>
                        <p class="text-2xl font-semibold">Fine with *hic* me!</p>
                    </div>
                    <div class="flex justify-center -ml-6 mt-8">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Wait.  What truth?</button>
                                <button @click="failConvo1" class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Cool.  Whatever.</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div v-if="convo1Text5c"> 
                    <div> 
                        <p class="text-xl font-bold">Yes!  Chose me!</p>
                        <p class="">The book - it told me everything!  The whole *hic* truth!</p>
                        <p class="">Not just like, what you THINK is the truth.  But the real ... </p>
                        <p class="text-2xl font-semibold">the really REAL *hic* truth!</p>
                    </div>
                    <div class="flex justify-center -ml-6 mt-8">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    What did it say?</button>
                                <button class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Wow.  That's ... special.</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div v-if="convo1Text5d"> 
                    <div> 
                        <p class="text-xl font-bold">Yeah!  The universe!</p>
                        <p class="">You know that ... that thing that's EVERYTHING!?</p>
                        <p class="">I read it.  The book.  It told me the *hic* truth about everything. </p>
                        <p class="text-2xl font-semibold">I AM BURDENED WITH GLORIOUS *hic* PURPOSE!</p>
                    </div>
                    <div class="flex justify-center -ml-6 mt-8">
                        <div class="grid grid-cols-1 align-middle">
                            <div class="grid grid-cols-2 gap-3 w-72"> 
                                <button class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    What truth?</button>
                                <button class="px-2 py-2 w-full border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                                    Well, okay then.</button>
                            </div>
                            <div class="mt-3"> 
                                <button @click="endConvo1" class="px-2 py-2 w-1/2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white">
                                    I need to go.</button>
                            </div>
                        </div>
                    </div> 
                </div> -->
                
                
            </div>
            
        </div>
    </div>
</template>

<script setup> 
    import { ref } from 'vue';
    import DrunkardQuestOne from './drunkardQuestOne.vue'

    const emit = defineEmits([
            'emit-end-conversation',
    ])
    function endConversations() {
        emit('emit-end-conversation');
    }

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