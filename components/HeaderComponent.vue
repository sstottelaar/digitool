<template>
  <b-navbar
    class="sticky-top"
    toggleable="md"
    type="light">

    <b-navbar-brand class="mt-1 mb-1 ml-2" href="/">
      <img src="@/static/digitool-logo.svg" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" class="custom-toggler">
    </b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://digitool.typeform.com/to/PokM6C" target="_window">
          Suggest tool
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
    color: #acafbf;
    font-weight: 600;
    padding: 0.4rem 0.6rem;
    transition: background-color 200ms ease, box-shadow 200ms ease;
    border-radius: 0.2rem;
    font-size: 0.9rem;

    &:hover,
    &:active,
    &:focus {
      color: rgba(54, 83, 244, 0.75);
      background-color: rgba(54, 83, 244, 0.2);
      box-shadow: 0 0.25rem 0.75rem rgba(54, 83, 244, .1);
      outline: none;
    }
  }
}
</style>

