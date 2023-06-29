<template>
  <div v-if="!newGame" class="relative bg-gray-200 mt-10">
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
              <button @click="startNewGame" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-400 md:py-4 md:px-10 md:text-lg">
              Start New Game</button>
            </div>
          </div>
          <div v-if="oldGame" class="mt-2 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <router-link :to="'/village'" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-400 md:py-4 md:px-10 md:text-lg">
              Continue Old Game</router-link>
            </div>
          </div>
<!-- a button to go to my tester page - kept deactivated most of the time -->
          <!-- <div class="mt-2 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <router-link :to="'/test'" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-400 md:py-4 md:px-10 md:text-lg">
              try things </router-link>
            </div>
          </div> -->

        </div>
      </div>

<!-- image -->
      <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img  class="absolute inset-0 h-full w-full object-cover" src="../../assets/images/Monster_Hunter.png" alt="" />
      </div>
    </main>
  </div>

<!-- if new game start: -->
  <div v-if="newGame" class="bg-[url('../assets/images/allpurpose/map.png')] bg-cover">
    <div class="mx-auto pt-16 pb-40 px-4 grid grid-cols-3">
        <div class="flex items-center mx-10">
            <img src="../../assets/images/allpurpose/monsterfighter.png" class=" w-full rounded-full"/>
        </div>
      
        <div class="flex justify-center items-center">
            <div class="grid grid-cols-1">
                <div class="align-center flex flex-col bg-stone-500 bg-opacity-80 rounded-3xl px-5">
                    <div v-if="!readyToStart" class="pt-5"> 
                        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Choose your hunter name!</h1>
                        <p class="mt-5 text-xl text-gray-700 sm:text-center"> No one cares much what name you were born with.  This is your chance to re-invent yourself!</p>
                        <p class="mt-5 mb-3 text-3xl text-black sm:text-center font-extrabold">Choose well!</p>
                        <p class=" text-sm text-gray500 sm:text-center">This will be the name whispered around campfires.  Sung aloud in pubs!  Etched onto the Wall of Legends in the Hunter's Guild!!</p>
                        <p class=" text-sm text-gray500 sm:text-center">Or mocked by children in the street and parodied by traveling minstrels.</p>
                        <p class=" text-sm text-gray500 sm:text-center">Through success or failure, this is the name all will remember you by!</p>
                    </div>
                    <form v-if="!readyToStart" @submit.prevent="submitForm">
                        <div class="relative text-center my-6 flex flex-col items-center self-center rounded-lg p-0.5 sm:mt-8">
                            <input type="text" v-model.trim="userName" placeholder="Player_One" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"/>
                            <p v-if="userNameValidity === 'invalid'">You must choose your player name</p>
                            <button @click="submitForm" type="button" class="px-2 py-2 font-medium bg-white border border-black rounded-lg mt-10">
                                Done</button>              
                        </div>            
                    </form> 
                    <div v-if="readyToStart" class="pb-14">
                        <div class="h-96 flex items-center"> 
                            <h1 class="text-5xl text-gray-900 text-center mt-10">Welcome {{ playerStore.playerId }}!</h1>
                        </div>
                    </div>
                    <div v-if="readyToStart" class="flex justify-center -mt-48 mb-52"> 
                        <router-link type="button" :to="'/guild_points'" class="px-2 py-2 w-48 font-medium bg-white hover:bg-slate-500 border border-black rounded-lg mt-3">
                            <p class="text-center">Start game!</p></router-link>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="flex items-center mx-10">
            <img src="../../assets/images/allpurpose/monsterfighter.png" class=" w-full rounded-full "/>
        </div>
      
    </div>
    
  </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { usePlayerStore } from '@/stores/player'
  import { useConditionalsStore } from '@/stores/conditionals';
  import { useQuestStore } from '@/stores/quests';

  const playerStore = usePlayerStore();
  const conditionalStore = useConditionalsStore();
  const questStore = useQuestStore();

  const oldGame = playerStore.oldGame;

// all player stats need to be returned to default values - otherwise, picks up where you left off, but with new name
// there has GOT TO BE an easier way to do this - but without an externally saved blank profile to start things off with ...
// i don't know how to reset things here except manually as below
  const newGame = ref(true);
  function startNewGame() {   
    newGame.value = true;
    playerStore.playerId = 'Player_One';
    playerStore.oldGame= false;
    playerStore.coinOnHand= 1000; 
    playerStore.playerActiveHealth= 100;
    playerStore.playerHealth= 100;       
    playerStore.playerBaseHealth= 100;
    playerStore.healthBonus= 0;
    playerStore.nextHealthLevel= 500;
    playerStore.healthXP= 0;
    playerStore.neededHealthXP= 500;
    playerStore.healthPrice= 1000;
    playerStore.playerActiveMana= 100;
    playerStore.playerMana= 100;
    playerStore.playerBaseMana= 100;
    playerStore.manaBonus= 0;
    playerStore.nextManaLevel= 500;
    playerStore.manaXP= 0;
    playerStore.neededManaXP= 500;
    playerStore.manaPrice= 1000;            
    playerStore.playerAttack= 1;
    playerStore.playerBaseAttack= 1;
    playerStore.attackBonus= 0;
    playerStore.tempAttackBonus= 0;
    playerStore.nextAttackLevel= 1000;
    playerStore.attackXP= 0;
    playerStore.neededAttackXP= 1000;
    playerStore.attackPrice= 100;
    playerStore.playerDefense= 1;
    playerStore.playerBaseDefense= 1;
    playerStore.defenseBonus= 0;
    playerStore.tempDefenseBonus= 0;
    playerStore.nextDefenseLevel= 1000;
    playerStore.defenseXP= 0;
    playerStore.neededDefenseXP= 1000;
    playerStore.defensePrice= 100;
    playerStore.playerStrength= 1;
    playerStore.playerBaseStrength= 1;
    playerStore.strengthBonus= 0;
    playerStore.tempStrengthBonus= 0;
    playerStore.nextStrengthLevel= 1000;
    playerStore.strengthXP= 0;
    playerStore.neededStrengthXP= 1000;
    playerStore.strengthPrice= 500;
    playerStore.playerIntelligence= 1;
    playerStore.playerBaseIntelligence= 1;
    playerStore.intelligenceBonus= 0;
    playerStore.tempIntelligenceBonus= 0;
    playerStore.nextIntelligenceLevel= 1000;
    playerStore.intelligenceXP= 0;
    playerStore.neededIntelligenceXP= 1000;
    playerStore.intelligencePrice= 500;
    playerStore.playerLevel= 1;
    playerStore.playerPoints= 5;
    playerStore.nextLevel= 1000;
    playerStore.playerXP= 0;
    playerStore.playerTotalXP= 0;
    playerStore.playerNeededXP= 0;
    playerStore.playerActiveQuests= [];
    playerStore.playerCompletedQuests= [];
    playerStore.playerKillLog= [
                {
                    id: 'desert_monster1',
                    name: 'Sand Crab',
                    place: 'desert',
                    count: 0,
                    points: 1,
                },
                {
                    id: 'desert_monster2',
                    name: 'Fellbeast Camel',
                    place: 'desert',
                    count: 0,
                    points: 2,
                },
                {
                    id: 'desert_monster3',
                    name: 'Canyon Cat',
                    place: 'desert',
                    count: 0,
                    points: 3,
                },
                {
                    id: 'desert_monster4',
                    name: 'Rock Troll',
                    place: 'desert',
                    count: 0,
                    points: 4,
                },
                {
                    id: 'desert_monster5',
                    name: 'Basilisk',
                    place: 'desert',
                    count: 0,
                    points: 5,
                },
                {
                    id: 'desert_monster6',
                    name: 'Djinn',
                    place: 'desert',
                    count: 0,
                    points: 6,
                },
                {
                    id: 'desert_monster7',
                    name: 'Phoenix',
                    place: 'desert',
                    count: 0,
                    points: 7,
                },
                {
                    id: 'desert_monster8',
                    name: 'Karkadaan',
                    place: 'desert',
                    count: 0,
                    points: 8,
                },
                {
                    id: 'desert_monster9',
                    name: 'Sandworm',
                    place: 'desert',
                    count: 0,
                    points: 9,
                },
                {
                    id: 'desert_monster10',
                    name: 'Fire River Drake',
                    place: 'desert',
                    count: 0,
                    points: 10,
                },
                {
                    id: 'forest_monster1',
                    name: 'Mushroom Spirit',
                    place: 'forest',
                    count: 0,
                    points: 1,
                },
                {
                    id: 'forest_monster2',
                    name: 'Moss Troll',
                    place: 'forest',
                    count: 0,
                    points: 2,
                },
                {
                    id: 'forest_monster3',
                    name: 'Satyr',
                    place: 'forest',
                    count: 0,
                    points: 3,
                },
                {
                    id: 'forest_monster4',
                    name: 'Werewolf',
                    place: 'forest',
                    count: 0,
                    points: 4,
                },
                {
                    id: 'forest_monster5',
                    name: 'Grim Owl',
                    place: 'forest',
                    count: 0,
                    points: 5,
                },
                {
                    id: 'forest_monster6',
                    name: 'Forest Guardian',
                    place: 'forest',
                    count: 0,
                    points: 6,
                },
                {
                    id: 'forest_monster7',
                    name: 'Vampire',
                    place: 'forest',
                    count: 0,
                    points: 7,
                },
                {
                    id: 'forest_monster8',
                    name: 'Kitsune',
                    place: 'forest',
                    count: 0,
                    points: 8,
                },
                {
                    id: 'forest_monster9',
                    name: 'Baba Yaga',
                    place: 'forest',
                    count: 0,
                    points: 9,
                },
                {
                    id: 'forest_monster10',
                    name: 'Forest God',
                    place: 'forest',
                    count: 0,
                    points: 10,
                },
                {
                    id: 'grassland_monster1',
                    name: 'Undead Soldier',
                    place: 'grassland',
                    count: 0,
                    points: 1,
                },
                {
                    id: 'grassland_monster2',
                    name: 'Leprechan',
                    place: 'grassland',
                    count: 0,
                    points: 2,
                },
                {
                    id: 'grassland_monster3',
                    name: 'Hobgoblin',
                    place: 'grassland',
                    count: 0,
                    points: 3,
                },
                {
                    id: 'grassland_monster4',
                    name: 'Barrows Spider',
                    place: 'grassland',
                    count: 0,
                    points: 4,
                },
                {
                    id: 'grassland_monster5',
                    name: 'Centaur',
                    place: 'grassland',
                    count: 0,
                    points: 5,
                },
                {
                    id: 'grassland_monster6',
                    name: 'Banshee',
                    place: 'grassland',
                    count: 0,
                    points: 6,
                },
                {
                    id: 'grassland_monster7',
                    name: 'Ghoul',
                    place: 'grassland',
                    count: 0,
                    points: 7,
                },
                {
                    id: 'grassland_monster8',
                    name: 'Cockatrice',
                    place: 'grassland',
                    count: 0,
                    points: 8,
                },
                {
                    id: 'grassland_monster9',
                    name: 'Unicorn',
                    place: 'grassland',
                    count: 0,
                    points: 9,
                },
                {
                    id: 'grassland_monster10',
                    name: 'Chimera',
                    place: 'grassland',
                    count: 0,
                    points: 10,
                },
                {
                    id: 'jungle_monster1',
                    name: 'Blight Bat',
                    place: 'jungle',
                    count: 0,
                    points: 1,
                },
                {
                    id: 'jungle_monster2',
                    name: 'Meat-Eater Monkey',
                    place: 'jungle',
                    count: 0,
                    points: 2,
                },
                {
                    id: 'jungle_monster3',
                    name: 'Vine Clinger',
                    place: 'jungle',
                    count: 0,
                    points: 3,
                },
                {
                    id: 'jungle_monster4',
                    name: 'Oliphant',
                    place: 'jungle',
                    count: 0,
                    points: 4,
                },
                {
                    id: 'jungle_monster5',
                    name: 'Dire Moth',
                    place: 'jungle',
                    count: 0,
                    points: 5,
                },
                {
                    id: 'jungle_monster6',
                    name: 'Bonecrusher',
                    place: 'jungle',
                    count: 0,
                    points: 6,
                },
                {
                    id: 'jungle_monster7',
                    name: 'Cyclops',
                    place: 'jungle',
                    count: 0,
                    points: 7,
                },
                {
                    id: 'jungle_monster8',
                    name: 'Dark Forest Elf',
                    place: 'jungle',
                    count: 0,
                    points: 8,
                },
                {
                    id: 'jungle_monster9',
                    name: 'Oni',
                    place: 'jungle',
                    count: 0,
                    points: 9,
                },
                {
                    id: 'jungle_monster10',
                    name: 'Golden Dragon',
                    place: 'jungle',
                    count: 0,
                    points: 10,
                },
                {
                    id: 'marshes_monster1',
                    name: 'Will-O-Wisp',
                    place: 'marshes',
                    count: 0,
                    points: 1,
                },
                {
                    id: 'marshes_monster2',
                    name: 'Kappa',
                    place: 'marshes',
                    count: 0,
                    points: 2,
                },
                {
                    id: 'marshes_monster3',
                    name: 'Bog Zombie',
                    place: 'marshes',
                    count: 0,
                    points: 3,
                },
                {
                    id: 'marshes_monster4',
                    name: 'Frogman',
                    place: 'marshes',
                    count: 0,
                    points: 4,
                },
                {
                    id: 'marshes_monster5',
                    name: 'Ruskala',
                    place: 'marshes',
                    count: 0,
                    points: 5,
                },
                {
                    id: 'marshes_monster6',
                    name: 'Harpie',
                    place: 'marshes',
                    count: 0,
                    points: 6,
                },
                {
                    id: 'marshes_monster7',
                    name: 'Phantom',
                    place: 'marshes',
                    count: 0,
                    points: 7,
                },
                {
                    id: 'marshes_monster8',
                    name: 'Kelpie',
                    place: 'marshes',
                    count: 0,
                    points: 8,
                },
                {
                    id: 'marshes_monster9',
                    name: 'Water Knight',
                    place: 'marshes',
                    count: 0,
                    points: 9,
                },
                {
                    id: 'marshes_monster10',
                    name: 'Heron King',
                    place: 'marshes',
                    count: 0,
                    points: 10,
                },
                {
                    id: 'mountain_monster1',
                    name: 'Goblin',
                    place: 'mountain',
                    count: 0,
                    points: 1,
                },
                {
                    id: 'mountain_monster2',
                    name: 'Were-goat',
                    place: 'mountain',
                    count: 0,
                    points: 2,
                },
                {
                    id: 'mountain_monster3',
                    name: 'Mountain Troll',
                    place: 'mountain',
                    count: 0,
                    points: 3,
                },
                {
                    id: 'mountain_monster4',
                    name: 'Gargoyle',
                    place: 'mountain',
                    count: 0,
                    points: 4,
                },
                {
                    id: 'mountain_monster5',
                    name: 'Snow Cat',
                    place: 'mountain',
                    count: 0,
                    points: 5,
                },
                {
                    id: 'mountain_monster6',
                    name: 'Yeti',
                    place: 'mountain',
                    count: 0,
                    points: 6,
                },
                {
                    id: 'mountain_monster7',
                    name: 'Griffon',
                    place: 'mountain',
                    count: 0,
                    points: 7,
                },
                {
                    id: 'mountain_monster8',
                    name: 'Dire Eagle',
                    place: 'mountain',
                    count: 0,
                    points: 8,
                },
                {
                    id: 'mountain_monster9',
                    name: 'Ice Giant',
                    place: 'mountain',
                    count: 0,
                    points: 9,
                },
                {
                    id: 'mountain_monster10',
                    name: 'Iron Dragon',
                    place: 'mountain',
                    count: 0,
                    points: 10,
                },
                {
                    id: 'swamp_monster1',
                    name: 'Rootbeast',
                    place: 'swamp',
                    count: 0,
                    points: 1,
                },
                {
                    id: 'swamp_monster2',
                    name: 'Plague Fly',
                    place: 'swamp',
                    count: 0,
                    points: 2,
                },
                {
                    id: 'swamp_monster3',
                    name: 'Swamp Ape',
                    place: 'swamp',
                    count: 0,
                    points: 3,
                },
                {
                    id: 'swamp_monster4',
                    name: 'Vine Creeper',
                    place: 'swamp',
                    count: 0,
                    points: 4,
                },
                {
                    id: 'swamp_monster5',
                    name: 'Bunyip',
                    place: 'swamp',
                    count: 0,
                    points: 5,
                },
                {
                    id: 'swamp_monster6',
                    name: 'Wood Nymph',
                    place: 'swamp',
                    count: 0,
                    points: 6,
                },
                {
                    id: 'swamp_monster7',
                    name: 'Killer Croc',
                    place: 'swamp',
                    count: 0,
                    points: 7,
                },
                {
                    id: 'swamp_monster8',
                    name: 'Grootslang',
                    place: 'swamp',
                    count: 0,
                    points: 8,
                },
                {
                    id: 'swamp_monster9',
                    name: 'Moss Dragon',
                    place: 'swamp',
                    count: 0,
                    points: 9,
                },
                {
                    id: 'swamp_monster10',
                    name: 'Hydra',
                    place: 'swamp',
                    count: 0,
                    points: 10,
                },
            ];
    playerStore.playerReputation= 0;
// remove any equipped items and return to default
    playerStore.playerEquipped.player_necklace.splice(0);
        playerStore.playerEquipped.player_necklace.push(
            {
                id: 'necklace',
                itemSlot: 'player_necklace',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/necklace.png'),
            }
        );
        playerStore.playerEquipped.player_ring.splice(0);
        playerStore.playerEquipped.player_ring.push(
            {
                id: 'ring',
                itemSlot: 'player_ring',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/ring.png'),
            },
        );
        playerStore.playerEquipped.player_belt.splice(0);
        playerStore.playerEquipped.player_belt.push(
            {
                id: 'belt',
                itemSlot: 'player_belt',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/belt.png'),
            },
        );
        playerStore.playerEquipped.player_helm.splice(0);
        playerStore.playerEquipped.player_helm.push(
            {
                id: 'helm',
                itemSlot: 'player_helm',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/helm.png'),
            },
        );
        playerStore.playerEquipped.player_shield.splice(0);
        playerStore.playerEquipped.player_shield.push(
            {
                id: 'shield',
                itemSlot: 'player_shield',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/shield.png'),
            },
        );
        playerStore.playerEquipped.player_gloves.splice(0);
        playerStore.playerEquipped.player_gloves.push(
            {
                id: 'gloves',
                itemSlot: 'player_gloves',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/gloves.png'),
            },
        );
        playerStore.playerEquipped.player_vambraces.splice(0);
        playerStore.playerEquipped.player_vambraces.push(
            {
                id: 'vambraces',
                itemSlot: 'player_vambraces',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/vambraces.png'),
            },
        );
        playerStore.playerEquipped.player_sword.splice(0);
        playerStore.playerEquipped.player_sword.push(
            {
                id: 'sword',
                itemSlot: 'player_sword',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/sword.png'),
            },
        );
        playerStore.playerEquipped.player_armor.splice(0);
        playerStore.playerEquipped.player_armor.push(
            {
                id: 'armor',
                itemSlot: 'player_armor',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/armor.png'),
            },
        );
        playerStore.playerEquipped.player_boots.splice(0);
        playerStore.playerEquipped.player_boots.push(
            {
                id: 'boots',
                itemSlot: 'player_boots',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                attack: null,
                defense: null,
                strength: null,
                life: null,
                mana: null,
                intelligence: null,
                price: '',
                imageSrc: require('../../assets/images/placeholders/boots.png'),
            },
        );
        playerStore.playerEquipped.player_F1_spell.splice(0);
        playerStore.playerEquipped.player_F1_spell.push(
            {
                id: 'F1_spell',
                itemSlot: 'player_F1_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/fire.png'),
            },
        );
        playerStore.playerEquipped.player_F2_spell.splice(0);
        playerStore.playerEquipped.player_F2_spell.push(
            {
                id: 'F2_spell',
                itemSlot: 'player_F2_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/fire.png'),
            },
        );
        playerStore.playerEquipped.player_F3_spell.splice(0);
        playerStore.playerEquipped.player_F3_spell.push(
            {
                id: 'F3_spell',
                itemSlot: 'player_F3_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/fire.png'),
            },
        );
        playerStore.playerEquipped.player_W1_spell.splice(0);
        playerStore.playerEquipped.player_W1_spell.push(
            {
                id: 'W1_spell',
                itemSlot: 'player_W1_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/water.png'),
            },
        );
        playerStore.playerEquipped.player_W2_spell.splice(0);
        playerStore.playerEquipped.player_W2_spell.push(
            {
                id: 'W2_spell',
                itemSlot: 'player_W2_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/water.png'),
            },
        );
        playerStore.playerEquipped.player_W3_spell.splice(0);
        playerStore.playerEquipped.player_W3_spell.push(
            {
                id: 'W3_spell',
                itemSlot: 'player_W3_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/water.png'),
            },
        );
        playerStore.playerEquipped.player_E1_spell.splice(0);
        playerStore.playerEquipped.player_E1_spell.push(
            {
                id: 'E1_spell',
                itemSlot: 'player_E1_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/earth.png'),
            },
        );
        playerStore.playerEquipped.player_E2_spell.splice(0);
        playerStore.playerEquipped.player_E2_spell.push(
            {
                id: 'E2_spell',
                itemSlot: 'player_E2_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/earth.png'),
            },
        );
        playerStore.playerEquipped.player_E3_spell.splice(0);
        playerStore.playerEquipped.player_E3_spell.push(
            {
                id: 'E3_spell',
                itemSlot: 'player_E3_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/earth.png'),
            },
        );
        playerStore.playerEquipped.player_A1_spell.splice(0);
        playerStore.playerEquipped.player_A1_spell.push(
            {
                id: 'A1_spell',
                itemSlot: 'player_A1_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/air.png'),
            },
        );
        playerStore.playerEquipped.player_A2_spell.splice(0);
        playerStore.playerEquipped.player_A2_spell.push(
            {
                id: 'A2_spell',
                itemSlot: 'player_A2_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/air.png'),
            },
        );
        playerStore.playerEquipped.player_A3_spell.splice(0);
        playerStore.playerEquipped.player_A3_spell.push(
            {
                id: 'A3_spell',
                itemSlot: 'player_A3_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/air.png'),
            },
        );
        playerStore.playerEquipped.player_D1_spell.splice(0);
        playerStore.playerEquipped.player_D1_spell.push(
            {
                id: 'D1_spell',
                itemSlot: 'player_D1_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/dark.png'),
            },
        );
        playerStore.playerEquipped.player_D2_spell.splice(0);
        playerStore.playerEquipped.player_D2_spell.push(
            {
                id: 'D2_spell',
                itemSlot: 'player_D2_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/dark.png'),
            },
        );
        playerStore.playerEquipped.player_D3_spell.splice(0);
        playerStore.playerEquipped.player_D3_spell.push(
            {
                id: 'D3_spell',
                itemSlot: 'player_D3_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/dark.png'),
            },
        );
        playerStore.playerEquipped.player_L1_spell.splice(0);
        playerStore.playerEquipped.player_L1_spell.push(
            {
                id: 'L1_spell',
                itemSlot: 'player_L1_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/light.png'),
            },
        );
        playerStore.playerEquipped.player_L2_spell.splice(0);
        playerStore.playerEquipped.player_L2_spell.push(
            {
                id: 'L2_spell',
                itemSlot: 'player_L2_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/light.png'),
            },
        );
        playerStore.playerEquipped.player_L3_spell.splice(0);
        playerStore.playerEquipped.player_L3_spell.push(
            {
                id: 'L3_spell',
                itemSlot: 'player_L3_spell',
                itemShop: '',
                name: '',
                description: '',
                value: '',
                magicAttackValue: null,
                bonusAttackValue: null,
                antiAttackValue: null,
                life: null,
                mana: null,
                intelUnlock: null,
                price: '',
                imageSrc: '',
                imageSrc2: require('../../assets/images/placeholders/light.png'),
            },
        );
    playerStore.swapHolder1= [];    
    playerStore.swapHolder2= [];    
    playerStore.playerPacked= [];
    playerStore.playerScripts= [];
    playerStore.carryCapacity= 10;
    playerStore.baseCarryCapacity= 10;
    playerStore.carryCapacityBonus= 0;
    playerStore.playerBank= [];
    playerStore.horseInventory.horse_shoes.splice(0);
    playerStore.horseInventory.horse_shoes.push(
        {
            id: 'shoes',
            itemSlot: 'horse_shoes',
            name: 'shoes',
            description: "",
            value: '',
            carryBonus: 0,
            price: '',
            imageSrc: require('../../assets/images/placeholders/horseshoes.png'),  
        },
    );
    playerStore.horseInventory.horse_saddle.splice(0);
    playerStore.horseInventory.horse_saddle.push(
        {
            id: 'saddle',
            itemSlot: 'horse_saddle',
            name: 'saddle',            
            description: "",
            value: '',
            carryBonus: 0,
            price: '',
            imageSrc: require('../../assets/images/placeholders/saddle.png'), 
        },
    );
    playerStore.horseInventory.horse_bag.splice(0);
    playerStore.horseInventory.horse_bag.push(
        {
            id: 'bag',
            itemSlot: 'horse_bag',
            name: 'bag',
            description: "",
            value: '',
            carryBonus: 0,
            price: '',
            imageSrc: require('../../assets/images/placeholders/bags.png'), 
        },
    );
    // resetting all game conditionals to defaults
    conditionalStore.villageBank.accountOpen = false;
    conditionalStore.matildaSchool.questCompleted = false;
    conditionalStore.matildaSchool.questInProgress = false;
    conditionalStore.matildaSchool.questNeedsStarting = true;
    // resetting all quest conditions to defaults
    let a = questStore.quests.find(item => item.id === 'matildaQuest');
        a.qty = 3;
        a.active = false;

  }

  const userName = ref('');
  const userNameValidity = ref('pending');
  const readyToStart = ref(false);

  function submitForm() {
    if (userName.value === '') {
        userNameValidity.value = 'invalid';
    } else {
        console.log('username: ' + userName.value);
        playerStore.playerId = userName.value;
        readyToStart.value = true;
    }    
  }
  
</script>