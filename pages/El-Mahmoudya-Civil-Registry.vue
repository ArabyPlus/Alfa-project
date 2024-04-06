<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/portfolio/mas/12.jpg" title="El-Mahmoudya Civil Registry" />
  <UniqueProject
    main_contractor="DEGGERS"
    scoup1="MECHANICAL WORKS & ELECTRICAL WORKS ALL SYSTEMS"
    scoup2="CIVIL WORKS"
    contract="2.7"
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
  titleTemplate: `Alfa - El-Mahmoudya Civil Registry`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
Compound El-Nakheel El-Mahmoudya Civil Registry
