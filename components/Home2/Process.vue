<template>
  <section class="process section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="step, idx in processes" :key="idx">
          <div :class="`item ${idx !== processes.length - 1 ? 'md-mb50' : ''}`">
            <h4>{{ step.id }}</h4>
            <h5>{{ step.title }}</h5>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import processes from "@/data/home2-process.json";
</script>
