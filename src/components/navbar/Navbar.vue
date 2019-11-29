<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item is-uppercase"
        href="#"
      >
        {{ displayName }}
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mobile-menu"
        @click.prevent="toggleMenu"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="mobile-menu"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <a
          v-smooth-scroll
          class="navbar-item"
          href="#home"
        >
          Home
        </a>

        <a
          v-smooth-scroll
          class="navbar-item"
          href="#about"
        >
          About
        </a>

        <a
          v-smooth-scroll
          class="navbar-item"
          href="#experience"
        >
          Experience
        </a>

        <a
          v-smooth-scroll
          class="navbar-item"
          href="#services"
        >
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
            <a
              v-smooth-scroll
              class="button is-link is-rounded"
              href="#contact"
            >
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
  data() {
    return {
      userName: 'Jonathan Peraza Feliciano',
      isActive: false,
    };
  },
  computed: {
    displayName() {
      const lastWordIndex = this.userName.lastIndexOf(' ');
      return this.userName.substring(0, lastWordIndex);
    },
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped></style>
