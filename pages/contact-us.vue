<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/pg2.jpg" title="Contact Us" />
  <Contact />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from "@/components/Common/Loading.vue";
import Navbar from "@/components/Common/Navbar.vue";
import Header2 from "@/components/Common/Header2.vue";
import Contact from "@/components/Contact/index.vue";
import Footer from "@/components/Common/Footer.vue";

//= Page Metadata
definePageMeta({
  layout: "light",
});

const title = "Contact Us";
const fullPath = [{ title: "Contact Us", link: "/contact" }];

//= Page Head
useHead({
  titleTemplate: `Alfa - Contact`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
