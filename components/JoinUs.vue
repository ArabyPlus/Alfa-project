<template>
    <div class="bg-grey-lighten-1 py-20 px-10 flex flex-col md:flex-row justify-between items-center text-start" v-if="$i18n.locale == 'en-US'">
        <div>
            <h1 class="text-black font-bold text-3xl">{{ $t('Join our team') }}</h1>
            <p class="text-black">{{ $t('join our team now, you can join by clicking on join button') }}
            </p>
        </div>
        <NuxtLink to="contact-us"><v-btn color="grey-darken-1" size="xl" class="px-6 text-center items-center my-auto">{{ $t('Join Now') }}</v-btn></NuxtLink>
    </div>

    <!-- IF ARABIC -->
    <div class="bg-grey-lighten-1 py-20 px-10 flex flex-col md:flex-row justify-between items-center text-start" style="direction: rtl;" v-if="$i18n.locale == 'ar-AR'">
        <div>
            <h1 class="text-black font-bold text-3xl">{{ $t('Join our team') }}</h1>
            <p class="text-black">{{ $t('join our team now, you can join by clicking on join button') }}
            </p>
        </div>
        <NuxtLink to="contact-us"><v-btn color="grey-darken-1" size="xl" class="px-6 text-center items-center my-auto">{{ $t('Join Now') }}</v-btn></NuxtLink>
    </div>
</template>