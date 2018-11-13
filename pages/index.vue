<template>
  <section class="container">
    <h2>{{ msg }}</h2>
    <section>
      <ul>
        <li
          v-for="(post, index) in posts"
          :key="index">
          <nuxt-link
            :to="'/tool/' + post.url_slug.value">
            {{ post.name.text }}
          </nuxt-link>

          <span v-if="hasReview(post)">Has review</span>

        </li>
      </ul>
    </section>
  </section>
</template>

<script>

export default {
  data(){
    return {
      msg: "This is a title",
      posts: []
    }
  },
  methods: {
    initData() {
      // Get data from KC and write to component
      this.$deliveryClient.items()
        .type("post")
        .orderParameter("system.last_modified[desc]")
        .getPromise()
        .then(response => this.posts = response.items)
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
