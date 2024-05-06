<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />
  <UniqueProjectArabic v-if="$i18n.locale == 'ar-AR'" state_date="منذ فبراير 2023" owner="معمار المرشدي"
    main_contractor="ألفا للمقاولات الهندسية" scoup1="الأعمال الميكانيكية" scoup2="السباكة" scoup3="البنية التحتية"
    scoup4="مكافحة الحرائق" contract="2.5" />
  <UniqueProject v-if="$i18n.locale == 'en-US'" state_date="FEB 2023 TO PRESENT" owner="MEMAR EL MORSHEDY"
    main_contractor="ALFA FOR MEP" scoup1="MECHANICAL WORK" scoup2="PLUMBING" scoup3="INFRA" scoup4="FIREFIGHTING"
    contract="2.5" />
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
  { id: 1, background: 'https://ahuc.edu.eg/wp-content/uploads/2018/06/MG_5877-1024x683.jpg'},
  { id: 2, background: 'https://www.fue.edu.eg/Arabic/ImageHandler.ashx?Id=4269&SS=8a1a967a9f3024f4839f00a6a03bf4d6'},
  { id: 3, background: '/img/portfolio/mas/07.jpg'}
]

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `Alfa - Al Hayah University`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
