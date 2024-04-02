<template>
  <section>
    <div class="container-fluid">
      <div class="video-wrapper section-padding bg-img parallaxie valign"
        data-background="/img/portfolio/project1/vid.jpg" data-overlay-dark="4">
        <div class="full-width text-center">
          <div class="vid" @click="openVideo" style="cursor:pointer">
            <div class="vid-butn">
              <span class="icon">
                <i class="fas fa-play"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalVideo :channel="projectDetailsData.video.channel" :videoId="projectDetailsData.video.id"
      :isOpen.sync="videoIsOpen" :onClose="onClose" />
  </section>
</template>

<script setup>
//= Components
import ModalVideo from '@/components/Common/ModalVideo.vue';
//= Scripts
import parallaxie from "@/common/parallaxie";
//= Static Data
import projectDetailsData from "@/data/project-details.json";

const videoIsOpen = ref(false);

function openVideo() {
  videoIsOpen.value = !videoIsOpen.value;
}

function onClose() {
  videoIsOpen.value = false;
}

onMounted(() => {
  parallaxie('.video-wrapper.bg-img.parallaxie');
});
</script>