<template>
  <div>
    <h1>This is the header</h1>
    <nuxt/>
  </div>
</template>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>