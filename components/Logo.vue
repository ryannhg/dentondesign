<template>
  <div id="main-logo"  v-pixels-scrolled="pixelsScrolled" class="logo" :class="[transitionClass]">
    <a href="/" @click.prevent="handleHomeLink" class="logo__link">
      <span class="logo__main">
        <img class="logo__svg" src="~/assets/images/logo.svg" alt="Denton Design Logo" v-lazy="" />
      </span>
      <span class="logo__mobile">
        <img class="logo__svg" src="~/assets/images/logo-dd.svg" alt="Denton Design Logo" v-lazy="" />
      </span>
    </a>
  </div>
</template>


<script>
import Lazy from '~/plugins/Lazy'
import PixelsScrolled from '~/plugins/PixelsScrolled'
import {mapMutations, mapGetters} from 'vuex'

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
    ...mapGetters(['isOpenNavigation']),
    transitionClass () {
      return (this.pixelsScrolled > 20 ) ? 'logo--show-the-d' : ''
    }
  },
  methods: {
    ...mapMutations(['updateNavigation']),
    handleHomeLink () {
      if (this.isOpenNavigation) {
        this.updateNavigation(false)

        window.setTimeout( () => {
          this.$router.push('/')
        }, 1000)
        
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
