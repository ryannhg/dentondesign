<template>
  <div class="layout__main">
    <parallax-background :image="page.backgroundImage.src" :percent="percent"></parallax-background>
    <div class="layout__content" v-pixels-scrolled="pixelsScrolled">
      <div style="height: 86vh"></div>
      <page-heading :title="page.caption" :image="page.titleImage"></page-heading>
      <cta-links></cta-links>
    </div>
  </div>
</template>


<script>
import PixelsScrolled from '~/plugins/PixelsScrolled'
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import CtaLinks from '~/components/CtaLinks'
import page from '~/static/content/home.json'

export default {
  components: {
    ParallaxBackground,
    PageHeading,
    CtaLinks
  },
  data: () => ({
    page,
    pixelsScrolled: 0
  }),
  computed: {
    percent () {
      const PIXELS_UNTIL_DONE = 400
      return this.pixelsScrolled < PIXELS_UNTIL_DONE
        ? 1 - (PIXELS_UNTIL_DONE - this.pixelsScrolled) / PIXELS_UNTIL_DONE
        : 1
    }
  }
}
</script>
