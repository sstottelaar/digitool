<template>
  <div>
    <hero-component></hero-component>
    <b-container>

      <b-row class="mt-5">
        <b-col class="col-12">
          <ul class="category-list">
            <li
              class="category-item d-inline-block"
              :class="{ active : this.filter == ''}"
              @click="applyFilter('')"
              >
                All
              </li>

            <li
              class="category-item d-none d-sm-inline-block"
              :class="{ active : filter == category.codename}"
              v-for="(category, key) in this.categories"
              :key="key"
              @click="applyFilter(category.codename)">
                {{ category.name }}
            </li>

            <b-dropdown :text="this.filter" class="float-right d-block d-sm-none custom-dropdown" variant="link" right>
              <b-dropdown-item
                :active="category.codename == filter"
                v-for="category in this.categories"
                :key="category.codename"
                @click="applyFilter(category.codename)">
                  {{ category.name }}
              </b-dropdown-item>
            </b-dropdown>

          </ul>

        </b-col>
      </b-row>

      <!-- Posts -->
      <b-row class="mt-5">
        <card-component
          v-for="post in this.filteredPosts"
          :key="post.name.value" :post="post">
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
      posts: [],
      categories: [],
      filter: ""
    }
  },
  methods: {
    applyFilter (payload) {
      this.filter = payload;
    }
  },
  computed: {
    filteredPosts () {
      if(!this.filter == '') {
        return this.posts.filter((post) => {
          return post.category.value[0].codename == this.filter
        })
      } else {
        return this.posts
      }
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

.category-list {
  list-style: none;
  padding: 0;
  border-bottom: 1px solid rgba(144, 147, 168, 0.3);

  :first-child {
    margin-right: -4px; // Fix weird spacing on the right
  }

  .category-item {
    padding: 0.8rem;
    color: #9093a8;
    font-size: 0.9rem;
    margin-bottom: -1px;
    cursor: pointer;

    &.active,
    &:hover {
      border-bottom: 2px solid $primary-color;
      color: $primary-color;
    }
  }

  .custom-dropdown {
    .btn-link {
      color: #9093a8;
      text-decoration: none;
      padding: 0.8rem;
      font-size: 0.9rem;
    }
  }
}
</style>
