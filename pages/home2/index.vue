<template>
  <Loading />
  <Navbar />
  <Header />
  <About />
  <Works />
  <Process />
  <Services />
  <Video />
  <Circle theme="dark" />
  <News />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header from '@/components/Home2/Header.vue';
import About from '@/components/Home2/About.vue';
import Works from '@/components/Home2/Works.vue';
import Process from '@/components/Home2/Process.vue';
import Services from '@/components/Home2/Services.vue';
import Video from '@/components/Home2/Video.vue';
import Circle from '@/components/Home2/Circle.vue';
import News from '@/components/Home2/News.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark-green",
});

//= Page Head
useHead({
  titleTemplate: `%s - Interior Agency`,
  bodyAttrs: {
    class: 'index2'
  }
});
</script>
