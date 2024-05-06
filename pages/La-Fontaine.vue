<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />
  <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    state_date=" منذ نوفمبر 2023"
    scoup1="أعمال ميكانيكية"
    scoup2="سباكة"
    scoup3="بنية تحتية"
    scoup4="مكافحة الحرائق"
    contract="32"
  />
  <UniqueProject
    v-if="$i18n.locale == 'en-US'"
    id="La-Fontaine"
    image="/img/portfolio/mas/10.jpg"
    title="La Fontaine"
    state_date="1 NOV 2023"
    scoup1="MECHANICAL WORK"
    scoup2="PLUMBING"
    scoup3="INFRA"
    scoup4="FIREFIGHTING"
    contract="32"
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
  { id: 1, background: 'https://realestate.eg/ckfinder/userfiles/images/La%20Fontaine/La-Fontaine__-1.jpg'},
  { id: 2, background: 'https://realestate.eg/ckfinder/userfiles/images/La%20Fontaine/villas%20for%20sale%20in%20la%20fountaine.jpg'},
  { id: 3, background: '/img/portfolio/mas/10.jpg'}
]

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
