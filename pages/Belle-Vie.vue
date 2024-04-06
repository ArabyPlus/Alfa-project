<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/03.jpg" title="Belle Vie Compound - Emaar ( Alma & Faya )" />
    <UniqueProject
      state_date="OCT 2022 TO PRESENT"
      owner="EMAAR COMPANY"
      main_contractor="ALFA FOR MEP"
      scoup1="Firefighting system"
      scoup2="SOLD CONSTRUCTION"
      scoup3="Plumbing system"
      scoup4="HVAC"
      contract="15"
      hint="3 buildings, each with an internal area ranging from 1,500 square meters to 2,000 square meters, divided into ground and 3 floors. Additionally, there's another building with an area of 4,000 square meters, featuring a private garage and consisting of ground and 3 floors, with a business size reaching 13 million Egyptian pounds."
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
    titleTemplate: `Alfa - Belle Vie Compound`,
    bodyAttrs: {
      class: "index3",
    },
  });
  </script>
  