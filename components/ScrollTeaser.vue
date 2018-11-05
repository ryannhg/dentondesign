<template>
  <div class="scroll-teaser" v-if="shouldShowTeaser" v-pixels-scrolled="pixelsScrolled">
    <div id="scroll-teaser-line" class="scroll-teaser__line"></div>
    <div id="scroll-teaser-egg" class="scroll-teaser__egg">
      <span class="scroll-teaser__icon">▼</span>
    </div>
    <div id="scroll-teaser-message"  class="scroll-teaser__message">
      <span class="scroll-teaser__words" :style="styles('words')" ref="words">Scroll</span>
      <div class="scroll-teaser__hand" :style="styles('hand')" ref="hand">
        <img src="~/assets/images/hand-okay.svg" alt="a hand suggesting you absolutely nailed it, great job scrolling">
      </div>
    </div>
  </div>
</template>

<script>
import PixelsScrolled from '~/plugins/PixelsScrolled'
const threshold = 300

export default {
  data: () => ({
    pixelsScrolled: 0
  }),
  computed: {
    path () {
      return this.$route.path
    },
    shouldShowTeaser () {
      return this.path !== '/contact'
    },
    offset () {
      return {
        left: this.pixelsScrolled === 0
          ? '6.4rem'
          : '2.5rem'
      }
    }
  },
  methods: {
    styles (thing) {
      const percent = (this.pixelsScrolled > threshold)
        ? 1
        : 1 - ((threshold - this.pixelsScrolled) / threshold)
      return {
        transform: `scale(${thing === 'words'
          ? 1 - percent
          : percent
        })`
      }
    }
  }
}
</script>
