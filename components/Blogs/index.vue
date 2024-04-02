<template>
  <section class="blog-pg section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="posts">
            <div :class="`item ${idx !== BlogsData.length - 1 ? 'mb-80' : ''}`" v-for="blog, idx in BlogsData" :key="idx">
              <div class="img">
                <NuxtLink to="/blog-details">
                  <img :src="blog.image" alt="" class="thumparallax">
                </NuxtLink>
              </div>
              <div class="content">
                <div class="date">
                  <h5>
                    <a href="#0">
                      <span class="num">{{ blog.date.day }}</span>
                      <span>{{ blog.date.month }} {{ blog.date.year }}</span>
                    </a>
                  </h5>
                </div>
                <div class="cont">
                  <div class="tags">
                    <a href="#0" v-for="tag, i in blog.tags" :key="i">{{ tag }}</a>
                  </div>
                  <h4 class="title">
                    <NuxtLink to="/blog-details">{{ blog.title }}</NuxtLink>
                  </h4>
                  <p>
                    {{ blog.description }}
                  </p>
                  <NuxtLink to="/blog-details" class="more">Read More</NuxtLink>
                </div>
              </div>
            </div>

            <div class="pagination">
              <span class="active">
                <a href="#0">1</a>
              </span>
              <span>
                <a href="#0">2</a>
              </span>
              <span>
                <a href="#0"><i class="fas fa-angle-right"></i></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import thumparallaxUp from "@/common/thumparallaxUp";
import BlogsData from "@/data/blogs.json";

onMounted(() => {
  thumparallaxUp();
});
</script>
