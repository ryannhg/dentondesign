<template>
  <div class="layout" :class="{ 'layout--no-scroll': loadingImages }">
    <global-header />
    <navigation :menu="menu" :social="social" :url="url"></navigation>
    <!-- navbar -->
    <nuxt v-if="loadingComplete"/>
    <!-- line boys -->
    <scroll-teaser />
    <!-- social -->
    <share-egg id="share-egg" :url="url"/>
    <fancy-cursor></fancy-cursor>
    <div class="loader" :class="{ 'loader--complete': loadingComplete }">
      <div class="loader__egg ">
        <div class="loader__egg-fill"></div>
      </div>
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
  mounted () {
    setTimeout(_ => {
      this.loadingComplete = true
    }, 2400)
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
