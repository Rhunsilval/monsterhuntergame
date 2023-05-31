<template>
    <the-header></the-header> 
     
<!-- background -->
    <div class="bg-[url('../assets/images/quests/Gossips.png')] bg-cover max-w-full  ">

<!-- header -->
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-75 flex justify-center pb-3">
            <div class="pt-3 ">
                <p class="font-extrabold font-serif text-7xl ">Gossip's Corner</p>                
            </div>             
        </div>        
      </div>

<!-- logo -->
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-75 flex justify-center">
            <div class="pt-3 ">
                <img src="../../assets/images/quests/Gossips_Logo.png" alt="" class="h-56 w-56 "/>                 
            </div>             
        </div>        
      </div>

      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-75 flex justify-center">
            <div class="pt-8 pb-8 font-semibold font-mono">
                <router-link type="button" :to="'/questhunter_tavern'" class="px-3 py-3 bg-slate-400 hover:bg-slate-600 border border-slate-600 rounded-lg">
                  Return to Tavern</router-link>
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
                <button class="bg-gray-400 px-2 py-2 border border-slate-700 hover:opacity-30">Buy them a drink? <br/> {{ person.price }} coin</button>
            </div>
          </a>
        </div>

      </div>      
    </div>

</template>
  
<script setup>

  const people = [
    {
      id: 'oldman1',
      name: 'An Old Man',
      description: "Has seen all there is to see, and will gladly tell you all about it.",
      price: '50',
      imageSrc: require('../../assets/images/quests/Gossips_oldman.png'),
      imageAlt: 'Old Man.',
    },
    {
      id: 'farmer1',
      name: 'A Farmer',
      description:"Has some theories on what's been happening to the crops.",
      price: '50',
      imageSrc: require('../../assets/images/quests/Gossips_farmer.png'),
      imageAlt: 'Farmer',
    },
    {
      id: 'apprentice1',
      name: 'A Local Apprentice',
      description:"Always on the lookout for something to impress their teacher.",
      price: '50',
      imageSrc: require('../../assets/images/quests/Gossips_apprentice.png'),
      imageAlt: 'Apprentice',
    },
    {
      id: 'mother1',
      name: "The Mayor's Mother-in-Law",
      description: "Has the inside scoop on what's REALLY going on around here.",
      price: '100',
      imageSrc: require('../../assets/images/quests/Gossips_mother.png'),
      imageAlt: 'Mother-in-Law',
    },
    // More products...
  ] 

</script>

