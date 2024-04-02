<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/portfolio/project1/bg.jpg" :title="title" :fullPath="fullPath" />
  <DetailsIntro />
  <DetailsProjdtal1 />
  <DetailsVideo />
  <DetailsProjdtal2 />
  <DetailsCallToAction />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header2 from '@/components/Common/Header2.vue';
import DetailsIntro from '@/components/Project/Details-Intro.vue';
import DetailsProjdtal1 from '@/components/Project/Details-Projdtal1.vue';
import DetailsVideo from '@/components/Project/Details-Video.vue';
import DetailsProjdtal2 from '@/components/Project/Details-Projdtal2.vue';
import DetailsCallToAction from '@/components/Project/Details-CallToAction.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

const title = "Luxury Furniture";
const fullPath = [
  { title: 'Portfolio', link: "/works1" },
  { title: 'Luxury Furniture', link: "project-details" }
]

//= Page Head
useHead({
  titleTemplate: "%s - Single Project",
  bodyAttrs: {
    class: 'index3'
  }
});
</script>