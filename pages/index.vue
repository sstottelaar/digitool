<template>
  <b-container>

    <!-- Posts -->
    <b-row class="mt-5">
      <card-component
        v-for="(post, index) in posts"
        :key="index" :post="post">
      </card-component>
    </b-row>

    <!-- Back to top -->
    <b-row>
      <b-col class="col-12 text-center">
        <a class="back-to-top d-inline-block" onclick="window.scrollTo(0,0)">
          <img src="@/static/back-to-top.svg" width="18px">
        </a>
      </b-col>
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

.back-to-top {
  box-shadow: 0 5px 12px #e6e7eb;
  line-height: 1;
  padding: .75rem .8rem;
  border-radius: 3rem;
  transition: box-shadow .2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 12px #e6e7eb;
  }
}
</style>
