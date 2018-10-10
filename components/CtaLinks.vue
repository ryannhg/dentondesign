<template>
  <nav class="cta-links">
    <div class="cta-links__label fonts__h5" v-text="label"></div>
    <div class="cta-links__list button__row button__row--three-wide">
      <nuxt-link v-for="link in links" :key="link.url"
        :to="link.url" class="button" v-text="link.label">
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    label: String,
    links: Array
  }
}
</script>
