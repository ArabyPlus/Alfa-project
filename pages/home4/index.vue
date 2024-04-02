<template>
  <Loading />
  <Navbar :showLogo="false" />
  <Header />
  <div class="main-content">
    <About />
    <Services />
    <Works />
    <Testimonials />
    <Pricing />
    <Team />
    <Video />
    <News />
    <Brands />
    <Footer />
  </div>
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header from '@/components/Home4/Header.vue';
import About from '@/components/Home4/About.vue';
import Services from '@/components/Home4/Services.vue';
import Works from '@/components/Home4/Works.vue';
import Testimonials from '@/components/Home4/Testimonials.vue';
import Pricing from '@/components/Home4/Pricing.vue';
import Team from '@/components/Home4/Team.vue';
import Video from '@/components/Home4/Video.vue';
import News from '@/components/Home4/News.vue';
import Brands from '@/components/Home4/Brands.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Architecture Studio`,
  bodyAttrs: {
    class: 'index4'
  }
});
</script>