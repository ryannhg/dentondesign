<template>
  <div id="fancy-cursor" ref="cursor" class="fancy-cursor" :class="{'fancy-cursor--closing': isHoverZoomBoy}"></div>
</template>



<script>
import detectIt from 'detect-it'
const orbDelay = 100

export default {
  data: () => ({
    rAFTicker: false,
    orbEl: undefined,
    isHoverZoomBoy: false
  }),
  mounted () {
    if (typeof window !== 'undefined' && detectIt.deviceType === 'mouseOnly') {
      window.addEventListener('mousemove', this.requestTicker, false)
      this.orbEl = document.createElement('div')
      this.orbEl.setAttribute('class', 'fancy-cursor__orb')
      this.$refs.cursor.insertAdjacentElement('afterEnd', this.orbEl)
    } else {
      this.$refs.cursor.style.visibility = 'hidden'
    }
  },
  beforeDestroy () {
    try {
      window.removeEventListener('mousemove', this.requestTicker, false)
    } catch (e) {}
  },
  methods: {
    requestTicker (event) {
      if (!this.rAFTicker) {
        window.requestAnimationFrame(this.mousePosition.bind(this, event))
        this.rAFTicker = true
      }
    },
    mousePosition ({clientX, clientY, target}) {

      this.checkZoomBoy(target)
      
      this.$refs.cursor.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px)`
      setTimeout(() => {
        this.orbEl.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px) scaleY(-1)`
      }, orbDelay)

      this.rAFTicker = false
    },
    checkZoomBoy (el) {
      this.isHoverZoomBoy = (el.classList.contains('zoom-boy__image') || el.classList.contains('zoom-boy')) 
        ? true 
        : false
    }
  }
}
</script>
