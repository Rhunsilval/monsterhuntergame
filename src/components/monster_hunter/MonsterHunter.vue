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
              
                <div class="col-span-2"> 
                  <monster-fighter
                    :specialAttackAvailable="specialAttackAvailable"
                    @emit-attack-monster="attackMonster"
                    @emit-run-away="runAway"
                    @emit-special-attack="specialAttackMonster"
                    @emit-heal-player="healPlayer"
                  ></monster-fighter>
                </div>

                <div class="border border-black"> 
                  <battle-log
                    :battleLog="battleLog"
                  ></battle-log>
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
  import MonsterFighter from './MonsterFighter.vue'
  import BattleLog from './BattleLog.vue'
  import TheWinner from './TheWinner.vue'

  const playerStore = usePlayerStore();
  const monsterStore = useMonsterStore();
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
    startGame.value = false;
    toggleImage.value = false;
    monsterStore.monsterFound = false;
    monsterStore.monsterId = '';
    monsterStore.monsterName = '';
    monsterStore.monsterHealth = null;
    monsterStore.monsterStartingHealth = null;
    const attackValue = getRandomValue(1, 10);
    playerStore.playerHealth -= attackValue; //monster hits as player runs, takes some damage
    if (playerStore.playerHealth < 0) {
      playerStore.playerHealth = 0;
    } else {
      playerStore.playerHealth;
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


// gameplay
// creating a battle log for user clarity in battle
  // const battleLog = ref([]);
  // moved this to monster pinia store since, for reasons i don't understand, it breaks here

  function addLogEntry(who, what, value) {
    monsterStore.battleLog.unshift({
      entryId: new Date().toISOString(),
      actionBy: who,
      actionType: what,
      actionValue: value,
    })
  }

// attack the monster
  function attackMonster() {
    currentRound.value = currentRound.value + 1;
    monsterRound.value = monsterRound.value + 1;
    const attackValue = getRandomValue(5, 10) + playerStore.playerAttack;
    monsterStore.monsterHealth -= attackValue;
    addLogEntry('player', 'attacks', attackValue);
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
    const attackValue = getRandomValue(10, 25);
    monsterStore.monsterHealth -= attackValue;
    addLogEntry('player', 'uses special-attack', attackValue);
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
    playerStore.playerHealth -= attackValue;
    addLogEntry('monster', 'attacks', attackValue);
  }

// player healing
  function healPlayer() {
    currentRound.value = currentRound.value + 1;
    monsterRound.value = monsterRound.value + 1;
    const healValue = getRandomValue(10, 25);
    if (playerStore.playerHealth + healValue > 100) {
      playerStore.playerHealth = 100;
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


// setting winning conditions:
  const gameover = ref(false)
  const winner = ref(null);
  const storePlayerHealth = storeToRefs(playerStore)
  const storeMonsterHealth = storeToRefs(monsterStore)

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


// collect loot!
      // function lootCollected() {
      //   startGame.value = false; 
      // }


    // my emitLootCollected emission is throwing an error in the map_page component.  
    // page is receiving emit-loot-collected from winner component and executing lootCollected function:
    // which sets the startGame value back to false, to return to the landing screen
    // error:  Uncaught TypeError: Cannot read properties of undefined (reading 'emit')
    // research not yet finding a solution
    // workaround is to turn button into a router-link that takes user back to the map
    // NOT IDEAL - i want the user to return to the landing page view of the map_page they're already on
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


    
  