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
import home from '~/static/content/home.json'
import about from '~/static/content/about.json'
import work from '~/static/content/work.json'
import contact from '~/static/content/contact.json'

const images = [
  home.titleImage.src,
  home.backgroundImage.src,
  about.titleImage.src,
  about.backgroundImage.src,
  contact.titleImage.src,
  contact.backgroundImage.src,
  work.titleImage.src,
  work.backgroundImage.src
]
let imagesToLoad = images.length


export default {
  components: {
    GlobalHeader,
    Navigation,
    ScrollTeaser,
    ShareEgg,
    FancyCursor
  },
  mounted () {
    this.waitForImages()
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
  methods: {
    waitForImages () {
      if (typeof window !== 'undefined') {
        images.forEach(src => {
          const image = new Image()
          image.onload = _ => {
            imagesToLoad--
            if (imagesToLoad < 1) {
              this.loadingComplete = true
            }
          }
          image.src = src
        })
      } else {
        this.loadingComplete = true
      }
    }
  },
  watch: {
    $route (value) {
      this.url = 'https://natedentondesign.com' + this.$route.fullPath
    }
  }
}
</script>
