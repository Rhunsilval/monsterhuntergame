<template>
<!-- landing screen -->
  <div v-if="!startGame">
    <div v-if="map='Firesand Desert'" class="bg-[url('../assets/images/desert/Desert_background.png')] w-screen h-screen">
        
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
                    <button @click="startHunt()" type="button" class="my-4 px-16 pt-16 pb-28  w-96 h-16 bg-[#305c79] hover:bg-blue-200 hover:text-black border border-slate-800 rounded-2xl font-semibold font-serif text-white text-2xl">Hunt for Monsters</button>                   
                    <br/>
                    <router-link :to="'/map'" type="button" class="my-4 px-16 pt-16 pb-28 w-96 h-16 bg-[#305c79] hover:bg-blue-200 hover:text-black border border-slate-800 rounded-2xl font-semibold font-serif text-white text-2xl">Return to Map</router-link>
                </div>             
            </div>        
        </div>

    </div>
  </div>

<!-- start hunt screen -->
  <div v-if="startGame">
    <div class="bg-[url('../assets/images/desert/Desert_background.png')] w-screen h-screen ">
      <div class="bg-opacity-60 bg-orange-500 w-screen h-screen">

        <div v-if="!monsterStore.monsterFound" class="flex justify-center pt-16">
          <div class="text-center w-1/2 flex justify-center pb-3 bg-white opacity-70">
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
                        <img src="../../assets/images/desert/desert_nomonster1.png" alt="" class="border border-black h-60  w-60 object-cover" />
                        <p>Nothing here but lots of sand</p>                             
                      </div>
                              
                      <div v-if="toggleImage"> 
                        <img src="../../assets/images/desert/desert_nomonster2.png" alt="" class="border border-black h-60 w-60 object-cover" />
                        <p>Nothing here either </p>                            
                      </div>                        
                    </div>

                    <div class=" px-10 ">
                      <div class="">
                        <button @click="tryAgain()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5">No Monsters Found <br/>Try Again</button>
                      </div>
                              
                      <div class="mt-8">
                        <button @click="startGame = false" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5" >Stop Searching</button>
                      </div>
                    </div>

              </div>
            
<!-- found monsters -->
              <div v-if="monsterStore.monsterFound" class="grid grid-cols-3 gap-16 items-center mb-28 pb-16">

                <div class="border border-black"> 
                  <!-- <p>placeholder?</p> -->
                </div>
                
                <div> 
                  <monster-fighter
                    :specialAttackAvailable="specialAttackAvailable"
                    @emit-attack-monster="attackMonster"
                    @emit-run-away="runAway"
                    @emit-special-attack="specialAttackMonster"
                    @emit-heal-player="healPlayer"
                  ></monster-fighter>
                </div>

                <div class=""> 
                  <battle-log
                    :battleLog="battleLog"
                  ></battle-log>
                </div>

              </div>

            </div>

<!-- game over active -->
            <div v-if="gameover"> 
              <the-winner
                :winner="winner"
                :mapName="mapName.value"
                @emit-loot-collected="lootCollected"
              ></the-winner>
            </div>

          </div>
        </div>

      </div>    
    </div>
  </div>

</template>


<script>
  import { ref, watch } from 'vue'
  import { storeToRefs } from 'pinia'  
  import { usePlayerStore } from '@/stores/player'
  import { useMonsterStore } from '@/stores/monster'

  export default {
    components: {},
    props: [
        'mapName'
    ],
    emits: [],
    setup(props) {
      const map = ref(props.mapName);
    //   const mapName = 'Firesand Desert';

      const playerStore = usePlayerStore();
      const monsterStore = useMonsterStore();

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
      }

      function getMonsterMap() {
        monsterStore.monsterMap = map.value;
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
      const battleLog = ref([]);

      function addLogEntry(who, what, value) {
        battleLog.value.unshift({
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


      return {
        // mapName,
        map,
        playerStore,
        monsterStore,
        startGame,
        startHunt,        
        findMonster,
        tryAgain,
        runAway,
        toggleImage,
        attackMonster,
        battleLog,
        specialAttackAvailable,
        specialAttackMonster,
        healPlayer, 
        gameover,
        winner,
        // lootCollected
      }
    }
  }  

    // my emitLootCollected emission is throwing an error in the map_page component.  
    // page is receiving emit-loot-collected from winner component and executing lootCollected function:
    // which sets the startGame value back to false, to return to the landing screen
    // error:  Uncaught TypeError: Cannot read properties of undefined (reading 'emit')
    // research not yet finding a solution
    // workaround is to turn button into a router-link that takes user back to the map
    // NOT IDEAL - i want the user to return to the landing page view of the map_page they're already on
</script>