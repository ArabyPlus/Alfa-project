<template>
  <section class="contact">

    <ContactInfo :info="contactData" />
    <div class="container-fluid">
      <div class="row">
        <ContactMap :map="contactData.map" />
        <div class="col-lg-6 form">
          <div class="mx-auto text-center mb-10">
            <h1 class="mb-4 text-4xl font-bold">{{ $t('Get In Touch') }}</h1>
            <h1>{{ $t('Stay in contact with us') }}</h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactInfo from './Info.vue';
import ContactMap from './Map.vue';
import ContactForm from './Form.vue';
//= Static Data
import contactData from "@/data/contact.json";
</script>
