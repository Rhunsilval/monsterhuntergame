<template>
     
<!-- background -->
    <div :style="{ backgroundImage: `url(${storeTypes[getStoreType()]})` }" alt="" class="bg-cover max-w-full">

<!-- header -->    
      <div class="flex justify-center">                
        <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center">
            <div class="pt-3 ">
                <p v-if="shopName === 'Apothecary'" class="font-extrabold font-serif text-6xl ">Bobby Baker's Botanical Brews</p>                
                <p v-else-if="shopName === 'Armory'" class="font-extrabold font-serif text-6xl ">Threads and Thongs and Things</p>                
                <p v-else-if="shopName === 'Blacksmith'" class="font-extrabold font-serif text-6xl ">Sally's Smithy Supplies</p>                
                <p v-else class="font-extrabold font-serif text-6xl ">Abernathy's Oddities</p>                
            </div>                        
        </div>        
      </div>

<!-- shopkeeper -->
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center">
            <div class="pt-3 ">
                <img v-if="shopName === 'Apothecary'"  src="../assets/images/village/Apothecary_Shopkeeper.png" alt="" class="border border-gray-800 "/>                 
                <img v-else-if="shopName === 'Armory'"  src="../assets/images/village/Armory_Shopkeeper.png" alt="" class="w-64 border border-gray-800 "/>                 
                <img v-else-if="shopName === 'Blacksmith'"  src="../assets/images/village/Blacksmith_Shopkeeper.png" alt="" class="w-52 border border-gray-800 "/>                 
                <img v-else  src="../assets/images/village/Oddities_Shopkeeper.png" alt="" class="border border-gray-800 "/>
            </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-95 flex justify-center">
            <div class="py-8 font-semibold font-mono ">
                <p v-if="shopName === 'Apothecary'" class="">Welcome to my apothecary shop! <br/> Please have a look around. <br/> Let me know if you're looking for something in particular.</p>
                <p v-else-if="shopName === 'Armory'" class="">Hi!  Welcome to my shop. <br/> Please try not to touch anything. <br/> Some of my items are enchanted, and they can be temperamental. <br/> If you need any help, just ask!</p>
                <p v-else-if="shopName === 'Blacksmith'" class="">If you're needing a good sword, you're in the right place. <br/> Let me know if I can help.</p>
                <p v-else class="">I'll make you a deal.<br/> Don't ask me where I got anything, <br/>and I won't ask you what you intend to do with it.<br/>Ha!</p>
                <div class="pt-4">  
                  <button @click="openDialogModal = !openDialogModal" class="px-3 py-3 border border-gray-600 bg-[#7aa0bd] hover:bg-[#305c79] hover:text-white">
                    Speak with Shopkeeper</button>
                </div>
                <div class="pt-8">           
                  <router-link to="/village" class="px-3 py-3 bg-[#a6bf8e] hover:bg-green-100 border border-slate-600">
                  Return to Village</router-link>
                </div>
            </div>                         
        </div>        
      </div>

<!-- inventory -->
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-white bg-opacity-75 ">
        <div v-if="shopName === 'Apothecary'" class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">          
          <button
            type="button"
            v-for="product in store.apothecary"
            @click="buyProduct(product.id)"
            :key="product.id" 
            class="group"
          >
            <div class="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img :src="product.imageSrc" :alt="''" class="h-full w-full object-cover object-center group-hover:opacity-30" />
            </div>
            <div class="text-center">
                <h2 class="mt-4 font-semibold text-lg text-gray-700">{{ product.name }}</h2>
                <h3 class="mt-4 text-base text-gray-700">{{ product.description }}</h3>
                <h4 class="mt-4 text-sm text-gray-700">{{ product.value }}</h4>
                <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }} coin</p>
            </div>
          </button>
        </div>

        <div v-else-if="shopName === 'Armory'" class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">          
          <button
            type="button"
            v-for="product in store.armory"
            @click="buyProduct(product.id)"
            :key="product.id" 
            class="group"
          >
            <div class="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img :src="product.imageSrc" :alt="''" class="h-full w-full object-cover object-center group-hover:opacity-30" />
            </div>
            <div class="text-center">
                <h2 class="mt-4 font-semibold text-lg text-gray-700">{{ product.name }}</h2>
                <h3 class="mt-4 text-base text-gray-700">{{ product.description }}</h3>
                <h4 class="mt-4 text-sm text-gray-700">{{ product.value }}</h4>
                <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }} coin</p>
            </div>
          </button>
        </div>

        <div v-else-if="shopName === 'Blacksmith'" class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">          
          <button
            type="button"
            v-for="product in store.blacksmith"
            @click="buyProduct(product.id)"
            :key="product.id" 
            class="group"
          >
            <div class="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img :src="product.imageSrc" :alt="''" class="h-full w-full object-cover object-center group-hover:opacity-30" />
            </div>
            <div class="text-center">
                <h2 class="mt-4 font-semibold text-lg text-gray-700">{{ product.name }}</h2>
                <h3 class="mt-4 text-base text-gray-700">{{ product.description }}</h3>
                <h4 class="mt-4 text-sm text-gray-700">{{ product.value }}</h4>
                <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }} coin</p>
            </div>
          </button>
        </div>

        <div v-else class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">          
          <button
            type="button"
            v-for="product in store.oddities"
            @click="buyProduct(product.id)"
            :key="product.id" 
            class="group"
          >
            <div class="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img :src="product.imageSrc" :alt="''" class="h-full w-full object-cover object-center group-hover:opacity-30" />
            </div>
            <div class="text-center">
                <h2 class="mt-4 font-semibold text-lg text-gray-700">{{ product.name }}</h2>
                <h3 class="mt-4 text-base text-gray-700">{{ product.description }}</h3>
                <h4 class="mt-4 text-sm text-gray-700">{{ product.value }}</h4>
                <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }} coin</p>
            </div>
          </button>
        </div>

      </div>      
    </div>

<!-- speak with shopkeeper dialog modal display -->
  <TransitionRoot as="template" :show="openDialogModal">
    <Dialog as="div" class="relative z-10" @close="openDialogModal = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <!-- shopkeeper image -->
                <div class="mx-auto flex items-center justify-center rounded-full bg-green-100">
                  <img v-if="shopName === 'Apothecary'" src="../assets/images/village/Apothecary_Shopkeeper.png" alt="" class="border border-gray-800" aria-hidden="true" />
                  <img v-else-if="shopName === 'Armory'" src="../assets/images/village/Armory_Shopkeeper.png" alt="" class="w-64 border border-gray-800" aria-hidden="true" />
                  <img v-else-if="shopName === 'Blacksmith'" src="../assets/images/village/Blacksmith_Shopkeeper.png" alt="" class="w-52 border border-gray-800" aria-hidden="true" />
                  <img v-else src="../assets/images/village/Oddities_Shopkeeper.png" alt="" class="border border-gray-800" aria-hidden="true" />
                </div>                
                <!-- landing dialog -->
                <div v-if="landingThread" class="mt-3 text-center sm:mt-5">
                  <DialogTitle v-if="shopName ==='Apothecary'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Hi there!</DialogTitle>
                  <DialogTitle v-else-if="shopName === 'Armory'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Hey there.</DialogTitle>
                  <DialogTitle v-else-if="shopName === 'Blacksmith'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Hello.</DialogTitle>
                  <DialogTitle v-else as="h3" class="text-lg font-medium leading-6 text-gray-900">What?</DialogTitle>
                  <div class="mt-2">
                    <p v-if="shopName ==='Apothecary'" class="text-sm text-gray-500">How can I help you?</p>
                    <p v-else-if="shopName === 'Armory'" class="text-sm text-gray-500">Anything I can help you with?</p>
                    <p v-else-if="shopName === 'Blacksmith'" class="text-sm text-gray-500">What can I do for you?</p>
                    <p v-else class="text-sm text-gray-500">What do you want?</p>
                  </div>
                </div>
                <!-- conditional dialog threads -->
                <div v-if="convoThread1" class="mt-3 text-center sm:mt-5">
                  <DialogTitle v-if="shopName ==='Apothecary'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Of course!</DialogTitle>
                  <DialogTitle v-else-if="shopName === 'Armory'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Sure.</DialogTitle>
                  <DialogTitle v-else-if="shopName === 'Blacksmith'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Okay.</DialogTitle>
                  <DialogTitle v-else as="h3" class="text-lg font-medium leading-6 text-gray-900">Errr?</DialogTitle>
                  <div class="mt-2">
                    <p v-if="shopName ==='Apothecary'" class="text-sm text-gray-500">What would you like to know?</p>
                    <p v-else-if="shopName === 'Armory'" class="text-sm text-gray-500">What do you want to know?</p>
                    <p v-else-if="shopName === 'Blacksmith'" class="text-sm text-gray-500">How can I help you?</p>
                    <p v-else class="text-sm text-gray-500">I don't really know much about anything, friend.  But sure; I guess you can ask.</p>
                  </div>
                </div>
                <div v-if="convoThread2" class="mt-3 text-center sm:mt-5"> 
                  <DialogTitle v-if="shopName ==='Apothecary'" as="h3" class="text-lg font-medium leading-6 text-gray-900">I'm afraid so.</DialogTitle>
                  <DialogTitle v-else-if="shopName === 'Armory'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Nah.</DialogTitle>
                  <DialogTitle v-else-if="shopName === 'Blacksmith'" as="h3" class="text-lg font-medium leading-6 text-gray-900">Hmm.</DialogTitle>
                  <DialogTitle v-else as="h3" class="text-lg font-medium leading-6 text-gray-900">What? It's not good enough for you?</DialogTitle>
                  <div class="mt-2">
                    <p v-if="shopName ==='Apothecary'" class="text-sm text-gray-500">Don't worry though! I'm working on making lots more.  Be sure to check back later!</p>
                    <p v-else-if="shopName === 'Armory'" class="text-sm text-gray-500">Right now, sure; but I'm making more things.  If you come back later, they should be ready.</p>
                    <p v-else-if="shopName === 'Blacksmith'" class="text-sm text-gray-500">For now, yes.  But, I'm working on making more items.  It'll take me some time, but if you come back later, I should have something to interest you.</p>
                    <p v-else class="text-sm text-gray-500">I kid, I kid.  Yes, this is everything right now.  But there's always people buying and selling.  Come back later and I'll probably have different inventory.</p>
                  </div>
                </div>
              </div>              
              <!-- buttons -->
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <!-- close modal button -->
                <button @click="openDialogModal = false, convoThread1 = false, convoThread2 = false, landingThread = true" type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-[#7aa0bd] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-[#305c79] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm" >
                  Return to shop</button>               
                <!-- conversation buttons -->
                <button v-if="landingThread" @click="convoThread1 = !convoThread1, landingThread = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"  ref="cancelButtonRef">
                  May I ask a question</button>              
                <button v-if="convoThread1" @click="convoThread2 = !convoThread2, convoThread1 = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm">
                  Is this all your inventory?</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

<!-- no sale dialog modal display -->
  <TransitionRoot as="template" :show="openDialogModal2">
    <Dialog as="div" class="relative z-10" @close="openDialogModal2 = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <!-- shopkeeper image -->
                <div class="mx-auto flex items-center justify-center rounded-full bg-green-100">
                  <img v-if="shopName ==='Apothecary'" src="../assets/images/village/Apothecary_Shopkeeper.png" alt="" class="border border-gray-800" aria-hidden="true" />
                  <img v-else-if="shopName === 'Armory'" src="../assets/images/village/Armory_Shopkeeper.png" alt="" class="w-64 border border-gray-800" aria-hidden="true" />
                  <img v-else-if="shopName === 'Blacksmith'" src="../assets/images/village/Blacksmith_Shopkeeper.png" alt="" class="w-52 border border-gray-800" aria-hidden="true" />
                  <img v-else src="../assets/images/village/Oddities_Shopkeeper.png" alt="" class="border border-gray-800" aria-hidden="true" />
                </div>
                <!-- dialog -->
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Sorry, friend.</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Looks like you're out of money.  Try coming back later when you've earned some more.</p>
                  </div>
                </div>                              
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <!-- buttons -->
                  <button @click="openDialogModal2 = false" type="button" class="inline-flex w-full justify-center rounded-md border border-slate-600 bg-[#7aa0bd] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-[#305c79] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                    Keep Shopping</button>
                  <router-link to="/village" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-slate-600 bg-[#a6bf8e] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"  ref="cancelButtonRef">
                    Return to Village</router-link>
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
    import { ref, computed } from 'vue';
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import { usePlayerStore } from '@/stores/player'
    import { useShopStore } from '@/stores/shops'

    const playerStore = usePlayerStore();
    const store = useShopStore();
    const props = defineProps({
        shopName:{
            type: String,
            default: 'No Shop'
        }
    })

    const storeTypes = {
        Apothecary: require('../assets/images/village/Apothecary_Shop.png'),
        Armory: require('../assets/images/village/Armory_Shop.png'),
        Blacksmith: require('../assets/images/village/Blacksmith_Shop.png'),
        Oddities: require('../assets/images/village/Oddities_Shop.png')
    }
    function getStoreType() {
        return props.shopName;
    }


    const openDialogModal = ref(false)
    const openDialogModal2 = ref(false)

    const landingThread = ref(true)
    const convoThread1 = ref(false)
    const convoThread2 = ref(false)

    const chosenProdId = ref(null)
    const chosenProd = computed(function() {
        return store.apothecary.find(product => product.id === chosenProdId.value) ||
        store.armory.find(product => product.id === chosenProdId.value) ||
        store.blacksmith.find(product => product.id === chosenProdId.value) ||
        store.oddities.find(product => product.id === chosenProdId.value)
    })

    function buyProduct(productId) {
        chosenProdId.value = productId;
        checkSale();
        return playerStore.coinOnHand = (playerStore.coinOnHand - chosenProd.value.price);
    }

    function checkSale() {
        if (playerStore.coinOnHand - chosenProd.value.price < 0 ) {
        playerStore.coinOnHand = (playerStore.coinOnHand + chosenProd.value.price);
        openDialogModal2.value = true;
        }
    }

</script>


