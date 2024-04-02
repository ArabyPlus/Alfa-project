<template>
  <section class="works section-padding">
    <div class="container">
      <div class="row gallery">
        <div class="col-md-6 items mt-0">
          <div class="main-header mb-0">
            <h3>Works.</h3>
          </div>
        </div>
        <div class="col-md-6 items" v-for="work, idx in works" :key="idx">
          <div class="item">
            <div class="img">
              <img :src="work.image" alt="">
            </div>
            <div class="cont vis">
              <span v-for="tag, i in work.tags" :key="i">{{ tag }}</span>
              <h5><a href="#0">{{ work.title }}</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//= Scripts
import initIsotope from "@/common/initIsotope";
//= Static Data
import works from '@/data/home4-works.json';

onMounted(() => {
  setTimeout(() => {
    initIsotope();
  }, 500);
});
</script>
