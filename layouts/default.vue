<template>
  <div class="layout" :class="{ 'layout--no-scroll': loadingImages }">
    <global-header />
    <navigation :menu="menu" :social="social" :url="url"></navigation>
    <!-- navbar -->
    <nuxt />
    <!-- line boys -->
    <scroll-teaser />
    <!-- social -->
    <share-egg id="share-egg" :url="url"/>
    <fancy-cursor></fancy-cursor>
    <div class="loader" :class="{ 'loader--complete': loadingComplete }">
      <p>Loading</p>
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader'
import Navigation from '~/components/Navigation'
import ScrollTeaser from '~/components/ScrollTeaser'
import ShareEgg from '~/components/ShareEgg'
import FancyCursor from '~/components/FancyCursor'
import menu from '~/static/content/menu.json'
import navbar from '~/static/content/navbar.json'
import social from '~/static/content/social.json'

// Loading boys
import work from '~/static/content/work.json'

const images = [

]

export default {
  components: {
    GlobalHeader,
    Navigation,
    ScrollTeaser,
    ShareEgg,
    FancyCursor
  },
  data () {
    return {
      menu,
      navbar,
      social,
      url: 'https://natedentondesign.com' + this.$route.fullPath,
      loadingComplete: false
    }
  },
  computed: {
    loadingImages () {
      return this.loadingComplete === false
    }
  },
  watch: {
    $route (value) {
      this.url = 'https://natedentondesign.com' + this.$route.fullPath
    }
  }
}
</script>
