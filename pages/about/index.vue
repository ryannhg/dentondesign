<template>
  <div class="layout__main">
    <parallax-background :opacity-percent="0.8" :image="page.backgroundImage.src"></parallax-background>
    <div class="layout__content">
      <page-heading :image="page.titleImage"></page-heading>
      <tabs :approach="page.approach" :timeline="page.timeline"></tabs>
    </div>
  </div>
</template>

<script>
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import Tabs from '~/components/Tabs'
import page from '~/static/content/about.json'
import Page from '~/plugins/Page'

export default {
  mixins: [ Page ],
  components: {
    ParallaxBackground,
    PageHeading,
    Tabs
  },
  data: () => ({
    page
  })
}
</script>
