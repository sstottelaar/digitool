<template>
  <div>
    <header-component></header-component>
    <hero-component></hero-component>
    <nuxt/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import HeroComponent from '@/components/HeroComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    FooterComponent
  }
}
</script>


<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
