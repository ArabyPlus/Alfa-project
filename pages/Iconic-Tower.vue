<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/portfolio/mas/01.jpg" title="Iconic-Tower" />
  <UniqueProject
    state_date="MAY 2022 TO PRESENT"
    owner="MEMAR EL MORSHEDY"
    main_contractor="ALFA FOR MEP"
    scoup1="Firefighting system"
    scoup2="Sandplasting and painting workshop"
    scoup3="Plumbing system"
    contract="3"
    hint="78 floors divided into 40 floors of office services, 10 floors of apartments, and 30 floors of a seven-star hotel, with 8 service floors for mechanics and electricity works, in addition to 45,000 square meters with a two-floors basement."
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
  titleTemplate: `Alfa - Iconic-Tower`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
