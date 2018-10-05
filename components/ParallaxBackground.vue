<template>
  <div role="presentation" class="parallax-background">
    <div class="parallax-background__image" :style="imageStyles"></div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    imageStyles () {
      return {
        'background-image': `url('${this.image}')`,
        opacity: 1 - (this.percent * 0.6),
        transform: `translateY(${(1 - this.percent) * 2}rem)`
      }
    }
  }
}
</script>
