<template>
  <section class="container">
    <h2 v-if="!loading">{{ post.name.text }}</h2>

    <h2 v-if="loading">Loading...</h2>

    <pre>{{ post }}</pre>
  </section>
</template>

<script>

export default {
  data(){
    return {
      msg: "This is a tool page",
      post: [],
      loading: false
    }
  },
  methods: {
    getPost() {
      this.loading = true

      // Get data from KC and write to component
      this.$deliveryClient.item(this.$route.params.tool)
        .getPromise()
        .then((response) => {
          this.post = response.item
          this.loading = false
        })
    }
  },
  created(){
    this.getPost();
  }
}
</script>

<style>
</style>
