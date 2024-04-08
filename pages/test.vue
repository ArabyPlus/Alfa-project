<template>
  <div
            :class="`items ${work.filter} mt-50 wow fadeInUp`"
            data-wow-delay=".3s"
            v-for="(work, idx) in works.works"
            :key="idx"
          >
            <div
              class="item-img bg-img wow imago rounded"
              data-background="/img/portfolio/mas/01.jpg"
              :style="`background-image:url('${work.image}')`"
            >
              <NuxtLink :to="'our-projects/#' + work.id">
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="info mt-10 text-center">
              <h5>{{ work.title }}</h5>
              <h1 v-if="work.state_date">State Date : {{ work.state_date }}</h1>
              <h1 v-if="work.owner">Owner : {{ work.owner }}</h1>
              <h1 v-if="work.main_contractor">Main Contractor : {{ work.main_contractor }}</h1>
            </div>
          </div></template>

<script setup>
import works from "/locales/dynamicData.json";
</script>
