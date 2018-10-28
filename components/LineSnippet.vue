<template>
<div class="line-snippet wrapper wrapper--narrow">
  <div class="line-snippet__header" :class="{'line-snippet__header--with-image': hasImage}" >
    <h2 class="line-snippet__title fonts__h3">{{title}}</h2>
    <img v-if="hasImage" :src="eggImage()" class="line-snippet__image" />
  </div>
  <p class="line-snippet__copy fonts__snippets">{{copy}}</p>
</div>
</template>

<script>
export default {
  props: {
    title:  String,
    copy: String,
    imageType: String,
    imageSrc: String
  },
  computed: {
    hasImage () {
      return (this.eggImage() !== undefined)
    }
  },
  methods: {
    eggImage () {
      let eggImage = undefined

      switch (this.imageType) {
        case 'egg':
           eggImage = '/images/pages/work/detail/work-pristine-egg.png'
          break;
        case 'shell':
           eggImage = '/images/pages/work/detail/work-cracked-shell.png'
          break;
        case 'sandwich':
           eggImage = '/images/pages/work/detail/work-toast-egg.png'
        default:
          break;
      }

      return (this.imageSrc)
        ? this.imageSrc
        : eggImage
    }
  }
}
</script>