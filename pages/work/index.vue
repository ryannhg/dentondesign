<template>
  <div class="layout__main">
    <parallax-background :image="page.backgroundImage.src" :overlays="overlays" :activeOverlay="hoveredIndex"></parallax-background>
    <div class="layout__content">
      <page-heading :caption="page.caption" :image="page.titleImage"></page-heading>
      <div class="work-links">
        <h3 class="work-links__link"
          v-for="(link, i) in page.links" :key="i"
          @mouseover="selectIndex(i)" @mouseout="deselectIndex(i)">
          <nuxt-link
            :to="link.url" v-text="link.label">
          </nuxt-link>
        </h3>
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
  data: () => ({
    page,
    hoveredIndex: undefined,
  }),
  computed: {
    overlays () {
      return [ ...Array(page.links.length) ]
        .map((_, i) => `/images/pages/work/background${i}.jpg`)
    }
  },
  methods: {
    selectIndex (i) {
      this.hoveredIndex = i
    },
    deselectIndex (i) {
      this.hoveredIndex = (this.hoveredIndex === i)
        ? undefined
        : i
    }
  }
}
</script>
