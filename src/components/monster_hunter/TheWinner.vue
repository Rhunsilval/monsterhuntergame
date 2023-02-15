<template>
    <div class="mt-8 ">

<!-- winner -->
        <div v-if="winner === 'player'" class="mb-10"> 
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

<!-- loser -->
        <div v-if="winner === 'monster'" class="mb-10"> 
            <div class="pt-3 "> 
                <img src="../../assets/images/defeat.png" alt="" class="h-96 w-96 object-cover object-center" />
                <p class="py-3 font-bold text-2xl">You Lose. <br/> Oh, how embarrassing!</p>
            </div>

            <div>
                <router-link :to="'/home'" type="button" class="bg-[#305c79] hover:bg-blue-200 text-white px-2 py-2 rounded-2xl border border-black">
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
                <router-link :to="'/village'" type="button" class="bg-[#305c79] hover:bg-blue-200 text-white px-2 py-2 rounded-2xl border border-black">
                  Return to Village</router-link>
            </div>
        </div>
        
    </div>

<!-- loot pickup modal display -->
  <TransitionRoot as="template" :show="openModal">
    <Dialog as="div" class="relative z-10" @close="openModal = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class=" w-1/2 relative transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              
              <div>
                <div class="mx-auto flex items-center justify-center rounded-3xl pb-8 bg-white">                    
                  <div class="mt-3 bg-gray-300 pb-3 w-2/3 text-center border border-black rounded-2xl sm:mt-5">

                    <DialogTitle as="h3" class="font-bold font-serif leading-6 text-4xl text-gray-900 mt-3 pb-5">{{props.mapName }}</DialogTitle>

                    <div> 
                      <the-winner-loot></the-winner-loot>
                    </div>

                    <div> 
                      <button @click="doneCollectingLoot()" class="px-2 py-2 mt-3 rounded-xl bg-white border border-black">
                        Done Collecting</button>
                    </div>

                  </div>
                </div>
              </div>

            </DialogPanel>            
          </TransitionChild>

        </div>
      </div>
      
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
    import { ref } from 'vue'
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
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

    const openModal = ref(false);
    const lootAvailable = ref(true);

    function doneCollectingLoot() {
      lootAvailable.value = false;
      openModal.value = false;     
      lootStore.lootList = [];                           
    }

    function getLoot() {
      openModal.value = true;
      lootStore.generateCoins();
      lootStore.generateLoot();
    }

    function emitLootCollected() {
      emit('emitLootCollected');
    }

</script>