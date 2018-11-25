<template>
  <div class="hero-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-11 col-md-9">
          <div class="hero-inner">
            <h1 class="hero-title mb-3 text-light text-center">Discover upcoming digital marketing tools</h1>
            <span class="hero-slogan opacity-80 d-block text-light text-center">Digitool is the curated place for online marketing enthusiasts who are looking for the latest digital marketing tools.</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero-container {
  background: url('../static/hero-bg.svg');
  background-color: #3653f4;
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
  }
}
</style>
