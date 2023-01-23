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
        <div class="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
          <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Explore the Village</router-link>
          <router-link :to="'/questfinder'" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-slate-400 hover:bg-slate-200 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Find a Quest</router-link>
          <router-link :to="'/map'" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Hunt for Monsters</router-link>
        </div>
        <br/>
      </div>

<!-- quest sources -->
      <div class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        <div v-for="tier in quests" :key="tier.name" class="bg-slate-400  divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
          <div class="p-6">    
            <h2 class="text-lg text-center font-medium leading-6 text-gray-900">{{ tier.name }}</h2>
            <p class="mt-4 text-sm text-gray-700">{{ tier.description }}</p>
            <a :href="tier.href" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">Seek a Quest</a>
          </div>    
        </div>
      </div>

      <div class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-5">
          <div><p><br/></p></div>
          <div><p><br/></p></div>
          <div class="bg-slate-400 divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
              <div class="p-6">
                  <h2 class="text-lg text-center font-medium leading-6 text-gray-900">The Mysterious Stranger</h2>
                  <p class="mt-4 text-sm text-gray-700">They look like they want to be left alone.  You should go ask them for a quest!</p>
                  <router-link :to="'/questfinder_stranger'" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">Seek a Quest</router-link>
              </div>
          </div>            
      </div>      
    </div>
  </div>
</template>
    

<script setup>
  const quests = [
    {
      name: "The Big Dawg",
      href: '/questfinder_pub',
      description: "The most popular pub in all of Thornstalk Village.  Everyone who's anyone stops by here.",
    },
    {
      name: 'Open Skye Biergarten',
      href: '/questfinder_biergarten',
      description: 'Open year-round, rain or shine.  A favorite spot for drinking, games, drinking-games, and music.',
    },
    {
      name: "Gossip's Corner",
      href: '/questfinder_gossips',
      description: 'If you want to hear all about the local gossip and village news, stop here for a bit.',        
    },
    {
      name: "Monster Hunter's Guild",
      href: '/questfinder_guild',
      description: "The hardest jobs with the biggest payouts.  Open quests are posted on their wall",
    },
  ]   
</script>