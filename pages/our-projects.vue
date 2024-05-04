<template>
  <Loading />
  <Navbar theme="light" />
  <section class=" section-padding">
    <div class="container-fluid">
      <div class="container">
        <div class="section-head text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-10">
              <h4 class="playfont wow flipInX" data-wow-delay=".5s">
                {{ $t('Our Projects') }}
              </h4>
              <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">
                {{ $t('Best Works') }}
              </h6>
            </div>
          </div>
        </div>
      </div>
     <Projectss />
     
    </div>
    <h1 class="mt-10 mx-auto text-center bg-grey-darken-1 w-32 py-2 rounded cursor-pointer" @click="toContact">{{ $t('Contact Us') }}</h1>
    

  </section>
  <Footer class="mt-30" />
</template>

<script setup>
import initIsotope from "@/common/initIsotope";

import works from "@/data/home1-light-all-works.json";
import workss from "@/data/home1-light-all-works-arabic.json";
import Navbar from "@/components/Common/Navbar.vue";

import Footer from "@/components/Common/Footer.vue";

const toContact= ()=>{
  navigateTo('/contact-us')
}
//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: "Alfa - Projects",
});
onMounted(() => {
  setTimeout(() => {
    if (window.Isotope) initIsotope();
  }, 0);
});
</script>
