<template>
  <section class="video bg-img parallaxie" data-background="/img/bg-vid.jpg">
    <div class="vid valign" @click="openVideo" style="cursor:pointer">
      <div class="vid-butn">
        <span class="icon">
          <i class="pe-7s-play"></i>
        </span>
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
