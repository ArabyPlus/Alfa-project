<template>
  <nav ref="navbar" class="navbar navbar-expand-lg">
    <div class="container">
      <!-- Logo -->
      <div class="flex align-items-center align-center gap-6">
        <NuxtLink to="/" class="w-[100px] md:w-[150px] md:ml-20">
          <img  ref="lr" src="/public/img/logoo-dark.png" alt="logo"
            v-if="showLogo !== false && !($colorMode.preference === 'light')" />
            <img v-else src="/public/img/logoo.png" alt="">

          <!-- <img  src="/public/img/logoo-dark.png" alt="logo" v-if="showDarkLogo && $colorMode.preference === 'light'" /> -->
        </NuxtLink>

      </div>
      <!-- LANG AND COLOR MODE -->
      <div class="flex gap-6  mx-auto items-center my-auto lg:hidden">
        <LangSwitcher class="font-bold" />
        <ColorMode />
      </div>
      <button @click="handleMobileDropdown" class="navbar-toggler " type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="icon-bar  z-10" style="color: #b19777">
          <i class="fas fa-bars z-10" style="color: #b19777"></i>
        </span>
      </button>

      <!-- navbar links -->
      <div class="collaps navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item">
            <NuxtLink class="nav-link " style="color: grey" to="/">{{
              $t("Home")
            }}</NuxtLink>
          </li>


          <li class="nav-item">
            <NuxtLink class="nav-link" style="color: grey" to="/our-projects">{{ $t('Projects') }}</NuxtLink>
          </li>
          <li class="nav-item relative services-selector">
            <NuxtLink class="nav-link " style="color: grey" to="/#services">{{ $t('Services') }}
              <Icon class="w-8 h-6 cursor-pointer" name="material-symbols:arrow-drop-down-rounded"  />
            </NuxtLink>
            <div  class="options-container text-center flex flex-col right-[35%] md:right-[44%] lg:right-[15%]">
                <nuxt-link class="mb-3 hover:bg-gray-400 rounded" to="/#services">{{ $t('Contracting') }}</nuxt-link>
                <nuxt-link class="mb-3 hover:bg-gray-400 rounded" to="/#01">{{ $t('Supplies') }}</nuxt-link>
                <nuxt-link class="mb-3 hover:bg-gray-400 rounded" to="/#02">{{ $t('Maintenance') }}</nuxt-link>
                <nuxt-link class="hover:bg-gray-400 rounded" to="/#03">{{ $t('Providing spare parts') }}</nuxt-link>
            </div>
            <!-- <div v-if="showOptions" class="options-container text-center ">
                <nuxt-link class="mb-3 hover:bg-gray-400 rounded" to="/#services">{{ $t('Contracting') }}</nuxt-link>
                <nuxt-link class="mb-3 hover:bg-gray-400 rounded" to="/#services">{{ $t('Supplies') }}</nuxt-link>
                <nuxt-link class="mb-3 hover:bg-gray-400 rounded" to="/#services">{{ $t('Maintenance') }}</nuxt-link>
                <nuxt-link class="hover:bg-gray-400 rounded" to="/#services">{{ $t('Providing spare parts') }}</nuxt-link>
            </div> -->
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" style="color: grey" to="/about">{{ $t('About') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" style="color: grey" href="/contact-us">{{ $t('Contact Us') }}</NuxtLink>
          </li>
        </ul>
      </div>



    </div>
    <!-- LANG AND COLOR MODE -->
    <div class="lg:flex gap-6 items-center mx-20  hidden">
      <LangSwitcher class="font-bold" />
      <ColorMode />
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

<style scoped>
.options-container {
    position: absolute;
    top: 65%;
    display: none;
    background-color: white;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .services-selector:hover .options-container {
    display: flex;
    flex-direction: column;
  }
  
  .options-container div {
    cursor: pointer;
    padding: 0.25rem;
  }
  
  .options-container div:hover {
    background-color: #f0f0f0;

  }
</style>