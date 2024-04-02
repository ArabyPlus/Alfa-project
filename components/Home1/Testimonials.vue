<template>
  <section class="testimonials grid section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="testim">
            <ClientOnly>
              <Swiper v-bind="swiperOptions">
                <SwiperSlide class="item wow fadeInUp" data-wow-delay=".3s" v-for="testimonial in testimonialsData"
                  :key="testimonial.id">
                  <span class="quote-icon">
                    <img src="/img/clients/quote.svg" alt="">
                  </span>
                  <div class="cont">
                    <p>"{{ testimonial.quote }}"</p>
                  </div>
                  <div class="info">
                    <div class="author">
                      <img :src="testimonial.image" alt="">
                    </div>
                    <h6>{{ testimonial.author }} <span>{{ testimonial.position }}</span> </h6>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
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
import testimonialsData from '@/data/home1-testimonials.json';

const swiperOptions = {
  modules: [Autoplay],
  loop: true,
  speed: 500,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    992: {
      slidesPerView: 2,
    }
  }
}
</script>
