<template>
  <div>
    <header-component></header-component>
    <nuxt/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
       url('../static/fonts/open-sans-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../static/fonts/open-sans-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  font-display: auto;
}
/* open-sans-600 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
       url('../static/fonts/open-sans-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../static/fonts/open-sans-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  font-display: auto;
}
/* open-sans-700 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'),
       url('../static/fonts/open-sans-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../static/fonts/open-sans-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  font-display: auto;
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
  font-display: auto;
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
  font-display: auto;
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
  font-display: auto;
}
</style>
