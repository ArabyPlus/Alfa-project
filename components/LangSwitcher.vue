<template>
    <div>

        <div class="language-icons">
            <span class="flex " v-for="item in locales" :key="typeof item === 'object' ? item.code : item"
                @click="setLanguage(typeof item === 'object' ? item.code : item)">
                <a href="" class="hover:text-blue-600 text-blue-700" v-if="item === 'ar-AR'" >ع</a>
                <a href="" class="hover:text-blue-600 text-blue-700 " v-if="item === 'en-US'">EN </a>
                <a href="" v-if="item === 'en-US'" class="mx-2 text-blue-700">/</a>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale, setLocale } = useI18n();
const locales = ['en-US', 'ar-AR'];

const setLanguage = (language: string) => {
    setLocale(language);
}
</script>

<style scoped>
.language-icons {
    display: flex;
}

.language-icons span {
    cursor: pointer;
}
</style>