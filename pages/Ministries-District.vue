<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/05.jpg" title="Ministries District, New Administrative Capital" />
    <UniqueProject
      scoup2="LANDSCAPE AND INFRASTRUCTURE WORK"
      scoup3="Plumbing system"
      state_date= "JUNE 2018 TO 2020"
      contract="2"
      hint="Four administrative buildings: Ministry of Transportation, Ministry of Health and Population, Ministry of Youth and Sports, and Suez Canal Authority, each occupying a 10,000 square meter area with 11 floors and a two-floor basement."
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
    titleTemplate: `Alfa - Ministries District`,
    bodyAttrs: {
      class: "index3",
    },
  });
  </script>
  