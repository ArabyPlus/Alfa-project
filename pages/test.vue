<template>
  <div>
    <div >
      <div v-for="item in filteredItemsEnglish" :key="item.id" class="items mt-50">
        <div :id="item.id" class="item-img bg-img wow imago rounded" data-background="/img/portfolio/mas/01.jpg"
          :style="{ 'background-image': 'url(' + item.image + ')' }">
          <NuxtLink :to="item.id">
            <div class="item-img-overlay"></div>
          </NuxtLink>
        </div>
        <div class="info mt-10 text-center mb-10 md:h-[400px]">
          <h5>{{ item.title }}</h5>
          <h1 v-if="item.state_date">State Date : {{ item.state_date }}</h1>
          <h1 v-if="item.owner">Owner : {{ item.owner }}</h1>
          <h1 v-if="item.main_contractor">Main Contractor : {{ item.main_contractor }}</h1>
          <h5 class="mt-2" v-if="item.scoup1">Scoup Of item :</h5>
          <h1>{{ item.scoup1 }}</h1>
          <h1>{{ item.scoup2 }}</h1>
          <h1 v-if="item.scoup3">{{ item.scoup3 }}</h1>
          <h1 v-if="item.scoup4">{{ item.scoup4 }}</h1>
          <h5 class="mt-2">Contract Price : {{ item.contract }} million</h5>
          <h1 class="mt-2">{{ item.hint }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import works from "@/data/home1-light-all-works.json";


const filteredItemsEnglish = works.works.filter(item => {
  return (
    item.scoup1?.includes('INFRA') ||
    item.scoup2?.includes('INFRA') ||
    item.scoup3?.includes('INFRA') ||
    item.scoup4?.includes('INFRA')
  );
});
</script>
