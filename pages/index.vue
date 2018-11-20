<template>
  <b-container>
    <!-- <loader-component v-if="loading"></loader-component> -->

    <!-- Build external component for loader -->
    <b-row class="mt-4" v-if="loading">
      <div class="col-4">
        <content-loader
          :height="510"
          :width="370"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >

          <rect x="0" y="0" rx="0" ry="0" width="370" height="270" />
          <rect x="0" y="290" rx="0" ry="0" width="230" height="20" />
          <rect x="0" y="330" rx="0" ry="0" width="270" height="20" />
          <rect x="0" y="370" rx="0" ry="0" width="260" height="20" />
        </content-loader>
      </div>

      <div class="col-4">
        <content-loader
          :height="510"
          :width="380"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >

          <rect x="0" y="0" rx="0" ry="0" width="350" height="270" />
          <rect x="0" y="290" rx="0" ry="0" width="230" height="20" />
          <rect x="0" y="330" rx="0" ry="0" width="270" height="20" />
          <rect x="0" y="370" rx="0" ry="0" width="260" height="20" />
        </content-loader>
      </div>

      <div class="col-4">
        <content-loader
          :height="510"
          :width="380"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >

          <rect x="0" y="0" rx="0" ry="0" width="350" height="270" />
          <rect x="0" y="290" rx="0" ry="0" width="230" height="20" />
          <rect x="0" y="330" rx="0" ry="0" width="270" height="20" />
          <rect x="0" y="370" rx="0" ry="0" width="260" height="20" />
        </content-loader>
      </div>
    </b-row>

    <b-row class="mt-3">

      <card-component
        v-if="!loading"
        v-for="(post, index) in posts"
        :key="index" :post="post">
      </card-component>

    </b-row>

  </b-container>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import LoaderComponent from '@/components/LoaderComponent'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: "Homepage",
  components: {
    CardComponent,
    LoaderComponent,
    ContentLoader
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
  head: {
    titleTemplate: "Digitool | Discover upcoming digital marketing tools",
    meta: [
      { hid: "description", name: "description", content: "Digitool is the place for online marketing enthusiasts who are looking for the latest digital marketing tools.eta description" }
    ]
  },
  created(){
    this.initData();
  }
}
</script>

<style lang="scss">
body {
  color: #212529;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
