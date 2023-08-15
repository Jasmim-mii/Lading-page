<template>
  <app-header />
  <app-featured />
  <app-courses />
  <app-services />
  <app-about />
  <app-buy />
  <app-faq />
  <app-footer />

</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFeatured from './components/AppFeatured.vue'
import AppCourses from './components/AppCourses.vue'
import AppServices from './components/AppServices.vue'
import AppAbout from './components/AppAbout.vue'
import AppBuy from './components/AppBuy.vue'
import AppFaq from './components/AppFaq.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFeatured,
    AppCourses,
    AppServices,
    AppAbout,
    AppBuy,
    AppFaq,
    AppFooter,
  }
}
</script>



<style lang="css">

</style>
