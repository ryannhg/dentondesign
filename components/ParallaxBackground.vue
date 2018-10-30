<template>
  <div role="presentation" v-pixels-scrolled="pixelsScrolled" class="parallax-background">
    <div class="parallax-background__image" :style="imageStyles"></div>
    <div class="parallax-background__overlay"
      v-for="(overlay, i) in overlays || []" :key="i"
      :style="overlayStyles(i)"></div>
  </div>
</template>

<script>
import PixelsScrolled from '~/plugins/PixelsScrolled'

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    overlays: {
      type: Array
    },
    activeOverlay: Number,
    opacityPercent: {type: Number, default: 1}
  },
  data: () => ({
    pixelsScrolled: 0
  }),
  computed: {
    imageStyles () {
      return {
        'background-image': `url('${this.image}')`,
        opacity: (this.opacityPercent === 1) ? 1 : 1 - (this.percent * this.opacityPercent),
        'background-position-y': `${(1 - this.percent) * 4}rem`
      }
    },
    percent () {
      const PIXELS_UNTIL_DONE = 400
      return this.pixelsScrolled < PIXELS_UNTIL_DONE
        ? 1 - (PIXELS_UNTIL_DONE - this.pixelsScrolled) / PIXELS_UNTIL_DONE
        : 1
    }
  },
  methods: {
    overlayStyles (i) {
      return {
        'background-image': `url('${this.overlays[i]}')`,
        opacity: this.activeOverlay === i
          ? 1
          : 0,
        'background-position-y': `${(1 - this.percent) * 4}rem`
      }
    },
  }
}
</script>
