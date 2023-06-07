<template>
<!-- landing screen -->
  <div v-if="!startGame">
    <div :style="{ backgroundImage: `url(${mapTypes[getMapType()]})` }" class="w-auto h-screen ">

        <div class="flex justify-center pt-16">
            <div class="text-center w-1/2 bg-white bg-opacity-70  flex justify-center pb-3">
                <div class="pt-16">
                    <p class="font-extrabold font-serif text-7xl ">{{ mapName }}</p>                
                </div>             
            </div>        
        </div>

        <div class="flex justify-center">
            <div class="text-center w-1/2 bg-white bg-opacity-70 flex justify-center">
                <div class="pt-8 pb-24 ">
                    <button @click="startHunt()" type="button" class="my-4 px-16 pt-16 pb-28  w-96 h-16 bg-[#305c79] hover:bg-blue-200 hover:text-black border border-slate-800 rounded-2xl font-semibold font-serif text-white text-2xl">
                      Hunt for Monsters</button>        

                    <br/>
                    <router-link :to="'/map'" type="button" class="my-4 px-16 pt-16 pb-28 w-96 h-16 bg-[#305c79] hover:bg-blue-200 hover:text-black border border-slate-800 rounded-2xl font-semibold font-serif text-white text-2xl">
                      Return to Map</router-link>
                </div>             
            </div>        
        </div>
    </div>
  </div>

<!-- start hunt screen -->
  <div v-if="startGame">
    <div :style="{ backgroundImage: `url(${mapTypes[getMapType()]})` }" class="w-screen h-screen">
      <div class="bg-stone-700 bg-opacity-60 w-screen h-screen"> 
      <!-- <div 
        :class="{ 
          'desert': mapName === 'Firesand Desert', 
          'forest': mapName === 'Black Forest',
          'grassland': mapName === 'The Great Grass Sea',
          'jungle': mapName === 'The Moving Jungle',
          'marshes': mapName === 'Dead Marshes',
          'mountains': mapName === 'Iron Mountains',
          'swamp': mapName === 'Noxus Swamp'
        }" 
        class=" w-screen h-screen"
      >  -->
      <!-- conditional color rendering did not work as desired.  adding a background via the tailwinds css allowed JUST the 
      background to be somewhat transparent.  elements rendered after/within this color-wash div still remained opaque.
      BUT - rewriting them as css outside of tailwinds caused both the background color wash AND everything rendered 
      inside that div to be transparent or opaque.  could not figure out how to make it just a wash with everything else still solid -->
        <div v-if="!monsterStore.monsterFound" class="flex justify-center pt-16">
          <div class="text-center w-1/2 flex justify-center pb-3 bg-white bg-opacity-70">
            <div class="pt-16">
                <p class="font-extrabold font-serif text-7xl ">{{ mapName }}</p>                
            </div>             
          </div>        
        </div>

        <div class="flex justify-center">
          <div class="text-center w-1/2 bg-white bg-opacity-70 flex justify-center">

<!-- game over inactive, game is on -->
            <div v-if="!gameover" class="px-10 py-10"> 
<!-- no monsters found -->
              <div v-if="!monsterStore.monsterFound" class="grid grid-cols-2 items-center mb-28 ">
                <div class=" flex flex-col justify-center items-center py-10 px-10"> 
                  <div v-if="!toggleImage"> 
                    <img v-if="mapName==='Firesand Desert'" src="../../assets/images/desert/desert_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                    <img v-else-if="mapName==='Black Forest'" src="../../assets/images/forest/forest_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                    <img v-else-if="mapName==='The Great Grass Sea'" src="../../assets/images/grassland/grassland_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                    <img v-else-if="mapName==='The Moving Jungle'" src="../../assets/images/jungle/jungle_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                    <img v-else-if="mapName==='Dead Marshes'" src="../../assets/images/marshes/marshes_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                    <img v-else-if="mapName==='Iron Mountains'" src="../../assets/images/mountains/mountain_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                    <img v-else src="../../assets/images/swamp/swamp_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                    
                    <p v-if="mapName==='Firesand Desert'">Nothing here but lots of sand</p>  
                    <p v-else-if="mapName==='Black Forest'">Trees, trees, and more trees</p> 
                    <p v-else-if="mapName==='The Great Grass Sea'">There's nothing here</p> 
                    <p v-else-if="mapName==='The Moving Jungle'">I found a bug, but no monster</p>
                    <p v-else-if="mapName==='Dead Marshes'">Mud and muck and nothing else</p> 
                    <p v-else-if="mapName==='Iron Mountains'">Nothing to see here</p>
                    <p v-else>Nothing interesting here</p> 
                  </div>
                          
                  <div v-if="toggleImage"> 
                    <img v-if="mapName==='Firesand Desert'" src="../../assets/images/desert/desert_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                    <img v-else-if="mapName==='Black Forest'" src="../../assets/images/forest/forest_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                    <img v-else-if="mapName==='The Great Grass Sea'" src="../../assets/images/grassland/grassland_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                    <img v-else-if="mapName==='The Moving Jungle'" src="../../assets/images/jungle/jungle_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                    <img v-else-if="mapName==='Dead Marshes'" src="../../assets/images/marshes/marshes_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                    <img v-else-if="mapName==='Iron Mountains'" src="../../assets/images/mountains/mountain_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                    <img v-else src="../../assets/images/swamp/swamp_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                    <p>Nothing here either </p>                            
                  </div>                        
                </div>

                <div class=" px-10 ">
                  <div class="">
                    <button @click="tryAgain()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5">
                      No Monsters Found <br/>Try Again</button>
                  </div>
                          
                  <div class="mt-8">
                    <button @click="startGame = false" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5">
                      Stop Searching</button>
                  </div>
                </div>

              </div>
            
<!-- found monsters -->
              <div v-if="monsterStore.monsterFound" class="grid grid-cols-3 gap-16 items-center mb-28 py-16">
              
                <div class="col-span-2 px-5"> 
                  <monster-fighter
                    :specialAttackAvailable="specialAttackAvailable"
                    @emit-attack-monster="attackMonster"
                    @emit-run-away="runAway"
                    @emit-special-attack="specialAttackMonster"
                    @emit-heal-player="healPlayer"
                    @emit-use-script="useScript"
                    @emit-use-spell="useSpell"
                  ></monster-fighter>
                </div>

                <div class="col-span-1 border border-black"> 
                  <battle-log></battle-log>
                </div>
                <!-- for some reason, when the empty log array is store on this page as a data property, 
                it causes this component to not work?  moving the array to the monster pinia store fixed the issue -->

              </div>
            </div>

<!-- game over active -->
            <div v-if="gameover"> 
              <the-winner
                :winner="winner"
                :mapName="mapName"
                @emit-loot-collected="lootCollected"
              ></the-winner>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>

</template>


<script setup>
  import { ref, watch } from 'vue'
  import { storeToRefs } from 'pinia'  
  import { usePlayerStore } from '@/stores/player'
  import { useMonsterStore } from '@/stores/monster'
  import { useLootStore } from '@/stores/loot'
  import MonsterFighter from './MonsterFighter.vue'
  import BattleLog from './BattleLog.vue'
  import TheWinner from './TheWinner.vue'

  const playerStore = usePlayerStore();
  const monsterStore = useMonsterStore();
  const lootStore = useLootStore();
  const props = defineProps({
    mapName: {
      type:String
    }
  })

// for dynamic rendering of background images
  const mapTypes = {
    'Firesand Desert': require('../../assets/images/desert/Desert_background.png'),
    'Black Forest': require('../../assets/images/forest/Forest_background.png'),
    'The Great Grass Sea': require('../../assets/images/grassland/Grassland_background.png'),
    'The Moving Jungle': require('../../assets/images/jungle/Jungle_background.png'),
    'Dead Marshes': require('../../assets/images/marshes/Marshes_background.png'),
    'Iron Mountains': require('../../assets/images/mountains/Mountains_background.png'),
    'Noxus Swamp': require('../../assets/images/swamp/Swamp_background.png')
  }
  function getMapType() {
    return props.mapName;
  }

// a random number generator, since I'm needing this so often
  function getRandomValue(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
  }

// initiate the hunt  
  const startGame = ref(false);
  function startHunt() {
    findMonster();
    startGame.value = true;
  }

// odds of finding a monster: 1 in 3
// if monster found - generate one
  function findMonster() {
    const randomMonsterNumber = getRandomValue(1, 3);
    if (randomMonsterNumber === 1) {
      monsterStore.monsterFound = true;
      getMonsterMap();
      monsterStore.generateMonster();
      monsterStore.getMonsterName();
      monsterStore.getMonsterStartingHealth();
      monsterStore.getMonsterHealth();
      lootStore.monsterId = monsterStore.monsterId;
      lootStore.monsterName = monsterStore.monsterName;
    } else {
      monsterStore.monsterFound = false;
    }
    monsterStore.battleLog = [];
  }

// don't find a monster, try again - with image toggling to visually see that the button is working
  const toggleImage = ref(false);
  function tryAgain() {
    findMonster();
    toggleImage.value = !toggleImage.value;
  }

// if monster found and player wants to run, reset everything
  function runAway() {
    const attackValue = monsterStore.getMonsterHitAbility();
    startGame.value = false;
    toggleImage.value = false;
    monsterStore.monsterFound = false;
    monsterStore.monsterId = '';
    monsterStore.monsterName = '';
    monsterStore.monsterHealth = null;
    monsterStore.monsterStartingHealth = null;
    // const attackValue = getRandomValue(1, 10);
    const attackEffect = ref(Math.ceil(attackValue - ((playerStore.playerDefense *.1) + playerStore.playerStrength)))//adjusting attack power for available player defense/strength
    if (attackEffect.value < 0) {
      attackEffect.value = 0;
    }
    playerStore.playerHealth -= attackEffect.value; //monster hits as player runs, takes some damage
    if (playerStore.playerHealth < 0) {
      playerStore.playerHealth = 0;
    } 
    currentRound.value = 0;
    monsterRound.value = 0;
    monsterStore.battleLog = [];
  }

  function getMonsterMap() {
    monsterStore.monsterMap = props.mapName;
  }
  
// round counters for charged events
  const currentRound = ref(0);
  const monsterRound = ref(0);

// special attack charged event
  const specialAttackAvailable = ref(false)

  watch(currentRound, function() {
    if (currentRound.value >= 3) {
      specialAttackAvailable.value = true;
    } else {
      specialAttackAvailable.value;
    }
  })

// monster auto-heal charged event
  watch(monsterRound, function(value) {
    if (value >= 5) {
      monsterStore.monsterHealth = monsterStore.monsterHealth + 5;
      if (monsterStore.monsterHealth + 5 > monsterStore.monsterStartingHealth) {
        monsterStore.monsterHealth = monsterStore.monsterStartingHealth;
      } else {monsterStore.monsterHealth;}
      addLogEntry('monster','heals', 5);
      monsterRound.value = 0;
    }
  })
  // NOTE: would like a player auto-heal function as well, but based on actual time passed vs # of actions taken
  // haven't gotten this to work yet


// gameplay
// creating a battle log for user clarity in battle
  // const battleLog = ref([]);
  // moved this to monster pinia store since, for reasons i don't understand, it breaks here
  function addLogEntry(who, what, value, effect) {
    monsterStore.battleLog.unshift({
      entryId: new Date().toISOString(),
      actionBy: who,
      actionType: what,
      actionValue: value,
      actionEffect: effect,
    })
  }

// attack the monster (basic)
  function attackMonster() {
    currentRound.value = currentRound.value + 1;
    monsterRound.value = monsterRound.value + 1;
    const attackValue = Math.ceil(getRandomValue(5, 10) + ((playerStore.playerAttack * .1) + (playerStore.playerStrength)));
    playerStore.playerXP += attackValue;        // to gain XP
    playerStore.playerTotalXP += attackValue;   // to keep track of XP
    playerStore.XPUntilNextLevel();             // to level up if applicable
    playerStore.levelUp();    
    const monsterisHit = (monsterStore.monsterHealth - (monsterStore.monsterHealth -= attackValue));
    addLogEntry('player', 'attacks', attackValue, monsterisHit);
    if (monsterStore.monsterHealth < 0) {
      monsterStore.monsterHealth = 0;
    } else {
      monsterStore.monsterHealth;
    }
    attackPlayer();
    if (playerStore.playerHealth < 0) {
      playerStore.playerHealth = 0;
    } else {
      playerStore.playerHealth;
    }
  }

// attack using a one-time-use script
  const magicAttackValue = ref(0)
  function useScript(id) {
    currentRound.value = currentRound.value + 1;
    monsterRound.value = monsterRound.value + 1;
    if (id === 'magic_script_1') {
      if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = (20 + 10);
      } else if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = (20 - 10);
      } else (magicAttackValue.value = 20)            
    } else if (id === 'magic_script_2') {
      if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = (20 + 10);
      } else if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = (20 - 10);
      } else (magicAttackValue.value = 20)
    } else if (id === 'magic_script_3') {
      if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = (20 + 10);
      } else if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = (20 - 10);
      } else (magicAttackValue.value = 20)
    } else if (id === 'magic_script_4') {
      magicAttackValue.value = 20;
    } else if (id === 'magic_script_5') {
      if (monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ||
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = (35 + 10);
      } else if (
          monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom') {
        magicAttackValue.value = (35 - 10);
      } else (magicAttackValue.value = 35);
    } else {
      if (monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom' ||          
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = (35 + 10);
      } else if (
          monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ) {
        magicAttackValue.value = (35 - 10);
      } else (magicAttackValue.value = 35);
    }    
    playerStore.playerXP += magicAttackValue.value;        // to gain XP
    playerStore.playerTotalXP += magicAttackValue.value;   // to keep track of XP
    playerStore.XPUntilNextLevel();             // to level up if applicable
    playerStore.levelUp();    
    const monsterisHit = (monsterStore.monsterHealth - (monsterStore.monsterHealth -= magicAttackValue.value));
    addLogEntry('player', 'attacks', magicAttackValue.value, monsterisHit);
    if (monsterStore.monsterHealth < 0) {
      monsterStore.monsterHealth = 0;
    } else {
      monsterStore.monsterHealth;
    }
    attackPlayer();
    if (playerStore.playerHealth < 0) {
      playerStore.playerHealth = 0;
    } else {
      playerStore.playerHealth;
    }
  }

// attack using a spell
// tried writing this more efficiently using item values ... didn't work yet
// this is ugly code - but it works
  function useSpell(id) {
    currentRound.value = currentRound.value + 1;
    monsterRound.value = monsterRound.value + 1;
    if (id === 'magic_scroll_1') {
      if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = (20 + 20);
        playerStore.playerMana -= 8;
      } else if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = (20 - 20);
        playerStore.playerMana -= 8;
      } else (magicAttackValue.value = 20, playerStore.playerMana -= 8)
    } else if (id === 'magic_book_1') {
      if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = (20 + 10);
        playerStore.playerMana -= (Math.floor(getRandomValue(3,10)));
      } else if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = (20 - 10);
        playerStore.playerMana -= (Math.floor(getRandomValue(3,10)));
      } else (magicAttackValue.value = 20, playerStore.playerMana -= (Math.floor(getRandomValue(3,10))))
    } else if (id === 'magic_book_2') {
      if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = (Math.floor(getRandomValue(30,60)) + 30);
        playerStore.playerMana -= (Math.floor(getRandomValue(10,25)));
      } else if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = (Math.floor(getRandomValue(30,60))-20);
        playerStore.playerMana -= (Math.floor(getRandomValue(10,25)));
      } else (magicAttackValue.value = 20, playerStore.playerMana -= (Math.floor(getRandomValue(10,25))))
    } else if (id === 'magic_scroll_2') {
      if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = (20 + 20);
        playerStore.playerMana -= 8;
      } else if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = (20 - 20);
        playerStore.playerMana -= 8;
      } else (magicAttackValue.value = 20, playerStore.playerMana -= 8)
    } else if (id === 'magic_book_3') {
      if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = (15 + 20);
        playerStore.playerMana -= (Math.floor(getRandomValue(3,10)));
      } else if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = (15 - 15);
        playerStore.playerMana -= (Math.floor(getRandomValue(3,10)));
      } else (magicAttackValue.value = 15, playerStore.playerMana -= (Math.floor(getRandomValue(3,10))))
    } else if (id === 'magic_book_4') {
      if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = ((Math.floor(getRandomValue(30,60))) + 30);
        playerStore.playerMana -= (Math.floor(getRandomValue(12,20)));
      } else if (props.mapName === 'The Great Grass Sea' || props.mapName === 'Black Forest' || props.mapName === 'The Moving Jungle') {
        magicAttackValue.value = ((Math.floor(getRandomValue(30,60))) - 20);
        playerStore.playerMana -= (Math.floor(getRandomValue(12,20)));
      } else (magicAttackValue.value = (Math.floor(getRandomValue(30,60))), playerStore.playerMana -= (Math.floor(getRandomValue(12,20))))
    } else if (id === 'magic_scroll_3') {
      if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = (20 + 20);
        playerStore.playerMana -= 8;
      } else if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = (20 - 15);
        playerStore.playerMana -= 8;
      } else (magicAttackValue.value = 20, playerStore.playerMana -= 8)
    } else if (id === 'magic_book_5') {
      if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = (17 + 12);
        playerStore.playerMana -= (Math.floor(getRandomValue(3,10)));
      } else if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = (17 - 13);
        playerStore.playerMana -= (Math.floor(getRandomValue(3,10)));
      } else (magicAttackValue.value = 17, playerStore.playerMana -= (Math.floor(getRandomValue(3,10))))
    } else if (id === 'magic_book_6') {
      if (props.mapName === 'Dead Marshes' || props.mapName === 'Noxus Swamp') {
        magicAttackValue.value = ((Math.floor(getRandomValue(25,60))) + 20);
        playerStore.playerMana -= (Math.floor(getRandomValue(10,30)));
      } else if (props.mapName === 'Firesand Desert' || props.mapName === 'Iron Mountains') {
        magicAttackValue.value = ((Math.floor(getRandomValue(25,60))) - 25);
        playerStore.playerMana -= (Math.floor(getRandomValue(10,30)));
      } else (magicAttackValue.value = (Math.floor(getRandomValue(25,60))), playerStore.playerMana -= (Math.floor(getRandomValue(10,30))))
    } else if (id === 'magic_scroll_4') {
      magicAttackValue.value = 20;
      playerStore.playerMana -= 8;
    } else if (id === 'magic_book_7') {
      magicAttackValue.value = 25;
      playerStore.playerMana -= (Math.floor(getRandomValue(8,20)));
    } else if (id === 'magic_book_8') {
      magicAttackValue.value = (Math.floor(getRandomValue(30-65)));
      playerStore.playerMana -= (Math.floor(getRandomValue(15,20)));
    } else if (id === 'magic_scroll_5') {
      if (monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ||
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = (35 + 15);
        playerStore.playerMana -= 10;
        playerStore.playerHealth -= 1;
      } else if (
          monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom') {
        magicAttackValue.value = (35 - 15);
        playerStore.playerMana -= 10;
        playerStore.playerHealth -= 1;
      } else (magicAttackValue.value = 35, playerStore.playerMana -= 10, playerStore.playerHealth -= 1);
    } else if (id === 'magic_book_9') {
      if (monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ||
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = (25 + 20);
        playerStore.playerMana -= (Math.floor(getRandomValue(10,15)));
        playerStore.playerHealth -= 3;
      } else if (
          monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom') {
        magicAttackValue.value = (25 - 30);
        playerStore.playerMana -= (Math.floor(getRandomValue(10,15)));
        playerStore.playerHealth -= 3;
      } else (magicAttackValue.value = 25, playerStore.playerMana -= (Math.floor(getRandomValue(10,15))), playerStore.playerHealth -= 3);
    } else if (id === 'magic_book_10') {
      if (monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ||
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = (50 + 40);
        playerStore.playerMana -= 30;
        playerStore.playerHealth -= 10;
      } else if (
          monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom') {
        magicAttackValue.value = (50 - 20);
        playerStore.playerMana -= 30;
        playerStore.playerHealth -= 10;
      } else (magicAttackValue.value = 50, playerStore.playerMana -= 30, playerStore.playerHealth -= 10);
    } else if (id === 'magic_scroll_6') {
      if (monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom' ||          
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = (35 + 15);
        playerStore.playerMana -= 10;
        playerStore.playerHealth += 1;
      } else if (
          monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ) {
        magicAttackValue.value = (35 - 15);
        playerStore.playerMana -= 10;
        playerStore.playerHealth += 1
      } else (magicAttackValue.value = 35, playerStore.playerMana -= 10, playerStore.playerHealth += 1);
    } else if (id === 'magic_book_11') {
      if (monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom' ||          
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = (30 + 20);
        playerStore.playerMana -= (Math.floor(getRandomValue(5,20)));
        playerStore.playerHealth += 3;
      } else if (
          monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ) {
        magicAttackValue.value = (30 - 10);
        playerStore.playerMana -= (Math.floor(getRandomValue(5,20)));
        playerStore.playerHealth += 3
      } else (magicAttackValue.value = 30, playerStore.playerMana -= (Math.floor(getRandomValue(5,20))), playerStore.playerHealth += 3);
    } else if (id === 'magic_book_12') {
      if (monsterStore.monsterName == 'Mountain Troll' ||
          monsterStore.monsterName == 'Snow Cat' ||
          monsterStore.monsterName == 'Yeti' ||
          monsterStore.monsterName == 'Ice Giant' ||
          monsterStore.monsterName == 'Grim Owl' ||
          monsterStore.monsterName == 'Vampire' ||
          monsterStore.monsterName == 'Baba Yaga' ||
          monsterStore.monsterName == 'Undead Soldier' ||
          monsterStore.monsterName == 'Banshee' ||
          monsterStore.monsterName == 'Ghoul' ||
          monsterStore.monsterName == 'Dire Moth' ||
          monsterStore.monsterName == 'Oni' ||
          monsterStore.monsterName == 'Bog Zombie' ||
          monsterStore.monsterName == 'Rusalka' ||
          monsterStore.monsterName == 'Phantom' ||          
          monsterStore.monsterName == 'Fire River Drake' ||
          monsterStore.monsterName == 'Basilisk' ||
          monsterStore.monsterName == 'Kitsune' ||
          monsterStore.monsterName == 'Cockatrice' ||
          monsterStore.monsterName == 'Chimera' ||
          monsterStore.monsterName == 'Golden Dragon' ||
          monsterStore.monsterName == 'Heron King' ||
          monsterStore.monsterName == 'Gargoyle' ||
          monsterStore.monsterName == 'Dire Eagle' ||
          monsterStore.monsterName == 'Iron Dragon' ||
          monsterStore.monsterName == 'Moss Dragon' ||
          monsterStore.monsterName == 'Hydra') {
        magicAttackValue.value = ((Math.floor(getRandomValue(40,70))) + 20);
        playerStore.playerMana -= 30;
        playerStore.playerHealth += 10;
      } else if (
          monsterStore.monsterName == 'Djinn' || 
          monsterStore.monsterName == 'Phoenix' || 
          monsterStore.monsterName == 'Mushroom Spirit' ||
          monsterStore.monsterName == 'Forest Guardian' ||
          monsterStore.monsterName == 'Forest God' ||
          monsterStore.monsterName == 'Vine Clinger' ||
          monsterStore.monsterName == 'Will-O-Wisp' ||
          monsterStore.monsterName == 'Water Knight' ||
          monsterStore.monsterName == 'Rootbeast' ||
          monsterStore.monsterName == 'Wood Nymph' ) {
        magicAttackValue.value = ((Math.floor(getRandomValue(40,70))) - 10);
        playerStore.playerMana -= 30;
        playerStore.playerHealth += 10;
      } else (magicAttackValue.value = (Math.floor(getRandomValue(40,70))), playerStore.playerMana -= 30, playerStore.playerHealth += 10);
    }    
    playerStore.playerXP += magicAttackValue.value;        // to gain XP
    playerStore.playerTotalXP += magicAttackValue.value;   // to keep track of XP
    playerStore.XPUntilNextLevel();             // to level up if applicable
    playerStore.levelUp();    
    const monsterisHit = (monsterStore.monsterHealth - (monsterStore.monsterHealth -= magicAttackValue.value));
    addLogEntry('player', 'attacks', magicAttackValue.value, monsterisHit);
    if (monsterStore.monsterHealth < 0) {
      monsterStore.monsterHealth = 0;
    } else {
      monsterStore.monsterHealth;
    }
    attackPlayer();
    if (playerStore.playerHealth < 0) {
      playerStore.playerHealth = 0;
    } else {
      playerStore.playerHealth;
    }
  }

// charged special attack 
  function specialAttackMonster() {
    currentRound.value = 0;
    monsterRound.value = monsterRound.value + 1;
    const attackValue = Math.ceil(getRandomValue(10, 25) + ((playerStore.playerAttack * .1) + (playerStore.playerStrength)));
        playerStore.playerXP += attackValue;    // to gain XP
    playerStore.playerTotalXP += attackValue;   // to keep track of XP
    playerStore.XPUntilNextLevel();             // to level up if applicable
    playerStore.levelUp();
    const monsterisHit = (monsterStore.monsterHealth - (monsterStore.monsterHealth -= attackValue));
    addLogEntry('player', 'uses special-attack', attackValue, monsterisHit);
    if (monsterStore.monsterHealth < 0) {
      monsterStore.monsterHealth = 0;
    } else {
      monsterStore.monsterHealth;
    }
    attackPlayer();
    if (playerStore.playerHealth < 0) {
      playerStore.playerHealth = 0;
    } else {
      playerStore.playerHealth
    }
    specialAttackAvailable.value = false;
  }



// monster strikes back
  function attackPlayer() {
    const attackValue = monsterStore.getMonsterHitAbility();
    const attackEffect = ref(Math.ceil(attackValue - ((playerStore.playerDefense *.1) + playerStore.playerStrength)))
    if (attackEffect.value < 0) {
      attackEffect.value = 0;
    }
    playerStore.playerHealth -= attackEffect.value;
    addLogEntry('monster', 'attacks', attackValue, attackEffect.value);
  }

// player healing
  function healPlayer() {
    currentRound.value = currentRound.value + 1;
    monsterRound.value = monsterRound.value + 1;
    const healValue = getRandomValue(10, 25);
    if (playerStore.playerHealth + healValue > playerStore.playerBaseHealth) {
      playerStore.playerHealth = playerStore.playerBaseHealth;
    } else {
      playerStore.playerHealth += healValue;
    }
    addLogEntry('player', 'heals', healValue);
    attackPlayer();
    if (playerStore.playerHealth < 0) {
      playerStore.playerHealth = 0;
    } else {
      playerStore.playerHealth;
    }
  }


// making variables watchable
  const storePlayerHealth = storeToRefs(playerStore)
  const storeMonsterHealth = storeToRefs(monsterStore)

// autohealing?
  // watch(storePlayerHealth.playerHealth, function(value) {
  //   if (value < storePlayerHealth.playerBaseHealth) {
  //     storePlayerHealth.autoHeal();
  //   }
  // })

// setting winning conditions:
  const gameover = ref(false)
  const winner = ref(null);

  watch(storePlayerHealth.playerHealth, function(value) {
    if (value === 0) {
      gameover.value = true;
      storeMonsterHealth.monsterFound = false;
    }
  })     

  watch(storePlayerHealth.playerHealth, function(value) {
    if (value <= 0 && storeMonsterHealth.monsterHealth <= 0) {
      winner.value = 'draw';
    } else if (value <=0) {
      winner.value = 'monster';
    }
  })

  watch(storeMonsterHealth.monsterHealth, function(value) {
    if (value <= 0 && storePlayerHealth.playerHealth <=0) {
      winner.value = 'draw';
    } else if (value <= 0) {
      winner.value = 'player';
    }
  })

  watch(storeMonsterHealth.monsterHealth, function(value) {
    if (value === 0) {
      gameover.value = true;
      storeMonsterHealth.monsterFound = false;
    }
  })   

// resetting game after a victory
  function lootCollected() {
    gameover.value = false;
    winner.value = false;
    startGame.value = false;
    toggleImage.value = false;
    monsterStore.monsterFound = false;
    monsterStore.monsterId = '';
    monsterStore.monsterName = '';
    monsterStore.monsterHealth = null;
    monsterStore.monsterStartingHealth = null;
    currentRound.value = 0; 
    monsterRound.value = 0;
    monsterStore.battleLog = [];
  }

</script>

<style scoped>
.desert {
  background-color: #e05a00;
  opacity: .6;
}
.forest {
  background-color: #000000;
  opacity: .6;
}
.grassland {
  background-color: #ead068;
  opacity: .6;
}
.jungle {
  background-color: #82bc71;
  opacity: .6;
}
.marshes {
  background-color: #6b3e2e;
  opacity: .6;
}
.mountains {
  background-color: #808080;
  opacity: .6;
}
.swamp {
  background-color: #8b7a32;
  opacity: .6;
}
</style>


    
  