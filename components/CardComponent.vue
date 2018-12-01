<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card mb-4">

      <!-- Header Link -->
      <!-- @TODO: Refactor to only have one component for both internal and external link -->
      <nuxt-link
        v-if="hasReview(post)"
        :to="'/tool/' + post.url_slug.value"
        :title="'Read review of ' + post.name.text"
        >
        <img
          class="card-img-top"
          src="~/static/loading-asset.svg"
          v-lazy="getImage() + getImageProps(400, 50)"
          :alt="post.name.text"
          >
      </nuxt-link>

      <a
        v-else
        :href="post.website_url.text"
        :title="'Visit website of ' + post.name.text"
        target="_blank"
        >
        <img
          class="card-img-top"
          src="~/static/loading-asset.svg"
          v-lazy="getImage() + getImageProps(400, 50)"
          :alt="post.name.text"
          >
      </a>
      <!-- /Header Link -->

      <div class="card-body">

        <!-- Read review block -->
        <nuxt-link
          v-if="hasReview(post)"
          :to="'/tool/' + post.url_slug.value"
          :title="'Read review of ' + post.name.text"
          class="reviewed text-uppercase">
          <span>Read review</span>
          <arrow-right-icon width="14" height="14" stroke-width="3"></arrow-right-icon>
        </nuxt-link>

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
          :title="'Visit website of ' + post.name.text"
          target="_blank">
            <span class="card-title h5 d-inline-block mt-2 mb-3">{{ post.name.text }}</span>
            <p class="card-text">
              {{ post.short_description.text }}
            </p>
        </a>
        <!-- /Post body link -->

        <div class="mt-3">

          <!-- Tags -->
          <b-badge
            class="tag mb-2 text-light">
            {{ getCategory(post) }}
          </b-badge>

          <!-- Like a post block -->
          <div
            class="likes d-inline-block float-right"
            v-on:click="likePost(post)"
          >
            <thumbs-up-icon
              width="20"
              height="20"
              class="custom-icon">
            </thumbs-up-icon>
            <span class="post-likes">
              {{ post.likes.count }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ThumbsUpIcon, ArrowRightIcon } from 'vue-feather-icons'

export default {
  name: "CardComponent",
  props: ["post"],
  components: {
    ThumbsUpIcon,
    ArrowRightIcon
  },
  methods: {
    hasReview(payload) {
      if(payload.article_about_tool.value.length > 12){
          return true
      }
    },
    getCategory(payload) {
      return payload.category.options[0].name
    },
    getImage() {
      return this.post.screenshot.assets[0].url
    },
    getImageProps(width, quality) {
      return "?w=" + width + "&q=" + quality + "?fm=png&auto=format"
    },
    async likePost(payload) {
      try {
        this.post.likes.count++
        this.$toast.show("You liked a tool, awesome! 🤘")
        await fetch("https://digitool-api.herokuapp.com/api/tools/" + payload.system.codename + "/like", {
          method: "PUT"
        })
        mixpanel.track("Liked tool", {
          "tool": payload.system.codename
        })
      } catch (e) {
        console.log(e)
        this.$toast.error(e)
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
    box-shadow: $box-shadow-light;
  }

  a:hover {
    text-decoration: none;
  }

  .card-img-top {
    border-bottom: 1px solid #f4f4f6;
    position: relative;
  }

  .reviewed {
    background: #F79824;
    display: block;
    position: absolute;
    color: #FFF;
    font-size: 0.9rem;
    right: 0;
    top: 0;
    padding: 0.4rem 0.6rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    transition: box-shadow 200ms ease;

    .feather.feather-arrow-right {
        transition: margin-left 200ms ease, transform 200ms ease;
        margin-left: 5px;
        margin-top: -2px;
      }

      &:hover {
        box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,.1);

        .feather.feather-arrow-right {
          margin-left: 5px;
          transform: rotate(-45deg);
        }
      }
  }

  .card-body {
    padding: 1.75rem;
    cursor: pointer;
    position: relative;

    .card-title {
      font-family: $font-family-heading, sans-serif;
      color: #191a20;
      font-weight: 500;
      color: #191a20;
      font-size: 1.25rem;
    }

    .card-text {
      font-family: $font-family, sans-serif;
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
        box-shadow: $box-shadow-light;
      }
    }

    .feather-thumbs-up {
      stroke: #dee2e6;
      transition: stroke 200ms ease, transform 50ms ease;
    }

    .likes {
      color: #dee2e6;
      transition: color 200ms ease;

      &:hover {
        color: $primary-color;

        .feather-thumbs-up {
          stroke: $primary-color;
          transform: rotate(-10deg);
        }
      }

      &:active {
        .feather-thumbs-up {
          transform: rotate(10deg) scale(1.1);
        }
      }

    }

    .post-likes {
      font-weight: 700;
      vertical-align: middle;
    }
  }
}
</style>
