<template>
    <the-header></the-header> 
     
<!-- background -->
    <div class="bg-black h-screen">
        <div class="flex justify-center pt-8">
            <div class="bg-[url('../assets/images/quests/Strangers_Booth.png')] bg-contain w-2/3 ">

<!-- header -->
      <div class="flex justify-center">
        <div class="text-center w-1/2 bg-white bg-opacity-75 pb-3">
            <div class="pt-3 ">
                <p class="font-extrabold font-serif text-7xl ">The Mysterious Stranger</p>                
            </div>             
        </div>        
      </div>

<!-- logo -->
      <div class="flex justify-center">
        <div class="text-center w-1/2 bg-white bg-opacity-75 flex justify-center">
            <div class="pt-3 ">
                <img src="../../assets/images/quests/Stranger.png" alt="" class="h-56 w-56 border border-black "/>  
                <p><br/></p>               
                <p>What do you want?</p>
            </div>             
        </div>        
      </div>

      <div class="flex justify-center">
        <div class="text-center w-1/2 bg-white bg-opacity-75 flex justify-center">
            <div class="pt-8 pb-8 font-semibold font-mono">
                <button type="button" class="px-3 py-3 bg-slate-400 hover:bg-slate-600 border border-slate-600 rounded-lg">Buy them a drink? <br/> 100 coin</button>
                <p><br/></p>
                <router-link type="button" :to="'/questfinder'" class="px-3 py-3 bg-slate-400 hover:bg-slate-600 border border-slate-600 rounded-lg">Return to Tavern</router-link>
            </div>             
        </div>        
      </div>

            </div>
        </div>      
    </div>
</template>
  
<script setup>

</script>

