<template>
  <Loading />
  <Navbar />
  <Header2 bg="/img/pg2.jpg" :title="aboutUsTranslation" />
  <Vision />
  <Home1Light-News />
  <Footer />
</template>

<script setup>
//= Page Components
import Loading from "@/components/Common/Loading.vue";
import Navbar from "@/components/Common/Navbar.vue";
import Header2 from "@/components/Common/Header2.vue";
import Contact from "@/components/Contact/index.vue";
import Footer from "@/components/Common/Footer.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const aboutUsTranslation = t("About Us");

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `Alfa - About`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
