<template>
  <section class="contact">
    <ContactInfo :info="contactData" />
    <div class="container-fluid">
      <div class="row">
        <ContactMap :map="contactData.map" />
        <div class="col-lg-6 form">
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
