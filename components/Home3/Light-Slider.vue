<template>
  <section class="after-before section-padding">
    <div class="background bg-img parallaxie" data-overlay-dark="7"></div>
    <div class="container ontop">
      <div class="section-head text-center wow fadeInUp" data-wow-delay=".3s">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <h6 class="custom-font">Best Works</h6>
            <h4 class="playfont">Drag the Slider to See the Transformation One of the Interior</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="dotsbg wow fadeInUp" data-wow-delay=".3s">
            <ClientOnly>
              <ComparisonSlider afterLabel="After" beforeLabel="Before">
                <img slot="first" class="wow imago" src="/img/before.jpg" />
                <img slot="second" class="wow imago" src="/img/after.jpg" />
              </ComparisonSlider>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//= Scripts
import parallaxie from '@/common/parallaxie';

const ComparisonSlider = ref();

async function loadSlider() {
  const { ImgComparisonSlider } = await import('@img-comparison-slider/vue');
  ComparisonSlider.value = ImgComparisonSlider
}

onMounted(() => {
  parallaxie('.background.bg-img.parallaxie');
  loadSlider();
});
</script>
