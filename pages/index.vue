<template>
  <div>
    <hero-component></hero-component>
    <b-container>

      <b-row>
        <b-col class="col-12 d-none d-lg-block">
          <span v-b-toggle.collapse-category-list class="d-inline-block float-right">
            <filter-icon class="icon-collapse"></filter-icon>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">

          <b-collapse id="collapse-category-list">
            <ul class="category-list d-none d-lg-block">
              <li
                class="category-item d-inline-block"
                :class="{ active : filter.codename == category.codename}"
                v-for="(category, key) in this.categories"
                :key="key"
                @click="applyFilter(category)">
                  {{ category.name }}
              </li>
            </ul>
          </b-collapse>     

          <b-dropdown
            :text="this.filter.name"
            class="float-right d-sm-block d-lg-none custom-dropdown"
            variant="link"
            right>
            <b-dropdown-item
              :active="category.codename == filter.codename"
              v-for="category in this.categories"
              :key="category.codename"
              @click="applyFilter(category)">
                {{ category.name }}
            </b-dropdown-item>
          </b-dropdown>

        </b-col>
      </b-row>

      <!-- Posts -->
      <b-row class="mt-4">
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
import { FilterIcon } from 'vue-feather-icons'

export default {
  name: "Homepage",
  components: {
    CardComponent,
    LoaderComponent,
    HeroComponent,
    BackToTop,
    FilterIcon
  },
  data(){
    return {
      posts: [],
      categories: [],
      filter: {
        codename: "all",
        name: "All"
      }
    }
  },
  methods: {
    applyFilter (payload) {
      this.filter = {
        name: payload.name,
        codename: payload.codename
      };
    }
  },
  computed: {
    filteredPosts () {
      if(this.filter.codename == "all") {        
        return this.posts
      } else {
        return this.posts.filter((post) => {
          return post.category.value[0].codename == this.filter.codename
        })
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

.icon-collapse {
  stroke: $support-color;
  cursor: pointer;
}

.collapsed {
  .icon-collapse {
    stroke: $primary-color;
  }
}

.dropdown-toggle,
.dropdown-toggle:hover {
  color: $primary-color;
  text-decoration: none;
}

.dropdown-menu {
  border-radius: 0;
  border: 1px solid #e6e7eb;
  box-shadow: $box-shadow-light;
  padding: 0;

  .dropdown-item {
    border-bottom: 1px solid #e6e7eb;
    padding: 0.5rem 1.5rem;
    color: lighten($primary-color-font, 30%);

    &:last-child {
      border-bottom: 0;
    }

    &.active,
    &:active {
      background: lighten($primary-color, 40%);
      color: $primary-color;
    }
  }
}
</style>
