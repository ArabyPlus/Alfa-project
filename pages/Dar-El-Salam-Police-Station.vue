<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/13.jpg" title="Dar El-Salam Police Station" />
    <UniqueProject
    state_date ="1 FEB 2023"
      main_contractor= "KHARASANA COMPANY"
      scoup1= "MECHANICAL WORKS & ELECTRICAL WORKS ALL SYSTEMS"
      scoup2 ="FIRE FIGHTING"
      scoup3 ="RENORATION OF HVAC"
      scoup4 ="PLUMBING"
      contract= "3.8"
    />
    <Footer />
  </template>
  
  <script setup>
  //= Page Components
  import Loading from "@/components/Common/Loading.vue";
  import Navbar from "@/components/Common/Navbar.vue";
  import Header2 from "@/components/Common/Header2.vue";
  import Contact from "@/components/Contact/index.vue";
  import Footer from "@/components/Common/Footer.vue";
  import UniqueProject from "../../components/UniqueProject.vue";
  
  //= Page Metadata
  definePageMeta({
    layout: "light",
  });
  
  //= Page Head
  useHead({
    titleTemplate: `Alfa - Dar El-Salam Police Station`,
    bodyAttrs: {
      class: "index3",
    },
  });
  </script>
  