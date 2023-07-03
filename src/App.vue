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
/* featured
.featured {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 1rem
}

service
.info-service{
    text-align: center;
    padding-bottom: 3.5rem;
}
.info-service .info-title{
    font-size: 1.65rem;
} */
</style>
