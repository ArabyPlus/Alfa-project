<template>
  <Loading />
  <Navbar theme="light" />
  <section class="portfolio section-padding" id="portfolio">
    <div class="container-fluid">
      <div class="container">
        <div class="section-head text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-10">
              <h4 class="playfont wow flipInX" data-wow-delay=".5s">
                Our Projects
              </h4>
              <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">
                Best Works
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- filter links -->
        <div
          class="filtering text-center col-12 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div class="filter bg-img bg-repeat">
            <span
              v-for="(filter, idx) in works.filters"
              :key="idx"
              :data-filter="filter.operator"
              :class="{ active: idx === 0 }"
            >
              {{ filter.name }}
            </span>
          </div>
        </div>
        <!-- gallery -->
        <div class="gallery twsty full-width">
          <!-- gallery item -->
          <div
          :id="work.id"
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
              <NuxtLink to="#0">
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div
              class="info mt-10 text-center mb-10 md:h-[400px]"
              
            >
              <h5>{{ work.title }}</h5>
              <h1>State Date : {{ work.state_date }}</h1>
              <h1>Owner : {{ work.owner }}</h1>
              <h1>Main Contractor : {{ work.main_contractor }}</h1>
              <h5 class="mt-2">Scoup Of Work :</h5>
              <h1>{{ work.scoup1 }}</h1>
              <h1>{{ work.scoup2 }}</h1>
              <h1>{{ work.scoup3 }}</h1>
              <h1>{{ work.scoup4 }}</h1>
              <h5 class="mt-2">Contract Price : {{ work.contract }} million</h5>
              <h1 class="mt-2">{{ work.hint }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer class="mt-30" />
</template>

<script setup>
import initIsotope from "@/common/initIsotope";

import works from "@/data/home1-light-all-works.json";
import Navbar from "@/components/Common/Navbar.vue";

import Footer from "@/components/Common/Footer.vue";

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: "Alfa - Projects",
});
onMounted(() => {
  setTimeout(() => {
    if (window.Isotope) initIsotope();
  }, 500);
});
</script>
