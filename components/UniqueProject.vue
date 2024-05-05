<template>
  <div class="info mt-10 mx-auto mb-10 w-80">
    <h5>{{ title }}</h5>
    <h5 v-if="state_date" ><span class="font-bold">State Date :</span> {{ state_date }}</h5>
    <h1 v-if="owner"><span class="font-bold">Owner :</span> {{ owner }}</h1>
    <h1 v-if="main_contractor"><span class="font-bold">Main Contractor :</span> {{ main_contractor }}</h1>
    <h5 class="mt-2" v-if="scoup1"><span class="font-bold">Scoup Of :</span></h5>
    <h1>{{ scoup1 }}</h1>
    <h1>{{ scoup2 }}</h1>
    <h1>{{ scoup3 }}</h1>
    <h1>{{ scoup4 }}</h1>
    <h5 class="mt-2" v-if="contract"><span class="font-bold">Contract Price :</span> {{ contract }} million</h5>
    <h1 class="mt-2" v-if="hint">{{ hint }}</h1>
  </div>
</template>
<script setup>
const {
  title,
  state_date,
  owner,
  main_contractor,
  scoup1,
  scoup2,
  scoup3,
  scoup4,
  contract,
  hint,
} = defineProps([
  "title",
  "state_date",
  "owner",
  "main_contractor",
  "scoup1",
  "scoup2",
  "scoup3",
  "scoup4",
  "contract",
  "hint",
]);
</script>
