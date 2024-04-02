<template>
  <Loading />
  <Navbar />
  <Header center="true" />
  <Works />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header from '@/components/Works/Header.vue';
import Works from '@/components/Works/Works2.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: "%s - Portfolio Three Column",
  bodyAttrs: {
    class: 'index3'
  }
});
</script>