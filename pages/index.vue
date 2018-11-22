<template>
  <b-container>

    <b-row class="mt-5">

      <card-component
        v-for="(post, index) in posts"
        :key="index" :post="post">
      </card-component>

    </b-row>

  </b-container>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import LoaderComponent from '@/components/LoaderComponent'

export default {
  name: "Homepage",
  components: {
    CardComponent,
    LoaderComponent
  },
  data(){
    return {
      posts: []
    }
  },
  async asyncData({ app }) {
    let postData = await app.$axios.get("https://digitool-api.herokuapp.com/api/tools/")
    let categoryData = await app.$axios.get("https://digitool-api.herokuapp.com/api/tools/categories/")
    return {
      posts: postData.data,
      categories: categoryData.data
    }
  },
  head: {
    titleTemplate: "Digitool | Discover upcoming digital marketing tools",
    meta: [
      { hid: "description", name: "description", content: "Digitool is the place for online marketing enthusiasts who are looking for the latest digital marketing tools.eta description" }
    ]
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
