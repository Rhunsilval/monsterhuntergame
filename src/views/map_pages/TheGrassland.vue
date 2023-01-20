<template>
  <the-header></the-header>

  <monster-hunter
    :mapName="mapName"
  ></monster-hunter>

</template>


<script setup>
  const mapName = 'The Great Grass Sea';
</script>