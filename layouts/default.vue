<template>
  <div>
    <header-component></header-component>
    <transition name="fade">
      <nuxt/>
    </transition>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
// Transition
.fade-enter-active, .fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
