<template>
  <section class="portfolio section-padding" id="portfolio">
    <div class="container-fluid">
      <div class="container">
        <div class="section-head text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-10">
              <h4 class="playfont wow flipInX" data-wow-delay=".5s">
                {{ $t("From Our Projects") }}
              </h4>
              
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
        <!-- IF LANGUAGE IS ENGLISH -->
        <div class="gallery twsty full-width" v-show="$i18n.locale == 'en-US'">
          <!-- gallery item -->

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
              <h1 v-if="work.main_contractor">
                Main Contractor : {{ work.main_contractor }}
              </h1>
              <h1 v-if="work.hinter">{{ work.hinter }}</h1>
            </div>
          </div>
        </div>
        <!-- IF LANGUAGE IS ENGLISH -->
        <!-- ============================== -->
        <!-- IF LANGUAGE IS ARABIC -->
        <div
          class="gallery twsty full-width"
          v-show="$i18n.locale == 'ar-AR'"
          style="direction: rtl"
        >
          <!-- gallery item -->

          <div
            :class="`items ${work.filter} mt-50 wow fadeInUp`"
            data-wow-delay=".3s"
            v-for="(work, idx) in workss.workss"
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
              <h1 v-if="work.state_date">
                تاريخ البدء : {{ work.state_date }}
              </h1>
              <h1 v-if="work.owner">المالك : {{ work.owner }}</h1>
              <h1 v-if="work.main_contractor">
                المقاول الرئيسي : {{ work.main_contractor }}
              </h1>
              <h1 v-if="work.hinter">{{ work.hinter }}</h1>
            </div>
          </div>
        </div>
        <!-- IF LANGUAGE IS ARABIC -->
      </div>
      <div class="mx-auto text-center">
        <NuxtLink
          to="/our-projects"
          class="btn-curve rounded btn-bord btn-lit mt-10"
          style="background-color: #b19777;"
        >
          <span>{{ $t("View All") }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
//= Scripts
import initIsotope from "@/common/initIsotope";
//= Static Data
import works from "@/data/home1-light-works.json";
import workss from "@/data/home1-light-works-arabic.json";

onMounted(() => {
  setTimeout(() => {
    if (window.Isotope) initIsotope();
  }, 0);
});
</script>
