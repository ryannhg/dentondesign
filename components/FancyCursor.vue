<template>
  <div ref="cursor" class="fancy-cursor"></div>
</template>



<script>
import detectIt from 'detect-it'
const orbDelay = 100

export default {
  data: () => ({
    rAFTicker: false,
    orbEl: undefined
  }),
  mounted () {
    if (typeof window !== 'undefined' && detectIt.deviceType === 'mouseOnly') {
      document.addEventListener('mousemove', this.requestTicker)
      this.orbEl = document.createElement('div')
      this.orbEl.setAttribute('class', 'fancy-cursor__orb')
      this.$refs.cursor.insertAdjacentElement('afterEnd', this.orbEl)
    } else {
      this.$refs.cursor.style.visibility = 'hidden'
    }
  },
  beforeDestroy () {
    try {
      document.removeEventListener('mousemove', this.requestTicker)
    } catch (e) {}
  },
  methods: {
    requestTicker (event) {
      if (!this.rAFTicker) {
        window.requestAnimationFrame(this.mousePosition.bind(this, event))
        this.rAFTicker = true
      }
    },
    mousePosition ({clientX, clientY}) {
      this.rAFTicker = false
      this.$refs.cursor.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px)`
      setTimeout(() => {
        this.orbEl.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px) scaleY(-1)`
      }, orbDelay)
    }
  }
}
</script>
