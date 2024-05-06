<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />
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
import MyHeader from "@/components/Common/MyHeader";
const myArray = [
  { id: 1, background: 'https://img-1.aqar.com.eg/new-aqarmap-media/large/2403/65feda59a5f98989151822.jpg'},
  { id: 2, background: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiyFazpJ0oTX1fgkxrIdJ5-1OtXIAle2s0qypoYem6Gbco9qQC3Z6ceKBWDUlAeRl1WfACw9MK4SfuxEnfyNL8L1fruoqjRUYh0rOlcWRjXGRqBW5Jo_uX1CTkymJeAuZDooYlxmoFU-c/s1600/1+%25D9%2581%25D9%258A%25D9%2584%25D8%25A7+%25D9%2584%25D9%2584%25D8%25A8%25D9%258A%25D8%25B9+%25D8%25A8%25D9%2588%25D8%25A7%25D8%25AF%25D9%258A+%25D8%25A7%25D9%2584%25D9%2586%25D8%25AE%25D9%258A%25D9%2584%252C+%25D9%2581%25D9%258A%25D9%2584%25D8%25A7+%25D9%2581%25D9%258A+%25D9%2588%25D8%25A7%25D8%25AF%25D9%258A+%25D8%25A7%25D9%2584%25D9%2586%25D8%25AE%25D9%258A%25D9%2584%252C+%25D9%2583%25D9%2585%25D8%25A8%25D9%2588%25D9%2586%25D8%25AF+%25D9%2588%25D8%25A7%25D8%25AF%25D9%2589+%25D8%25A7%25D9%2584%25D9%2586%25D8%25AE%25D9%258A%25D9%2584+%25D8%25B7%25D8%25B1%25D9%258A%25D9%2582+%25D9%2585%25D8%25B5%25D8%25B1+%25D8%25A7%25D8%25B3%25D9%2583%25D9%2586%25D8%25AF%25D8%25B1%25D9%258A%25D9%2587+%25D8%25A7%25D9%2584%25D8%25B5%25D8%25AD%25D8%25B1%25D8%25A7%25D9%2588%25D9%2589%252C+%25D9%2588%25D8%25A7%25D8%25AF%25D9%258A+%25D8%25A7%25D9%2584%25D9%2586%25D8%25AE%25D9%258A%25D9%2584+%25D8%25A7%25D9%2584%25D8%25B5%25D8%25AD%25D8%25B1%25D8%25A7%25D9%2588%25D9%258A%252C+%25D9%2588%25D8%25A7%25D8%25AF%25D9%2589+%25D8%25A7%25D9%2584%25D9%2586%25D8%25AE%25D9%258A%25D9%2584+%25D8%25A8%25D8%25A7%25D9%2584%25D8%25B4%25D9%258A%25D8%25AE+%25D8%25B2%25D8%25A7%25D9%258A%25D8%25AF%252C+%25D9%2588%25D8%25A7%25D8%25AF%25D9%2589+%25D8%25A7%25D9%2584%25D9%2586%25D8%25AE%25D9%258A%25D9%2584+%25D8%25A7%25D9%2584%25D8%25B4%25D9%258A%25D8%25AE+%25D8%25B2%25D8%25A7%25D9%258A%25D8%25AF%252C+%25D9%2588%25D8%25A7%25D8%25AF%25D9%258A+%25D8%25A7%25D9%2584%25D9%2586%25D8%25AE%25D9%258A%25D9%2584+%25D9%2585%25D9%2586%25D8%25AA%25D8%25AC%25D8%25B9.JPG'},
  { id: 3, background: '/img/portfolio/mas/08.jpg'}
]

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
