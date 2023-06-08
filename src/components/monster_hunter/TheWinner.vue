<template>
    <div class="mt-8 ">

<!-- winner -->
        <div v-if="winner === 'player'" class="mb-10">

          <div v-if="!lootVisible"> 
            <div class="pt-3"> 
                <img src="../../assets/images/victory.png" alt="" class="h-96 w-96 object-cover object-center" />
                <p class="py-3 font-bold text-2xl">Victory is yours!</p>
            </div>
            
            <div v-if="lootAvailable"> 
                <button @click="getLoot()" class="bg-[#305c79] hover:bg-blue-200 text-white px-2 py-2 rounded-2xl border border-black">
                  Collect Loot</button>
            </div>
            <br/>
            <div> 
                <button @click="emitLootCollected()" class="bg-[#305c79] hover:bg-blue-200 text-white px-2 py-2 rounded-2xl border border-black">
                  Hunt again</button>
            </div>

          </div>
          
          <div v-else> 
            <h3 class="font-bold font-serif leading-6 text-4xl text-gray-900 mt-3 pb-5">{{props.mapName }}</h3>
            <div>
              <the-winner-loot></the-winner-loot>
            </div>
            <div> 
              <button @click="emitLootCollected()" class="px-2 py-2 mt-3 rounded-xl bg-white border border-black">
                Done Collecting</button>
            </div>
          </div>

        </div>

<!-- loser -->
        <div v-if="winner === 'monster'" class="mb-10"> 
            <div class="pt-3 "> 
                <img src="../../assets/images/defeat.png" alt="" class="h-96 w-96 object-cover object-center" />
                <p class="py-3 font-bold text-2xl">You Lose. <br/> Oh, how embarrassing!</p>
            </div>

            <div>
                <router-link :to="'/home'" type="button" @click="emitLootCollected()" class="bg-[#305c79] hover:bg-blue-200 text-white px-2 py-2 rounded-2xl border border-black">
                  Start Over</router-link>
            </div>
        </div>

<!-- draw -->
        <div v-if="winner === 'draw'" class="mb-10"> 
            <div class="pt-3 "> 
                <img src="../../assets/images/draw.png" alt="" class="h-96 w-96 object-cover object-center" />
                <p class="py-3 font-bold text-2xl">A draw? <br/> Well, that stinks!</p>
            </div>
            
            <div>
                <router-link :to="'/village'" type="button" @click="emitLootCollected()" class="bg-[#305c79] hover:bg-blue-200 text-white px-2 py-2 rounded-2xl border border-black">
                  Return to Village</router-link>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useLootStore } from '@/stores/loot'
    import TheWinnerLoot from './TheWinnerLoot.vue'

    const props = defineProps({
      winner: {},
      mapName: {},
    })

    const emit = defineEmits([
      'emitLootCollected'
    ])    

    const lootStore = useLootStore();
    const lootVisible = ref(false);
    const lootAvailable = ref(true);
    
    function getLoot() {     
      lootStore.generateCoins();
      lootStore.generateLoot();
      lootVisible.value = true;
    } 

// even though losing/draws don't return me to MonsterHunter page where the code lives,
// it seems to work anyway to reset all player variables
// and it isn't throwing any errors?  
// perhaps because the fight is happening on monsterhunter and just being rendered here
// so the code actually does pass through that page before routing to wherever it's going?
    function emitLootCollected() {
      lootAvailable.value = false;
      lootVisible.value = false;
      lootStore.lootList = [];
      lootStore.lootCoins = [];
      emit('emitLootCollected');
    }

</script>