<template>
    <the-header></the-header>

    <div class="bg-[url('../assets/images/quests/The_Guild.png')] bg-cover ">
        <div class="flex justify-center pt-16">
            <div class="text-center w-1/3 bg-white bg-opacity-50  flex justify-center pb-3">
                <div class="pt-3">
<!-- Title elements -->
                    <p class="font-extrabold font-serif text-7xl ">The Monster Hunter's Guild</p>                
                </div>             
            </div>        
        </div>
<!-- when quest completion attempt active -->
        <div v-if="!basicLobby"> 
          <div class="flex justify-center"> 
            <div class="w-1/3 bg-white bg-opacity-50 flex justify-center scroll-mb-16"> 
                <quest-rendering
                    :quest="quest"
                    @emit-quest-complete="questComplete"
                    @emit-leave-quest="leaveQuest"
                ></quest-rendering>
            </div>
          </div>
        </div>
<!-- basic lobby arrangement -->
        <div v-if="basicLobby">
          <div class="flex justify-center">
              <div class="text-center w-1/3 bg-white bg-opacity-50 flex justify-center">
                  <div class="pt-3 ">
                      <img src="../../assets/images/village_guild/The_Guildmaster.png" alt="" class="h-56 w-56 border border-black"/>                     
                  </div>             
              </div>        
          </div>
          <div class="flex justify-center">
              <div class="text-center w-1/3 bg-white bg-opacity-50 flex justify-center mb-16 ">
                  <div class="w-5/6 pt-8 pb-8 font-semibold">
                      <h1 class="pb-3 px-5 text-xl">Welcome to the illustrious Monster Hunter's Guild. </h1>
                      <div class="flex justify-center">
                        <p class="pb-8 px-5 text-sm w-2/3 ">We offer services and support tailored toward Hunters of all levels. <br/> Please feel free to explore the guild at your leisure.</p>
                      </div>
                      <div class="grid grid-cols-2 gap-5">
                        <router-link type="button" :to="'/village2'" class="px-3 py-3 bg-[#a6bf8e] hover:bg-green-100 border border-slate-600 rounded-lg">
                          Explore the Village</router-link>
                        <router-link :to="'/map'" type="button" class="px-3 py-3 bg-[#305c79] hover:bg-blue-200 border border-gray-600 rounded-lg text-gray-300 hover:text-black">
                          Hunt for Monsters</router-link>
                      </div>

                      <div class="grid grid-cols-2">
                        <div>
                          <router-link :to="'/guild_hospital'" type="button" class="ml-20 mt-3 px-3 py-3 w-32 h-32 bg-[#ffc0cb] hover:bg-[#de5d83] border border-slate-600 rounded-lg">
                            <p class="pt-6">Visit Guild Hospital</p></router-link>
                        </div>
                        <div>
                          <button @click="openListModal = !openListModal" type="button" class="-ml-20 mt-3 px-3 py-3 w-32 h-32 bg-[#d2b55b] hover:bg-[#bc9928] border border-slate-600 rounded-lg">
                            Check Guild Postings</button>
                        </div>                        
                      </div> 
                      <div class="grid grid-cols-3 py-5">
                        <div>
                          <router-link :to="'/guild_gym'" type="button" class="px-3 py-3 w-32 h-32 bg-slate-400 hover:bg-slate-600 hover:text-white border border-slate-600 rounded-lg">
                            <p class="pt-6">Receive Training</p></router-link>
                        </div>
                        <div>
                          <router-link :to="'/guild_points'" type="button" class="px-3 py-3 w-32 h-32 bg-slate-400 hover:bg-slate-600 hover:text-white border border-slate-600 rounded-lg">
                            <p class="pt-7">Spend Points</p></router-link>
                        </div>
                        <div>
                          <router-link :to="'/guild_reputation'" type="button" class="px-3 pt-6 pb-3 w-32 h-32 bg-slate-400 hover:bg-slate-600 border hover:text-white border-slate-600 rounded-lg">
                            Evaluate Personal Reputation</router-link>
                        </div>
                      </div>
                                           
                  </div>             
              </div>        
          </div>
        </div>
        <div class="pb-28"></div>
    </div>

<!-- quest list modal display -->
  <TransitionRoot as="template" :show="openListModal">
    <Dialog as="div" class="relative z-10" @close="openListModal = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-[url('../assets/images/quests/The_Guild_wall.png')] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto flex items-center justify-center rounded-3xl pb-8 bg-[url('../assets/images/quests/The_Guild_list.png')]">
                    <div class="mt-3 bg-[#d2b55b] pb-3 w-2/3 text-center border border-black rounded-2xl sm:mt-5">
            <!-- quest rules -->
                        <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Guild Rules</DialogTitle>
                        <div class="mt-2">
                            <p class="text-sm text-gray-700 font-semibold">1. Quests are available on a first-claimed basis.</p>
                            <p class="text-sm text-gray-700 font-semibold">2. You may only claim one quest at a time.</p>
                            <p class="text-sm text-gray-700 font-semibold">3. The full deposit of 500 coin must be paid to formalize your claim.</p>
                            <p class="text-sm text-gray-700 font-semibold">4. Quests must be completed in full to receive payment.</p>
                            <p class="text-sm text-gray-700 font-semibold">5. You have only 30 days to complete your quest.</p>
                            <p class="text-xs text-gray-700 font-medium  px-1 pt-2">After 30 days, we will assume you've been eaten by monsters and your quest will be made available to a new hunter.</p>
                        </div>     
            <!-- quests -->
                        <div v-if="conditionalStore.huntersGuild.questAccepted === false" class="flex justify-center">
                          <div class="grid grid-cols-1 px-4">
                            <div>                        
                              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 py-4">Available Quests:</DialogTitle>
                            </div> 
                            <div> 
                              <guild-quests></guild-quests>
                            </div>
                          </div>
                        </div>
                        <div v-if="conditionalStore.huntersGuild.questAccepted" class="flex justify-center">
                          <div class="grid grid-cols-1 px-4">
                            <div>                        
                              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 py-4">Accepted Quests:</DialogTitle>
                            </div> 
                            <div> 
                              <guild-quests
                                @emit-attempt-quest="attemptQuest"
                                @emit-quit-quest="quitQuest"
                              ></guild-quests>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <div class="mt-5 justify items-center">
                <button @click="openListModal = false" type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-800 px-4 py-2 text-base font-medium text-white  shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                  Close Listings</button>
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
  import { useConditionalsStore } from '@/stores/conditionals'
  import { useQuestStore } from '@/stores/quests';
  import { usePlayerStore } from '@/stores/player';
  import GuildQuests from '../../components/guild/GuildQuests.vue';
  import QuestRendering from '../../components/quests/QuestRendering.vue';

  const conditionalStore = useConditionalsStore();
  const questStore = useQuestStore();
  const playerStore = usePlayerStore();

  const openListModal = ref(false);
  const basicLobby = ref(true);

  const quest = ref('');

  function attemptQuest(questId) {
    if(questId === undefined) {
      console.log('quest: ' + questId);
    }
    quest.value = questId;
    openListModal.value = false;
    basicLobby.value = false;
  }

  function quitQuest(questId) {
    openListModal.value = false;
    let id = questId;
    if (id === 'guildGrossStew1') {
      let collectGrossStew1Quest = questStore.quests.find(quest => quest.id === 'guildGrossStew1');
      collectGrossStew1Quest.active = false;
      collectGrossStew1Quest.complete = false;
      conditionalStore.huntersGuild.grossStew1QuestAvailable = false;
      let x = playerStore.playerActiveQuests.findIndex(quest => quest.id === 'guildGrossStew1');
      playerStore.playerActiveQuests.splice(x, 1);
    }
    else if (id === 'guildCollectNine') {
      let collect9Quest = questStore.quests.find(quest => quest.id === 'guildCollectNine');
      collect9Quest.active = false;
      collect9Quest.complete = false;
      conditionalStore.huntersGuild.collect9QuestAvailable = false;
      let x = playerStore.playerActiveQuests.findIndex(quest => quest.id === 'guildCollectNine');
      playerStore.playerActiveQuests.splice(x, 1);
    }
    else if (id === 'guildFixTheLights') {
      let fixLightsQuest = questStore.quests.find(quest => quest.id === 'guildFixTheLights');
      fixLightsQuest.active = false;
      fixLightsQuest.complete = false;
      conditionalStore.huntersGuild.fixLightsQuestAvailable = false;
      let x = playerStore.playerActiveQuests.findIndex(quest => quest.id === 'guildFixTheLights');
      playerStore.playerActiveQuests.splice(x, 1);
    }
    basicLobby.value = true;
    conditionalStore.huntersGuild.questAccepted = false;
  }

  function leaveQuest() {
    basicLobby.value = true;
  }
  function questComplete() {
        basicLobby.value = true;
        conditionalStore.huntersGuild.questAccepted = false;
    }
  
</script>
