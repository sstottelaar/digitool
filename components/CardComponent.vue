<template>

  <div class="col-12 col-md-6 col-lg-4">

    <div class="card mb-4">

      <nuxt-link
        v-if="hasReview(post)"
        :to="'/tool/' + post.url_slug.value"
        :title="post.name.text">
        <img :src="post.screenshot.assets[0].url + '?w=350&h=270'" :alt="post.name.text" class="card-img-top">
      </nuxt-link>

      <a
        v-else
        :href="post.website_url.text"
        :title="post.name.text">
        <img :src="post.screenshot.assets[0].url + '?w=350&h=270'" :alt="post.name.text" class="card-img-top">
      </a>

      <div class="card-body">

        <nuxt-link
          v-if="hasReview(post)"
          :to="'/tool/' + post.url_slug.value"
          :title="post.name.text">
          <span class="card-title h5 d-inline-block mt-2 mb-3">{{ post.name.text }}</span>
          <p class="card-text">
            {{ post.short_description.text }}
          </p>
        </nuxt-link>

        <a
        v-else
        :href="post.website_url.text"
        :title="post.name.text">
          <span class="card-title h5 d-inline-block mt-2 mb-3">{{ post.name.text }}</span>
          <p class="card-text">
            {{ post.short_description.text }}
          </p>
        </a>

      </div>

    </div>

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
.card {
  border-radius: 0;
  transition: box-shadow 200ms ease;
  border: 1px solid #e6e7eb;

  &:hover{
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.05);
  }

  a:hover {
    text-decoration: none;
  }

  .card-body {
    padding: 1.75rem;
    cursor: pointer;

    .card-title {
      font-family: 'Poppins', sans-serif;
      color: #191a20;
      font-weight: 500;
      color: #191a20;
      font-size: 1.25rem;
    }

    .card-text {
      font-family: 'Open Sans', sans-serif;
      color: #9093a8;
      font-size: 1rem;
    }

  }

}
</style>
