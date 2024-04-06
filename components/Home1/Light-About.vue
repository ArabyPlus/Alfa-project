<template>
  <section class="about section-padding" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="exp-img wow fadeInUp" data-wow-delay=".3s">
            <img src="/public/img/line-pattern-color.png" alt="" />
          </div>
        </div>
        <div class="col-lg-7 valign">
          <div class="exp-content wow fadeInUp" data-wow-delay=".3s">
            <h6 class="sub-title">Some Numbers Of Our Company</h6>
            
            <div class="numbers mt-50">
              <div class="row">
                <div
                  class="col-md-4"
                  v-for="(number, idx) in aboutData.numbers"
                  :key="idx"
                >
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">{{ number.value }}</span>
                    </h3>
                    <h6>{{ number.title }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutData from "@/data/home1-light-about.json";
</script>
