<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/04.jpg" title="New Giza ( NH-08 )" />
    <UniqueProject
      scoup1="Firefighting system"
      scoup2="HVAC"
      scoup3="Plumbing system"
      contract="2"
      hint="A residential complex consisting of 10 residential buildings, each with 4 floors, along with an attached clinic complex and green area surrounding all buildings."
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
    titleTemplate: `Alfa - New Giza `,
    bodyAttrs: {
      class: "index3",
    },
  });
  </script>
  