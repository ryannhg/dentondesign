<template>
  <div class="page-heading wrapper wrapper--narrow">
    <h1  class="page-heading__title"> 
      <span class="sr-only" v-text="image.alt"></span>
      <span role="presentation" class="page-heading__svg-container">
        <img :src="image.src" :alt="image.alt" class="page-heading__svg" />
      </span>
    </h1>
    <p class="page-heading__copy" v-text="caption"></p>
  </div>
</template>

<script>
export default {
  props: {
    caption: String,
    image: Object
  }
}
</script>
