<template>
  <div class="layout">
    <!-- menu -->
    <!-- navbar -->
    <nuxt/>
    <!-- social -->
  </div>
</template>

<script>
import menu from '~/static/content/menu.json'
import navbar from '~/static/content/navbar.json'
import social from '~/static/content/social.json'

export default {
  data: () => ({
    menu,
    navbar,
    social
  })
}
</script>
