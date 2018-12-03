<template>
  <div class="hero-container mb-4">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-11 col-md-9">
          <div class="hero-inner text-center">
            <h1 class="hero-title mb-3 text-light text-center">Discover powerful digital marketing tools.</h1>
            <span class="hero-slogan opacity-80 d-block text-light text-center">Digitool is the curated place for digital marketing enthusiasts who are looking for powerful tools to work smarter and more efficient.</span>
            <router-link class="hero-button d-inline-block mt-3" to="/about-us">About us</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { PlusIcon } from 'vue-feather-icons'

export default {
  components: {
    PlusIcon
  }
}
</script>

<style lang="scss" scoped>
.hero-container {
  background: url('../static/hero-bg.svg');
  background-color: $primary-color;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 250px;

  .hero-inner {
    padding: 125px 0 250px;

    .hero-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-weight: 700;
      font-size: 2.25rem;
    }

    .hero-slogan {
      opacity: 0.8;
      font-size: 1.1rem;
    }

    .hero-button {
      padding: 0.75rem 1rem;
      opacity: 0.5;
      transition: opacity 200ms ease;
      font-size: 1rem;
      color: #FFF;
      vertical-align: bottom;
      line-height: 1;
      font-weight: 700;

      .hero-button-text {
        margin-right: 0.1rem;
      }

      &:hover {
        background: #F79824;
        color: #FFF;
        opacity: 1;
        text-decoration: none;
        box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
      }
    }
  }
}
</style>
