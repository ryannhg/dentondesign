<template>
  <div class="layout">
    <global-header />
    <navigation :menu="menu" :social="social" :url="url"></navigation>
    <!-- navbar -->
    <nuxt />
    <!-- line boys -->
    <scroll-teaser />
    <!-- social -->
    <share-egg id="share-egg" :url="url"/>
    <fancy-cursor></fancy-cursor>
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
      url: 'https://natedentondesign.com' + this.$route.fullPath
    }
  },
  watch: {
    $route (value) {
      this.url = 'https://natedentondesign.com' + this.$route.fullPath
    }
  }
}
</script>
