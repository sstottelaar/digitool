<template>
  <div class="mt-5 row justify-content-center">
    <div class="col-6">
      <div id="loading"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
#loading {
  display: block;
  width: 25px;
  height: 25px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: $primary-color;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  margin: 0 auto;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>
