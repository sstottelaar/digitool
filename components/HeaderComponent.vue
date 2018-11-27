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
        <b-nav-item class="text-uppercase" href="https://digitool.typeform.com/to/PokM6C" target="_window">
          Submit tool
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #FFF;
  box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.05);
  padding: 0.75rem 1rem;

  .navbar-toggler {
    border: 0;
  }

  .nav-link {
    // color: #acafbf;
    font-weight: 700;
    padding: 0.5rem 0.6rem;
    transition: background-color 200ms ease, box-shadow 200ms ease, border-bottom 200ms ease;
    font-size: 0.9rem;
    position: relative;
    display: block;
    color: rgba(54, 83, 244, 1);

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #F79824;
      transition: transform 150ms ease;
      transform: scale(0);
    }

    &:hover::after {
      transform: scale(1);
    }

    &:hover,
    &:active,
    &:focus {
      color: rgba(54, 83, 244, 1);
      // background-color: rgba(54, 83, 244, 0.2);
      // box-shadow: 0 0.25rem 0.75rem rgba(54, 83, 244, .1);
      outline: none;
    }
  }
}
</style>

