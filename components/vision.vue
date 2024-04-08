<template>
  <section class="about section-padding text-center" >
    <div class="container" >
      <div class="row"  >
        <div class="col-lg-5 flex text-center align-items-center" >
          <div class="exp-img wow fadeInUp w-100" data-wow-delay=".3s">
            <img src="/public/img/line-pattern-color.png" alt="" />
          </div>
        </div>
        <div class="col-lg-7 valign flex flex-col gap-4" :class="$i18n.locale == 'ar-AR' ? 'rtl-dir' : ''" >
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s" >
            <h6 class="sub-title">{{ $t("About Us") }}</h6>
            <p>
              {{ $t("about_text") }}
            </p>
          </div>
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s">
            <h6 class="sub-title">{{ $t("Our Vision") }}</h6>
            <p>
              {{ $t("vision_text") }}
            </p>
          </div>
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s" >
            <h6 class="sub-title">{{ $t("Our Message") }}</h6>
            <p>
              {{ $t("msg_text") }}
            </p>
          </div>
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s">
            <h6 class="sub-title">{{ $t('Efficiency') }}</h6>
            <p>
              {{ $t('efficiency_text') }}
            </p>
          </div>
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s">
            <h6 class="sub-title">{{ $t('Quality') }}</h6>
            <p>
              {{ $t('quality_text') }}
            </p>
          </div>
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s">
            <h6 class="sub-title">{{ $t('Readiness') }}</h6>
            <p>
              {{ $t('readiness_text') }}
            </p>
          </div>
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s">
            <h6 class="sub-title">{{ $t('Values And Principles') }}</h6>
            <p>
             {{ $t('values_text') }}
            </p>
          </div>
          <div class="exp-content wow fadeInUp w-100" data-wow-delay=".3s">
            <h6 class="sub-title">{{ $t('Our Goal') }}</h6>
            <p>
              {{ $t('goal_text') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.rtl-dir{
  direction: rtl;
}
</style>