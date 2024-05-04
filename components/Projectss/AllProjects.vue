<template>
    <Loading />
    <section class="portfolio section-padding" id="portfolio">
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
                <div class="gallery twsty full-width" style="direction: rtl;" v-show="$i18n.locale == 'ar-AR'">
                    <!-- gallery item -->

                    <div :id="work.id" :class="`items ${work.filter}  wow fadeInUp`" data-wow-delay=".3s"
                        v-for="(work, idx) in workss.workss" :key="idx">
                        <div class="item-img bg-img wow imago rounded" data-background="/img/portfolio/mas/01.jpg"
                            :style="`background-image:url('${work.image}')`">
                            <NuxtLink :to="work.id">
                                <div class="item-img-overlay"></div>
                            </NuxtLink>
                        </div>
                        <div class="info mt-10 text-center mb-10 md:h-[400px]">
                            <h5>{{ work.title }}</h5>
                            <h1 v-if="work.state_date">تاريخ البدء : {{ work.state_date }}</h1>
                            <h1 v-if="work.owner">المالك : {{ work.owner }}</h1>
                            <h1 v-if="work.main_contractor">المقاول الرئيسي : {{ work.main_contractor }}</h1>
                            <h5 class="mt-2" v-if="work.scoup1">نطاق العمل :</h5>
                            <h1>{{ work.scoup1 }}</h1>
                            <h1>{{ work.scoup2 }}</h1>
                            <h1 v-if="work.scoup3">{{ work.scoup3 }}</h1>
                            <h1 v-if="work.scoup4">{{ work.scoup4 }}</h1>
                            <h5 class="mt-2">سعر العقد : {{ work.contract }} مليون</h5>
                            <h1 class="mt-2">{{ work.hint }}</h1>
                        </div>
                    </div>
                    <!-- IF LANGUAGE IS ARABIC -->

                    <!-- =============================== -->

                </div>

                <!-- =============================== -->
                <!-- IF LANGUAGE IS ENGLISH -->
                <div class="gallery twsty full-width" v-show="$i18n.locale == 'en-US'">
                    <!-- gallery item -->


                    <div :id="work.id" :class="`items ${work.filter} mt-50 wow fadeInUp`" data-wow-delay=".3s"
                        v-for="(work, idx) in works.works" :key="idx" v-show="$i18n.locale == 'en-US'">
                        <div class="item-img bg-img wow imago rounded" data-background="/img/portfolio/mas/01.jpg"
                            :style="`background-image:url('${work.image}')`">
                            <NuxtLink :to="work.id">
                                <div class="item-img-overlay"></div>
                            </NuxtLink>
                        </div>
                        <div class="info mt-10 text-center mb-10 md:h-[400px]">
                            <h5>{{ work.title }}</h5>
                            <h1 v-if="work.state_date">State Date : {{ work.state_date }}</h1>
                            <h1 v-if="work.owner">Owner : {{ work.owner }}</h1>
                            <h1 v-if="work.main_contractor">Main Contractor : {{ work.main_contractor }}</h1>
                            <h5 class="mt-2" v-if="work.scoup1">Scoup Of Work :</h5>
                            <h1>{{ work.scoup1 }}</h1>
                            <h1>{{ work.scoup2 }}</h1>
                            <h1 v-if="work.scoup3">{{ work.scoup3 }}</h1>
                            <h1 v-if="work.scoup4">{{ work.scoup4 }}</h1>
                            <h5 class="mt-2">Contract Price : {{ work.contract }} million</h5>
                            <h1 class="mt-2">{{ work.hint }}</h1>
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
</script>