<template>
  <header class="slider">
    <ClientOnly>
      <Swiper v-bind="swiperOptions" class="parallax-slider">
        <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
          <div
            class="bg-img valign"
            :style="`background-image:url('${slide.background}')`"
            data-overlay-dark="6"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <div class="caption hmone">
                    <h1 data-splitting>
                      <NuxtLink to="#0">{{ slide.title }}</NuxtLink>
                    </h1>
                    <p class="">One of our projects</p>
                    <NuxtLink
                      to="/our-projects"
                      class="btn-curve btn-bord btn-lit mt-30"
                    >
                      <span>View All</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>

    <!-- slider setting -->
    <div class="setone">
      <div class="swiper-button-next swiper-nav-ctrl next-ctrl">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl">
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>
    <div class="swiper-pagination top custom-font"></div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Parallax } from "swiper";
//= Scripts
import removeSlashFromPagination from "@/common/removeSlashFromPagination";
import slides from "@/data/home1-light-header.json";

const swiperOptions = {
  modules: [Autoplay, Navigation, Parallax],
  speed: 1000,
  parallax: true,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".slider .swiper-pagination",
    type: "fraction",
  },
  onSwiper: (swiper) => {
    setTimeout(() => {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].childNodes[0].setAttribute(
          "data-swiper-parallax",
          0.75 * swiper.width
        );
      }
    });
  },
};

onMounted(() => {
  removeSlashFromPagination();
});
</script>
