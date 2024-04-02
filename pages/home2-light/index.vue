<template>
  <Loading />
  <Navbar theme="light" />
  <Header />
  <Services />
  <About />
  <Works />
  <Process />
  <Team />
  <Testimonials />
  <Brands />
  <News />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header from '@/components/Home2/Light-Header.vue';
import Services from '@/components/Home2/Light-Services.vue';
import About from '@/components/Home2/Light-About.vue';
import Works from '@/components/Home2/Light-Works.vue';
import Process from '@/components/Home2/Light-Process.vue';
import Team from '@/components/Home1/Light-Team.vue';
import Testimonials from '@/components/Home2/Light-Testimonials.vue';
import Brands from '@/components/Home2/Light-Brands.vue';
import News from '@/components/Home2/Light-News.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Interior Agency Light`,
  bodyAttrs: {
    class: 'index2'
  }
});
</script>
