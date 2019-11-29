<template>
  <div class="section">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          {{ USER_INFO.name }}, {{ currentYear }}
        </div>

        <div class="column">
          <span
            v-for="(socialItem, index) in socialMedia"
            :key="index"
          >
            <a
              :href="socialItem.url"
              target="_blank"
            >
              <i :class="socialItem.icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import USER_INFO from '../../config';

export default {
  data() {
    return {
      USER_INFO,
      socialMedia: [
        {
          icon: 'fab fa-facebook-f',
          url: `https://www.facebook.com/${USER_INFO.social.facebook}`,
        },
        {
          icon: 'fab fa-twitter',
          url: `https://twitter.com/${USER_INFO.social.twitter}`,
        },
        {
          icon: 'fab fa-github',
          url: `https://github.com/${USER_INFO.social.github}`,
        },
        {
          icon: 'fab fa-linkedin-in',
          url: `https://www.linkedin.com/in/${USER_INFO.social.linkedin}`,
        },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  font-size: 24px;
  margin: 10px;
  margin-top: 0;
}
</style>
