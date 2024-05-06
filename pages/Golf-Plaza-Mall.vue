<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />
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
import Contact from "@/components/Contact/index.vue";
import Footer from "@/components/Common/Footer.vue";
import UniqueProject from "../../components/UniqueProject.vue";
import MyHeader from "@/components/Common/MyHeader";
const myArray = [
  { id: 1, background: 'https://realestate.eg/storage/listings/5nckRgYD4DQseoHH.jpg'},
  { id: 2, background: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9d849c110131259.5fe4793d37518.jpg'},
  { id: 3, background: '/img/portfolio/mas/11.jpg'}
]

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
