<template>
    <the-header></the-header>
    <!-- <div>
      <div
        v-for="(button, index) in numberOfIterations"
        :key="button"
        :class="[arrayOfColours[findRandomInRange()]]"
        class="text-center"
      >
        div #{{ index }}
      </div>
    </div> -->

</template>

<script setup>



// export default {
//   data() {
//     return {
//       arrayOfColours: ['red', 'blue', 'orange'],
//       numberOfIterations: 6,
//     }
//   },
//   methods: {
//     findRandomInRange() {
//       return Math.floor(Math.random() * this.numberOfIterations) % this.arrayOfColours.length
//     },
//   },
// }
</script>

<style>
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.orange {
  background-color: orange;
}
</style>