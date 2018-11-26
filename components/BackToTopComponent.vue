<template>
  <b-container class="mt-5">
    <b-row>
      <b-col class="col-12 text-center">
        <a class="back-to-top d-inline-block" onclick="window.scrollTo(0,0)">
          <img src="@/static/back-to-top.svg" width="18px">
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
.back-to-top {
  box-shadow: 0 5px 12px #e6e7eb;
  line-height: 1;
  padding: .75rem .8rem;
  border-radius: 3rem;
  transition: box-shadow .2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 12px #e6e7eb;
  }
}
</style>

