<template>
  <div class="section" id="about">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          <figure class="image">
            <img :src="image"/>
          </figure>
        </div>
        <div class="column">
          <h1 class="title has-text-centered">About Me</h1>
          <h3 class="subtitle has-text-centered">{{title}}</h3>
          <p class="has-text-centered">
            {{personalDescription}}
          </p>
          <p class="has-text-centered">
            {{quote}}
          </p>
          <div class="field is-grouped is-grouped-centered">
            <a class="button is-rounded is-link" :href="paypalMeLink" target="_blank">
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
import Photo from '../../assets/images/coding-time.jpg'

export default {
  data: function() {
    return {
      image: Photo,
      title: 'Full-Stack Software Engineer',
      userName: 'Jonathan Peraza Feliciano',
      personalDescription: 'Mexican Developer born and raised in Cancún, Q. Roo, enjoys to play videogames, used to play soccer pero me chingué la rodilla.',
      linkedin: 'jpfeliciano',
      github: 'yoniihdc',
      quote: 'Enjoys solving logical and mathematical problems using algorithms and learning about new development technologies and frameworks I spend some time mentoring students for competitive programming contests such as Olimpiada Mexicana de Informática (OMI) and ACM-ICPC and currently I\'m a volunteer at the omegaUp platform which is an online judge for this kind of contests.',
      year: 1991,
      paypalMeLink: 'https://www.paypal.me/JPerazaFeliciano',
    }
  },
  computed: {
    age: function() {
      const currentYear = new Date().getFullYear()
      return currentYear - this.year
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  transform: scaleX(-1);
  border-radius: 5px;
  opacity: 0.7;
}
</style>