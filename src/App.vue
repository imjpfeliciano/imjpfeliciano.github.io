<template>
  <div id="app">
    <navbar />
    <hero />
    <about />
    <experience />
    <services />
    <contact-form />
    <copy-footer />
  </div>
</template>

<script>
import Navbar from './features/navbar/Navbar';
import Hero from './features/hero/Hero';
import About from './features/about/About';
import Experience from './features/experience/Experience';
import Services from './features/services/Services';
import ContactForm from './features/contactForm/ContactForm';
import CopyFooter from './features/footer/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Experience,
    Services,
    ContactForm,
    CopyFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
.card {
  border-radius: 5px;
}

.select {
  width: 100%;

  select {
    width: 100%;
  }
}

.is-primary-color {
  background-color: #1a4ea3 !important;

  .title,
  .subtitle {
    color: white !important;
  }
}

p {
  padding-bottom: 10px;
}
</style>
