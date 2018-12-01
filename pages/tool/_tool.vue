<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="post-hero">
          <!-- Empty hero -->
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-12 col-md-10 col-lg-8 post-wrapper">

          <b-img
            :src="post.screenshot.assets[0].url + '?w=1000&q=100&fm=png&auto=format'"
            :alt="post.name.text"
            fluid
            class="tool-screenshot"
          />

          <h1 class="post-title mt-5">{{ post.name.value }}</h1>

          <div class="tool-review-container" v-html="post.article_about_tool.value"></div>

          <h2 class="post-rating text-center">{{ post.rating.value }} / 5</h2>

          <hr class="mb-5 mt-5">

          <b-row class="justify-content-center trial-container">
            <b-col class="col-12 col-md-6 text-center">
              <span class="title d-block">Ready to try it out?</span>
            </b-col>
            <b-col class="col-12 col-md-6 text-center">
              <a :href="post.website_url.value" class="button d-block" :title="'Check out ' + post.name.value">Check out {{ post.name.value }}</a>
            </b-col>
          </b-row>

        </b-col>
      </b-row>
    </b-container>

    <back-to-top></back-to-top>

  </div>
</template>

<script>
import BackToTop from '@/components/BackToTopComponent'

export default {
  components: {
    BackToTop
  },
  data(){
    return {
      post: []
    }
  },
  async asyncData({ app, params }) {
    let postData = await app.$axios.get("https://digitool-api.herokuapp.com/api/tools/" + params.tool)
    return {
      post: postData.data
    }
  },
  head() {
    return {
      title: this.post.name.value + " | Discover upcoming digital marketing tools",
      meta: [
        { hid: "description", name: "description", content: this.post.short_description.value }
      ]
    }
  }
}
</script>

<style lang="scss">
.post-hero{
  background: $primary-color;
  background-image: url('~static/hero-bg.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 250px;
  min-height: 400px;
}

.post-wrapper {
  margin-top: -250px;

  .tool-screenshot {
    box-shadow: 0 15px 20px rgba(0,0,0,.1);
  }

  .post-title {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #495057;
  }

  .tool-review-container p {
    font-size: 1.1rem;
    color: #6c757d;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .tool-review-container h2,
  .post-rating {
    font-family: "Poppins", sans-serif;
    color: $primary-color;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .tool-review-container img{
    width: 100%;
    margin-bottom: 1rem;
  }
}

.trial-container {
  color: #6c757d;
  font-size: 1.1rem;

  .button {
    background-color: $primary-color;
    border: 0;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    font-size: 1.1rem;
    color: #fff;
    text-decoration: none;
    padding: 1.1rem 1.5rem;
  }

  .title {
    padding: 1.1rem 1.5rem;
  }
}
</style>
