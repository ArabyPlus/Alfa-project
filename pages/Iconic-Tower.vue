<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray"/>
  <UniqueProjectArabic 
  v-if="$i18n.locale == 'ar-AR'"
  state_date= "منذ مايو 2022"
      owner= "معمار المرشدى"
      main_contractor= "ألفا للمقاولات الهندسية"
      scope1= "نظام مكافحة الحرائق"
      scope2= "ورشة الرمل والطلاء"
      scope3= "نظام السباكة"
      contract= "3"
      hint= "78 طابقًا مقسمة إلى 40 طابقًا للخدمات المكتبية، و 10 طوابق للشقق، و 30 طابقًا لفندق سبع نجوم، بالإضافة إلى 8 طوابق خدمية للأعمال الميكانيكية والكهربائية، بالإضافة إلى 45،000 متر مربع مع بدرومين."
  />
  <UniqueProject
  v-if="$i18n.locale == 'en-US'"
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
import MyHeader from "@/components/Common/MyHeader";
import Contact from "@/components/Contact/index.vue";
import Footer from "@/components/Common/Footer.vue";
import UniqueProject from "../../components/UniqueProject.vue";
import UniqueProjectArabic from "~/components/UniqueProjectArabic.vue";


const myArray = [
  { id: 1, background: 'https://theebc-eg.com/wp-content/uploads/2023/01/Iconic-Tower.jpeg'},
  { id: 2, background: 'https://pbs.twimg.com/media/GLRq3iNWgAASIb_?format=jpg&name=4096x4096'},
  { id: 3, background: '/img/portfolio/mas/01.jpg'}
]
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
