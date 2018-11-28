<template>
  <b-navbar
    class="sticky-top"
    toggleable="md"
    type="light">

    <b-link class="navbar-brand" to="/" title="Digitool.io - back to home">
      <img src="@/static/digitool-logo.svg" alt="Digitool.io" />
    </b-link>

    <b-navbar-toggle target="nav_collapse" class="custom-toggler">
    </b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="primary-nav" href="https://digitool.typeform.com/to/PokM6C" target="_window">
          Submit tool
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>

export default {
  name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.navbar {
  background-color: #FFF;
  box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.05);
  padding: 0.75rem 1rem;

  .navbar-toggler {
    border: 0;
  }

  .primary-nav a {
    background-color: $support-color;
    font-family: $font-family;
    font-size: 0.9rem;
    font-weight: 600;
    color: #FFF;
    padding: 0.35em 0.75rem;
    transition: box-shadow 150ms ease, background-color 150ms ease;
    border-radius: 0.2rem;

    &:hover {
      box-shadow: $box-shadow;
      color: #FFF;
      background-color: $primary-color;
    }
  }
}
</style>

