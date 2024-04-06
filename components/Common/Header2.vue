<template>
  <header
    class="pages-header bg-img valign parallaxie"
    :data-background="bg"
    data-overlay-dark="5"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="cont text-center">
            <h1>{{ title }}</h1>
            <div class="path">
              <div
                v-for="(path, i) in fullPath"
                :key="i"
                style="display: inline-block"
              >
                <span>/</span>
                <NuxtLink
                  :to="path.link"
                  :class="{ active: i === fullPath.length - 1 }"
                  >{{ path.title }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import parallaxie from "@/common/parallaxie";

const { bg, title, fullPath } = defineProps(["bg", "title", "fullPath"]);

onMounted(() => {
  parallaxie(".pages-header.bg-img.parallaxie");
});
</script>
