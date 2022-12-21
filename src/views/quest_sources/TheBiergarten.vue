<template>
    <the-header></the-header> 
     
<!-- background -->
    <div class="bg-[url('../assets/images/quests/Biergarten.png')] bg-cover max-w-full  ">

<!-- header -->
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center pb-3">
            <div class="pt-3 ">
                <p class="font-extrabold font-serif text-7xl ">Open Skye Biergarten</p>                
            </div>             
        </div>        
      </div>

<!-- logo -->
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center">
            <div class="pt-3 ">
                <img src="../../assets/images/quests/Biergarten_Logo.png" alt="" class="h-56 w-56 "/>                 
            </div>             
        </div>        
      </div>

      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center">
            <div class="pt-8 pb-8 font-semibold font-mono">
                <router-link type="button" :to="'/questfinder'" class="px-3 py-3 bg-slate-400 hover:bg-slate-600 border border-slate-600 rounded-lg">Return to Tavern</router-link>
            </div>             
        </div>        
      </div>

<!-- quests -->
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
                <!-- replace button with modal component? or open component at click? -->
                <button class="bg-gray-400 px-2 py-2 border border-slate-700 hover:opacity-30">Buy them a meal? <br/> {{ person.price }} coin</button>
            </div>
          </a>
        </div>

      </div>      
    </div>

</template>
  
<script setup>

  const people = [
    {
      id: 'raven1',
      name: 'The Raven in the Tree Overhead',
      description: "You're talking to birds now?  Just how much have you had to drink?",
      price: '25',
      imageSrc: require('../../assets/images/quests/Biergarten_raven.png'),
      imageAlt: 'Raven.',
    },
    {
      id: 'musician1',
      name: 'The Musician',
      description:"Looks like they're taking a break.",
      price: '50',
      imageSrc: require('../../assets/images/quests/Biergarten_musician.png'),
      imageAlt: 'Musician',
    },
    {
      id: 'gamers1',
      name: 'A Group of Gaming Friends',
      description:'They seem to be having a great time!',
      price: '150',
      imageSrc: require('../../assets/images/quests/Biergarten_gamers.png'),
      imageAlt: 'Gamers',
    },
    {
      id: 'server1',
      name: 'The Server',
      description: "They seem busy.  Maybe try talking to them after they clock out.",
      price: '200',
      imageSrc: require('../../assets/images/quests/Biergarten_server.png'),
      imageAlt: 'Server',
    },
    // More products...
  ] 

</script>

