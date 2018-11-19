<template>
    <div>
        <p>
          <nuxt-link
            v-if="hasReview(post)"
            :to="'/tool/' + post.url_slug.value">
            {{ post.name.text }}
          </nuxt-link>

          <a
            v-else
            :href="post.website_url.text">
            {{ post.name.text }}
          </a>

          <span v-if="hasReview(post)"> - Has review</span>
          <span>{{ post.likes }}</span>
        </p>
    </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["post"],
  methods: {
    hasReview(payload) {
      if(payload.article_about_tool.value.length > 12){
          return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
