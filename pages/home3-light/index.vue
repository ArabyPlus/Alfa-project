<template>
  <Loading />
  <Navbar theme="light" />
  <Header />
  <Services />
  <Works />
  <About />
  <Slider />
  <Numbers />
  <Team />
  <Testimonials />
  <News />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header from '@/components/Home3/Light-Header.vue';
import Services from '@/components/Home3/Light-Services.vue';
import Works from '@/components/Home3/Light-Works.vue';
import About from '@/components/Home3/Light-About.vue';
import Slider from '@/components/Home3/Light-Slider.vue';
import Numbers from '@/components/Home3/Light-Numbers.vue';
import Team from '@/components/Home1/Light-Team.vue';
import Testimonials from '@/components/Home3/Light-Testimonials.vue';
import News from '@/components/Home2/Light-News.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Architecture Light`
});
</script>