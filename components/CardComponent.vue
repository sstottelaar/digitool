<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card mb-4">

      <!-- Header Link -->
      <!-- @TODO: Refactor to only have one component for both internal and external link -->
      <nuxt-link
        v-if="hasReview(post)"
        :to="'/tool/' + post.url_slug.value"
        :title="'Read review of ' + post.name.text">
        <img :src="post.screenshot.assets[0].url + '?w=350&h=270'" :alt="post.name.text" class="card-img-top">
      </nuxt-link>

      <a
        v-else
        :href="post.website_url.text"
        :title="'Visit website of ' + post.name.text">
        <img :src="post.screenshot.assets[0].url + '?w=350&h=270'" :alt="post.name.text" class="card-img-top">
      </a>
      <!-- /Header Link -->

      <nuxt-link
        v-if="hasReview(post)"
        :to="'/tool/' + post.url_slug.value"
        :title="'Read review of ' + post.name.text"
        class="reviewed">
        Read review
      </nuxt-link>

      <div class="card-body">

        <!-- Post body Link -->
        <!-- @TODO: Refactor to only have one component for both internal and external link -->
        <nuxt-link
          v-if="hasReview(post)"
          :to="'/tool/' + post.url_slug.value"
          :title="'Read review of ' + post.name.text">
          <span class="card-title h5 d-inline-block mt-2 mb-3">{{ post.name.text }}</span>
          <p class="card-text">
            {{ post.short_description.text }}
          </p>
        </nuxt-link>

        <a
          v-else
          :href="post.website_url.text"
          :title="'Visit website of ' + post.name.text">
          <span class="card-title h5 d-inline-block mt-2 mb-3">{{ post.name.text }}</span>
          <p class="card-text">
            {{ post.short_description.text }}
          </p>
        </a>
        <!-- /Post body link -->

        <b-badge
          class="tag mt-3 mb-2 text-light">
          {{ getCategory(post) }}
        </b-badge>

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
    },
    getCategory(payload) {
      return payload.category.options[0].name
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

  .card-img-top {
    border-bottom: 1px solid #f4f4f6;
  }

  .reviewed {
    background: #3653f4;
    display: block;
    position: absolute;
    color: #FFF;
    font-weight: 700;
    font-size: 0.9rem;
    right: 0;
    padding: 0.4rem 0.6rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
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

    .tag {
      background-color: #dee2e6;
      box-sizing: border-box;
      border-radius: .2rem;
      padding: 0.3rem 0.5rem;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 400;
      transition: box-shadow 200ms ease;

      &:hover {
        box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.05);
      }
    }

  }
}
</style>
