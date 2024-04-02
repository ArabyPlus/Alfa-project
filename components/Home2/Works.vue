<template>
  <section class="portfolio curs section-padding pt-0">
    <div class="container">
      <div class="section-head">
        <h3>Works</h3>
      </div>

      <ClientOnly>
        <Swiper v-bind="swiperOptions" class="work-curs">
          <SwiperSlide v-for="work in works" :key="work.id" class="swiper-slide">
            <div class="item">
              <div class="img">
                <img :src="work.image" alt="">
              </div>
              <div class="cont">
                <h5><a href="#0">{{ work.title }}</a></h5>
                <span v-for="tag, idx in work.tags" :key="idx">{{ tag }}</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>

      <div class="controls">
        <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="swiper-button-next swiper-nav-ctrl next-ctrl">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
//= Static Data
import works from "@/data/home2-works.json";

const swiperOptions = {
  modules: [Pagination, Navigation],
  speed: 1000,
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  navigation: {
    prevEl: ".portfolio.curs .swiper-button-prev",
    nextEl: ".portfolio.curs .swiper-button-next",
  },
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".portfolio.curs .swiper-pagination",
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 1.5,
    },
  },
  onSwiper: (swiper) => {
    setTimeout(() => {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
      }
    });
  }
}
</script>
