<template>
    <the-header></the-header> 
     
    <div class="bg-[url('../assets/images/quests/Pub.png')] bg-cover max-w-full  ">
<!-- landing page -->
      <div v-if="!conversationStarted">
        <div class="flex justify-center">
          <div class="text-center w-2/3 bg-white bg-opacity-95 flex justify-center pb-3">
              <div class="pt-3 ">
                  <p class="font-extrabold font-serif text-7xl ">The Big Dawg</p>                
              </div>             
          </div>        
        </div>
        <div v-if="chosenCharacterID === 'drunkard1'"> 
          <div class="flex justify-center"> 
            <div class="w-2/3 bg-white bg-opacity-95 flex justify-center"> 
              <div> 
                <p>Drunkard conversation and quest component</p>
              </div>
            </div>
          </div>
        </div>
        <!-- header and buttons -->
        <div class="flex justify-center">
          <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center">
              <div class="pt-3 ">
                  <img src="../../assets/images/quests/Pub_Logo.png" alt="" class="h-56 w-56 rounded-full border border-gray-400"/>                 
              </div>             
          </div>        
        </div>
        <div class="flex justify-center">
          <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center">
            <div class="grid grid-cols-1 pt-4"> 
                <div class="pt-8 pb-2 font-semibold font-mono">
                    <router-link type="button" :to="'/questhunter_tavern'" class="px-3 py-3 bg-slate-400 hover:bg-slate-600 hover:text-white border border-slate-600 rounded-lg">
                      Return to Tavern</router-link>
                </div>
                <div class="relative flex self-center rounded-lg p-0.5 pb-10 ">
                    <router-link :to="'/village'" type="button" class="relative items w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                        Explore the Village</router-link>
                    <router-link :to="'/map'" type="button" class="relative ml-1 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                        Hunt for Monsters</router-link>
                </div>
            </div>                         
          </div>        
        </div>
        <!-- characters -->
        <div class="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-white bg-opacity-75 ">
          <h2 class="sr-only">Quests</h2>
          <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="person in people" :key="person.id" class="group">
              <div class="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img :src="person.imageSrc" :alt="person.imageAlt" class="h-full w-full object-cover object-center border border-black" />
              </div>
              <div class="text-center">
                  <h2 class="mt-4 font-semibold text-lg text-gray-700">{{ person.name }}</h2>
                  <h3 class="mt-4 text-base text-gray-700">{{ person.description }}</h3>
                  <br/>
                  <!-- replace button with modal component? or open component at click? or ... ? -->
                  <button @click="startConversation" class="bg-gray-400 px-2 py-2 border border-slate-700 hover:opacity-30 rounded-2xl">
                    Buy them a drink? <br/> {{ person.price }} coin</button>
              </div>
            </a>
          </div>
        </div> 
      </div>
      
<!-- conversation/quest pages -->
      <div v-if="conversationStarted">
        <div class="flex justify-center">
          <div class="text-center w-3/4 bg-white bg-opacity-95 flex justify-center pb-3">
              <div class="pt-3 ">
                  <p class="font-extrabold font-serif text-7xl ">The Big Dawg</p>                
              </div>             
          </div>        
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  import { usePlayerStore } from '@/stores/player';

  const playerStore = usePlayerStore();

  const people = [
    {
      id: 'drunkard1',
      name: 'The Village Drunk',
      description: 'Has some stories to tell.  Some might even be true!',
      price: '10',
      imageSrc: require('../../assets/images/quests/Pub_drunkard.png'),
      imageAlt: 'Drunkard.',
    },
    {
      id: 'barkeep1',
      name: 'The Bartender',
      description:"Knows everyone.  Hears everything. Sometimes chatty.",
      price: '25',
      imageSrc: require('../../assets/images/quests/Pub_barkeep.png'),
      imageAlt: 'Barkeep',
    },
    {
      id: 'scholar1',
      name: 'A Local Scholar',
      description:'A seeker of knowledge.  And a connoisseur of local spirits.',
      price: '50',
      imageSrc: require('../../assets/images/quests/Pub_scholar.png'),
      imageAlt: 'Scholar',
    },
    {
      id: 'hunter1',
      name: 'A Retired Hunter',
      description: "Made their fortune, and lived long enough to spend it",
      price: '100',
      imageSrc: require('../../assets/images/quests/Pub_hunter.png'),
      imageAlt: 'Hunter',
    },
  ] 

  const insufficientFunds = ref(false);
  const conversationStarted = ref(false);
  const chosenCharacterID = ref('');
  const chosenCharacter = computed(function() {
        return people.find(x => x.id === chosenCharacterID.value);
  })
  
  function startConversation(id) {
    chosenCharacterID.value = id;
    if (playerStore.coinOnHand - chosenCharacter.value.price < 0 ) {
      insufficientFunds.value = true;
    } else {
      playerStore.coinOnHand = (playerStore.coinOnHand - chosenCharacter.value.price);
      conversationStarted.value = true;
    }
  }

</script>

