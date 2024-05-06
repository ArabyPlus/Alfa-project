<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray"/>
  <UniqueProjectArabic
    v-if="$i18n.locale == 'ar-AR'"
    state_date="منذ أكتوبر 2022"
    owner="شركة إعمار"
    main_contractor="شركة سولد للإنشاءات"
    scoup1="السباكة"
    scoup2="تكييف الهواء"
    scoup3="مكافحة الحرائق"
    contract="15"
    hint="3 مبانٍ، كل منها بمساحة داخلية تتراوح بين 1,500 متر مربع و 2,000 متر مربع، مقسمة إلى الطابق الأرضي و 3 طوابق. بالإضافة إلى ذلك، هناك مبنى آخر بمساحة 4,000 متر مربع، يتميز بموقف سيارات خاص ويتكون من الطابق الأرضي و 3 طوابق، بتكلفة عمل تبلغ 13 مليون جنيه مصري."
  />
  <UniqueProject
    v-if="$i18n.locale == 'en-US'"
    state_date="OCT 2022 TO PRESENT"
    owner="EMAAR COMPANY"
    main_contractor="ALFA FOR MEP"
    scoup1="Firefighting system"
    scoup2="SOLD CONSTRUCTION"
    scoup3="Plumbing system"
    scoup4="HVAC"
    contract="15"
    hint="3 buildings, each with an internal area ranging from 1,500 square meters to 2,000 square meters, divided into ground and 3 floors. Additionally, there's another building with an area of 4,000 square meters, featuring a private garage and consisting of ground and 3 floors, with a business size reaching 13 million Egyptian pounds."
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

const myArray = [
  { id: 1, background: 'https://blureg.com/wp-content/uploads/2023/06/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A8%D9%8A%D9%84-%D9%81%D9%8A-%D8%A5%D8%B9%D9%85%D8%A7%D8%B1-%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B2%D8%A7%D9%8A%D8%AF-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-New-Zayed-Belle-Vie.jpg'},
  { id: 2, background: 'https://www.propertyfinder.eg/property/59b117351a4789e769421e4d11d4deca/668/452/MODE/90a019/4643723-16be7o.jpg?ctr=eg'},
  { id: 3, background: '/img/portfolio/mas/03.jpg'}
]

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `Alfa - Belle Vie Compound`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
