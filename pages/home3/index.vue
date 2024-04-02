<template>
  <Loading />
  <Navbar />
  <Header />
  <Services />
  <Works />
  <About />
  <Video />
  <Team />
  <Testimonials />
  <News />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header from '@/components/Home3/Header.vue';
import Services from '@/components/Home3/Services.vue';
import Works from '@/components/Home3/Works.vue';
import About from '@/components/Home3/About.vue';
import Video from '@/components/Home3/Video.vue';
import Team from '@/components/Home3/Team.vue';
import Testimonials from '@/components/Home3/Testimonials.vue';
import News from '@/components/Home3/News.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Creative Arch`,
  bodyAttrs: {
    class: 'index3'
  }
});
</script>
