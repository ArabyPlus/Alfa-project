<template >
  <Loading />
  <Navbar theme="light" />
  <Header />
  <About />
  <Services />
  <Home3Team />
  <Works />
  <!-- <Testimonials /> -->

  <Footer class="mt-30" />
</template>

<script setup>
//= Page Components
import Loading from "@/components/Common/Loading.vue";
import Navbar from "@/components/Common/Navbar.vue";
import Header from "@/components/Home1/Light-Header.vue";
import About from "@/components/Home1/Light-About.vue";
import Services from "@/components/Home1/Light-Services.vue";
import Works from "@/components/Home1/Light-Works.vue";
import Skills from "@/components/Home1/Light-Skills.vue";
import Testimonials from "@/components/Home1/Light-Testimonials.vue";
import Team from "@/components/Home1/Light-Team.vue";
import News from "@/components/Home1/Light-News.vue";
import Contact from "@/components/Home1/Light-Contact.vue";
import Footer from "@/components/Common/Footer.vue";

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: "Alfa - Home",
});
</script>
