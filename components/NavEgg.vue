<template>
  <nav class="navigation">
    <div class="navigation__menu">
      <burger :is-expanded="isOpen"></burger>
    </div>
    <div ref="egg" class="navigation__egg">
      <div class="navigation__svg-container">
        <img class="navigation__egg-svg" src="~/assets/images/eggmenu.svg" />
      </div>
    </div>
  </nav>
</template>

<script>
import Burger from '~/components/Burger'
import {TweenLite} from 'gsap'

const EGG_WIDTH = 141
const EGG_HEIGHT = 126

const EGG_RESPONSIVE_WIDTH =  {
  mobile: 68,
  tablet: 141
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
    // eggSize () {
    //   return {
    //     width: (isOpen) ? getEggWidth() ?
    //   }
    // }
  },
  methods: {
    isMobile () {
      return window.innerWidth < 768 
    },
    getBiggerWindowWidthOrHeight () {
      return (window.innerWidth < window.innerHeight)
        ? window.innerHeight
        : window.innerWidth
    },
    getEggWidth () {

    }
  }
}
</script>
