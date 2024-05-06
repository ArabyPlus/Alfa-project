<template>
  <Loading />
  <Navbar />
  <MyHeader :slides="myArray" />

  <UniqueProjectArabic v-if="$i18n.locale == 'ar-AR'" state_date="منذ مايو 2022" owner="معمار المرشدى"
    main_contractor="ألفا للمقاولات الهندسية" scoup1="الأعمال الميكانيكية" scoup2="السباكة" scoup3="البنية التحتية"
    scoup4="مكافحة الحرائق" contract="7"
    hint="مجمع سكني يتألف من عدة أبراج ضخمة، قمنا بأعمال السباكة في برج 17، وهو برج دائري يتألف من طابقين سفليين و11 طابقًا، حيث يحتوي كل طابق على 28 شقة، وقمنا بإتمام أعمال مكافحة الحرائق في بدروم البرج، بالإضافة إلى إنهاء أعمال شبكات الصرف الخارجية للمجمع وربط شبكات التوريد المائي بجميع الأبراج بتكلفة تقدر بـ 17 مليون جنيه مصري." />
  <UniqueProject v-if="$i18n.locale == 'en-US'" state_date="MAY 2022 TO PRESENT" owner="MEMAR EL MORSHEDY"
    main_contractor="ALFA FOR MEP" scoup1="Firefighting system" scoup2="Mechanical work" scoup3="Plumbing system"
    scoup4="Infra" contract="7"
    hint="A RESIDENTIAL COMPOUND CONSISTING OF MANY HUGE TOWERS, WE CARRIED OUT PLUMBING WORKS IN TOWER 17,WHICH IS A CIRCULAR TOWER CONSISTING OF TWO BASEMENTS AND 11FLOORS, EACH FLOOR CONTAINS 28 APARTMENTS, AND WE HAVE COMPLETED THE FIERFIGHTING WORKS IN THE TOWER BASEMENT, IN ADDITION TO FINISHING THE WORK OF THE EXTERNAL SEWAGE NETWORKS OF THE COMPOUND AND CONNECTING THE WATER SUPPLY NETWORKS TO ALL TOWERS WITHA SIZE OF BUSINESS REACHED 17MILLION EGYPTIAN POUNDS" />
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
  { id: 1, background: 'https://al-morshedy.com/wp-content/uploads/2017/04/05-Degla-Landmark.jpg' },
  { id: 2, background: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivFo-_P4VBqYoZPizgrokNglvwKGpbJUvs3rpmoJ8I5bTTUjF4F5XeTb9jYkp1dJW2I_3Uqz1exkjj19RCbsOKWU2-ZKdxRtmOuSJpVougPL8j9HN_p-eUg19Knupt7WQ-VZqYoylCe-Y/s1600/10857087_974203952663925_6544399482044812070_o.jpg'},
  { id: 3, background: '/img/portfolio/mas/02.jpg'}
]

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `Alfa - Degla Land Mark Compound`,
  bodyAttrs: {
    class: "index3",
  },
});
</script>
