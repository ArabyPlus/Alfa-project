<template>
  <div class="info pt-80 pb-80 text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item">
            <span class="icon pe-7s-phone"></span>
            <div class="cont">
              <h6 class="custom-font">{{ $t('Call Us') }}</h6>
              <p>022 326 20 84</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <span class="icon pe-7s-mail-open"></span>
            <div class="cont">
              <h6 class="custom-font">{{ $t('Email Us') }}</h6>
              <p>info@alfaamep.com</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <span class="icon pe-7s-map"></span>
            <div class="cont">
              <h6 class="custom-font">{{ $t('Address') }}</h6>
              <p > {{ $t('EL-Waha , Nasrcity , Alkhamseen st Building 15, blok 14') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { info } = defineProps(["info"]);
</script>
