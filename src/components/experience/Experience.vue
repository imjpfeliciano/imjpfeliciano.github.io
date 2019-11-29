<template>
  <div class="section" id="experience">
    <div class="container">
      <div class="title has-text-centered">Experience</div>
      <div class="columns is-desktop">
        <div class="column">
          <p class="subtitle is-uppercase has-text-link">
            Having 6 years experience
          </p>
          <p class="subtitle">
            <b
              >Working with different
              <span class="has-text-link">companies</span> and
              <span class="has-text-link">technologies</span>.</b
            >
          </p>

          <p class="has-text-left">
            Started as a competitive programmer on 2009, I’m focused on
            improving my technical skills. I had the opportunity to start my
            career as Software Engineer with web technologies such as Javascript
            and Bash scripting, as well as languages like C++ and Python.
          </p>

          <p class="has-text-left">
            Currently my main technologies are Javascript based, but I can
            easily adapt to any kind of programming languages or projects.
          </p>
        </div>

        <div class="column">
          <div class="columns is-multiline">
            <div
              class="column is-half"
              v-for="(company, index) in companies"
              :key="index"
            >
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-96x96">
                        <img class="is-rounded" :src="company.logo" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-5 has-text-centered">
                        {{ company.name }}
                      </p>
                      <p class="subtitle is-6 has-text-centered">
                        {{ company.period }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WizelineLogo from "../../assets/images/companies/wizeline-round-logo.png";
import SalesupLogo from "../../assets/images/companies/salesup-logo.png";
import PricetravelLogo from "../../assets/images/companies/pricetravel-logo.jpg";
import TuricunLogo from "../../assets/images/companies/turicun-logo.gif";

export default {
  data: function() {
    return {
      companies: [
        { logo: WizelineLogo, name: "WIZELINE", period: "2017 - Present" },
        { logo: SalesupLogo, name: "SalesUp!", period: "2016 - 2017" },
        { logo: PricetravelLogo, name: "PriceTravel Holding", period: "2015" },
        { logo: TuricunLogo, name: "Turicun", period: "2011" }
      ]
    };
  }
};
</script>

<style scoped></style>
