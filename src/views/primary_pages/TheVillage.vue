<template>
  <the-header></the-header>

<!-- background -->
  <div class="bg-[url('../assets/images/allpurpose/Thornstalk_Village.png')] bg-cover ">

    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">

<!-- page header -->
      <div class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Welcome to Thornstalk Village</h1>
        <p class="mt-5 text-xl text-gray-700 sm:text-center">A small village with a big reputation.  The best monster hunters in the kingdom all come here to train, gather supplies, and seek employment. <br/></p>
        <p class="mt-5 text-3xl text-black sm:text-center font-extrabold">Will you be the next hunter of legendary tales?</p>
        <p class=" text-sm text-gray500 sm:text-center">Or the next hunter to be the joke of the village?</p>
        
<!-- nav buttons -->
        <div class="relative my-6 flex self-center rounded-lg p-0.5 sm:mt-8">
          <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Explore the Village</router-link>
          <router-link :to="'/map'" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap py-2 rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 text-sm font-medium text-gray-300 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Hunt for Monsters</router-link>
        </div>
        
      </div>

<!-- shops -->
      <div class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        <div v-for="shop in shops" :key="shop.name" class="bg-[#a6bf8e] divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
          <div class="p-6">
            <h2 class="text-lg text-center font-medium leading-6 text-gray-900">{{ shop.name }}</h2>
            <p class="mt-4 text-sm text-gray-600">{{ shop.description }}</p>
            <router-link :to="shop.href" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">
              Visit shop</router-link>
          </div>
        </div>
      </div> 

      <div class="grid grid-cols-1 pt-14">
        <div class="flex justify-center">
          <div class="bg-[#a6bf8e] rounded-lg border border-gray-200 shadow-sm w-80">
            <div class="p-6">
              <h2 class="text-lg text-center font-medium leading-6 text-gray-900">Ye Olde Magik Shoppe</h2>
              <p class="mt-4 text-sm text-gray-600">Everything you need to learn and execute battle magics of your own.</p>
              <router-link :to="'/village_magicshop'" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">
              Visit shop</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 pt-14">
        <div class="flex justify-center">
          <div class="relative px-3 py-5 w-1/2 h-60 rounded-md border border-gray-600 bg-slate-400 text-center text-xl text-gray-700 font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            QuestHunter's Tavern 
            <div class="pt-5 mx-3 text-left">
              <p class="text-sm text-gray-600">Coldest drinks in the village.  Come and have a pint or two, and make a few friends while you're at it.</p>
            </div>
            <div class="mt-3">
            <router-link :to="'/questhunter_tavern'" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">
              Visit Tavern</router-link>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="relative px-3 py-5 w-1/2 h-60 rounded-md border border-gray-600 bg-slate-400 text-center text-xl text-gray-700 font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Monster Hunter's Guild 
            <div class="pt-5 mx-3 text-left">
              <p class="text-sm text-gray-600">Offering specialized training, hunter points-management, and Guild-sponsored quests</p>
            </div>
            <div class="mt-3">
            <router-link :to="'/guild'" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">
              Visit Guild</router-link>
            </div>
          </div>
        </div>
      </div> 

    </div>
  </div>
</template>


<script setup>
  const shops = [
    {
      name: "Bobby Baker's Botanical Brews",
      href: '/village_apothecary',
      description: 'Potions, tincures, and general herbal remedies for all that ailes you.',
    },
    {
      name: 'Threads and Thongs and Things',
      href: '/village_armory',
      description: 'Useful armors made from leather, silk, and enchanted fabrics.',
    },
    {
      name: "Sally's Smithy Supplies",
      href: '/village_blacksmith',
      description: 'All metal-made items for all your hunting needs. Sometimes, enchanted.',
    },
    {
      name: "Abernathy's Oddities",
      href: '/village_oddities',
      description: "Rare, bizarre, powerful, sometimes dangerous items you won't find anywhere else",
    },
  ];
</script>