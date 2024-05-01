<template>
  <section class="team bord section-padding ">
    <div class="container">
      <div class="main-header text-center">
        <h3 class="mb-80 text-5xl">{{ $t('Our partners') }}
        </h3>
      </div>
    </div>
    <div class="container-fluid">
      <div class="flex flex-col items-center lg:flex-row w-[100%]"  >
        <!-- IF ENGLISH -->
        <div class="col-lg-3 col-md-6" v-for="teamMember, idx in teamData" :key="idx" v-show="$i18n.locale == 'en-US'">
          <div :class="`item ${idx !== teamData.length - 1 ? 'md-mb50' : ''}`">
            <div :class="`img ${idx % 2 === 0 ? 'left' : 'right'}`">
              <img class="h-40 rounded" :src="teamMember.image" alt="">
            </div>
            <div class="info">
              <h6>{{ teamMember.name }}</h6>
            </div>
          </div>
        </div>
        <!-- IF ARABIC -->
        <div class="col-lg-3 col-md-6" v-for="teamMember, idx in teamDataa" :key="idx" v-show="$i18n.locale == 'ar-AR'">
          <div :class="`item ${idx !== teamDataa.length - 1 ? 'md-mb50' : ''}`">
            <div :class="`img ${idx % 2 === 0 ? 'left' : 'right'}`">
              <img class="h-40 rounded" :src="teamMember.image" alt="">
            </div>
            <div class="info">
              <h6>{{ teamMember.name }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import teamData from "@/data/home3-team.json";
import teamDataa from "@/data/home3-team-arabic.json";
</script>
