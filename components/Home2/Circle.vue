<template>
  <section class="skills-circle pt-50 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div>
            <div class="row">
              <div class="col-md-6">
                <div class="item fadeInLeft sm-mb50">
                  <div class="skill">
                    <CircleProgress :percent="90" fill-color="#d3ed34"
                      :empty-color="theme == 'dark' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'" :border-width="2"
                      :border-bg-width="2" :size="110" :show-percent="true" unit="%" />
                  </div>
                  <div class="cont">
                    <span>Project</span>
                    <h6>Consulting</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item fadeInLeft">
                  <div class="skill">
                    <CircleProgress :percent="75" fill-color="#d3ed34"
                      :empty-color="theme == 'dark' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'" :border-width="2"
                      :border-bg-width="2" :size="110" :show-percent="true" unit="%" />
                  </div>
                  <div class="cont">
                    <span>App</span>
                    <h6>Development</h6>
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
import CircleProgress from "vue3-circle-progress";

const { theme } = defineProps(['theme']);

onMounted(() => {
  setTimeout(() => {
    let ProgressLegends = Object.values(document.querySelectorAll('.current-counter'));
    ProgressLegends.forEach(element => {
      element.classList.add('custom-font');
      element.innerHTML += '%';
    });
  }, 0);
});
</script>
