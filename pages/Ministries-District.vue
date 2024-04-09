<template>
  <Loading />
  <Navbar />
  <Header2
    bg="/img/portfolio/mas/05.jpg"
    title="Ministries District, New Administrative Capital"
  />
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
  titleTemplate: `Alfa - Ministries District`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
