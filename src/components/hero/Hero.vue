<template>
  <section
    id="home"
    class="hero is-primary-color is-fullheight"
    :style="{
      backgroundImage: `
      linear-gradient(#3f51b5, rgba(63, 81, 181, 0.35)),
      url(${bgImage})
    `
    }"
  >
    <div class="hero-body">
      <div class="container">
        <p class="title has-text-centered">
          {{ userName }}
        </p>
        <p class="subtitle has-text-centered">
          {{ description }}
        </p>
        <div class="field is-grouped is-grouped-centered">
          <div class="buttons">
            <a
              class="button is-rounded is-link"
              :href="resumeLink"
              download="jpf_resume"
            >
              <span class="icon is-small">
                <i class="fas fa-file-download" />
              </span>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroBackground from '../../assets/images/image.png';
import CVFile from '../../assets/docs/EN_resume_cv.pdf';

export default {
  data() {
    return {
      userName: 'Jonathan Peraza Feliciano',
      description:
        'Full-Stack Software Engineer with experience for over 6 years. My expertise is to create and design Websites, Apps, Templates and more ...',
      bgImage: HeroBackground,
      resumeLink: CVFile,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .hero-body {
    align-items: flex-end;
  }
}
</style>
