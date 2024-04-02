<template>
  <Loading />
  <Navbar />
  <Header />
  <About />
  <Services />
  <Works />
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
import Header from '@/components/Home1/Header.vue';
import About from '@/components/Home1/About.vue';
import Services from '@/components/Home1/Services.vue';
import Works from '@/components/Home1/Works.vue';
import Video from '@/components/Home1/Video.vue';
import Team from '@/components/Home1/Team.vue';
import Testimonials from '@/components/Home1/Testimonials.vue';
import News from '@/components/Home1/News.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Home Default`
});
</script>