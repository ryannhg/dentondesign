<template>
  <div class="page-heading wrapper wrapper--narrow">
    <h1  class="page-heading__title"> 
      <span class="sr-only" v-text="image.alt"></span>
      <span role="presentation" class="page-heading__svg-container">
        <img :src="image.src" :alt="image.alt" class="page-heading__svg" />
      </span>
    </h1>
    <p v-if="caption" class="page-heading__copy" :class="{'page-heading__copy--large': largeCaption}" v-text="caption"></p>
  </div>
</template>

<script>
export default {
  props: {
    caption: String,
    image: Object,
    largeCaption: {
      type: Boolean,
      default: false
    }
  }
}
</script>
