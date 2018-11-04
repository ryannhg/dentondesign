<template>
  <div class="layout__main">
    <parallax-background :image="page.backgroundImage.src"></parallax-background>
    <div class="layout__content">
      <page-heading :large-caption="true" :caption="page.caption" :image="page.titleImage"></page-heading>
      <cta-links v-bind="page.explore"></cta-links>
    </div>
  </div>
</template>


<script>
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import CtaLinks from '~/components/CtaLinks'
import page from '~/static/content/home.json'
import Page from '~/plugins/Page'
// import marked from 'marked'

export default {
  mixins: [ Page ],
  components: {
    ParallaxBackground,
    PageHeading,
    CtaLinks
  },
  data: () => ({ page }),
  // methods: {
  //   marked
  // }
}
</script>
