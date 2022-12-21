<template>
  <!-- <the-header></the-header> -->

  <!-- <practice-component
    :player-level="playerLevel"
    :player-startinghealth="playerStartinghealth"
    :player-health="playerHealth"
    :coins-onhand="coinsOnhand"
    @emit-health-hit="receivedHit"
    @relayed-health-hit="receivedHit"
  ></practice-component> -->
  <!-- the received emits are still in this code, but no longer actually doing anything
  the emit-health-hit event originally from PracticeComponent, but there's no longer an event there to emit
  and the relayed-health-hit event from PracticeSubcomponent (via practiceComponent) is no longer an emitted event 
  but the resulting action of a method sent from here to there as a prop -->
  
  <br/>
  <br/>
  <br/>
    <div class="relative bg-gray-200">
      <main class="lg:relative">
        <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">

<!-- title -->
            <h1 class="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span class="block xl:inline">Monster Hunters of Awesome Legendary-ness</span>
              {{ ' ' }}
              <br/>
              <span class="block text-lg text-center mx-24   text-indigo-600 xl:inline">and sometimes embarrassing failure</span>
            </h1>

<!-- description -->
            <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">A silly, fun, little turn-based game that I've created as a way for me to practice my coding skills.</p>
            <br/>
            <!-- <p class="text-center border border-red-700">Player Health: {{ playerHealth }}</p> -->
            
<!-- buttons -->
            <div class="mt-10 sm:flex sm:justify-center lg:justify-center">
              <div class="rounded-md shadow">
                <router-link :to="'/village'" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-400 md:py-4 md:px-10 md:text-lg">Start New Game</router-link>
              </div>

              <!-- <div class="rounded-md shadow">
                  <a @click="hitPlayer" href="#" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-300 md:py-4 md:px-10 md:text-lg">Hit Player Health</a>
              </div> -->
            </div>

          </div>
        </div>

<!-- image -->
        <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img  class="absolute inset-0 h-full w-full object-cover" src="../../assets/images/Monster_Hunter.png" alt="" />
          <!-- <img v-if="playerHealth >= 50" class="absolute inset-0 h-full w-full object-cover" src="../assets/images/Monster_Hunter.png" alt="" /> -->
          <!-- <img v-if="playerHealth < 50" class="absolute inset-0 h-full w-full object-cover" src="../assets/images/Monster_Hunter2.png" alt="" /> -->
        </div>
      </main>

    </div>
</template>
  
<script>
// import PracticeComponent from '../components/PracticeComponent.vue';

// export default{
//     components: {
//         PracticeComponent
//     },
//     data() {
//       return {
//         playerLevel: 1,
//         playerStartinghealth: 100,
//         playerHealth: 100,
//         coinsOnhand: 1000,
//       }
//     },
//     // provide:{
//     //   playerHealth:100,
//     // },
//     // NOTE: if i'm providing an object, say playerHealth had a bunch of sub-data in it{}, 
//     // i would need to spell it all out here.  i couldn't just type playerHealth and automatically send all the object with it
//     // same with the simpler playerHealth item - i have to send the value as well.
//     // problem is that its no longer dynamic.  with v-bind on a prop, data changes are reflected.  in this inject, it's static
//     // to fix this, write it differently.  instead of an object, write it as a method:
//     provide() {
//       return {
//         playerHealth: this.playerHealth,
//         // like this, it works even if the this.data thing is an object itself
//         receivedHitMethod: this.providedHit,
//       };
//     },
//     methods: {
//       hitPlayer() {
//         this.playerHealth = (this.playerHealth - 5);
//       },

//       receivedHit() {
//         this.playerHealth = (this.playerHealth - 5);
//       },

//       providedHit() {
//         this.playerHealth = (this.playerHealth - 5);
//       }
//     }
    
//     // note: yes, i can add an event listener to the a-tag, and both trigger an event and reroute at the same time
//         // i can also wrap a button in an a-tag and do it that way, but the delay between event and routing is longer
//     // going back to page, life value resets to start.  same with nav or back button.  re-renders.  changes not saved
//     // if i want saved or cumulative changes, i need to export and import the data
// };
</script>