<template>
    <the-header></the-header>

    <div class="bg-[url('../assets/images/quests/The_Guild.png')] w-screen h-screen">
        <div class="flex justify-center pt-16">
            <div class="text-center w-1/3 bg-white bg-opacity-50  flex justify-center pb-3">
                <div class="pt-3">
                    <p class="font-extrabold font-serif text-7xl ">The Monster Hunter's Guild</p>                
                </div>             
            </div>        
        </div>
        
        <div class="flex justify-center">
            <div class="text-center w-1/3 bg-white bg-opacity-50 flex justify-center">
                <div class="pt-3 ">
                    <img src="../../assets/images/quests/The_Guildmaster.png" alt="" class="h-56 w-56 border border-black"/>                     
                </div>             
            </div>        
        </div>

        <div class="flex justify-center">
            <div class="text-center w-1/3 bg-white bg-opacity-50 flex justify-center">
                <div class="pt-8 pb-8 font-semibold font-mono">
                    <p>What level are you again? <br/> Not so sure you're in the right place, friend. <br/> But if you want to try, good luck to you. <br/> You'll need it.</p>
                    <p><br/></p>
                    <router-link type="button" :to="'/questfinder'" class="px-3 py-3 bg-slate-400 hover:bg-slate-600 border border-slate-600 rounded-lg">Return to Tavern</router-link>
                    <p><br/></p>
                    <button @click="openListModal = !openListModal" type="button" class="px-3 py-3 bg-slate-400 hover:bg-slate-600 border border-slate-600 rounded-lg">Check Guild Postings</button>
                </div>             
            </div>        
        </div>

    </div>

<!-- list modal display -->
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
                    <div class="mt-3 bg-amber-300 pb-3 w-2/3 text-center border border-black rounded-2xl sm:mt-5">
                        <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Guild Rules</DialogTitle>
                        <div class="mt-2">
                            <p class="text-sm text-gray-700 font-semibold">1. Quests are available on a first-claimed basis.</p>
                            <p class="text-sm text-gray-700 font-semibold">2. You may only claim one quest at a time.</p>
                            <p class="text-sm text-gray-700 font-semibold">3. The full deposit of 500 coin must be paid to formalize your claim.</p>
                            <p class="text-sm text-gray-700 font-semibold">4. Quests must be completed in full to receive payment.</p>
                            <p class="text-sm text-gray-700 font-semibold">5. You have only 30 days to complete your quest. <br/> After 30 days, we will assume you've been eaten by monsters and your quest will be made available to a new hunter.</p>
                        </div>
                        <p><br/></p>
                        <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Available Quests:</DialogTitle>
                        <div class="mt-2">
                            <button class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">Collect the head of the Fire River Drake <br/> Payout: 150,000 coin</button>
                            
                        </div>
                    </div>
                </div>

              </div>
              <div class="mt-5 justify items-center">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-800 px-4 py-2 text-base font-medium text-white  shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm" @click="openListModal = false">Close Listings</button>
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

  const openListModal = ref(false)
  
</script>
