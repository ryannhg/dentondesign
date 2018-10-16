<template>
  <nav @click="toggle" class="navigation">
    <div class="navigation__menu">
      <burger :is-expanded="isOpen"></burger>
    </div>
    <div class="navigation__egg-nest">
      <div ref="egg" class="navigation__egg" :style="eggWidth">
        <div class="navigation__svg-container">
          <img class="navigation__egg-svg" src="~/assets/images/eggmenu.svg" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Burger from '~/components/Burger'
import { TweenLite } from 'gsap'

const RADIUS__OFFSET = 0.85
const EGG_WIDTH = 141
const EGG_HEIGHT = 126

const EGG_RESPONSIVE_WIDTH =  {
  mobile: 68,
  tablet: 141
}

const attempt = (fn, fallback = undefined) => {
  try {
    return fn()
  } catch (_) {
    return fallback
  }
}

export default {
  components: {
    Burger
  },
  data: () => ({
    isOpen: false
  }),
  props: ['content'],
  computed: {
    eggRatio () {
      return (EGG_WIDTH / EGG_HEIGHT) * 100
    },
    eggWidth () {
      return (!this.isOpen)
        ? {width: this.getDefaultSize()}
        : {width: this.getViewportEggSize()}
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    isMobile () {
      return attempt(_ => window.innerWidth < 768, false) 
    },
    getBiggerWindowWidthOrHeight () {
      return attempt(_ => window.innerWidth < window.innerHeight, false)
        ? attempt(_ => window.innerHeight, 0)
        : attempt(_ => window.innerWidth, 0)
    },
    getViewportEggSize () {
      let preferredViewportWidth = this.getBiggerWindowWidthOrHeight()
      
      return preferredViewportWidth * 3 + 'px'
    },
    getDefaultSize () {
      return (this.isMobile())
        ? EGG_RESPONSIVE_WIDTH.mobile + 'px'
        : EGG_RESPONSIVE_WIDTH.tablet + 'px'
    }
  }
}
</script>
