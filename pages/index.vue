<template>
  <b-container>

    <h2 v-if="loading">Loading...</h2>

    <card-component
      v-else
      v-for="(post, index) in posts"
      :key="index" :post="post">
    </card-component>

  </b-container>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import { db } from '@/plugins/firebase'

export default {
  name: "Homepage",
  components: {
    CardComponent
  },
  data(){
    return {
      posts: [],
      loading: false,
      firebaseData: []
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
          return this.getFirebaseData()
        })
        .then(() => {
          this.orderData()
          this.loading = false
        })
    },
    hasReview(payload) {
      if(payload.article_about_tool.value.length > 12){
        return true
      }
    },
    getFirebaseData() {
      return db.collection("posts").get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.firebaseData.push(doc.data())
          })
        })
    },
    orderData() {
      this.posts.forEach((post) => {
        this.firebaseData.forEach(item => {
          post.likes = 0
          if(post.system.id === item.id) {
            post.likes = item.likes
          }
        })
      })
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

<style>
</style>
