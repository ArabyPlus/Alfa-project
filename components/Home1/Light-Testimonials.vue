<template>
  <section class="testimonials grid section-padding">
    <div class="container">
      <div class="section-head text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">Testimonials</h6>
            <h4 class="playfont wow flipInX" data-wow-delay=".5s">What People Says?</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="testim">
            <ClientOnly>
              <Swiper v-bind="swiperOptions" class="slick-dotted">
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
          <div class="navs mt-30">
            <span class="prev">
              <i class="fas fa-long-arrow-alt-left"></i>
            </span>
            <span class="next">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>
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
  breakpoints: {
    992: {
      slidesPerView: 2,
    }
  }
}
</script>
