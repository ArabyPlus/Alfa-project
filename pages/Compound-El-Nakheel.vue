<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/portfolio/mas/08.jpg" title="Compound El-Nakheel" />
  <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    state_date="منذ اكتوبر 2022"
    main_contractor="MEPCON"
    scoup1="الأعمال الميكانيكية"
    scoup2="السباكة"
    scoup3="البنية التحتية"
    scoup4="مكافحة الحرائق"
    contract="18"
    hint="مجمع سكني يمتلكه وزارة الداخلية يضم 10 فيلات و 11 مبنى سكنيًا، محاطًا بمساحة خضراء كبيرة. تم تعاقدنا لإكمال جميع الأعمال الميكانيكية للمجمع، بتكلفة تبلغ 20 مليون جنيه مصري."
  />
  <UniqueProject
    v-if="$i18n.locale == 'en-US'"
    state_date="OCT 2022 TO PRESENT"
    main_contractor="MEPCON"
    scoup1="MECHANICAL WORK"
    scoup2="PLUMBING"
    scoup3="INFRA"
    scoup4="FIREFIGHTING"
    contract="18"
    hint="A residential complex owned by the Ministry of Interior comprising 10 villas and 11 residential buildings, surrounded by a large green area. We were contracted to complete all mechanical work for the complex, with a business size reaching 20 million Egyptian pounds."
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
  titleTemplate: `Alfa - Compound El-Nakheel`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
Compound El-Nakheel
