<template>
  <nav class="navigation">
    <button @click.prevent="toggle" class="navigation__hamburger">
      <burger :is-expanded="isOpen"></burger>
    </button>
    <div class="navigation__egg-nest">
      <div ref="egg" class="navigation__egg" :style="eggWidth">
        <div class="navigation__svg-container">
          <img class="navigation__egg-svg" src="~/assets/images/eggmenu.svg" />
        </div>
      </div>
    </div>

    <ul class="navigation__menu">
      <li ref="work" class="navigation__menu-item">
        <nuxt-link to="work" class="navigation__menu-link">Work</nuxt-link>
      </li>
      <li ref="about" class="navigation__menu-item navigation__menu-item--dark">
        <nuxt-link to="about" class="navigation__menu-link">About</nuxt-link>
      </li>
      <li ref="contact" class="navigation__menu-item navigation__menu-item--white">
        <nuxt-link to="contact" class="navigation__menu-link navigation__menu-link--red">Contact</nuxt-link>
      </li>
    </ul>

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
    isOpen: false,
    tlDesktop: undefined,
    tlMobile: undefined
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
    },
    buildDesktopTimeline () {
      let {about} = this.$refs
      this.tlDesktop = new TimelineMax()
      // this.tlDesktop = new TimelineMax({paused: true})

      this.tlDesktop
        .to(about, 1, { bottom: '100%' }, { bottom: '0%' }, 'stage1')
    }
  },
  mounted () {
    this.buildDesktopTimeline()
  }
}
</script>
