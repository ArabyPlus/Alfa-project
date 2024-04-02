<template>
  <section class="testimonials2 bg-blc">
    <div class="container-fluid no-padding">
      <div class="row">
        <div class="col-lg-8 no-padding order2">
          <div class="box">
            <ClientOnly>
              <Swiper v-bind="swiperOptions" class="slick-dotted slic-item wow fadeInUp">
                <SwiperSlide class="item" v-for="testimonail, idx in testimonails" :key="idx">
                  <div class="info">
                    <div class="author">
                      <div class="img-author">
                        <div class="img">
                          <img :src="testimonail.image" alt="">
                        </div>
                      </div>
                      <div class="cont">
                        <h6 class="author-name">{{ testimonail.name }}</h6>
                        <span class="author-details">{{ testimonail.position }}</span>
                      </div>
                    </div>
                  </div>
                  <p>{{ testimonail.comment }}</p>
                  <div class="qoute-img">
                    <img src="/img/icons/quote-light.svg" alt="">
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
            <div class="qoute-icon">
              <img src="/img/icons/left-quote.svg" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1 order1">
          <div class="sec-head mt-80 mb-0">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Testimonials</h6>
            <h3 class="wow" data-splitting>What <br> People <br> Says.</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
//= Static Data
import testimonails from '@/data/home4-testimonials.json';

const swiperOptions = {
  modules: [Autoplay],
  loop: true,
  speed: 500,
  autoplay: true,
  slidesPerView: 1,
  breakpoints:
  {
    768: {
      slidesPerView: 2,
    }
  }

}
</script>
