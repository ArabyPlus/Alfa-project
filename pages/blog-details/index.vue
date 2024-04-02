<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/pg1.jpg" :title="title" :fullPath="fullPath" />
  <Details />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from '@/components/Common/Loading.vue';
import Navbar from '@/components/Common/Navbar.vue';
import Header2 from '@/components/Common/Header2.vue';
import Details from '@/components/Post/index.vue';
import Footer from '@/components/Common/Footer.vue';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

const title = "Post Details";
const fullPath = [
  { title: 'Blogs', link: "/blog" },
  { title: 'Post Details', link: "/blog-details" },
]

//= Page Head
useHead({
  titleTemplate: `%s - Post Details`,
  bodyAttrs: {
    class: 'index3'
  }
});
</script>