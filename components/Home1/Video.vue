<template>
  <section class="video bg-img parallaxie" data-background="/img/bg-vid.jpg">
    <div class="vid valign" @click="openVideo" style="cursor:pointer">
      <div class="vid-butn">
        <span class="icon">
          <i class="pe-7s-play"></i>
        </span>
      </div>
    </div>
    <div class="container">
      <div class="stauts">
        <div class="item" v-for="stat, idx in videoData.stats" :key="idx">
          <h4>{{ stat.number }}<span>{{ stat.operator }}</span> +</h4>
          <h6>{{ stat.title }}</h6>
        </div>
      </div>
    </div>
    <ModalVideo channel="vimeo" videoId="127203262" :isOpen.sync="videoIsOpen" :onClose="onClose" />
  </section>
</template>

<script setup>
//= Components
import ModalVideo from '@/components/Common/ModalVideo.vue';
//= Scripts
import parallaxie from "@/common/parallaxie";
//= Static Data
import videoData from "@/data/home1-video.json";

const videoIsOpen = ref(false);

function openVideo() {
  videoIsOpen.value = !videoIsOpen.value;
}

function onClose() {
  videoIsOpen.value = false;
}

onMounted(() => {
  parallaxie('.video.bg-img.parallaxie');
});
</script>