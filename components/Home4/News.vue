<template>
  <section class="blog-grid section-padding">
    <div class="container">
      <div class="main-header text-center">
        <h3>Latest News.</h3>
        <div class="tex-bg">Blog</div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="blog, idx in blogs" :key="blog.id">
          <div
            :class="`item bg-img ${idx !== blogs.length - 1 ? 'md-mb50' : ''} ${idx === 1 ? 'active' : ''} wow fadeInUp`"
            data-wow-delay=".3s" :style="`background-image: url('${blog.image}')`">
            <div class="cont">
              <a href="#0" class="date">
                <span><i>{{ blog.date.day }}</i> {{ blog.date.month }}</span>
              </a>
              <div class="info">
                <a href="#0" class="author">
                  <span>{{ blog.author }}</span>
                </a>
                <a href="#0" class="tag">
                  <span>{{ blog.tag }}</span>
                </a>
              </div>
              <h6>
                <a href="#0">{{ blog.title }}</a>
              </h6>
              <div class="btn-more">
                <a href="#0" class="simple-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import blogs from "@/data/home4-news.json";
</script>
