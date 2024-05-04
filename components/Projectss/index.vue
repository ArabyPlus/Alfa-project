<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="secondary">
      <v-tab class="mx-auto" value="one">{{ $t('All Projects') }}</v-tab>
      <v-tab class="mx-auto" value="two">{{ $t('Mechanical Projects') }}</v-tab>
      <v-tab class="mx-auto" value="three">Item Three</v-tab>
      <v-tab class="mx-auto" value="four">Item Three</v-tab>
      <v-tab class="mx-auto" value="five">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <AllProjects />
        </v-tabs-window-item>
        <v-tabs-window-item value="two" id="tow">
          <MechanicalProjects />

        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Three
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>
<script setup>
import AllProjects from './AllProjects.vue';
import MechanicalProjects from './MechanicalProjects.vue';
import initIsotope from "@/common/initIsotope";

let tab = ref(null)

onMounted(() => {
  setTimeout(() => {
    if (window.Isotope) initIsotope();
  }, 0);
});
</script>