<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/portfolio/mas/11.jpg" title="Golf Plaza Mall" />
  <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    state_date= "منذ يناير 2023"
scoup1= "أعمال كهربائية لجميع الأنظمة"
contract= "30"
  />
  <UniqueProject v-if="$i18n.locale == 'en-US'"
    state_date="1 JAN 2023"
    scoup1="ELECTRICAL WORKS ALL SYSTEMS"
    contract="30"
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
  titleTemplate: `Alfa - Golf Plaza Mall`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
Compound El-Nakheel
