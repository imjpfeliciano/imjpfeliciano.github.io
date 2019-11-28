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
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import ContactForm from './components/contactForm/ContactForm'
import CopyFooter from './components/footer/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Hero,
    About,
    Experience,
    Services,
    ContactForm,
    CopyFooter,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
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
  
  .title, .subtitle {
    color: white !important;
  }
}

p {
  padding-bottom: 10px;
}
</style>