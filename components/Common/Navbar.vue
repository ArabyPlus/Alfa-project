<template>
  <nav ref="navbar" class="navbar navbar-expand-lg">
    <div class="container">
      <!-- Logo -->
      <a href="/" class="logo">
        <img
          ref="lr"
          src="/img/logo.png"
          alt="logo"
          v-if="showLogo !== false && !(showDarkLogo && theme === 'light')"
        />
        <img
          src="/img/logo.png"
          alt="logo"
          v-if="showDarkLogo && theme === 'light'"
        />
      </a>

      <button
        @click="handleMobileDropdown"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <!-- navbar links -->
      <div class="collaps navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" style="color: grey" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" style="color: grey" to="/#about">About</NuxtLink>
          </li>

          <li class="nav-item">
            <a class="nav-link" style="color: grey" href="/#blogs">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: grey" href="/our-projects"
              >Our Projects</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: grey" href="/contact-us"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
//= Scripts
import getSiblings from "@/common/getSiblings";

const { lr, theme, nr, showLogo } = defineProps([
  "lr",
  "theme",
  "nr",
  "showLogo",
]);

const showDarkLogo = ref(false);

function handleDropdown(e) {
  getSiblings(e.target.parentElement)
    .filter((item) => item.classList.contains("show"))
    .map((item) => {
      item.classList.remove("show");
      if (item.childNodes[0]) {
        item.childNodes[0].setAttribute("aria-expanded", false);
      }
      if (item.childNodes[1]) {
        item.childNodes[1].classList.remove("show");
      }
    });

  e.target.setAttribute("aria-expanded", true);

  if (e.target.parentElement) {
    e.target.parentElement.classList.toggle("show");
    let dropdownMenu = e.target.parentElement.childNodes[1];
    if (dropdownMenu) {
      dropdownMenu.classList.toggle("show");
    }
  }
}

function handleMobileDropdown(e) {
  document
    .getElementById("navbarSupportedContent")
    .classList.toggle("show-with-trans");
}

const navbar = ref();

function handleScroll() {
  if (window.scrollY > 300) {
    navbar.value.classList.add("nav-scroll");
    showDarkLogo.value = true;
  } else {
    showDarkLogo.value = false;
    navbar.value.classList.remove("nav-scroll");
  }
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
