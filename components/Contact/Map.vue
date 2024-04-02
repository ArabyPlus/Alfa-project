<template>
  <div class="col-lg-6 map-box">
    <GoogleMap :center="map" :zoom="12" style="width:100%;height:100%">
      <Marker :position="map" :clickable="false" :draggable="false" />
    </GoogleMap>
  </div>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const { map } = defineProps(['map']);
</script>
