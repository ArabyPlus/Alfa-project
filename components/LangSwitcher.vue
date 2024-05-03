<template>
  <div class="language-selector">
    <Icon name="ic:baseline-language" class="w-6 h-6 cursor-pointer" @click="showOptions = !showOptions" />
    <div v-if="showOptions" class="options-container">
      <div v-for="item in locales" :key="item" @click="selectLanguage(item)">
        <a href="" class="hover:bg-gray-400 block py-2 px-4 rounded">
          {{ item === 'ar-AR' ? 'العربية':'English' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { locale, setLocale } = useI18n();
const locales = [ 'ar-AR','en-US'];

const selectedLanguage = locale.value;
const showOptions = ref(false);

const selectLanguage = (language: string) => {
  setLocale(language);
  showOptions.value = false;
}
</script>

<style scoped>
.language-selector {
  position: relative;
}

.options-container {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  background-color: white;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.language-selector:hover .options-container {
  display: block;
}

.options-container div {
  cursor: pointer;
  padding: 0.25rem;
}

.options-container div:hover {
  background-color: #f0f0f0;
}
</style>