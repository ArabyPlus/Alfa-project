<template>
  <header class="slider text-center">
    <ClientOnly>
      <Swiper v-bind="swiperOptions" class="parallax-slider">
        <SwiperSlide v-for="slide, idx in slides" :key="idx">
          <div class="bg-img valign" :style="`background-image:url('${slide.background}')`"
            :data-overlay-dark="idx !== slides.length - 1 ? 6 : 0">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-7 col-md-9">
                  <div class="caption center">
                    <h1 data-splitting class="playfont">
                      <a href="#0">
                        <template v-for="tag, index in slide.tags">
                          {{ tag }}
                          <br v-if="index !== slide.tags.length - 1" :key="index" />
                        </template>
                      </a>
                    </h1>
                    <p>{{ slide.title }} </p>
                    <a href="#0" class="btn-curve btn-color mt-20">
                      <span>Discover Work</span>
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
    <div class="setone setwo">
      <div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>

    <div class="swiper-pagination top botm custom-font"></div>

    <div class="social-icon">
      <a href="#0"><i class="fab fa-facebook-f"></i></a>
      <a href="#0"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="#0"><i class="fa-brands fa-tiktok"></i></a>
      <a href="#0"><i class="fab fa-behance"></i></a>
      <a href="#0"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Parallax } from 'swiper';
//= Scripts
import removeSlashFromPagination from '@/common/removeSlashFromPagination';
//= Static Data
import slides from "@/data/home3-light-header.json";

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
