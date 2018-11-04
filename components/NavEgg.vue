<template>
  <div class="navegg">
    <div ref="egg" class="navegg__nest" :style="eggWidth">
      <div class="navegg__svg-container">
        <img class="navegg__svg" src="~/assets/images/eggmenu.svg" alt="Navigation egg" />
      </div>
    </div>
  </div>
</template>

<script>

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
  props: ['isExpanded'],
  computed: {
    eggRatio () {
      return (EGG_WIDTH / EGG_HEIGHT) * 100
    },
    eggWidth () {
      attempt(_ => this.handleEventEmit(), false) 
      
      return (!this.isExpanded)
        ? {width: this.getDefaultSize()}
        : {width: this.getViewportEggSize()}
    }
  },
  methods: {
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
    eventHandler () {
      let egg = this.$refs.egg

      this.$emit('transition-finished')
      this.$refs.egg.removeEventListener('transitionend', this.eventHandler, false);
    },
    handleEventEmit () {
      this.$refs.egg.addEventListener('transitionend', this.eventHandler)
    }
  }
}
</script>
