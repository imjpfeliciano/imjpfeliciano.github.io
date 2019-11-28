<template>
  <div class="section">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          {{userName}}, {{currentYear}}
        </div>

        <div class="column">
          <span
            v-for="(socialItem, index) in socialMedia"
            :key="index"
          >
            <a :href="socialItem.url" target="_blank">
              <i :class="socialItem.icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userName: 'Jonathan Peraza Feliciano',
      socialMedia: [
        { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/jperazafeliciano' },
        { icon: 'fab fa-twitter', url: 'https://twitter.com/JonathanPerazaF' },
        { icon: 'fab fa-github', url: 'https://github.com/yoniihdc' },
        { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/jpfeliciano/' },
      ]
    }
  },
  computed: {
    currentYear: function() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  font-size: 24px;
  margin: 10px;
  margin-top: 0;
}
</style>