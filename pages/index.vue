<template>
  <section class="container">
    <h2>Post overview</h2>
    <section>

      <h2 v-if="loading">Loading...</h2>

      <card-component
        v-for="(post, index) in posts"
        :key="index" :post="post">
      </card-component>

    </section>
  </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'

export default {
  components: {
    CardComponent
  },
  data(){
    return {
      posts: [],
      loading: false
    }
  },
  methods: {
    initData() {
      this.loading = true

      // Get data from KC and write to component
      this.$deliveryClient.items()
        .type("post")
        .orderParameter("system.last_modified[desc]")
        .getPromise()
        .then((response) => {
          this.posts = response.items
          this.loading = false
        })
    },
    hasReview(payload) {
      if(payload.article_about_tool.value.length > 12){
        return true
      }
    }
  },
  created(){
    this.initData();
  }
}
</script>

<style>
</style>
