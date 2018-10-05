<template>
  <div class="layout">
    <navigation :content="menu"></navigation>
    <!-- navbar -->
    <nuxt/>
    <!-- social -->
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import menu from '~/static/content/menu.json'
import navbar from '~/static/content/navbar.json'
import social from '~/static/content/social.json'

export default {
  components: {
    Navigation
  },
  data: () => ({
    menu,
    navbar,
    social
  })
}
</script>
