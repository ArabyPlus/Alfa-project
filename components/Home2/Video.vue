<template>
  <section class="block-sec">
    <div class="background bg-img pt-100 pb-0 parallaxie" data-overlay-dark="5" data-background="/img/bg-vid.jpg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="vid-area">
              <span class="text">Watch Video</span>
              <div class="vid-icon" @click="openVideo" style="cursor:pointer">
                <div class="vid" style="margin:0 auto">
                  <div class="vid-butn">
                    <span class="icon">
                      <i class="fas fa-play"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="testim-box">
              <div class="head-box">
                <h6 class="wow fadeIn" data-wow-delay=".5s">Our Clients</h6>
                <h4 class="wow fadeInLeft" data-wow-delay=".5s">What Client's Say?</h4>
              </div>
              <div class="slic-item wow fadeInUp" data-wow-delay=".5s">
                <ClientOnly>
                  <Swiper v-bind="swiperOptions" class="slick-dotted">
                    <SwiperSlide class="item" v-for="client in clients" :key="client.id">
                      <p>{{ client.comment }}</p>
                      <div class="info">
                        <div class="img">
                          <div class="img-box">
                            <img :src="client.image" alt="">
                          </div>
                        </div>
                        <div class="cont">
                          <div class="author">
                            <h6 class="author-name custom-font">{{ client.author }}</h6>
                            <span class="author-details">{{ client.author_position }}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalVideo channel="vimeo" videoId="127203262" :isOpen.sync="videoIsOpen" :onClose="onClose" />
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
//= Components
import ModalVideo from '@/components/Common/ModalVideo.vue';
//= Scripts
import parallaxie from "@/common/parallaxie";
//= Static Data
import Home2VideoData from "@/data/home2-video.json";

const clients = Home2VideoData.clients;

const swiperOptions = {
  modules: [Autoplay, Navigation],
  loop: true,
  speed: 500,
  autoplay: true,
  slidesPerView: 2,
  navigation: {
    prevEl: ".navs .prev",
    nextEl: ".navs .next",
  },
  breakpoints: {
    992: {
      slidesPerView: 1
    }
  }
}

const videoIsOpen = ref(false);

function openVideo() {
  videoIsOpen.value = !videoIsOpen.value;
}

function onClose() {
  videoIsOpen.value = false;
}


onMounted(() => {
  parallaxie('.background.bg-img.parallaxie');
});
</script>
