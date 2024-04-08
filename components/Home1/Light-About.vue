<template>
  <section class="about section-padding" id="about">
    <div class="container">
      <div class="row">
        <div class=" w-100">
          <div class="exp-content wow fadeInUp text-center" data-wow-delay=".3s">
            <h6 class="sub-title">{{ $t('Some Numbers Of Our Company') }}</h6>
            
            <div class="numbers mt-50 w-100">
              <div class="row">
                <div
                  class=" flex flex-col md:flex-row justify-around text-center w-100"
                >
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">250+</span>
                    </h3>
                    <h6>{{ $t('Happy Customers') }}</h6>
                    
                  </div>
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">6000+</span>
                    </h3>
                    <h6>{{ $t('Completed Projects') }}</h6>
                    
                  </div>
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">1.1K+</span>
                    </h3>
                    <h6>{{ $t('Available Resources') }}</h6>
                    
                  </div>
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">11K+</span>
                    </h3>
                    <h6>{{ $t('Subscribers') }}</h6>
                    
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
