<template>
  <div class="dark-green">
    <CommonMouseCursor />
    <CommonScrollToTop />
    <slot />
  </div>
</template>

<script setup>
onMounted(() => {
  if (typeof WOW !== 'undefined') new WOW().init();
  if (typeof Splitting !== 'undefined') Splitting({ target: "[data-splitting]" });
});

useHead({
  link: [
    { rel: "stylesheet", href: "/assets/css/style.css" },
    { rel: "stylesheet", href: "/assets/css/skin-green.css" }
  ],
});
</script>