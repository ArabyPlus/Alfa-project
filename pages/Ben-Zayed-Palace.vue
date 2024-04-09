<template>
  <Loading />
  <Navbar />
  <Header2
    bg="/img/portfolio/mas/06.jpg"
    title="Ben Zayed Palace (MZ) Alamein"
  />
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
  titleTemplate: `Alfa - Ben Zayed Palace`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
