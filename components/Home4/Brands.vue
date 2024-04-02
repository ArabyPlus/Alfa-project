<template>
  <section class="clients-brand pb-80">
    <div class="container">
      <div class="brands-crs row">
        <div class="brands col-lg-2 col-4" v-for="brand, idx in brands" :key="idx">
          <div class="item mb-40" :data-wow-delay="`${(0.3 + idx * 0.2)}s`">
            <div class="img">
              <img :src="brand.image" alt="">
            </div>
            <a href="#0" class="link" data-splitting>{{ brand.website }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import brands from "@/data/home4-brands.json";
</script>
