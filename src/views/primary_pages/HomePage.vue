<template>
  <div class="relative bg-gray-200 mt-10">
    <main class="lg:relative">
      <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">

<!-- title -->
          <h1 class="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Monster Hunters of Awesome Legendary-ness</span>
            {{ ' ' }}
            <span class="block text-lg text-center mx-24 text-cyan-600 xl:inline">and sometimes embarrassing failure</span>
          </h1>

<!-- description -->
          <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl text-center">A silly, fun, little turn-based game that I've created as a way for me to practice my coding skills.</p>
            
<!-- buttons -->
          <div class="mt-10 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <router-link :to="'/village'" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-400 md:py-4 md:px-10 md:text-lg">
              Start New Game</router-link>
            </div>
          </div>

        </div>
      </div>

<!-- image -->
      <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img  class="absolute inset-0 h-full w-full object-cover" src="../../assets/images/Monster_Hunter.png" alt="" />
      </div>
    </main>

  </div>
</template>
  
<script></script>