<template>
  <section class="blog-grid section-padding mb-50">
    <div class="container">
      <div class="section-head text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <h4 class="playfont wow flipInX" data-wow-delay=".5s">{{ $t('Our Journey') }}</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3" v-for="blog, idx in blogs" :key="idx">
          <div :class="`item wow fadeInUp ${idx !== blogs.length - 1 ? 'md-mb50' : ''}`" data-wow-delay=".3s">
            <div class="post-img">
              <div class="img ">
                <img class="h-60" :src="blog.image" alt="">
              </div>
            </div>
            <div class="bg-grey-lighten-1 py-2 px-2 rounded">
              <div class="text-grey-darken-2 mt-1 ">
                <NuxtLink to="#0">{{ blog.date }}</NuxtLink>
              </div>
              <h5 class="playfont h-20">
                <NuxtLink to="#0">{{ blog.title }}</NuxtLink>
                <NuxtLink to="#0" class="text-sm" style="direction: rtl;">{{ blog.titleAr }}</NuxtLink>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import blogs from '@/data/home1-light-news.json';
</script>
