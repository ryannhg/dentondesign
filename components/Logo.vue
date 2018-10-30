<template>
  <div class="logo" >
    <nuxt-link to="/" class="logo__link">
      <span class="logo__main">
        <img class="logo__svg" src="~/assets/images/logo.svg" />
      </span>
      <span class="logo__mobile">
        <img class="logo__svg" src="~/assets/images/logo-dd.svg" />
      </span>
    </nuxt-link>
  </div>
</template>


<script>

export default {
  props: { 
    isMini: {
      type: Boolean,
      default: false
    }
  }
}
</script>
