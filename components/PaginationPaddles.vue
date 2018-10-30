<template>
<div class="pagination-paddles">
  <nuxt-link :to="leftLink.url" class="pagination-paddles__button fonts__h5">{{leftLink.label}}<span class="icon icon-arrow-left"></span></nuxt-link>
  <nuxt-link :to="rightLink.url" class="pagination-paddles__button fonts__h5">{{rightLink.label}}<span class="icon icon-arrow-right"></span></nuxt-link>
</div>
</template>

<script>
export default {
  props: { 
    leftLink: Object,
    rightLink: Object
  }
}
</script>