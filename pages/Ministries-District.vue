<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />
  <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    state_date="منذ يونيو 2018 وحتى 2020"
    scoup1="نظام السباكة"
    scoup2="أعمال المناظر الطبيعية والبنية التحتية"
    contract="2"
    hint="أربعة مبانٍ إدارية: وزارة النقل، وزارة الصحة والسكان، وزارة الشباب والرياضة، وهيئة قناة السويس، كل منها يشغل مساحة تبلغ ١٠،٠٠٠ متر مربع مع ١١ طابقًا وبدروم مكون من طابقين."
  />
  <UniqueProject
    v-if="$i18n.locale == 'en-US'"
    scoup2="LANDSCAPE AND INFRASTRUCTURE WORK"
    scoup3="Plumbing system"
    state_date="JUNE 2018 TO 2020"
    contract="2"
    hint="Four administrative buildings: Ministry of Transportation, Ministry of Health and Population, Ministry of Youth and Sports, and Suez Canal Authority, each occupying a 10,000 square meter area with 11 floors and a two-floor basement."
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
  { id: 1, background: 'https://thenewcapital.net/wp-content/uploads/2022/12/%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D9%87-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D9%87-%D8%AD%D9%8A-%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%A7%D8%AA-2-1200x830.webp'},
  { id: 2, background: 'https://aldiyaralasrea.com/wp-content/uploads/2023/07/%D8%AD%D9%8A-%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9.webp'},
  { id: 3, background: '/img/portfolio/mas/05.jpg'}
]
//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `Alfa - Ministries District`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
