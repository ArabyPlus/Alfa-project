<template>
  <section class="blog section-padding">
    <div class="container">
      <div class="section-head">
        <h3>News</h3>
      </div>
      <div class="row">
        <div class="col-lg-6" v-for="blog in blogs" :key="blog.id">
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div class="img">
              <img :src="blog.image" alt="">
            </div>
            <div class="cont">
              <div>
                <div class="info">
                  <a href="#0" class="date">
                    <span><i>{{ blog.date.day }}</i> {{ blog.date.month }}</span>
                  </a>
                  <span>/</span>
                  <a href="#0" class="tag">
                    <span>{{ blog.tag }}</span>
                  </a>
                </div>
                <h5>
                  <a href="#0">{{ blog.title }}</a>
                </h5>
                <div class="btn-more">
                  <a href="#0" class="simple-btn">Read More</a>
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
import blogs from "@/data/home2-news.json";
</script>
