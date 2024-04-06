<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/02.jpg" title="Degla Land Mark Compound" />
    <UniqueProject
      state_date="MAY 2022 TO PRESENT"
      owner="MEMAR EL MORSHEDY"
      main_contractor="ALFA FOR MEP"
      scoup1="Firefighting system"
      scoup2="Mechanical work"
      scoup3="Plumbing system"
      scoup4="Infra"
      contract="7"
      hint="A RESIDENTIAL COMPOUND CONSISTING OF MANY HUGE TOWERS, WE CARRIED OUT PLUMBING WORKS IN TOWER 17,WHICH IS A CIRCULAR TOWER CONSISTING OF TWO BASEMENTS AND 11FLOORS, EACH FLOOR CONTAINS 28 APARTMENTS, AND WE HAVE COMPLETED THE FIERFIGHTING WORKS IN THE TOWER BASEMENT, IN ADDITION TO FINISHING THE WORK OF THE EXTERNAL SEWAGE NETWORKS OF THE COMPOUND AND CONNECTING THE WATER SUPPLY NETWORKS TO ALL TOWERS WITHA SIZE OF BUSINESS REACHED 17MILLION EGYPTIAN POUNDS"
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
    titleTemplate: `Alfa - Degla Land Mark Compound`,
    bodyAttrs: {
      class: "index3",
    },
  });
  </script>
  