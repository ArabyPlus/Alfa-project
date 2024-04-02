<template>
  <section class="price section-padding bg-blc">
    <div class="container">
      <div class="main-header text-center">
        <h3>Pricing Table.</h3>
        <div class="tex-bg">Pricing</div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="plan, idx in pricing" :key="idx">
          <div
            :class="`item ${idx === 1 ? 'active' : ''} text-center wow fadeInUp ${idx !== pricing.length - 1 ? 'md-mb50' : ''}`"
            data-wow-delay=".3s">
            <div class="type">
              <h5>{{ plan.title }}</h5>
            </div>
            <div class="amount">
              <h2><span>$</span> {{ plan.price }}</h2>
            </div>
            <div class="feat">
              <p>{{ plan.discripition }}</p>
            </div>
            <div class="order">
              <a href="#0" class="btn-curve btn-lit"><span>Purchase Now</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import pricing from '@/data/home4-pricing.json';
</script>
