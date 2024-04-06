<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/09.jpg" title="Ikhmem Hospital" />
    <UniqueProject
    state_date= "JUNE 2022 TO PRESENT"
      main_contractor= "MEPCON"
      scoup1= "mechanical work"
      scoup2= "FIREFIGHTING"
      scoup3= "HVAC"
      contract= "2"
      hint= "HOSPITAL OF THE REHABILITATION AND REHABILITATION CENTER OF THE CITY OF IKHMEEM IN SOHAG GOVERNORATE"
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
    titleTemplate: `Alfa - Ikhmem Hospital`,
    bodyAttrs: {
      class: "index3",
    },
  });
  </script>
Compound El-Nakheel  