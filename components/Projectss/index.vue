<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="secondary">
      <v-tab class="mx-auto" value="one">{{ $t('All Projects') }}</v-tab>
      <v-tab class="mx-auto" value="two">{{ $t('Mechanical Projects') }}</v-tab>
      <v-tab class="mx-auto" value="three">{{ $t('Firefighting Projects') }}</v-tab>
      <v-tab class="mx-auto" value="four">{{ $t('HVAC Projects') }}</v-tab>
      <v-tab class="mx-auto" value="five">{{ $t('INFRA Projects') }}</v-tab>
    </v-tabs>

    <v-card-text  class="tabs-card">
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <AllProjects />
        </v-tabs-window-item>
        <v-tabs-window-item value="two" id="tow">
          <MechanicalProjects />

        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <FireFighting />
        </v-tabs-window-item>
        <v-tabs-window-item value="four">
          <HVAC />
        </v-tabs-window-item>
        <v-tabs-window-item value="five">
          <INFRA />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>
<script setup>
import AllProjects from './AllProjects.vue';
import MechanicalProjects from './MechanicalProjects.vue';
import FireFighting from './FireFighting.vue';
import HVAC from './HVAC.vue';
import INFRA from './INFRA.vue';
import initIsotope from "@/common/initIsotope";

let tab = ref(null)

onMounted(() => {
  setTimeout(() => {
    if (window.Isotope) initIsotope();
  }, 0);
});
</script>