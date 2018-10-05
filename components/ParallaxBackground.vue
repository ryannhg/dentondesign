<template>
  <div role="presentation" class="parallax-background">
    <div class="parallax-background__image" :style="imageStyles"></div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    imageStyles () {
      return `background-image: url('${this.image}')`
    }
  }
}
</script>
