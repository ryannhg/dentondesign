<template>
  <div class="layout__main">
    <parallax-background :image="page.backgroundImage.src"></parallax-background>
    <div class="layout__content">
      <page-heading :title="page.caption" :image="page.titleImage"></page-heading>
      <div class="work-links">
        <nuxt-link class="work-links__link"
          v-for="(link, i) in page.links" :key="i"
          :to="link.url" v-text="link.label">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import page from '~/static/content/work.json'
import Page from '~/plugins/Page'

export default {
  mixins: [ Page ],
  components: {
    ParallaxBackground,
    PageHeading
  },
  data: () => ({ page })
}
</script>
