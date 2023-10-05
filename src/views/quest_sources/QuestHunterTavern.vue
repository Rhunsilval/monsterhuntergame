<template>
  <the-header></the-header>
    <!-- background -->
  <div class="bg-[url('../assets/images/quests/QuestFinder_Tavern.png')] bg-cover ">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">

<!-- page header -->
      <div class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80 rounded-full">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">QuestHunter's Tavern</h1>
        <p class="mt-5 text-3xl text-black sm:text-center">Have a look around.</p>
        <p class="mt-5 text-xl text-gray-700 sm:text-center font-extrabold">I'm sure you'll find something interesting to do.</p>
        
<!-- nav buttons -->
        <div class="relative mt-6 flex self-center rounded-lg p-0.5 pb-6 sm:mt-8">
          <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Explore the Village</router-link>
          <router-link :to="'/map'" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Hunt for Monsters</router-link>
        </div>
        
      </div>

<!-- quest sources -->
      <div class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        <div v-for="place in corners" :key="place.name" class="bg-slate-400  divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
          <div class="p-6">    
            <h2 class="text-lg text-center font-medium leading-6 text-gray-900">{{ place.name }}</h2>
            <p class="mt-4 text-sm text-gray-700">{{ place.description }}</p>
            <router-link :to="place.href" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-700 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">
              Have a Chat</router-link>
          </div>    
        </div>
      </div>

<!-- tavern menu -->
      <div class="flex justify-center mt-20"> 
        <div class="w-2/3 bg-[#58355e] border border-[#d3a13b]"> 
          <div class="text-center text-[#d3a13b] pt-8"> 
            <p class="font-serif font-extralight italic text-8xl ">House Specials</p>
          </div>
          <div class="flex justify-center my-5"> 
            <img src="../../assets/images/village_tavern/scrollwork.png" class="w-1/2" />
          </div>
          <div class="flex justify-center"> 
            <div class="grid grid-cols-1"> 
              <div class="flex justify-center"> 
                <p class="text-[#d3a13b] text-6xl font-serif font-extralight italic py-3 mb-4">DRINKS</p>
              </div>             
              
              <div class="grid grid-cols-2">
                <div class="mr-10"> 
                  <ul> 
                    <li v-for="drink in beers" :key="drink.id"> 
                      <button class="w-72 px-2 py-2 mb-5 text-[#d3a13b]">
                        <div class="grid grid-cols-1">
                          <p class="text-2xl font-serif italic ">{{ drink.name }}</p>
                          <div class="flex justify-center"> 
                            <img :src="drink.imageSrc" class="w-20 h-20 rounded-full border border-gray-400" />
                          </div>                          
                          <p class="text-sm mx-5 text-left">{{ drink.description }}</p>
                          <p class="text-xs mx-5 text-left">{{ drink.value }}</p>
                          <p>{{ drink.price }} coin</p>
                        </div>                         
                      </button>
                    </li>
                  </ul> 
                  <p class="text-[#d3a13b] text-6xl font-serif font-extralight italic py-3 mt-8 mb-4 text-center">BREADS</p>
                  <ul> 
                    <li v-for="bread in breads" :key="bread.id"> 
                      <button class="w-72 px-2 py-2 mb-5 text-[#d3a13b]">
                        <div class="grid grid-cols-1">
                          <p class="text-2xl font-serif italic ">{{ bread.name }}</p>
                          <div class="flex justify-center"> 
                            <img :src="bread.imageSrc" class="w-20 h-20 rounded-full border border-gray-400" />
                          </div>                          
                          <p class="text-sm mx-5 text-left">{{ bread.description }}</p>
                          <p class="text-xs mx-5 text-left">{{ bread.value }}</p>
                          <p>{{ bread.price }} coin</p>
                        </div>                         
                      </button>
                    </li>
                  </ul>                                    
                </div>

                <div class="border-4 border-l-[#d3a13b] border-r-transparent border-y-transparent object-right pl-10 "> 
                  <ul> 
                    <li v-for="drink in liquors" :key="drink.id"> 
                      <button class="w-72 px-2 py-2 mb-8 text-[#d3a13b]">
                        <div class="grid grid-cols-1">
                          <p class="text-2xl font-serif italic ">{{ drink.name }}</p>
                          <div class="flex justify-center"> 
                            <img :src="drink.imageSrc" class="w-20 h-20 rounded-full border border-gray-400" />
                          </div>                          
                          <p class="text-sm mx-5 text-left">{{ drink.description }}</p>
                          <p class="text-xs mx-5 text-left">{{ drink.value }}</p>
                          <p>{{ drink.price }} coin</p>
                        </div>                         
                      </button>
                    </li>
                  </ul>
                  <p class="text-[#d3a13b] text-6xl font-serif font-extralight italic py-3 mb-4 text-center">SOUPS</p>
                  <ul> 
                    <li v-for="soup in soups" :key="soup.id"> 
                      <button class="w-72 px-2 py-2 mb-5 text-[#d3a13b]">
                        <div class="grid grid-cols-1">
                          <p class="text-2xl font-serif italic ">{{ soup.name }}</p>
                          <div class="flex justify-center"> 
                            <img :src="soup.imageSrc" class="w-20 h-20 rounded-full border border-gray-400" />
                          </div>                          
                          <p class="text-sm mx-5 text-left">{{ soup.description }}</p>
                          <p class="text-xs mx-5 text-left">{{ soup.value }}</p>
                          <p>{{ soup.price }} coin</p>
                        </div>                         
                      </button>
                    </li>
                  </ul>                  
                </div>

              </div>
            </div>
          </div>
          <div class="flex justify-center my-5"> 
            <img src="../../assets/images/village_tavern/scrollwork.png" class="w-1/2 rotate-180" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    

<script setup>
  const corners = [
    {
      name: "The Big Dawg",
      href: '/questhunter_pub',
      description: "The most popular pub in all of Thornstalk Village.  Everyone who's anyone stops by here.",
    },
    {
      name: 'Open Skye Biergarten',
      href: '/questhunter_biergarten',
      description: 'Open year-round, rain or shine.  A favorite spot for drinking, games, drinking-games, and music.',
    },
    {
      name: "Gossip's Corner",
      href: '/questhunter_gossips',
      description: 'If you want to hear all about the local gossip and village news, stop here for a bit.',        
    },
    {
      name: "The Mysterious Stranger",
      href: '/questhunter_stranger',
      description: 'They look like they want to be left alone.  You should definitely go talk to them!'
    }
  ]   
  const soups = [
    {
      id: "tavern_soup_1",
      itemSlot: 'null',
      itemUse: 'healing, manaing',
      itemShop: 'Tavern',
      name: 'Stone Soup',
      description: 'Full of healthy minerals',
      value: 'Restores 10 health and 10 mana',
      attack: 0,
      defense: 0,
      strength: 0,
      life: 10,
      mana: 10,
      intelligence: 0,
      price: 300,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_soup_1.png'),
    },
    {
      id: "tavern_soup_2",
      itemSlot: 'null',
      itemUse: 'healing, manaing',
      itemShop: 'Tavern',
      name: 'Peas Porridge',
      description: 'Green and hearty',
      value: 'Restores 25 health and 25 mana',
      attack: 0,
      defense: 0,
      strength: 0,
      life: 25,
      mana: 25,
      intelligence: 0,
      price: 800,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_soup_2.png'),
    },
    {
      id: "tavern_soup_3",
      itemSlot: 'null',
      itemUse: 'healing, manaing, strengthening',
      itemShop: 'Tavern',
      name: 'Kitchen Sink soup',
      description: 'Made of a little bit of everything.',
      value: 'Restores 40 health and 40 mana.  Also, +4 strenght for a bit',
      attack: 0,
      defense: 0,
      strength: 4,
      life: 40,
      mana: 40,
      intelligence: 0,
      price: 1200,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_soup_3.png'),
    },
  ]
  const breads = [
    {
      id: "tavern_bread_1",
      itemSlot: 'null',
      itemUse: 'null',
      itemShop: 'Tavern',
      name: 'Hardtack',
      description: 'Tastes like a brick, but travels well!',
      value: '',
      attack: 0,
      defense: 0,
      strength: 0,
      life: 10,
      mana: 10,
      intelligence: 0,
      price: 300,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_bread_1.png'),
    },
    {
      id: "tavern_bread_2",
      itemSlot: 'null',
      itemUse: 'null',
      itemShop: 'Tavern',
      name: 'Flatbread',
      description: 'Nice and flat.',
      value: '',
      attack: 0,
      defense: 0,
      strength: 0,
      life: 10,
      mana: 10,
      intelligence: 0,
      price: 300,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_bread_2.png'),
    },
    {
      id: "tavern_bread_3",
      itemSlot: 'null',
      itemUse: 'null',
      itemShop: 'Tavern',
      name: 'Pretzels',
      description: 'Twisted, salty, and soft',
      value: '',
      attack: 0,
      defense: 0,
      strength: 0,
      life: 10,
      mana: 10,
      intelligence: 0,
      price: 300,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_bread_3.png'),
    },
    {
      id: "tavern_bread_4",
      itemSlot: 'null',
      itemUse: 'null',
      itemShop: 'Tavern',
      name: 'Biscuits',
      description: 'Soft, fluffy, and great with soup!',
      value: '',
      attack: 0,
      defense: 0,
      strength: 0,
      life: 10,
      mana: 10,
      intelligence: 0,
      price: 300,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_bread_4.png'),
    },
    {
      id: "tavern_bread_5",
      itemSlot: 'null',
      itemUse: 'null',
      itemShop: 'Tavern',
      name: 'Loaf bread',
      description: 'Perfect for sandwiches, toast, and snacking.',
      value: '',
      attack: 0,
      defense: 0,
      strength: 0,
      life: 10,
      mana: 10,
      intelligence: 0,
      price: 300,
      unlocksAt: 1,
      imageSrc: require('../../assets/images/village_tavern/tavern_bread_5.png'),
    },
  ]
  const beers = [
    {
      id: 'tavern_drink_1',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'Swill',
      description: "A cheap drink that will heal some of what ails you.  Can also be used to clean armor.",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_1.png'),
    },
    {
      id: 'tavern_drink_2',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'House Ale',
      description: "We brew this one ourselves!",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_2.png'),
    },
    {
      id: 'tavern_drink_3',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'Imported Stout',
      description: "It'll put hair on your chest, if you're into that.",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_3.png'),
    },
    {
      id: 'tavern_drink_4',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'Golden Mead',
      description: "Sweet and strong",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_4.png'),
    },
  ]
  const liquors = [
    {
      id: 'tavern_drink_5',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'Local Moonshine',
      description: "Won't kill you, but might make you wish it did.",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_5.png'),
    },
    {
      id: 'tavern_drink_6',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'Firewater Whiskey',
      description: "Made from grandma's secret recipe.",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_6.png'),
    },
    {
      id: 'tavern_drink_7',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'Aged Bourbon',
      description: "Older than dirt, tastes much better!",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_7.png'),
    },
    {
      id: 'tavern_drink_8',
      itemSlot: '',
      itemUse: 'healing',
      itemShop: 'Apothecary, Tavern',
      name: 'Northern Nectar',
      description: "Guaranteed to get even the elves drunk!",
      value: '+3 life',
      attack: null,
      defense: null,
      strength: null,
      life: 3,
      mana: null,
      intelligence: null,
      price: '10',
      imageSrc: require('../../assets/images/village_tavern/tavern_drink_8.png'),
    },
  ]
</script>