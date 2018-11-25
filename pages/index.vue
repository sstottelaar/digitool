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
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
       url('../static/fonts/open-sans-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../static/fonts/open-sans-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-600 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
       url('../static/fonts/open-sans-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../static/fonts/open-sans-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-700 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'),
       url('../static/fonts/open-sans-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../static/fonts/open-sans-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('../static/fonts/poppins-v5-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Poppins Regular'), local('Poppins-Regular'),
       url('../static/fonts/poppins-v5-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../static/fonts/poppins-v5-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../static/fonts/poppins-v5-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../static/fonts/poppins-v5-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../static/fonts/poppins-v5-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url('../static/fonts/poppins-v5-latin-500.eot'); /* IE9 Compat Modes */
  src: local('Poppins Medium'), local('Poppins-Medium'),
       url('../static/fonts/poppins-v5-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../static/fonts/poppins-v5-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../static/fonts/poppins-v5-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../static/fonts/poppins-v5-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../static/fonts/poppins-v5-latin-500.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url('../static/fonts/poppins-v5-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Poppins Bold'), local('Poppins-Bold'),
       url('../static/fonts/poppins-v5-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../static/fonts/poppins-v5-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../static/fonts/poppins-v5-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../static/fonts/poppins-v5-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../static/fonts/poppins-v5-latin-700.svg#Poppins') format('svg'); /* Legacy iOS */
}

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

// Custom CSS for toasted notifications
.toasted-custom {
  .toasted {
    background: #FFF;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.05);
    color: #3653f4;
    padding: 1.5rem;
  }
}

.toasted-container.bottom-right {
  bottom: 5%;
}
</style>
