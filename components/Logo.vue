<template>
  <div v-pixels-scrolled="pixelsScrolled" class="logo" :class="[transitionClass]">
    <nuxt-link to="/" class="logo__link">
      <span class="logo__main">
        <img class="logo__svg" src="~/assets/images/logo.svg" alt="Denton Design Logo" v-lazy="" />
      </span>
      <span class="logo__mobile">
        <img class="logo__svg" src="~/assets/images/logo-dd.svg" alt="Denton Design Logo" v-lazy="" />
      </span>
    </nuxt-link>
  </div>
</template>


<script>
import Lazy from '~/plugins/Lazy'
import PixelsScrolled from '~/plugins/PixelsScrolled'

export default {
  props: { 
    isMini: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    pixelsScrolled: 0
  }),
  computed: {
    transitionClass () {
      return (this.pixelsScrolled > 20 ) ? 'logo--show-the-d' : ''
    }
  }
}
</script>
