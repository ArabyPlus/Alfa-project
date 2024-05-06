<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />
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
import Contact from "@/components/Contact/index.vue";
import Footer from "@/components/Common/Footer.vue";
import UniqueProject from "../../components/UniqueProject.vue";
import MyHeader from "@/components/Common/MyHeader";
const myArray = [
  { id: 1, background: 'https://www.nawy.com/blog/wp-content/uploads/2022/07/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF-%D9%86%D9%8A%D9%88-%D8%AC%D9%8A%D8%B2%D8%A9.jpg'},
  { id: 2, background: 'https://realogyproperties.com/wp-content/uploads/2023/09/%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF-%D9%86%D9%8A%D9%88-%D8%AC%D9%8A%D8%B2%D8%A9-6-%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1-5.jpg'},
  { id: 3, background: 'https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/compound_image/image/163/P2Wy7NFMyYf9Z9N911o4QjOoaMz7N6web-modern_deluxe_mansion.jpg'}
]

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
