<template>
    <div class="flex gap-2">
        <Icon name="material-symbols:sunny-outline-rounded" class="text-2xl"  @click="$colorMode.preference= 'light'"/>
        <Icon name="material-symbols:nightlight" class="text-2xl"  @click="$colorMode.preference= 'dark'"/>
    </div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  
  console.log(colorMode.preference)
  </script>
  
  <style>
  body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
  }
  .dark-mode nav{
    background-color: #091a28;
    color: #ebf4f1;
  }
  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
  .sepia-mode nav {
    background-color: #f1e7d0;
    color: #433422;
  }
  </style>
