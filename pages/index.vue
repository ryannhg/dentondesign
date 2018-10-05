<template>
  <div class="layout__main">
    <parallax-background :image="page.backgroundImage.src" :percent="percent"></parallax-background>
    <div class="layout__content" v-percentage="percent">
      <div style="height: 86vh"></div>
      <page-heading :title="page.caption" :image="page.titleImage"></page-heading>
    </div>
  </div>
</template>


<script>
import Percentage from '~/plugins/Percentage'
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import page from '~/static/content/home.json'

export default {
  components: {
    ParallaxBackground,
    PageHeading
  },
  data: () => ({
    page,
    percent: 0
  })
}
</script>

