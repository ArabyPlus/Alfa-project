<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/pg1.jpg" :title="title" :fullPath="fullPath" />
  <Blogs />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header2 from '@/components/Common/Header2.vue';
import Blogs from '@/components/Blogs/index.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

const title = "Our Blogs";
const fullPath = [
  { title: 'Blogs', link: "/blog" }
]

//= Page Head
useHead({
  titleTemplate: `%s - Blogs`,
  bodyAttrs: {
    class: 'index3'
  }
});
</script>