<template>
  <div>
    <hero-component></hero-component>
    <b-container>

      <!-- Posts -->
      <b-row class="mt-5">
        <card-component
          v-for="(post, index) in posts"
          :key="index" :post="post">
        </card-component>
      </b-row>
    </b-container>

    <back-to-top></back-to-top>

  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import LoaderComponent from '@/components/LoaderComponent'
import HeroComponent from '@/components/HeroComponent'
import BackToTop from '@/components/BackToTopComponent'

export default {
  name: "Homepage",
  components: {
    CardComponent,
    LoaderComponent,
    HeroComponent,
    BackToTop
  },
  data(){
    return {
      posts: []
    }
  },
  async asyncData({ app }) {
    let postData = await app.$axios.get("https://digitool-api.herokuapp.com/api/tools/")
    let categoryData = await app.$axios.get("https://digitool-api.herokuapp.com/api/categories/")
    return {
      posts: postData.data,
      categories: categoryData.data
    }
  },
  head: {
    titleTemplate: "Digitool | Discover upcoming digital marketing tools",
    meta: [
      { hid: "description", name: "description", content: "Digitool is the place for online marketing enthusiasts who are looking for the latest digital marketing tools." },
      { itemprop: "description", content: "Digitool is the place for online marketing enthusiasts who are looking for the latest digital marketing tools." },
      { name: "og:title", content: "Digitool | Discover upcoming digital marketing tools" },
      { name: "og:description", content: "Digitool is the place for online marketing enthusiasts who are looking for the latest digital marketing tools." },
    ]
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
