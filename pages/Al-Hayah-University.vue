<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/portfolio/mas/07.jpg" title="Al Hayah University" />
  <UniqueProject
    state_date="FEB 2023 TO PRESENT"
    owner="MEMAR EL MORSHEDY"
    main_contractor="ALFA FOR MEP"
    scoup1="MECHANICAL WORK"
    scoup2="PLUMBING"
    scoup3="INFRA"
    scoup4="FIREFIGHTING"
    contract="2.5"
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
  titleTemplate: `Alfa - Al Hayah University`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
