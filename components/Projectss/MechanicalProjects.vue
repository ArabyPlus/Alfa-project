<template>
    <Loading />
    <section class="portfolio section-padding">
        <div class="container-fluid">
            <div class="container">

            </div>
            <div class="row">
                <!-- filter links -->
                <div class="filtering text-center col-12 wow fadeInUp" data-wow-delay=".3s">
                    <div class="filter bg-img bg-repeat">
                        <span v-for="(filter, idx) in works.filters" :key="idx" :data-filter="filter.operator"
                            :class="{ active: idx === 0 }">
                            {{ filter.name }}
                        </span>
                    </div>
                </div>
                <!-- gallery -->
                <!-- IF LANGUAGE IS ARABIC -->
                <div class="gallery twsty full-width" v-show="$i18n.locale == 'ar-AR'">
                    <!-- gallery item -->
                    <div v-for="item in filteredItemsArabic" :key="item.id" class="items mt-50">
                        <div :id="item.id" class="item-img bg-img wow imago rounded"
                            data-background="/img/portfolio/mas/01.jpg"
                            :style="{ 'background-image': 'url(' + item.image + ')' }">
                            <NuxtLink :to="item.id">
                                <div class="item-img-overlay"></div>
                            </NuxtLink>
                        </div>
                        <div class="info mt-10 text-center mb-10 md:h-[400px]">
                            <h5>{{ item.title }}</h5>
                            <h1 v-if="item.state_date">State Date : {{ item.state_date }}</h1>
                            <h1 v-if="item.owner">Owner : {{ item.owner }}</h1>
                            <h1 v-if="item.main_contractor">Main Contractor : {{ item.main_contractor }}</h1>
                            <h5 class="mt-2" v-if="item.scoup1">Scoup Of item :</h5>
                            <h1>{{ item.scoup1 }}</h1>
                            <h1>{{ item.scoup2 }}</h1>
                            <h1 v-if="item.scoup3">{{ item.scoup3 }}</h1>
                            <h1 v-if="item.scoup4">{{ item.scoup4 }}</h1>
                            <h5 class="mt-2">Contract Price : {{ item.contract }} million</h5>
                            <h1 class="mt-2">{{ item.hint }}</h1>
                        </div>
                    </div>
                    <!-- IF LANGUAGE IS ENGLISH -->


                </div>

                <!-- =============================== -->
                <!-- IF LANGUAGE IS ENGLISH -->
                <div class="gallery twsty full-width" v-show="$i18n.locale == 'en-US'">
                    <!-- gallery item -->


                    <div v-for="item in filteredItemsEnglish" :key="item.id" class="items mt-50">
                        <div :id="item.id" class="item-img bg-img wow imago rounded"
                            data-background="/img/portfolio/mas/01.jpg"
                            :style="{ 'background-image': 'url(' + item.image + ')' }">
                            <NuxtLink :to="item.id">
                                <div class="item-img-overlay"></div>
                            </NuxtLink>
                        </div>
                        <div class="info mt-10 text-center mb-10 md:h-[400px]">
                            <h5>{{ item.title }}</h5>
                            <h1 v-if="item.state_date">State Date : {{ item.state_date }}</h1>
                            <h1 v-if="item.owner">Owner : {{ item.owner }}</h1>
                            <h1 v-if="item.main_contractor">Main Contractor : {{ item.main_contractor }}</h1>
                            <h5 class="mt-2" v-if="item.scoup1">Scoup Of item :</h5>
                            <h1>{{ item.scoup1 }}</h1>
                            <h1>{{ item.scoup2 }}</h1>
                            <h1 v-if="item.scoup3">{{ item.scoup3 }}</h1>
                            <h1 v-if="item.scoup4">{{ item.scoup4 }}</h1>
                            <h5 class="mt-2">Contract Price : {{ item.contract }} million</h5>
                            <h1 class="mt-2">{{ item.hint }}</h1>
                        </div>
                    </div>
                    <!-- IF LANGUAGE IS ENGLISH -->


                </div>
            </div>
        </div>
    </section>
</template>

<script setup>import works from "@/data/home1-light-all-works.json";
import workss from "@/data/home1-light-all-works-arabic.json";
const filteredItemsEnglish = works.works.filter(item => {
    return (
        item.scoup1?.includes('MECHANICAL') ||
        item.scoup2?.includes('MECHANICAL') ||
        item.scoup3?.includes('MECHANICAL') ||
        item.scoup4?.includes('MECHANICAL')
    );
});


const filteredItemsArabic = workss.workss.filter(item => {
    return (
        item.scoup1?.includes('ميكانيكية') ||
        item.scoup2?.includes('ميكانيكية') ||
        item.scoup3?.includes('ميكانيكية') ||
        item.scoup4?.includes('ميكانيكية')
    );
});

import initIsotope from "@/common/initIsotope";
onMounted(() => {
  setTimeout(() => {
    if (window.Isotope) initIsotope();
  }, 0);
});

</script>