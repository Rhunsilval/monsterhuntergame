<template>
    <the-header></the-header> 
     
<!-- background -->
    <div class="bg-[url('../assets/images/village/Leather_Shop.png')] bg-cover max-w-full  ">

<!-- header -->
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-90 flex justify-center">
            <div class="py-3 ">
                <p class="font-extrabold font-serif text-6xl ">Threads and Thongs and Things</p>                
            </div>             
        </div>        
      </div>

<!-- shopkeeper -->
      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-90 flex justify-center">
            <div class="pt-3 ">
                <img src="../../assets/images/village/Leather_Shopkeeper.png" alt="" class="w-52 h-56 border border-black"/>                 
            </div>             
        </div>        
      </div>

      <div class="flex justify-center">
        <div class="text-center w-1/3 bg-white bg-opacity-90 flex justify-center">
            <div class="py-8 font-semibold font-mono ">
                <p class="">Hi!  Welcome to my shop.</p>
                <p>Please try not to touch anything.</p> 
                <p>Some of my items are enchanted, and they can be temperamental.</p>
                <p>If you need any help, just ask!</p>
                <br/>  
                <button @click="openDialogModal = !openDialogModal" class="px-3 py-3 border border-gray-600 bg-[#7aa0bd] hover:bg-sky-600">Speak with Shopkeeper</button>
                <p><br/></p>            
                <a type="button" href="/village" class="px-3 py-3 bg-[#a6bf8e] hover:bg-green-100 border border-slate-600">Return to Village</a>             
            </div> 
                        
        </div>        
      </div>

<!-- inventory -->
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-white bg-opacity-75 ">
        <h2 class="sr-only">Products</h2>
  
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a v-for="product in products" :key="product.id" :href="product.href" class="group">
            <div class="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-30" />
            </div>
            <div class="text-center">
                <h2 class="mt-4 font-semibold text-lg text-gray-700">{{ product.name }}</h2>
                <h3 class="mt-4 text-base text-gray-700">{{ product.description }}</h3>
                <h4 class="mt-4 text-sm text-gray-700">{{ product.value }}</h4>
                <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }} coin</p>
            </div>
          </a>
        </div>
      </div>      
    </div>

    <!-- first dialog modal display -->
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
                <div class="mx-auto flex items-center justify-center rounded-full bg-green-100">
                  <img src="../../assets/images/village/Leather_Shopkeeper.png" alt="" class="w-52 h-60 border border-black" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Hey there.</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Anything I can help you with?</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-[#7aa0bd] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-[#305c79] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm" @click="openDialogModal = false">Return to shop</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm" @click="openDialogModal2 = !openDialogModal2, openDialogModal = false" ref="cancelButtonRef">Ask question</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>


<!-- second dialog modal display -->
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
                <div class="mx-auto flex items-center justify-center rounded-full bg-green-100">
                  <img src="../../assets/images/village/Leather_Shopkeeper.png" alt="" class="w-52 h-60 border border-black" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Hey there.</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Anything I can help you with?</p>                    
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-[#7aa0bd] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-[#305c79] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm" @click="openDialogModal2 = false">Return to shop</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm" @click="openDialogModal3 = !openDialogModal3, openDialogModal2 = false">Is this all your inventory?</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

<!-- third dialog modal display -->
  <TransitionRoot as="template" :show="openDialogModal3">
    <Dialog as="div" class="relative z-10" @close="openDialogModal3 = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto flex items-center justify-center rounded-full bg-green-100">
                  <img src="../../assets/images/village/Leather_Shopkeeper.png" alt="" class="w-52 h-60 border border-black" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Nah.</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Right now, sure; but I'm making more things.  If you come back later, they should be ready.</p>                    
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-[#7aa0bd] px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-[#305c79] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm" @click="openDialogModal3 = false">Return to shop</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
    import { ref } from 'vue';
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

  const products = [
    {
      id: 1,
      name: 'Basic Leather Armor',
      description: 'Cheap, reliable, and sturdy',
      value: '+10 defense',
      href: '#',
      price: '200',
      imageSrc: require('../../assets/images/village/Leather_leather_armor_1.png'),
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Leather Gauntlets',
      description:"Just the thing to help you keep a strong grip on your sword.",
      value: '+3 defense',
      href: '#',
      price: '100',
      imageSrc: require('../../assets/images/village/Leather_leather_gauntlets_1.png'),
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Sturdy Leather Boots',
      description:'Hunting monsters with bad boots is a bad idea.  You need good footwear.',
      value: '+3 defense and +2 strength',
      href: '#',
      price: '150',
      imageSrc: require('../../assets/images/village/Leather_leather_boots_1.png'),
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Enchanted Boots',
      description: "A gift from a friendly 'Shroom Spirit, these are a great pair to try out if you're considering adding magic items to your armor",
      value: '+1-5 defense, and poison resistance, and occasional +1-5 health',
      href: '#',
      price: '350',
      imageSrc: require('../../assets/images/village/Leather_enchanted_boots_1.png'),
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

  const openDialogModal = ref(false)
  const openDialogModal2 = ref(false)
  const openDialogModal3 = ref(false)

</script>