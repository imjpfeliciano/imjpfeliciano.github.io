<template>
  <div
    id="about"
    class="section"
  >
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          <figure class="image">
            <img :src="image">
          </figure>
        </div>
        <div class="column">
          <h1 class="title has-text-centered">
            About Me
          </h1>
          <h3 class="subtitle has-text-centered">
            {{ USER_INFO.title }}
          </h3>
          <p class="has-text-centered">
            {{ personalDescription }}
          </p>
          <p class="has-text-centered">
            {{ quote }}
          </p>
          <div class="field is-grouped is-grouped-centered">
            <a
              class="button is-rounded is-link"
              :href="paypalMeLink"
              target="_blank"
            >
              <span class="icon is-small">
                <i class="fab fa-paypal" />
              </span>
              <span>Support me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import USER_INFO from '../../config';
import Photo from '../../assets/images/coding-time.jpg';

export default {
  data() {
    return {
      USER_INFO,
      image: Photo,
      personalDescription:
        'Mexican Developer born and raised in Cancún, Q. Roo, enjoys to play videogames, used to play soccer pero me chingué la rodilla.',
      quote:
        'Enjoys solving logical and mathematical problems using algorithms and learning about new development technologies and frameworks I spend some time mentoring students for competitive programming contests such as Olimpiada Mexicana de Informática (OMI) and ACM-ICPC and currently I\'m a volunteer at the omegaUp platform which is an online judge for this kind of contests.',
      paypalMeLink: `https://www.paypal.me/${USER_INFO.social.paypal}`,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  transform: scaleX(-1);
  border-radius: 5px;
  opacity: 0.7;
}
</style>
