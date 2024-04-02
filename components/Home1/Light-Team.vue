<template>
  <section class="team section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="tit">
            <h6 class="custom-font mb-10 wow fadeInDown" data-wow-delay=".3s">Some thoughts from Us</h6>
            <h3 class="wow flipInX" data-wow-delay=".5s">Our Employees</h3>
            <p class="wow fadeInUp" data-wow-delay=".3s">
              We feel proud for our expert team members beatae ipsum dolor sit amet, consectetur adipisicing elit mauris
              vitae consequat nibh, vitae interdum mi.
            </p>
            <div class="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
              <span class="prev">
                <i class="fas fa-long-arrow-alt-left"></i>
              </span>
              <span class="next">
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="team-container">
            <ClientOnly>
              <Swiper v-bind="swiperOptions" ref="slick" class="slick-dotted">
                <SwiperSlide class="item wow fadeInUp" data-wow-delay=".3s" v-for="teamMember, idx in team" :key="idx">
                  <div class="img wow imago">
                    <img :src="teamMember.image" alt="">
                    <div class="social">
                      <a href="#0"><i class="fab fa-facebook-f"></i></a>
                      <a href="#0"><i class="fa-brands fa-x-twitter"></i></a>
                      <a href="#0"><i class="fa-brands fa-tiktok"></i></a>
                      <a href="#0"><i class="fab fa-behance"></i></a>
                      <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div class="info">
                    <h5>{{ teamMember.name }}</h5>
                    <span>{{ teamMember.position }}</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <div class="dots-half bg-img bg-repeat" style="background-image:url('/img/dots.png')"></div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
//= Static Data
import team from "@/data/home1-light-team.json";

const swiperOptions = {
  modules: [Autoplay, Navigation],
  loop: true,
  speed: 500,
  autoplay: true,
  slidesPerView: 3,
  navigation: {
    nextEl: '.team .next',
    prevEl: '.team .prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }
  }
}
</script>