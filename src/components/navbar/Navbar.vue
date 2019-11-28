<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-uppercase" href="#">
        {{displayName}}
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mobile-menu"
        @click.prevent="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mobile-menu" class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start">
        <a class="navbar-item" href="#home" v-smooth-scroll>
          Home
        </a>

        <a class="navbar-item" href="#about" v-smooth-scroll>
          About
        </a>

        <a class="navbar-item" href="#experience" v-smooth-scroll>
          Experience
        </a>

        <a class="navbar-item" href="#services" v-smooth-scroll>
          Services
        </a>

        <!-- TODO: Add portfolio section -->
        <!-- <a class="navbar-item">
          Portfolio
        </a> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-link is-rounded" href="#contact" v-smooth-scroll>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      userName: 'Jonathan Peraza Feliciano',
      isActive: false,
    }
  },
  computed: {
    displayName: function() {
      const lastWordIndex = this.userName.lastIndexOf(' ')
      return this.userName.substring(0, lastWordIndex)
    }
  },
  methods: {
    toggleMenu: function() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

