<template>
    <Loading />
    <Navbar />
    <Header2 bg="/img/portfolio/mas/09.jpg" title="Ikhmem Hospital" />
    <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    state_date= "منذ يونيو 2022"
main_contractor= "MEPCON"
scoup1= "الأعمال الميكانيكية"
scoup2= "مكافحة الحرائق"
scoup3= "تكييف الهواء"
contract= "2"
hint= "مستشفى مركز الإعادة والتأهيل في مدينة إخميم بمحافظة سوهاج"
  />
    <UniqueProject v-if="$i18n.locale == 'en-US'"
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