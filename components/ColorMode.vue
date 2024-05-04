<template>
    <div class="flex gap-2 cursor-pointer" >
        <Icon  v-if="$colorMode.preference == 'light'" name="material-symbols:nightlight" class="text-2xl" @click="$colorMode.preference= 'dark'" />
        <Icon v-else  name="material-symbols:sunny-outline-rounded" class="text-2xl"  @click="$colorMode.preference= 'light'"/>
    
      </div>
  </template>
  
  <style>
  body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
  }
  .dark-mode .tabs-card {
    background-color: #091a28;
  }
  .dark-mode nav{
    background-color: #091a28;
    color: #ebf4f1;
  }
  .dark-mode .item-bx{
    background-color: #091a28;
    color: #ebf4f1;
  }
  .dark-mode .options-container{
    color: black;
  }
  
  </style>
