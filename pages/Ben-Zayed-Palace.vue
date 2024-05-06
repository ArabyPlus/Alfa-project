<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />
  <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    state_date="منذ يناير 2022 إلى مايو 2022"
    scoup1="نظام السباكة"
    scoup2="نظام مكافحة الحرائق"
    scoup3="نظام الكهرباء"
    scoup4="نظام التكييف"
    contract="4"
    hint="قصر بن زايد على مساحة تبلغ 4,000 متر مربع بالإضافة إلى ثلاث فيلات ضخمة وخمس مبانٍ خدمية."
  />
  <UniqueProject
    v-if="$i18n.locale == 'en-US'"
    state_date="AN 2022 TO MAY 2022"
    scoup1="PLUMBING SYSTEM"
    scoup2="FIREFIGHTING SYSTEM"
    scoup3="ELECTRICAL SYSTEM"
    scoup4="HVAC SYSTEM"
    contract="4"
    hint="BIN ZAYED PALACE ON AN AREA OF 4,000 SQUARE METERS IN ADDITION TO THREE HUGE VILLAS AND FIVE SERVICE BUILDINGS"
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
  { id: 1, background: 'https://www.kuna.net.kw/NewsPictures/2021/7/1/2f45f0ee-5c60-4611-83c5-dbd7bef3db3e.jpg'},
  { id: 2, background: 'https://www.albayan.ae/polopoly_fs/1.3503360.1551700116!/image/image.jpg'},
  { id: 3, background: '/img/portfolio/mas/06.jpg'}
]

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `Alfa - Ben Zayed Palace`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
