<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-map-marker"></span>
                <div class="cont">
                  <h6>Address</h6>
                  <p>EL-Waha , Nasrcity , Alkhamseen st Building 15, blok 14</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>Email Us</h6>
                  <p>info@alfaamep.com</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-call"></span>
                <div class="cont">
                  <h6>Call Us</h6>
                  <p>022 326 20 84</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>From Our Projects</h5>
            </div>
            <ul>
              <li
                v-for="item in works.works"
                :key="item.id"
                class="cursor-pointer"
                @click="navigation"
              >
                <div class="img">
                  <img :src="item.image" alt="" />
                </div>
                <div class="sm-post">
                  <p>{{ item.title }}</p>
                  <span class="date">{{ item.state_date }}</span>
                </div>
              </li>
              <li>
                <div class="subscribe">
                  <input type="text" placeholder="Type Your Email" />
                  <span class="subs pe-7s-paper-plane"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="logo">
              <img src="/img/logo.png" alt="" />
            </div>
            <div class="social">
              <NuxtLink to="#0"><i class="fab fa-facebook-f"></i></NuxtLink>
              <NuxtLink to="#0"
                ><i class="fa-brands fa-x-twitter"></i
              ></NuxtLink>
              <NuxtLink to="#0"><i class="fa-brands fa-tiktok"></i></NuxtLink>
              <NuxtLink to="#0"><i class="fab fa-instagram"></i></NuxtLink>
              <NuxtLink to="#0"><i class="fab fa-youtube"></i></NuxtLink>
            </div>
            <div class="copy-right">
              <p>
                {{ appData.footerText }}
                <a href="#0">{{ appData.themeAuthor }}</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import appData from "@/data/app.json";
import works from "@/data/footer-works.json";

const navigation = () => {
  navigateTo("/our-projects");
};
</script>
