<template>
  <div role="presentation" v-pixels-scrolled="pixelsScrolled" class="parallax-background">
    <div class="parallax-background__image" :style="imageStyles"></div>
  </div>
</template>

<script>
import PixelsScrolled from '~/plugins/PixelsScrolled'

export default {
  props: {
    image: {
      type: String,
      required: true
    }
  },
  data: () => ({
    pixelsScrolled: 0
  }),
  computed: {
    imageStyles () {
      return {
        'background-image': `url('${this.image}')`,
        opacity: 1 - (this.percent * 0.6),
        'background-position-y': `${(1 - this.percent) * 4}rem`
      }
    },
    percent () {
      const PIXELS_UNTIL_DONE = 400
      return this.pixelsScrolled < PIXELS_UNTIL_DONE
        ? 1 - (PIXELS_UNTIL_DONE - this.pixelsScrolled) / PIXELS_UNTIL_DONE
        : 1
    }
  }
}
</script>
