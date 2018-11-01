<template>
<div class="featured-screenshot wrapper ">
  <figure class="featured-screenshot__figure" >
    <img v-for="(image, i) in images" :key="i"
      :style="imageOffset(i)"
      class="featured-screenshot__image" :src="image" />
    <p class="featured-screenshot__caption">{{caption}}</p>
    <button class="featured-screenshot__control featured-screenshot__control--prev" @click="prev()">Prev</button>
    <button class="featured-screenshot__control featured-screenshot__control--next" @click="next()">Next</button>
  </figure>
</div>
</template>

<script>
export default {
  props: {
    caption: String,
    images: Array
  },
  data: () => ({
    index: 0
  }),
  methods: {
    imageOffset (i) {
      return {
        'opacity': (i === this.index) ? 1 : 0
      }
    },
    prev () {
      this.index = (this.index - 1 + this.images.length) % this.images.length
    },
    next () {
      this.index = (this.index + 1 )% this.images.length
    }
  }
}
</script>