<template>
  <div class="layout__main">
    <parallax-background></parallax-background>
    <div class="layout__content">
      <page-heading></page-heading>
    </div>
  </div>
</template>


<script>
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import page from '~/static/content/home.json'

export default {
  components: {
    ParallaxBackground,
    PageHeading
  },
  data: () => ({
    page
  })
}
</script>

