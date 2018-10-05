<template>
  <div class="layout">
    <menu :menu-data="menu"></menu>
    <!-- navbar -->
    <nuxt/>
    <!-- social -->
  </div>
</template>

<script>
import Menu from '~/components/Menu'
import menu from '~/static/content/menu.json'
import navbar from '~/static/content/navbar.json'
import social from '~/static/content/social.json'

export default {
  components: {
    Menu
  },
  data: () => ({
    menu,
    navbar,
    social
  })
}
</script>
