<template>
  <div class="layout">
    <global-header />
    <navigation :menu="menu" :social="social"></navigation>
    <!-- navbar -->
    <nuxt />
    <!-- social -->
    <share-egg />
    <fancy-cursor></fancy-cursor>
  </div>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader'
import Navigation from '~/components/Navigation'
import ShareEgg from '~/components/ShareEgg'
import FancyCursor from '~/components/FancyCursor'
import menu from '~/static/content/menu.json'
import navbar from '~/static/content/navbar.json'
import social from '~/static/content/social.json'

export default {
  components: {
    GlobalHeader,
    Navigation,
    ShareEgg,
    FancyCursor
  },
  data: () => ({
    menu,
    navbar,
    social
  })
}
</script>
