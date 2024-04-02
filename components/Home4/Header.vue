<template>
  <header class="slider slider-slide">
    <ClientOnly>
      <Swiper v-bind="swiperOptions" class="parallax-slider">
        <SwiperSlide v-for="slide, idx in slides" :key="idx">
          <div class="bg-img valign" :style="`background-image:url('${slide.background}')`" data-overlay-dark="6">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <div class="caption hmone">
                    <h1 data-splitting>
                      <a href="#0">
                        <template v-for="chunk, index in slide.tags">
                          {{ chunk }}
                          <br v-if="index !== slide.tags.length - 1" :key="index" />
                        </template>
                      </a>
                    </h1>
                    <p class="mt-10">
                      <template v-for="chunk, index in slide.title">
                        {{ chunk }}
                        <br v-if="index !== slide.title.length - 1" :key="index" />
                      </template>
                    </p>
                    <a href="#0" class="btn-curve btn-bord btn-lit mt-30">
                      <span>Read More</span>
                    </a>
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

    <div class="side">
      <div class="logo-icon">
        <a class="logo" href="#">
          <img src="/img/logo-light.png" alt="logo">
        </a>
      </div>

      <div class="swiper-pagination"></div>

      <div class="social">
        <a href="#0"><i class="fab fa-facebook-f"></i></a>
        <a href="#0"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#0"><i class="fa-brands fa-tiktok"></i></a>
        <a href="#0"><i class="fab fa-instagram"></i></a>
        <a href="#0"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Parallax } from 'swiper';
//= Scripts
import removeSlashFromPagination from '@/common/removeSlashFromPagination';
//= Static Data
import slides from "@/data/home4-header.json";

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
    el: '.slider .swiper-pagination',
    type: 'fraction'
  },
  onSwiper: (swiper) => {
    setTimeout(() => {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
      }
    });
  }
}

onMounted(() => {
  removeSlashFromPagination();
});
</script>
