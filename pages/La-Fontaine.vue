<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/10.jpg" title="La Fontaine" />
    <UniqueProject
    id="La-Fontaine"
      image ="/img/portfolio/mas/10.jpg"
      title= "La Fontaine"
      state_date ="1 NOV 2023"
      scoup1 ="MECHANICAL WORK"
      scoup2 ="PLUMBING"
      scoup3 ="INFRA"
      scoup4 ="FIREFIGHTING"
      contract ="32"

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
    titleTemplate: `Alfa - La Fontaine`,
    bodyAttrs: {
      class: "index3",
    },
  });
  </script>
Compound El-Nakheel  