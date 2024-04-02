<template>
  <header class="slid-half">
    <div id="js-cta-slider" class="cta__slider-wrapper nofull swiper-container">
      <ClientOnly>
        <Swiper v-bind="swiperOptions" class="swiper-wrapper cta__slider">
          <SwiperSlide v-for="slide, idx in slides" :key="idx" class="cta__slider-item swiper-slide">
            <div class="media-wrapper slide-inner valign">
              <div class="bg-img" :style="`background-image: url(${slide.background})`" data-overlay-dark="5"></div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 offset-lg-1">
                    <div class="caption">
                      <span class="top-corn"></span>
                      <span class="bottom-corn"></span>
                      <div class="custom-font">
                        <h5 class="thin custom-font">{{ slide.type }}</h5>
                        <h1 data-splitting>
                          <a href="#0">{{ slide.title }}</a>
                        </h1>
                      </div>
                      <p>Right design and right ideas matter a lot of in interior design business. <br> a style that makes
                        a
                        statement.</p>
                      <a href="#0" class="btn-curve btn-color mt-30">
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

      <div class="cta__slider-arrows">
        <i id="js-cta-slider-next" class="cta__slider-arrow cta__slider-arrow--next">
          <i class="fas fa-chevron-up"></i>
        </i>
        <i id="js-cta-slider-previous" class="cta__slider-arrow cta__slider-arrow--previous">
          <i class="fas fa-chevron-down"></i>
        </i>
      </div>
    </div>
    <div class="swiper-pagination top custom-font"></div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Parallax } from 'swiper';
//= Scripts
import removeSlashFromPagination from '@/common/removeSlashFromPagination';
//= Static Data
import slides from "@/data/home2-light-header.json";

const swiperOptions = {
  modules: [Autoplay, Navigation, Parallax],
  speed: 1000,
  parallax: true,
  loop: true,
  autoplay: true,
  direction: "vertical",
  navigation: {
    prevEl: "#js-cta-slider-previous",
    nextEl: "#js-cta-slider-next",
  },
  pagination: {
    el: '.slid-half .swiper-pagination',
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
})
</script>
