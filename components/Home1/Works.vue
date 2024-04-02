<template>
  <section class="works section-padding">
    <div class="container">
      <div class="row gallery">
        <div class="col-lg-6 col-md-6 items mt-0">
          <div class="section-head mb-0">
            <h3>Works</h3>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 items" v-for="work in worksData" :key="work.id">
          <div class="item">
            <div class="img">
              <img :src="work.image" alt="">
            </div>
            <div class="cont">
              <h5>
                <NuxtLink to="#0">{{ work.title }}</NuxtLink>
              </h5>
              <span v-for="tag, idx in work.tags" :key="idx">{{ tag }}</span>
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
import worksData from "@/data/home1-works.json";

onMounted(() => {
  setTimeout(() => {
    if (window.Isotope) initIsotope();
  }, 1000);
});
</script>
