<template>
  <section class="works filter-img section-padding">
    <div class="container">
      <div class="row gallery">
        <div class="col-lg-6 items mt-0 interior theaters residential">
          <div class="section-head mb-0">
            <h3>Works</h3>
            <!-- filter links -->
            <div class="filtering mt-30">
              <div class="filter">
                <span v-for="filter, idx in worksData.filters" :key="idx" :data-filter='filter.operator'
                  :class="{ active: idx === 0 }">
                  {{ filter.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-for="work, idx in worksData.works" :key="idx" :class="`col-lg-6 items ${work.filter}`">
          <div class="item">
            <div class="img">
              <img :src="work.image" alt="">
            </div>
            <div class="cont vis">
              <h5><a href="#0">{{ work.title }}</a></h5>
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
import worksData from "@/data/works1.json";

onMounted(() => {
  setTimeout(() => {
    initIsotope();
  }, 100);
});
</script>
