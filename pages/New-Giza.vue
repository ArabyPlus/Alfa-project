<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/portfolio/mas/04.jpg" title="New Giza ( NH-08 )" />
  <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    scoup1="السباكة"
    scoup2="مكافحة الحرائق"
    scoup3="تكييف الهواء"
    contract="2"
    hint="مجمع سكني يتألف من 10 مبانٍ سكنية، كل منها بـ 4 طوابق، بالإضافة إلى مجمع عيادات ملحق ومساحة خضراء تحيط بجميع المباني."
  />
  <UniqueProject
    v-if="$i18n.locale == 'en-US'"
    scoup1="Firefighting system"
    scoup2="HVAC"
    scoup3="Plumbing system"
    contract="2"
    hint="A residential complex consisting of 10 residential buildings, each with 4 floors, along with an attached clinic complex and green area surrounding all buildings."
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
  titleTemplate: `Alfa - New Giza `,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
