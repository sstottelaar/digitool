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
        <b-nav-item to="/about-us">
          About us
        </b-nav-item>
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
.navbar {
  background-color: #FFF;
  box-shadow: $box-shadow-light;
  padding: 0.75rem 1rem;

  .navbar-toggler {
    border: 0;
  }

  .nav-link,
  .primary-nav a {
    padding: 0.35em 0.75rem;

    &.active {
      color: $support-color;
    }
  }

  .primary-nav a {
    background-color: $support-color;
    font-family: $font-family;
    font-weight: 600;
    color: #FFF;
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

