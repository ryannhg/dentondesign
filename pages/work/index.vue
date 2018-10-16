<template>
  <div class="layout__main">
    <parallax-background :image="page.backgroundImage.src" :overlay="overlay"></parallax-background>
    <div class="layout__content">
      <page-heading :title="page.caption" :image="page.titleImage"></page-heading>
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
    hoveredIndex: undefined
  }),
  computed: {
    overlay () {
      return this.hoveredIndex !== undefined
        ? `/images/pages/work/background${this.hoveredIndex}.jpg`
        : undefined
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
    },
    workEggImageStyles (i) {
      return {
        'opacity': this.hoveredIndex === i ? '1' : '0',
        'background-image': `url('/images/background${i}.jpg')`
      }
    }
  }
}
</script>
