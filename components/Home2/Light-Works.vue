<template>
  <section class="portfolio full-bg">
    <div class="container-fluid">
      <div class="row">
        <div :class="`col-lg-3 col-md-6 cluom ${index === 0 ? 'current' : ''}`" :data-tab="`tab-${work.id}`"
          v-for="(work, index) in works" :key="index">
          <div class="info">
            <h6 class="custom-font">{{ work.type }}</h6>
            <h5>{{ work.title }}</h5>
          </div>
          <div class="more">
            <a href="#0">View Project <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="glry-img">
      <div v-for="(work, index) in works" :key="index" :id="`tab-${work.id}`"
        :class="`bg-img tab-img ${index === 0 ? 'current' : ''}`" :style="`background-image:url('${work.image}')`"
        data-overlay-dark="2" />
    </div>
  </section>
</template>

<script setup>
//= Scripts
import worksCardEffect from "@/common/worksCardEffect";
//= Static Data
import works from "@/data/home2-light-works.json";

onMounted(() => {
  worksCardEffect();
});
</script>
