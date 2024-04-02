<template>
  <div class="showX">
    <div id="preloader">
      <div class="loading-text">Loading</div>
    </div>
  </div>
</template>

<script setup>
import loadingPace from "@/common/loadingPace";

onMounted(() => {
  if (typeof Pace !== "undefined") loadingPace();
});
</script>
