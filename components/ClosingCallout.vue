<template>
<div class="closing-callout ">
  <div class="closing-callout__container"  :class="{'closing-callout__container--with-border': withBorder}">
    <p class="closing-callout__caption richtext richtext--color-white">{{calloutContent.caption}}</p>
    <nuxt-link :to="calloutContent.link.url" target="_blank" rel="noopener" class="closing-callout__link fonts__h5">{{calloutContent.link.label}}</nuxt-link>
  </div>
</div>
</template>

<script>  
export default {
  props: {
    calloutContent: Object,
    withBorder: {
      type: Boolean,
      default:  false
    }
  }
}
</script>