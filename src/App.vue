<template>
  <router-view></router-view>
</template>

<script setup>
  // import { onMounted } from 'vue';
  // import { usePlayerStore } from '@/stores/player';
  // const playerStore = usePlayerStore();

  // onMounted(() => {
  //   console.log('whatevs');
  //   // const autoheal = playerStore.autoHeal();
  //   requestAnimationFrame(playerStore.autoHeal()); //executes the function 60 times every second?
  // })

</script>

<style> 
.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5
}

.healthbar_value {
  background-color: #a6bf8e;
  width: 100%;
  height: 100%;
}

.manabar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #a6a6a6
}

.manabar_value {
  background-color: #9e7bb3;
  width: 100%;
  height: 100%;
}
</style>