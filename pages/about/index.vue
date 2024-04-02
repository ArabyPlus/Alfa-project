<template>
  <Loading />
  <Navbar />
  <Header />
  <Info />
  <Services />
  <Testimonials />
  <Team />
  <Skills />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header from '@/components/About/Header.vue';
import Info from '@/components/About/Info.vue';
import Services from '@/components/Home3/Services.vue';
import Testimonials from '@/components/Home1/Testimonials.vue';
import Team from '@/components/Home3/Team.vue';
import Skills from '@/components/About/Skills.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - About`,
  bodyAttrs: {
    class: 'index3'
  }
});
</script>