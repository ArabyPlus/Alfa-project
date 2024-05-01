<template>
  <section class="services section-padding " id="services">
    <div class="container">
      <div class="section-head text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <h6 class="custom-font wow fadeInDown text-2xl" data-wow-delay=".3s">{{ $t('Services') }}</h6>
          </div>
        </div>
      </div>
      <div class="row bord-box bg-img wow fadeInUp" data-wow-delay=".3s"
        style="background-image:url('/img/slid/2.jpg')">
        <!-- IF ENGLISH -->
        <div class="col-lg-3 col-md-6 item-bx" v-for="(service, idx) in servicesData" :key="idx" v-show="$i18n.locale == 'en-US'">
          <h2 class="custom-font numb" :id="service.id">{{ service.id }}</h2>
          <h6 class="mb-20">{{ service.title }}</h6>
          <p v-if="!isShown[idx]">{{ service.discription.slice(1, 50) }}...</p>
          <p v-if="isShown[idx]">{{ service.discription }}</p>
          <NuxtLink to="#0" class="more custom-font mt-30" @click="toggleDescription(idx)">
            {{ isShown[idx] ? 'Read Less' : 'Read More' }}
          </NuxtLink>
        </div>
        <!-- IF ARABIC -->
        <div class="col-lg-3 col-md-6 item-bx text-end" v-for="(service, idx) in servicesDataa" :key="idx" v-show="$i18n.locale == 'ar-AR'">
          <h2 class="custom-font numb" :id="service.id">{{ service.id }}</h2>
          <h6 class="mb-20">{{ service.title }}</h6>
          <p v-if="!isShown[idx]">{{ service.discription.slice(1, 50) }}...</p>
          <p v-if="isShown[idx]">{{ service.discription }}</p>
          <NuxtLink to="#0" class="more custom-font mt-30" @click="toggleDescription(idx)">
            {{ isShown[idx] ? 'قراءة أقل' : 'قراءة المزيد' }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import servicesData from "@/data/home1-light-services.json";
import servicesDataa from "@/data/home1-light-services-arabic.json";

const isShown = ref(Array(servicesData.length).fill(false));
let currentIndex = -1;

const toggleDescription = (index) => {
  if (currentIndex !== -1 && currentIndex !== index) {
    isShown.value[currentIndex] = false;
  }
  isShown.value[index] = !isShown.value[index];
  currentIndex = isShown.value[index] ? index : -1;
}
</script>
