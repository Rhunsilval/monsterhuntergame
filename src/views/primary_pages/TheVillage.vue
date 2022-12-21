<template>
  <the-header
    :playerId="playerId"
    :playerLevel="playerLevel"
    :playerStartingHealth="playerStartingHealth"
    :playerHealth="playerHealth"
    :playerStats="playerStats"
    :coinOnHand="coinOnHand"
  ></the-header>

<!-- background -->
  <div class="bg-[url('../assets/images/village/Thornstalk_Village.png')] bg-cover ">

    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">

<!-- page header -->
      <div class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Welcome to Thornstalk Village</h1>
        <p class="mt-5 text-xl text-gray-700 sm:text-center">A small village with a big reputation.  The best monster hunters in the kingdom all come here to train, gather supplies, and seek employment. <br/></p>
        <p class="mt-5 text-3xl text-black sm:text-center font-extrabold">Will you be the next hunter of legendary tales?</p>
        <p class=" text-sm text-gray500 sm:text-center">Or the next hunter to be the joke of the village?</p>
        
<!-- nav buttons -->
        <div class="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
          <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Explore the Village</router-link>
          <router-link :to="'/questfinder'" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-slate-400 hover:bg-slate-200 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Find a Quest</router-link>
          <router-link :to="'/map'" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Hunt for Monsters</router-link>
        </div>
        <br/>
      </div>

<!-- shops -->
      <div class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        <div v-for="shop in shops" :key="shop.name" class="bg-[#a6bf8e]  divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
          <div class="p-6">

            <h2 class="text-lg text-center font-medium leading-6 text-gray-900">{{ shop.name }}</h2>
            <p class="mt-4 text-sm text-gray-600">{{ shop.description }}</p>
            <router-link :to="shop.href" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">Visit shop</router-link>
          </div>

          <div class="px-6 pt-6 pb-8">
            <h3 class="text-sm font-medium text-gray-900">What they sell:</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="feature in shop.includedFeatures" :key="feature" class="flex space-x-3">
                <span class="text-sm text-gray-600">{{ feature }}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>


<script>
  import { ref, reactive } from 'vue';

  export default {
    components: {},
    props: {},
    emits: [],
    setup() {
      const shops = [
        {
          name: "Bobby Baker's Botanical Brews",
          goods: 'potions',
          href: '/village_apothecary',
          priceMonthly: 12,
          description: 'Potions, tincures, and general herbal remedies for all that ailes you.',
          includedFeatures: [
            'Health potions', 
            'Strengthening rubs', 
            'Herbal soaks', 
            'Anti-venom treatments', 
            'Spiritual aids',
            "The best soups you'll find anywhere in Thornstalk!"],
        },
        {
          name: 'Threads and Thongs and Things',
          goods: 'armor',
          href: '/village_armory',
          priceMonthly: 24,
          description: 'Useful armors made from leather, silk, and enchanted fabrics.',
          includedFeatures: [
            'Leather armor',
            'Enchanted robes',
            'Hats, gloves, and boots',
            'Saddlebags'
          ],
        },
        {
          name: "Sally's Smithy Supplies",
          goods: 'weapons',
          href: '/village_blacksmith',
          priceMonthly: 32,
          description: 'All metal-made items for all your hunting needs. Sometimes, enchanted.',
          includedFeatures: [
            'Swords',
            'Maces',
            'Arrows',
            'Shields',
            'Chainmail and helms',
            'Horseshoes'
          ],
        },
        {
          name: "Abernathy's Oddities",
          goods: 'random junk',
          href: '/village_oddities',
          priceMonthly: 48,
          description: "Rare, bizarre, powerful, sometimes dangerous items you won't find anywhere else",
          includedFeatures: [
            'Magic charms',
            'Rare substances',
            'Bizarre collectables',
            'Unique books',
            'Legendary items',
            'An occasional cursed trinket or two',
            '',
          ],
        },
      ];

      const playerId = 'Player One';
      const playerLevel = ref(1);
      const playerStartingHealth = ref(100);
      const playerHealth = ref(100);
      const coinOnHand = ref(1000);
      const playerStats = reactive({
        playerId: 'Player_1',
        attack: 1,
        defense: 1,
        strength: 1,
      }); 
      const playerQuests = [];
      const playerEquipped = [];
      const playerPacked = []; 

      return {
        shops,
        playerId,
        playerLevel,
        playerStartingHealth,
        playerHealth,
        coinOnHand,
        playerStats,
        playerQuests,
        playerEquipped,
        playerPacked,
      };
    },
  };
</script>